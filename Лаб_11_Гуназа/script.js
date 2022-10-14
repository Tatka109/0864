// Задача: Решить задачи, приведенные ниже.

// 1. Создайте класс Animal, добавьте ему несколько базовых свойств и метод-конструктор, с помощью которого свойствам присваиваются значения.

// class Animal {
//     constructor(animal, color, weight, tail, wool) {
//         this.animal = animal
//         this.color = color
//         this.weight = weight
//         this.tail = tail
//         this.wool = wool
//     }
// }
class Animal {
    static animalsArr = [];
    
    #name;
    #age;
    #size;
    
    constructor(name, age, size) {
    this.#name = name;
    this.#age = age;
    this.#size = size;
    
    Animal.animalsArr.push(this);
    }
    
    get Name() {
    return this.#name;
    }
    set Name(value) {
    this.#name = value;
    }
    
    get Age() {
    return this.#age;
    }
    set Age(value) {
    this.#age = value;
    }
    
    get Size() {
    return this.#size;
    }
    set Size(value) {
    this.#size = value;
    }
    
    static getCountAnimals() {
    return Animal.animalsArr.length;
    }
    
    static getAnimal(name) {
    for (let animal of Animal.animalsArr) {
    if (name === animal.#name) {
    return `${animal.#name}: ${animal.#age} (${animal.#size})`;
    }
    }
    return "Нет информации о животном!";
    }
    }
    
    let animals = [
    { name: "Тигр", age: 14, size: "средний" },
    { name: "Медведь", age: 20, size: "крупный" },
    { name: "Слон", age: 1, size: "маленький" },
    ];
    
    const fillArrAnimals = (arr) => {
    for (let i = 0; i < arr.length; i++) {
    let animal = new Animal(
    animals[i]["name"],
    animals[i]["age"],
    animals[i]["size"]
    );
    }
    };
    
    fillArrAnimals(animals);
    console.log(Animal.getCountAnimals());
    console.log(Animal.animalsArr);
    console.log(Animal.getAnimal("Слон"));
    console.log(Animal.getAnimal("Слон"));
    
// const tiger = new Animal('tiger', 'orang', 110, true, true)
// const frog = new Animal('frog', 'green', .201, false, false)

// console.log(tiger)
// console.log(frog)

// 2. Ранее созданному классу Animal добавьте 2 дочерних класса Elephant и Tiger. Добавьте в них свои свойства, методы характерные только для этих классов.

// class Elephant extends Animal {
//     constructor(animal, color, weight, tail, wool, nickname, country, wild) {
//         super(animal, color, weight, tail, wool)
//         this.nickname = nickname
//         this.country = country
//         this.wild = wild
//     }

//     help(){
//         console.log('Помогает человеку')
//     }

//     play(){
//         console.log('Играет в мяч')
//     }
// }

// class Tiger extends Animal {
//     constructor(animal, color, weight, tail, wool, speed, age) {
//         super(animal, color, weight, tail, wool)
//         this.speed = speed
//         this.age = age
//     }

//     runing(){
//         console.log('Бежит')
//     }

//     hunt(){
//         console.log('Охотится')
//     }
// }


// 3. Реализуйте класс Работник, который будет иметь следующие свойства: имя, фамилия, ставка за день работы, количество отработанных дней.
// Также класс должен иметь метод getSalary(), который будет выводить зарплату работника. Зарплата - это умножение ставки на количество отработанных дней.

// Вот так должен работать наш класс:

// const worker = new Worker('Антон', 'Пирожков', 10, 31);

// console.log(worker.name); //выведет 'Антон'
// console.log(worker.surname); //выведет 'Пирожков'
// console.log(worker.rate); //выведет 10
// console.log(worker.days); //выведет 31
// console.log(worker.getSalary()); //выведет 310 - то есть 10*31
// С помощью нашего класса создайте двух рабочих и найдите сумму их зарплат.

// ОТВЕТ:

// class Worker {
//     constructor(name, surname, rate, days,) {
//         this.name = name
//         this.surname = surname
//         this.rate = rate
//         this.days = days
//     }
//     getSalary() {
//         return this.rate * this.days
//     }
// }

// const worker1 = new Worker('Николай', 'Дроздов', 5200, 20)
// const worker2 = new Worker('Игорь', 'Печкин', 1800, 25)

// const budget = worker1.getSalary() + worker2.getSalary()

// console.log(budget)
class Worker {
    constructor(name, surname, rate, days) {
    this.name = name;
    this.surname = surname;
    this.rate = rate;
    this.days = days;
    }
    
