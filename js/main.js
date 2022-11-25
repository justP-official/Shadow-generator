"use stricts";

let counter = 1;
let counterText = document.querySelector(".switcher__counter");
let btn = document.querySelectorAll(".switcher__button");
let add = document.querySelector(".switcher__button_add");
let del = document.querySelector(".switcher__button_del");

let result = document.querySelector(".text-box__text");

add.addEventListener("click", function() {
    if (counter == 3) {
        counter = 3;
    } else {
        counter++;
        counterText.innerHTML = counter;
        console.log(counter);
        document.querySelector(`.form${counter}`).style.display = "block";
    }

});

del.addEventListener("click", function() {
    if (counter == 1) {
        counter = 1;
    } else {
        document.querySelector(`.form${counter}`).style.display = "none";
        counter--;
        counterText.innerHTML = counter;
    }
    console.log(counter);
});



let inputs = document.querySelectorAll(".form__item[type='number']");
inputs.forEach(function(input) {
    input.addEventListener("input", createShadow);
});

console.log(inputs.length);
let colors = document.querySelectorAll(".form__item[type='color']");
colors.forEach(function(color) {
    color.addEventListener("input", createShadow);
});

let checkboxs = document.querySelectorAll(".form__item[type='checkbox']");
checkboxs.forEach(function(checkbox) {
    checkbox.addEventListener("change", createShadow);
});

function createShadow() {
    let paramsFirst = [];
    let paramsSecond = [];
    let paramsThird = [];

    for (let i = 0; i < 4; i++)  {
        paramsFirst.push(inputs[i].value);
    }

    for (let i = 0; i < 4; i++) {
        paramsFirst[i] += "px";
    }

    for (let i = 4; i < 8; i++) {
        paramsSecond.push(inputs[i].value);
    }

    for (let i = 0; i < 4; i++) {
        paramsSecond[i] += "px";
    }

    for (let i = 8; i < 12; i++) {
        paramsThird.push(inputs[i].value);
    }

    for (let i = 0; i < 4; i++) {
        paramsThird[i] += "px";
    }

    if (checkboxs[0].checked) {
        paramsFirst[4] = "inset";
    }

    if (checkboxs[1].checked) {
        paramsSecond[4] = "inset";
    }

    if (checkboxs[2].checked) {
        paramsThird[4] = "inset";
    }

    paramsFirst[5] = colors[0].value;

    paramsSecond[5] = colors[1].value;

    paramsThird[5] = colors[2].value;
 
    let shadowBox1 = paramsFirst.join(' ');
    let shadowBox2 = paramsSecond.join(' ');
    let shadowBox3 = paramsThird.join(' ');
    console.log(shadowBox1, shadowBox2, shadowBox3);

    document.getElementById("box").style.boxShadow = `${shadowBox1}, ${shadowBox2}, ${shadowBox3}`;
 
    let resultArray = [shadowBox1, shadowBox2, shadowBox3];
    let resultText = resultArray.join(',\n\t');
    result.innerText = `\t${resultText};`;

    let copy = document.querySelector(".copy__btn");
    copy.addEventListener("click", function() {
        navigator.clipboard.writeText(resultText);
    })
}

createShadow();