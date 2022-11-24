"use stricts";

let counter = 1;
let counterText = document.querySelector(".switcher__counter");
let btn = document.querySelectorAll(".switcher__button");
let add = document.querySelector(".switcher__button_add");
let del = document.querySelector(".switcher__button_del");

let result = document.querySelector(".text-box__text");
// let result2 = document.querySelector(".text-box__text2");
// let result3 = document.querySelector(".text-box__text3");
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

    let breakValues = [4, 5, 10, 11, 16, 17];
    for (let i = 0; i < 4; i++)  {
        console.log(i);
        paramsFirst.push(inputs[i].value);
        // paramsFirst[i] += "px";
        // if (i < 4) {
        //    paramsFirst[i] += "px"; 
        // }
        // if (i < 11) {
        //     paramsSecond.push(inputs[i].value);
        // } else {
        //     paramsThird.push(inputs[i].value);
        // }
        
        // if (!breakValues.includes(i)) {
        //     paramsFirst[i] += "px";
            // paramsSecond[i] += "px";
            // paramsThird[i] += "px";
        // }
    }

    for (let i = 4; i < 8; i++) {
        console.log(i);
        paramsSecond.push(inputs[i].value);
        console.log(inputs[i]);
        // paramsSecond[i] += "px"
        // for (let j = 0; j < 6; j++) {
        //     if (j < 4) {
        //         paramsSecond[j] += "px";
        //     }
        // }
        // if (i < 10) {
        //     paramsSecond[i] += "px";
        // }
        // if (!breakValues.includes(i)) {
        //     paramsSecond[i] += "px";
        // }
    }

    for (let i = 8; i < 12; i++) {
        console.log(i);
        paramsThird.push(inputs[i].value);
        // if (i < 16) {
        //     paramsThird[i] += "px";
        // }
        // if (!breakValues.includes(i)) {
        //     paramsThird[i] += "px";
        // }
    }
    console.log(paramsFirst, paramsSecond, paramsThird);
    // let x1 = inputs[0].value;
    // let y1 = inputs[1].value;
    // let blurRadius1 = inputs[2].value;
    // let spreadRadius1 = inputs[3].value;

    // let shadowColor1 = inputs[4].value;

    // let isInset1 = inputs[5].value;
    if (checkboxs[0].checked) {
        paramsFirst[4] = "inset";
    }

    if (checkboxs[1].checked) {
        paramsSecond[4] = "inset";
    }

    if (checkboxs[2].checked) {
        paramsThird[4] = "inset";
    }

    paramsFirst[0] += "px";
    paramsFirst[1] += "px";
    paramsFirst[2] += "px";
    paramsFirst[3] += "px";

    paramsFirst[5] = colors[0].value;

    paramsSecond[0] += "px";
    paramsSecond[1] += "px";
    paramsSecond[2] += "px";
    paramsSecond[3] += "px";

    paramsSecond[5] = colors[1].value;
    
    paramsThird[0] += "px";
    paramsThird[1] += "px";
    paramsThird[2] += "px";
    paramsThird[3] += "px";

    paramsThird[5] = colors[2].value;
    // let x2 = inputs[4].value;
    // let y2 = inputs[5].value;
    // let blurRadius2 = inputs[6].value;
    // let spreadRadius2 = inputs[7].value;

    // let shadowColor2 = color[1].value;

    // let isInset2 = checkbox[1].value;
    // if (checkbox[0].checked) {
    //     isInset2 = "inset";
    // }

    // let x3 = inputs[8].value;
    // let y3 = inputs[9].value;
    // let blurRadius3 = inputs[10].value;
    // let spreadRadius3 = inputs[11].value;

    // let shadowColor3 = color[2].value;

    // let isInset3 = checkbox[2].value;
    // if (checkbox[0].checked) {
    //     isInset3 = "inset";
    // }

    // let shadowBox1 = `${x1}px ${y1}px ${blurRadius1}px ${spreadRadius1}px ${isInset1}`;
    let shadowBox1 = paramsFirst.join(' ');
    let shadowBox2 = paramsSecond.join(' ');
    let shadowBox3 = paramsThird.join(' ');
    console.log(shadowBox1, shadowBox2, shadowBox3);

    // let shadowBox2 = `${x2}px ${y2}px ${blurRadius2}px ${spreadRadius2}px ${isInset2}`;

    // let shadowBox3 = `${x3}px ${y3}px ${blurRadius3}px ${spreadRadius3}px ${isInset3}`;

    document.getElementById("box").style.boxShadow = `${shadowBox1}, ${shadowBox2}, ${shadowBox3}`;
    // document.getElementById("box").style.boxShadow = `${shadowBox1} ${shadowColor1}, 
    // ${shadowBox2} ${shadowColor2}, ${shadowBox3} ${shadowColor3}`;
    let resultArray = [shadowBox1, shadowBox2, shadowBox3];
    let resultText = resultArray.join(',\n\t');
    result.innerText = `\t${resultText};`;
    // result2.innerText = `,${shadowBox2} ${shadowColor2}`;
    // result3.innerText = `,${shadowBox3} ${shadowColor3};`;

    let copy = document.querySelector(".copy__btn");
    copy.addEventListener("click", function() {
        navigator.clipboard.writeText(resultText);
    })
}

createShadow();