    getSalary() {
    return this.rate * this.days;
    }
    }
    
    const worker = new Worker('Антон', 'Пирожков', 10, 31);
    
    console.log(worker.name); //выведет 'Антон'
    console.log(worker.surname); //выведет 'Пирожков'
    console.log(worker.rate); //выведет 10
    console.log(worker.days); //выведет 31
    console.log(worker.getSalary()); //выведет 310 - то есть 10*31

// 4. Модифицируйте класс Worker из предыдущей задачи следующим образом: сделайте все его свойства приватными,
// а для их чтения сделайте методы-геттеры. Наш класс теперь будет работать так:

// const worker = new Worker('Антон', 'Пирожков', 10, 31);

// console.log(worker.getName()); //выведет 'Антон'
// console.log(worker.getSurname()); //выведет 'Пирожков'
// console.log(worker.getRate()); //выведет 10
// console.log(worker.getDays()); //выведет 31
// console.log(worker.getSalary()); //выведет 310 - то есть 10*31

// // ОТВЕТ:

// class Worker {
//     constructor(name, surname, rate, days,) {
//         this._name = name
//         this._surname = surname
//         this._rate = rate
//         this._days = days
//     }
//     getSalary() {
//         return this._rate * this._days
//     }

//     get getName() {
//         return this._name
//     }

//     get getSurname() {
//         return this._surname
//     }

//     get getRate() {
//         return this._rate
//     }

//     get getDays() {
//         return this._days
//     }

// }

// const worker1 = new Worker('Николай', 'Дроздов', 5200, 20)
// const worker2 = new Worker('Игорь', 'Печкин', 1800, 25)

// console.log(worker1.getName)
// console.log(worker1.getSalary())

class WorkerTypeTwo {
    #name;
    #surname;
    #rate;
    #days;
    constructor(name, surname, rate, days) {
        this.#name = name;
        this.#surname = surname;
        this.#rate = rate;
        this.#days = days;
    }
    getName() {
        return this.#name;
    }
    getSurname() {
        return this.#surname;
    }
    getRate() {
        return this.#rate;
    }
    getDays() {
        return this.#days;
    }
    getSalary(rate, days) {
        let salary = this.#rate * this.#days;
        return salary;
    }
}
workeTwo = new WorkerTypeTwo('Иван', 'Иванов', 10, 31);
console.log(workeTwo.getName());
console.log(workeTwo.getSurname());
console.log(workeTwo.getRate());
console.log(workeTwo.getDays());
console.log(workeTwo.getSalary());


// 5. Модифицируйте класс Worker из предыдущей задачи следующим образом: для свойства rate и для свойства days сделайте еще и методы-сеттеры. Наш класс теперь будет работать так:

// const worker = new Worker('Антон', 'Пирожков', 10, 31);

// console.log(worker.getRate()); //выведет 10
// console.log(worker.getDays()); //выведет 31
// console.log(worker.getSalary()); //выведет 310 - то есть 10*31

// //Теперь используем сеттер:
// worker.setRate(20); //увеличим ставку
// worker.setDays(10); //уменьшим дни
// console.log(worker.getSalary()); //выведет 200 - то есть 20*10

// // ОТВЕТ:

// class Worker {
//     constructor(name, surname, rate, days,) {
//         this._name = name
//         this._surname = surname
//         this._rate = rate
//         this._days = days
//     }
//     getSalary() {
//         return this._rate * this._days
//     }

//     get getName() {
//         return this._name
//     }

//     get getSurname() {
//         return this._surname
//     }

//     get getRate() {
//         return this._rate
//     }

//     set setRate(value) {
//         this._rate = value
//     }

//     get getDays() {
//         return this._days
//     }

//     set  setDays(value) {
//         this._days = value
//     }

// }

// const worker1 = new Worker('Николай', 'Дроздов', 5200, 20)
// const worker2 = new Worker('Игорь', 'Печкин', 1800, 25)

// console.log(worker1.getDays)
// console.log(worker1.getRate)
// console.log(`работник ${worker1.getName} получает зарплату: ${worker1.getSalary()}`)
// worker1.setDays = 10
// worker1.setRate = 5000
// console.log(worker1.getDays)
// console.log(worker1.getRate)

// console.log(`работник ${worker1.getName} получает зарплату: ${worker1.getSalary()}`)

