// var message = "Как вас зовут?";
// alert ('Наталья');

// //*********************/

// let res = 0;

// for (let i = 1; i <= 100; i++) {
// 	res += i;
// }

// console.log(res);
// /*********************/

// function func(num) {
// 	console.log(num **3);
// }
// func(3); 

// //************************/

// let str = prompt('Введи число');
// prov(Number(str));
// function prov(ch){
// if (ch>0) alert('+++');
// if (ch<0) alert('---');
// if (ch==0) alert ('число 0');
// }

// /************************/ 

// let str = prompt('Введи число');
// prov(Number(str));
// function prov(ch){
// if (ch>0) alert('+++');
// if (ch<0) alert('---');
// if (ch==0) alert ('число 0');
// }

// //******************************/

// function func(num1, num2, num3) {
// 	console.log(num1 + num2 + num3);
// }
// func(1, 2, 3);
// /*************************************/

// function func(num) {
// 	console.log(num ** 1);
// }

// let param1 = 1;
// let param2 = 2;
// let param3 = 3;
// func(param3*2);

// /***************************/

// function func(num = 5) {
//     alert(num * num);
//     }
//     func(2); //выведет 4;
//     func(3); //выведет 9;
//     func(); //выведет 25;

// /***********************/

// function func(num1 = 0, num2 = 0) {
//     alert(num1 + num2);
//     }
    
//     func(2, 3);//выведет 5;
//     func(3);//выведет 3;
//     func();//выведет 0;
    
// //*********************/    

// function func(num) {
// 	console.log(num ** 3);
// }

// function func(num) {
// 	return num ** 3;
// }
// let res = func(3);
// console.log(res); 
// /********************/

// const getSquareRoot = number => number ** 0.5;

// alert(getSquareRoot(3) + getSquareRoot(4))
// /**********************************************/

// function sqrt(num) {
//     return Math.sqrt(2);
//     }
    
//     function round(num) {
//     return num.toFixed(3);
//     }
//     function func(num) {
//         return num ** 2;
//     }
    
//     let res = func(func(2));
//     console.log(res); // выведет 16
//     //******************************* */

// function square(num) {
// 	return num ** 2;
// }

// function sum(num1, num2) {
// 	return num1 + num2;
// }
// let res = sum(square(2), square(3));
// console.log(res);
// /************************************/

// function func(num) {
//     return num;
    
//     let result = num * num;
//     return result;
//     }
    
//     alert( func(3) );//выведется 3, потому что функция закончит свою работу и никакой код дальше не выполнится


// function func(num) {
//     if (num <= 0) {
//     return Math.abs(num);
//     } else {
//     return num * num;
//     }
//     }
    
//     alert( func(10) );
//     alert( func(-5) ); выведется 100,  5, потому что выполнится только один из return. В зависимости от значения параметра выполнится либо первый, либо второй return:
//     //****************************/

// function func(num) {
//     let sum = 0;
    
//     for (let i = 1; i <= num; i++) {
//     sum += i;
//     return sum;
//     }
//     }
    
//     alert( func(5) ); выведется 1

//     function func() {
//         let sum = 0;
        
//         for (let i = 1; i <= 0; i++) {
//             sum += i;
//         }
        
//         return sum;
//     }
    
//     let res = func();
//     console.log(res); 
//     //*************************//

//     function func(num) {
//         var i = 0;
//         for (; num > 10; i++) {
//           num /= 2;
//         }
      
//         return i;
//       }
//       console.log(func(200)); выведет 5
//       /**************************/

//       function isPositive(arr) {
//         let flag = true;
        
//         for (let elem of arr) {
//             if (elem < 0) {
//                 flag = false;
//             }
//         }
        
//         return flag;
//     }
//     /*************************************/

//     function isPositive(arr) {
//         for (let elem of arr) {
//             if (elem < 0) {
//                 return false;
//             }
//         }
        
//         return true;
//     }
//     /***********************************/

//     function isSame(arr){
 
//         for(let i=0; i<arr.length; i++){
//             if(arr[i] == arr[i+1]){
//                 return arr[i]+;
//             }
//         }
//         return;
//     }
     
//     console.log(isSame([2, 4, 5, 7, 7]));
//     /*************************************/

