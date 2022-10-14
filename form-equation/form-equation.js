// Форма целиком (тег form с атрибутом name="squareEquation")
const formEquation = document.forms.squareEquation;

// Коллекция полей ввода (input)
const inputsParam = document.querySelectorAll("[type='number']");

// Поля ввода параметров (объекты формы - теги input)
const inputParamA = formEquation.elements.paramA;
const inputParamB = formEquation.elements.paramB;
const inputParamC = formEquation.elements.paramC;

// Кнопки (объекты формы)
const btnSearch = document.getElementById("btnSearchSolution");
const btnReset = document.getElementById("btnReset");

// Функция проверки заполнения полей
const paramsIsFilled = () => {
return (
inputParamA.value != "" &&
inputParamB.value != "" &&
inputParamC.value != ""
);
};

// Функция блокировки/разблокировки (доступности) поля/кнопки
const setState = (elem, state = true) => {
state
? elem.removeAttribute("disabled")
: elem.setAttribute("disabled", "disabled");
};

// Цикл по коллекции полей для создания обработчика события ввода данных
for (let input of inputsParam) {
// Обработчик события ввода данных
input.addEventListener("input", function () {
let valueParam = input.value; //значение поля
let inputName = input.getAttribute("name"); //значение атрибута name

setState(btnSearch, paramsIsFilled());

switch (inputName) {
case "paramA":
setState(inputParamB);
setState(btnReset);
break;
case "paramB":
setState(inputParamC);
break;
}
});
}

// Обработчик события клика по кнопке "Сбросить"
btnReset.addEventListener("click", function () {
for (let input of inputsParam) {
input.value = "";
if (input.getAttribute("name") != "paramA") {
setState(input, false);
}
}
setState(btnSearch, false);
setState(btnReset, false);

if (document.querySelector(".result")) {
document.querySelector(".result").remove();
}
});

// Функция расчёта дискриминанта квадратного уравнения
const calcD = (a, b, c) => b ** 2 - 4 * a * c;

// Функция расчёта (решения) квадратного уравнения
const calcSquareEquation = (D, a, b) => {
if (D > 0) {
return [((-b + Math.sqrt(D)) / 2) * a, ((-b - Math.sqrt(D)) / 2) * a];
} else {
return "Корней нет";
}
};

// Обработчик события клика по кнопке "Найти решение"
btnSearch.addEventListener("click", function () {
let paramA = +inputParamA.value;
let paramB = +inputParamB.value;
let paramC = +inputParamC.value;

let result;
let D;

if (paramA) {
if (paramB) {
if (paramC) {
D = calcD(paramA, paramB, paramC);
result = calcSquareEquation(D, paramA, paramB);
} else {
result = [0, -paramB / paramA];
}
} else {
if (paramC) {
if (-paramC / paramA < 0) {
result = "Корней нет";
} else {
result = [-Math.sqrt(-paramC / paramA), Math.sqrt(-paramC / paramA)];
}
} else {
result = 0;
}
}
} else {
if (paramB) {
if (paramC) {
result = -paramC / paramB;
} else {
result = 0;
}
} else {
result = "Корней нет";
}
}

printResult(result);
});

// Функция вывода результата
const printResult = (result) => {
if (!document.querySelector(".result")) {
let divResult = document.createElement("div");
divResult.classList.add("result");

let p = document.createElement("p");
p.id = "textResult";
divResult.append(p);

formEquation.insertAdjacentElement("afterend", divResult);
}
switch (typeof result) {
case "number":
document.getElementById(
"textResult"
).innerHTML = `Уравнение имеет <em>один корень: </em> <strong>x = ${result}</strong>`;
break;
case "string":
document.getElementById("textResult").innerHTML = `<em>${result}</em>`;
break;
case "object":
result[0] = +result[0].toFixed(2);
result[1] = +result[1].toFixed(2);
document.getElementById(
"textResult"
).innerHTML = `Уравнение квадратное!<br>Имеет <em>два корня: </em><strong>x1 = ${result[0]}; x2 = ${result[1]}</strong>`;
break;
}
};