class WorkerTypeThree {
    #name;
    #surname;
    #rate;
    #days;
    constructor(name, surname, rate, days) {
        this.#name = name;
        this.#surname = surname;
        this.#rate = rate;
        this.#days = days;
    }
    getName() {
        return this.#name;
    }
    getSurname() {
        return this.#surname;
    }
    getRate() {
        return this.#rate;
    }
    setRate(rate) {
        this.#rate = rate;
    }
    getDays() {
        return this.#days;
    }
    setDays(days) {
        this.#days = days;
    }
    getSalary(rate, days) {
        let salary = this.#rate * this.#days;
        return salary;
    }
}
let workerThree = new WorkerTypeThree('Иван', 'Иванов', 10, 31);
console.log("Ставка: " + worker.getRate()); //выведет 10
console.log("Раб.дни: " + worker.getDays()); //выведет 31
console.log("Зарплата: " + worker.getSalary()); //выведет 310 - то есть 10*31
workerThree.setRate(40);
workerThree.setDays(40);
//Теперь используем сеттер:
worker.setRate(20); //увеличим ставку
worker.setDays(10); //уменьшим дни
console.log(worker.getRate()); //выведет 30
console.log(worker.getDays()); //выведет 21
console.log(worker.getSalary()); //выведет 630!!!

// 6. Реализуйте класс MyString, который будет иметь следующие методы: метод reverse(), который параметром принимает строку, а возвращает ее в перевернутом виде, метод ucFirst(), который параметром принимает строку, а возвращает эту же строку, сделав ее первую букву заглавной и метод ucWords, который принимает строку и делает заглавной первую букву каждого слова этой строки.

// Наш класс должен работать так:

// const str = new MyString();

// console.log(str.reverse('abcde')); //выведет 'edcba'
// console.log(str.ucFirst('abcde')); //выведет 'Abcde'
// console.log(str.ucWords('abcde abcde abcde')); //выведет 'Abcde Abcde Abcde'

// ОТВЕТ:

// class MyString {

//     reverse(str) {
//         return str.split('').reverse().join('')
//     }

//     ucFirst(str) {
//         return str[0].toUpperCase() + str.slice(1)
//     }

//     ucWords(str) {
//         return str.split(' ').map(e => this.ucFirst(e)).join(' ')
//     }
// }

// const str = new MyString();

// console.log(str.reverse('abcde')); //выведет 'edcba'
// console.log(str.ucFirst('abcde')); //выведет 'Abcde'
// console.log(str.ucWords('abcde abcde abcde')); //выдет 'Abcde Abcde Abcde'ве

class MyString {
    constructor() {
    }
    reverse(str) {
        let reversStr = '';
        for (let i = str.length - 1; i >= 0; i--) {
            reversStr += str[i];
        }
        return reversStr;
    }
    ucFirst(str) {
        let newStr = str[0].toUpperCase() + str.slice(1);
        return newStr;
    }
    ucWords(str) {
        let arr = str.split(' ');
        let strArr = [];
        for (let i = 0; i < arr.length; i++) {
            let a = arr[i];
            let newStr = a[0].toUpperCase() + a.slice(1);
            strArr.push(newStr);
        }
        return strArr.join(' ');
    }

}
let str = new MyString();
console.log(str.reverse('Hello guys'));
console.log(str.ucFirst('hello guys'));
console.log(str.ucWords('hello good guys'));

// 7. Реализуйте класс User и наследуемый от него класс Student (Студент).
// Класс Student должен иметь следующие свойства: name (имя, наследуется от User), surname (фамилия, наследуется от User),
// year (год поступления в вуз).
// Класс Student должен иметь метод getFullName() (наследуется от User), с помощью которого можно вывести одновременно имя и фамилию студента.
// Также класс должен иметь метод getCourse(), который будет выводить текущий курс студента (от 1 до 5).
// Курс вычисляется так: нужно от текущего года отнять год поступления в вуз.

// Вот так должен выглядеть класс User, от которого наследуется наш Student:

// class User {
// constructor(name, surname) {
// this.name = name;
// this.surname = surname;
// }

// getFullName() {
// return this.name + ' ' + this.surname;
// }
// }

// Вот так должен работать класс Student:

// const student = new Student('Иван', 'Иванов', 2019);

// console.log(student.name); //выведет 'Иван'
// console.log(student.surname); //выведет 'Иванов'
// console.log(student.getFullName()); //выведет 'Иван Иванов'
// console.log(student.getCourse()); //выведет 3 - третий курс, так как текущий год 2022

// ОТВЕТ:

// class User {
//     constructor(name, surname) {
//         this.name = name;
//         this.surname = surname;
//     }

//     getFullName() {
//         return this.name + ' ' + this.surname;
//     }
// }

// class Student extends User {
//     constructor(name, surname, year) {
//         super(name, surname)
//         this.year = year
//     }

//     getCourse() {
//         return 2022 - this.year
//     }
// }

// const student = new Student('Иван', 'Иванов', 2019);

