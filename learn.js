//условный оператов ?

// let ine = prompt("введи оф название js");
// let ine1 = ine == 'ecma' ? alert('красавчик') : alert('my boy');

//логические операторы || [или] и ||= [логическое присвивание или]

// let ine = prompt("введи оф название js");
// ine ||= 'not appropriate';
// alert(ine);

//&& [логическое присваивание и]

// let ine = prompt("введи оф название js");
// ine &&= 'truthly';
// alert(ine);

//inversion [первый ! инвертирует, а второй инвертирует ещё раз]

// let ine = prompt("введи оф название js");
// let ine1 = ine == 'ecma' ? alert('красавчик') : alert('my boy');

// let i = 0;
// alert()

//topic: objects


//task1
// let user = {
//     name: "John",
//     surname: "Smith",
// };

// user.name = "Pete";
// delete user.name;

// //task2
// function isEmpty(schedule) {
//     let num = 0;
//     for (let key in schedule) {
//         num+=1;
//     }
//     if (num === 0) {
//         return 'dead inside';
//     }
// }

// let schedule = {};

// alert( isEmpty(schedule) ); // true

// schedule["8:30"] = "get up";

// alert( isEmpty(schedule) ); // false


// let a = {};
// let b = a;
// console.log(a==b);

let user = {
    name: "John",
    age: 30,
  
    sayHi() {
      alert( user.name ); // приведёт к ошибке
    }
  
  };
  
let admin = user;
user = null; // перезапишем переменную для наглядности, теперь она не хранит ссылку на объект.
admin.sayHi(); // TypeError: Cannot read property 'name' of null

