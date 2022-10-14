// 1. Выборка элементов DOM

// Задание 1.1.

//Даны 3 абзаца:
//Запишите ссылку на каждый из абзацев в отдельную переменную и
//выведите содержимое каждой из этих переменных в консоль.
// let p1 = document.getElementById('elem1');
// let p2 = document.getElementById('elem2');
// let p3 = document.getElementById('elem3');
// console.log(p1, p2, p3);

// Задание 1.2.

// Дан следующий HTML:
//Получите ссылку на первый абзац из дива с id, равным block.
// let block = document.querySelector('div')
// let p = block.querySelector('p')
// console.log(p)

// 2. Работа с элементами

//Задание 2.1

//Есть объект:
//С помощью методов DOM создайте разметку, стили.
//Разместите в разметке данные из объекта и поместите на страницу.
// const account = {
// owner: 'Silvestr Stallone',
// movements: [200, -200, 340, -300, -20, 50, 400, -460],
// interestRate: 99,
// pin: 9999,
// };
// let entries = Object.entries(account);
// for (let i = 0; i < entries.length; i++) {
// let p = document.createElement('p');
// let elem = entries[i];
// p.innerHTML = `${elem[0]}: ${elem[1]}`;
// document.body.prepend(p);
// }

//Задание 2.

//Есть массив объектов
//С помощью методов DOM создайте разметку, стили.
//Разместите в разметке данные из массива объектов и поместите на страницу.
// const accounts = [
// {
// owner: 'Jonas Schmedtmann',
// interestRate: 1.2,
// pin: 1111,
// },
// {
// owner: 'Jessica Davis',
// interestRate: 1.5,
// pin: 2222,
// },
// {
// owner: 'Steven Thomas Williams',
// interestRate: 0.7,
// pin: 3333,
// },
// {
// owner: 'Sarah Smith',
// interestRate: 1,
// pin: 4444,
// },
// ];
// for (let i = 0; i < accounts.length; i++) {
// let item = accounts[i];
// let entries = Object.entries(item);
// for (let i = 0; i < entries.length; i++) {
// let p = document.createElement('p');
// let elem = entries[i];
// p.innerHTML = `${elem[0]}: ${elem[1]}`;
// document.body.prepend(p);
// }
// }

//2. Основы работы с событиями

//Задание 2.1.

//Даны 3 кнопки:
//Сделайте так, чтобы по клику на первую кнопку на экран выводилось число 1,
//по клику на вторую - число 2, а по клику на третью - число 3.
// let btn1 = document.getElementById('button1');
// let btn2 = document.getElementById('button2');
// let btn3 = document.getElementById('button3');
// btn1.addEventListener('click', function (event) {
// console.log('1');
// });
// btn2.addEventListener('click', function (event) {
// console.log('2');
// });
// btn3.addEventListener('click', function (event) {
// console.log('3');
// });

// // Задание 2.2. Дана кнопка. По двойному клику по ней выведите на экран какое-нибудь сообщение.
// // document.querySelector("button").onclick = btn_click;
 
// // function btn_click() {
// //     alert(document.getElementById("inp").value);
// // }

// <input type="text" value=""></input>
// <button onclick="func()">Нажми</button>
// function func() {
// document.querySelector('input').setAttribute('value', 'привет');
// }

// //Задание 2.3. Дана кнопка. По наведению на нее выведите на экран какое-нибудь сообщение.
// <button type="submit" id="submit">Нажми меня</button>
// document.querySelector("#submit").onclick = function(){
//     alert("Вы нажали на кнопку");
//   }

// //Задание 2.4. Дана кнопка. По уходу курсора с нее выведите на экран какое-нибудь сообщение.
// button.addEventListener('mouseover', function() {
// 	console.log('1');
// });
// button.addEventListener('mouseout', function() {
// 	console.log('2');
// });
// Задание 2.5. Дан следующий HTML код. Сделайте так, чтобы по клику на первую кнопку выполнилась функция func1, а по клику на вторую - функция func2.
// <input id="button1" type="submit" value="button1">
// <input id="button2" type="submit" value="button2"></input>

// let button = document.querySelector('#button1');
// let button = document.querySelector('#button2');
// button.addEventListener('click', func1);
// button.addEventListener('click', func2);
// function func1() {
// alert(1);
// }

// function func2() {
// alert(2);
// }

// function func1() {
// 	console.log('!!!');
// }

// function func2() {
// 	console.log('!!!');
// }