// console.log(student.name); //выведет 'Иван'
// console.log(student.surname); //выведет 'Иванов'
// console.log(student.getFullName()); //выведет 'Иван Иванов'
// console.log(student.getCourse()); //выведет 3 - третий курс, так как текущий год 2022
class User {
    constructor(name, surname) {
    this.name = name;
    this.surname = surname;
    }
    
    getFullName() {
    return this.name + ' ' + this.surname;
    }
    }
    
    class Student extends User {
    constructor(name, surname, year) {
    super(name,surname);
    this.year = year;
    }
    
    getCourse(date = new Date()) {
    return date.getFullYear() - this.year
    }
    }
    
    const student = new Student('Иван','Иванов', 2019);
    
    console.log(student.name); //выведет 'Иван'
    console.log(student.surname); //выведет 'Иванов'
    console.log(student.getFullName()); //выведет 'Иван Иванов'
    console.log(student.getCourse()); //выведет 3 - третий курс, так как текущий год 2022

// 8. Реализуйте класс Elem, который параметром принимает селектор одного HTML элемента и затем может выполнять с ним различные операции.
// Класс должен работать следующим образом:

// const elem = new Elem('селектор');

// elem.html('!'); //запишет в текст элемента '!'
// elem.append('!'); //запишет в начало элемента '!'
// elem.prepend('!'); //запишет в конец элемента '!'
// elem.attr('class', 'www'); //запишет в атрибут class значение www

// ОТВЕТ:

// class Elem {
//     constructor(selector) {
//         this.selector = document.querySelector(selector)
//     }

//     html(value) {
//         return this.selector.textContent = value
//     }
    
//     append(value) {
//         return this.selector.append(value)
//     }
    
//     prepend(value) {
//         return this.selector.prepend(value)
//     }

//     attr(attr, value) {
//         return this.selector.setAttribute(attr, value)
//     }
// }

// const elem = new Elem('.test');

// elem.html('Hello'); //запишет в текст элемента 'Hello'
// elem.append('!'); //запишет в конец элемента '!'
// elem.prepend('?'); //запишет в начало элемента '?'
// elem.attr('style', 'color: red'); //запишет в атрибут style значение color: red

class Elem {

    constructor (selector) {
    this.link=document.querySelector(selector);
    }
    html(str) {
    this.link.textContent=str;
    }
    append(tag, text) {
    let innerElem=document.createElement(tag);
    innerElem.textContent=text;
    this.link.append(innerElem);
    }
    prepend(tag, text) {
    let innerElem=document.createElement(tag);
    innerElem.textContent=text;
    this.link.prepend(innerElem);
    
    }
    attr (att, att_value) {
    this.link.setAttribute(att, att_value);
    }
    }
    
    const elem = new Elem('div p');


// 9. Реализуйте класс Rectangle. У него должны быть следующие свойства:
// ширина width, высота height. Также у него должны быть следующие методы: получить ширину getWidth, установить ширину setWidth,
// получить высоту getHeight, установить высоту setHeight, методы для расчета периметра и площади на основе ширины и высоты.

//ОТВЕТ:
// class Rectangle {
//     constructor(width = 0, height = 0) {
//         this.width = width
//         this.height = height
//     }

//     get getWidth() {
//         return this.width
//     }

//     set setWidth(width) {
//         this.width = width
//     }

//     get getHeight() {
//         return this.height
//     }

//     set setHeight(height) {
//         this.height = height
//     }

//     getPerim() {
//         return 2 * (this.width + this.height)
//     }

//     getArea() {
//         return this.width * this.height
//     }
// }

// const rectangle = new Rectangle()

// rectangle.setWidth = 10
// rectangle.setHeight = 6
// console.log('Периметр: ', rectangle.getPerim())
// console.log('Площадь: ', rectangle.getArea())
class Rectangle {

    constructor(argWidth, argHeight) {

        this.height = argHeight;

        this.width = argWidth;

        this.elem = document.createElement('div');

        this.elem.style.width = this.width + 'px';

        this.elem.style.height = this.height + 'px';

        this.elem.style.border = '1px solid red';

        document.body.appendChild(this.elem);

    }

    getWidth() {

        return this.width;

    }
    getHeight() {

        return this.height;

    }
    setWidth(argValue) {

        this.width = argValue;

    }
    setHeight(argValue) {

        this.height = argValue;

    }


};



const rec = new Rectangle(100, 200);

console.log(rec.width);
console.log(rec.getWidth());
console.log(rec.getHeight());
rec.setWidth(300);
rec.setHeight(30);

console.log(rec.getWidth());
console.log(rec.getHeight());