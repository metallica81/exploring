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

// let ob = {
//   name: 'oleg'
// };
// function A() {
//   return ob;
// }

// function B() {
//   return ob;
// }

// let a = new A();
// let b = new B();
// alert(a == b);




//№2 конструктор и оператор new


// function Culc() {

//   this.read = function() {
//     this.a = +prompt('a?', 0);  //+ перед promt для перевода в int
//     this.b = +prompt('b?', 0);
//   };

//   this.sum = function() {
//     return this.a + this.b;
//   }

//   this.mult = function() {
//     return this.a * this.b;
//   }


  
// }

// let calc = new Culc();
// calc.read();
// alert("Sum=" + calc.sum());
// alert("Mul=" + calc.mult());


// №3 функциональный конструктор

// function Accumulator(startingValue) {

//   this.value = startingValue;
  
//   this.read = function() {
//     this.value += +prompt('Сколько нужно добавить?', 0);
//   };
// }

// let accumulator = new Accumulator(1); // начальное значение 1

// accumulator.read(); // прибавляет введённое пользователем значение к текущему значению
// accumulator.read(); // прибавляет введённое пользователем значение к текущему значению

// alert(accumulator.value); // выведет сумму этих значений

// let user = null;

// alert( user?.address );