// //Задание 2.6.

//Даны 5 абзацев
//Дана следующая функция:
//Привяжите эту функцию ко всем 5-ти абзацам.
// function func() {
// alert('message');
// }
// let allP = document.querySelectorAll('p');
// for (let i = 0; i < allP.length; i++) {
// let p = allP[i];
// p.addEventListener('click', func());
// }

// //Задание 2.7.
// Дан абзац:
// <p id="elem">text</p>
// Даны следующие функции:
// function func1() {
// alert('1');
// }
// function func2() {
// alert('2');
// }
// function func3() {
// alert('3');
// }
// Привяжите все эти функции к нашему абзацу.

// let button = document.querySelector('#elem');
// button.addEventListener('click', func1);
// button.addEventListener('click', func2);
// button.addEventListener('click', func3);

// //Задание 2.8.

// //Дана кнопка. Привяжите к ней три анонимных обработчика
//двойного клика по ней. Пусть первый обработчик выводит число 1,
//второй обработчик - число 2, а третий - число 3.
// let btn = document.querySelector('input');
// for (let i = 1; i < 4; i++) {
// btn.addEventListener('click', function () {
// console.log(i);
// });
// }

//3. Работа с текстом элементов
//Задание 3.1.
//Даны два абзаца, содержащие своим текстом какие-то числа,
//и кнопка. По нажатию на кнопку выведите на экран сумму хранящихся чисел.
// let btn = document.querySelector('input');
// let allP = document.querySelectorAll('p');
// let sum = function () {
// let result = [];
// for (let i = 0; i < allP.length; i++) {
// let p = allP[i];
// result.push(+p.outerText);
// }
// result = result.reduce((acc, elem) => (acc += elem), 0);
// console.log(result);
// };
// btn.addEventListener('click', sum());

//Задание 3.2. Даны два абзаца и две кнопки. Пусть нажатие на первую кнопку выводит текст первого абзаца, а нажатие на вторую кнопку - текст второго абзаца.
{/* <p id="elem"><b>text</b></p>
let elem = document.querySelector('#elem');
console.log(elem.innerHTML); 
elem.textContent = '<i>!!!</i>'; */}

// //Задание 3.3. Дан абзац и две кнопки. По нажатию на первую кнопку запишите в абзац слово 'привет', а по нажатию на вторую кнопку - слово 'пока'.
// document.addEventListener( "DOMContentLoaded" , function() {
//         let elem = document.querySelector('#elem');
//         let btn = document.querySelector('#btn');
//         let p = document.querySelector('#p');
//         btn.addEventListener('click', func);
//         function func(){
//         p.innerHTML += elem.checked ?  ' Привет' : ' Пока'
//         }
//     });
    
// //Задание 3.4. Даны 3 абзаца с текстом. По нажатию на первый абзац запишите в его текст число 1, по нажатию на второй абзац запишите в его текст число 2, а по нажатию на третий - запишите в его текст число 3. 
// var inp = document.getElementsByTagName('input');
// window.setInterval(func, 1000);
// var num = 1;
// var i = 0;
// function func() {
// 	input[i].value = num;
// 	num++;
// 	i++;
// 	if ( i >= input.length) {
// 		i = 0;
//  	}
// }       

// //Задание 3.5. Дан абзац и кнопка. В абзаце записано какое-то число. По нажатию на кнопку возведите значение абзаца в квадрат и запишите его обратно.
// document.querySelectorAll('p').forEach(p => {
//     p.onclick = () => (p.innerText = Math.pow(+p.innerText, 2));
//   });

// //Задание 3.6. Дан абзац с числом и кнопка. По нажатию на кнопку прибавьте к значению абзаца единицу и запишите полученное число обратно.
// const getDiv14 = document.querySelector('.div14');
//     const getBtn14 = document.querySelector('.btn14');
    
//     getBtn14.addEventListener('click', func14);
    
//     function func14() {
//         const getAllP = getDiv14.querySelectorAll('p');
    
//         getAllP.forEach((elem, num) => elem.innerHTML = elem.innerHTML + ' ' + num);
//     };

// //Задание 3.7. Дан абзац с текстом и кнопка. По нажатию на кнопку запишите в конец текста абзаца восклицательный знак.

// let elem = document.querySelector('#elem');
// console.log(elem.textContent);
// elem.textContent = '!!!';

