const Name = document.getElementById('linkName');



function toPrintLink(){
    a = window.location.href;
    const Name1 = Name.value;//this gives the value property of the DOM element Name
    b = localStorage.setItem(Name1,a);//stores in localStorage
    console.log(localStorage.getItem(Name1));
}

PrintLinkButton.addEventListener('click',toPrintLink);