"use stricts";

let counter = 1;
let counterText = document.querySelector(".switcher__counter");
let btn = document.querySelectorAll(".switcher__button");
let add = document.querySelector(".switcher__button_add");
let del = document.querySelector(".switcher__button_del");

let result1 = document.querySelector(".text-box__text1");
let result2 = document.querySelector(".text-box__text2");
let result3 = document.querySelector(".text-box__text3");
// console.log(counter);

add.addEventListener("click", function() {
    if (counter == 3) {
        counter = 3;
    } else {
        counter++;
        counterText.innerHTML = counter;
        console.log(counter);
        document.querySelector(`.form${counter}`).style.display = "block";
        document.querySelector(`.text-box__text${counter}`).style.display = "block";
    }

});

del.addEventListener("click", function() {
    if (counter == 1) {
        counter = 1;
    } else {
        document.querySelector(`.form${counter}`).style.display = "none";
        document.querySelector(`.text-box__text${counter}`).style.display = "none";
        counter--;
        counterText.innerHTML = counter;
    }
    console.log(counter);
});



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
    let x1 = inputs[0].value;
    let y1 = inputs[1].value;
    let blurRadius1 = inputs[2].value;
    let spreadRadius1 = inputs[3].value;

    let shadowColor1 = color[0].value;

    let isInset1 = checkbox[0].value;
    if (checkbox[0].checked) {
        isInset1 = "inset";
    }

    let x2 = inputs[4].value;
    let y2 = inputs[5].value;
    let blurRadius2 = inputs[6].value;
    let spreadRadius2 = inputs[7].value;

    let shadowColor2 = color[1].value;

    let isInset2 = checkbox[1].value;
    if (checkbox[0].checked) {
        isInset2 = "inset";
    }

    let x3 = inputs[8].value;
    let y3 = inputs[9].value;
    let blurRadius3 = inputs[10].value;
    let spreadRadius3 = inputs[11].value;

    let shadowColor3 = color[2].value;

    let isInset3 = checkbox[2].value;
    if (checkbox[0].checked) {
        isInset3 = "inset";
    }

    let shadowBox1 = `${x1}px ${y1}px ${blurRadius1}px ${spreadRadius1}px ${isInset1}`;

    let shadowBox2 = `${x2}px ${y2}px ${blurRadius2}px ${spreadRadius2}px ${isInset2}`;

    let shadowBox3 = `${x3}px ${y3}px ${blurRadius3}px ${spreadRadius3}px ${isInset3}`;

    document.getElementById("box").style.boxShadow = `${shadowBox1} ${shadowColor1}, ${shadowBox2} ${shadowColor2}, ${shadowBox3} ${shadowColor3}`;

    result1.innerText = `${shadowBox1} ${shadowColor1}`;
    result2.innerText = `,${shadowBox2} ${shadowColor2}`;
    result3.innerText = `,${shadowBox3} ${shadowColor3};`;
}

createShadow();