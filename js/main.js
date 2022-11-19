"use stricts";

let result = document.querySelector(".text-box");

let inputs = document.querySelectorAll(".form__item[type='number']");
inputs.forEach(function(input) {
    input.addEventListener("input", createShadow);
});

let color = document.querySelectorAll(".form__item[type='color']");
color.forEach(function(colors) {
    colors.addEventListener("input", createShadow);
});

function createShadow() {
    let x = inputs[0].value;
    let y = inputs[1].value;
    let blurRadius = inputs[2].value;
    let spreadRadius = inputs[3].value;

    let shadowColor = color[0].value;

    let shadowBox = `${x}px ${y}px ${blurRadius}px ${spreadRadius}px`;

    document.getElementById("box").style.boxShadow = `${shadowBox} ${shadowColor}`;

    result.innerText = `.box {
        ${shadowBox} ${shadowColor}
    }`
}

createShadow();