// //Задание 3.8. Модифицируйте предыдущую задачу так, чтобы восклицательный знак записывался не в конец текста, а в начало.
// let elem = document.querySelector('#elem');
// console.log(elem.innerHTML); 
// elem.textContent = '<i>!!!</i>';

// //Задание 3.9. 

// function func() {
// document.querySelector('input').setAttribute('value', 'привет');
// }

//Задание 3.10.
// Дан абзац с текстом и кнопка. По нажатию на кнопку прочитайте текст
// абзаца, оберните этот текст в теги <b> и запишите новый текст
//обратно в абзац.
// let btn = document.querySelector('input');
// let p = document.querySelector('p');
// console.log(p.innerHTML);
// btn.addEventListener('click', function () {
// p.innerHTML = `<b>${p.innerHTML}</b>`;
// });
//4. Работа с атрибутами элементов
//Задание 4.1.
//Дан следующий инпут:
//По нажатию на кнопку выведите на экран содержимое атрибута type
//указанного выше инпута.
// let [input, btn] = document.querySelectorAll('input');
// btn.addEventListener('click', function(){
// console.log(input.type)
// })
// //Задание 4.2 
// <input id="elem" type="email">
// <input id="button" type="submit"></input>

// //Задание 4.3
// let elem = document.querySelector('#elem');
// console.log(elem.id);   
// console.log(elem.type); 
// elem.type = 'submit';

// 5. Работа с текстовыми полями
// Задание 5.1.
//Дан инпут:
//При нажатии на кнопку должен выводиться
//текущий текст инпута id="elem". Нажмите на кнопку,
//чтобы увидеть текущий текст инпута, затем поредактируйте текст
//в инпуте и еще раз нажмите на кнопку.
//Убедитесь в том, что выведется новый текст инпута.
// let [input, btn] = document.querySelectorAll('input');
// btn.addEventListener('click', function () {
// console.log(input.value);
// });
//6. Работа с коллекцией элементов
//Задание 6.1.
//Даны абзацы и кнопка. По нажатию на кнопку найдите все абзацы,
//переберите из циклом и установите текст каждого абзаца в значение 'text'.
// let btn = document.querySelector('input');
// let allP = document.querySelectorAll('p');
// btn.addEventListener('click', function () {
// for (let i = 0; i < allP.length; i++) {
// let p = allP[i];
// p.innerHTML = 'text';
// }
// });
//7. Работа с классам элементов
//Задание 7.1.
//Дан элемент:
//7.1.1 Узнайте количество его классов.
// let p = document.querySelector('p');
// // let lngOfClasses = p.className.split(' ').length;
// let lngOfClasses = p.classList.length
// console.log(lngOfClasses);
//7.1.2 Переберите в цикле его классы.
// let allClasses = p.className.split(' ').forEach(elem => console.log(elem))
//7.1.3 Добавьте ему класс xxx.
// p.classList.add('xxx');
//7.1.4 Удалите у него класс www и класс zzz.
// p.classList.remove('xxx');
//7.1.5 Проверьте наличие у него класса ggg.
// console.log(p.classList.contains('ggg'));
// Добавьте ему класс www, если его нет и удалите - если есть.
// p.classList.toggle('xxx');
//8. Стилизация через атрибут style
//Задание 8.1.
//Дан див и кнопка. По клику на кнопку добавьте диву ширину,
//высоту и границу.
// let btn = document.querySelector('input');
// let div = document.querySelector('div');
// btn.addEventListener('click', function () {
// div.style.width = 100 + 'px';
// div.style.height = 100 + 'px';
// div.style.border = `1px solid black`;
// });
// 9. Создание, вставка, удаление элементов
// Задание 9.1.
//Дан ol:
//Вставьте ему в конец li с текстом 'пункт'.
// let ol = document.querySelector('ol');
// let li = document.createElement('li');
// li.innerText = 'пункт';
// ol.append(li);
//Задание 9.3.
//Дан следующий код:
//Сделайте так, чтобы по нажатию на кнопку удалялся элемент #elem.
// let btn = document.querySelector('input');
// let elem = document.getElementById('elem');
// btn.addEventListener('click', function () {
// elem.remove();
// });
//Задание 9.4.
//Дан следующий код:
//Сделайте так, чтобы по каждому клику на кнопку удалялся
//последний элемент из #parent.
// let ul = document.querySelector('ul');
// let btn = document.querySelector('input');
// btn.addEventListener('click', function () {
// ul.lastChild.remove();
// })