document.addEventListener('DOMContentLoaded', () => {
    const saveButton = document.getElementById('save');
    const nameInput = document.getElementById('name');
    const urlList = document.getElementById('url-list');
  
    // Load saved URLs
    loadUrls();
  
    saveButton.addEventListener('click', () => {
      const name = nameInput.value;
      if (name) {
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
          const url = tabs[0].url;
          saveUrl(name, url);
        });
      }
    });
  
    urlList.addEventListener('click', (e) => {
      if (e.target.classList.contains('delete-btn')) {
        const name = e.target.closest('li').getAttribute('data-name');
        deleteUrl(name);
      } else if (e.target.classList.contains('access-btn')) {
        const url = e.target.closest('li').getAttribute('data-url');
        chrome.tabs.create({ url });
      }
    });
  
    function saveUrl(name, url) {
      chrome.storage.sync.get(['urls'], (result) => {
        const urls = result.urls || {};
        urls[name] = url;
        chrome.storage.sync.set({ urls }, () => {
          nameInput.value = '';
          loadUrls();
        });
      });
    }
  
    function loadUrls() {
      urlList.innerHTML = '';
      chrome.storage.sync.get(['urls'], (result) => {
        const urls = result.urls || {};
        for (let name in urls) {
          const li = document.createElement('li');
          li.setAttribute('data-name', name);
          li.setAttribute('data-url', urls[name]);
          li.innerHTML = `
            <p>${name}</p>
            <button class="access-btn"><i class="fa fa-search" aria-hidden="true"></i></button>
            <button class="delete-btn"><i class="fa fa-trash" aria-hidden="true"></i></button>
          `;
          urlList.appendChild(li);
        }
      });
    }
  
    function deleteUrl(name) {
      chrome.storage.sync.get(['urls'], (result) => {
        const urls = result.urls || {};
        delete urls[name];
        chrome.storage.sync.set({ urls }, () => {
          loadUrls();
        });
      });
    }
  });
