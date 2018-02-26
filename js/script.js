// var string = "Hello";
// // string += " World"; // uncomment to test
// string = string + " World";
// console.log(string + "!");


// var x = 4, y = 4;
// if (x == y) {
//   console.log("x=4 is equal to y=4");
// }
// if (x === y) {
//   console.log("Strict: x=4 is equal to y=4");
// } else {
//   console.log("Strict: x=4 is NOT equal to y=4");
// }
//
//
// x = "4";
// if (x == y) {
//   console.log("x='4' is equal to y=4");
// }
// if (x === y) {
//   console.log("Strict: x='4' is equal to y=4");
// } else {
//   console.log("Strict: x='4' is NOT equal to y=4");
// }


// if ( false || null || undefined || "" || 0 || NaN) { //no short circuiting
//   console.log("Will this ever execute?");
// } else {
//   console.log ("All false");
// }
//
// if (true && "hello" && 1 && -1 && "false") { //any nonzero number is true any strinbg is true
//   console.log("All true");
// } else {
//   console.log("Something was false");
// }


// var sum = 0;
// for (var i = 0; i < 10; i++) {
//   console.log(i);
//   sum = sum + i;
// }
// console.log("sum of 0 through 9 is: " + sum);


// var company = new Object();
// // this is the long way to use an object.
// company.name = "Facebook";
// company.ceo = new Object();
// company.ceo.firstName = "Mark";
// company.ceo.favColor = "blue";
// console.dir(company);
// console.log("Company CEO name is: " + company.ceo.firstName);
//
// var stockPropName = "stock of company";
// company[stockPropName] = 182; //company has a prop called "stock of company"
//
// console.log("Stock price is: " + company[stockPropName]);
//
//
// // this is the faster way
// var facebook = {
//   name: "Facebook",
//   ceo: {
//     firstName: "Mark",
//     favColor: "blue"
//   },
//   "stock of company": 182
// };
// console.dir(facebook);
// console.log(company == facebook ? "too good": "to be true")


// var a = 7;
// var b = a;
// console.log("a: " + a);
// console.log("b: " + b);
//
// b = 5;
// console.log("after b update:");
// console.log("a: " + a);
// console.log("b: " + b);


// var a = { x: 7 };
// var b = a; //they point at the same object
// console.log(a);
// console.log(b);
//
// b.x = 5;
// console.log("after b.x update:");
// console.log(a);
// console.log(b);


// var array = new Array();
// array[0] = "Dave";
// array[1] = 2;
// array[2] = function (name) {
//   console.log("Hello " + name);
// };
// array[3] = {course: "Javascript"};
//
// console.log(array);
// array[2](array[0]);
// console.log(array[3].course);


// var names = ["Dave", "John", "Joe"];
// console.log(names);
//
// for (var i = 0; i < names.length; i++) {
//   console.log("Hello " + names[i]);
// }
// for (var i in names){
//   console.log("Hi @"+ i +" = " + names[i]);
// }


var names = ["Dave", "John", "Joe"];
names[100] = "Jim";
for (var i = 0; i < names.length; i++) {
  console.log("Hello " + names[i]);
}
