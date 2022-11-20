"use stricts";

let counter = 1;
let counterText = document.querySelector(".switcher__counter");
let add = document.querySelector(".switcher__button_add");
let del = document.querySelector(".switcher__button_del");

// console.log(counter);

add.addEventListener("click", function() {
    counter++;
    counterText.innerHTML = counter;
    console.log(counter);
});

del.addEventListener("click", function() {
    counter--;
    if (counter <= 0) {
        counter = 1;
    }
    counterText.innerHTML = counter;
    console.log(counter);
});



let result = document.querySelector(".text-box__text");

let inputs = document.querySelectorAll(".form__item[type='number']");
inputs.forEach(function(input) {
    input.addEventListener("input", createShadow);
});

let color = document.querySelectorAll(".form__item[type='color']");
color.forEach(function(colors) {
    colors.addEventListener("input", createShadow);
});

let checkbox = document.querySelectorAll(".form__item[type='checkbox']");
checkbox.forEach(function(checkboxs) {
    checkboxs.addEventListener("change", createShadow);
});

function createShadow() {
    let x = inputs[0].value;
    let y = inputs[1].value;
    let blurRadius = inputs[2].value;
    let spreadRadius = inputs[3].value;

    let shadowColor = color[0].value;

    let isInset = checkbox[0].value;
    if (checkbox[0].checked) {
        isInset = "inset";
    }

    let shadowBox = `${x}px ${y}px ${blurRadius}px ${spreadRadius}px ${isInset}`;

    document.getElementById("box").style.boxShadow = `${shadowBox} ${shadowColor}`;

    result.innerText = `${shadowBox} ${shadowColor}`
}

createShadow();