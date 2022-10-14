
//****************//

let obj = {1:'a', 2:'b', 3:'c'}
console.log(obj[1]);
console.log(obj[2]);
console.log(obj[3]);


//****************//
let arr = [];
let result = 0;
let charr = [];
let str = "";

for( let i = 1; i <= 3; ++i ) {
arr[ i - 1 ] = i;
}

console.log( arr ); // [1, 2, 3]

for( let i = 0; i < arr.length; ++i ) {
result += arr[ i ];
}

console.log( result ); // 6

for( let i = 97; i <= 100; ++i ) {
charr.push( String.fromCharCode( i ));
}

console.log( charr ); // ["a", "b", "c", "d"]

for( let i = 0; i < charr.length; ++i ) {
if( i === 0 ) {
str += charr[ i ]
}
else if( i > 0 ) {
str += " + " + charr[ i ];
}
}

console.log( str ); // "a + b + c + d"

//****************//

let obj = {'1a':1, '2b':2, 'c-c':3};
let sum = obj['1a']+obj['2b']+obj['c-c'];
console.log(sum);

//****************//

let user = {name:'Наталья', surname:'Гуназа', patronymic:'Владимировна'};
console.log(user.surname+" "+user.name+' '+user.patronymic);

//****************//

let date = {year:2022, month:10, day:04};
console.log("Год - "+date.year+", месяц - "+date.month+", день - "+date.day);

//********************//

let obj = {key1: 1, key2: 2, key3: 3};
let sum = obj.key1+obj.key2+obj.key3;
console.log(sum);

//***********************//

let obj = {'1a': 1, 'b2': 2, 'eee-': 3, 'd4': 4};
console.log(obj['1a']);
console.log(obj['b2']);
console.log(obj['d4']);
console.log(obj['eee-']);

/**************** */
