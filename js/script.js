var buttonClass = document.getElementsByClassName('button');
console.log(buttonClass);
for (var i = 0; i < buttonClass.length; i++) {
    console.log(buttonClass[i].innerText);
    alert(buttonClass[i].innerText);
}