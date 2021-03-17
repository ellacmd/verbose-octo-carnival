// // Question 1
// c = 2
// d = 2

// // Question 2
// true
// false
// true
// false
// false
// false

// // Question 3
// let name = prompt("What is your name?");
// alert("Your name is " + name) ;

// // Question 4
// let number = prompt("Input a number");
// if (number > 0){
//     alert(1);
// } else if ( number < 0){
//     alert(-1);
// } else if(number = 0){
//     alert(0);
// }else{
//     alert("Input a valid number");
// }

// // Question 5
// let result;

// a + b < 4 ? "below" : "over";

// let message;
// (login == 'Employee')?  message = 'Hello'
// :(login == 'Director')? message = 'Greetings'
// : (login == '')? message = 'No login'
// :message = '';

// // Question 6
// 2
// // Question 7
// if (age >= 14 && age <=90){
//     console.log("You are qualified");
// }

// // Question 8
// let qualified = (age >= 14 && age <=90)
// if (!qualified){
// console.log("You are not qualified");
// }

// if(age < 14 || age > 90){
//     console.log("You are not qualified");
// }
// // Question 9
// let login = prompt("Enter your login");
//  if(login == "Admin"){
//  let password =   prompt("Enter your password");
//      if (password === "TheMaster"){
//          alert("Welcome!")
//      }else if (password === ""){
//         alert("Cancelled")
//      }else{
//         alert("Wrong Password")
//     }
// } else if (login == "" || login == null){
//     alert("Cancelled");
// }else {
//     alert("I don't know you.")
// }

// Test 2
// Question 1
// for(let i=2; i<=10; i += 2){
//     console.log(i);
// }
// Question 2
// let i = 0;
// while(i < 3){
//     alert( `number ${i}!` );
// i++;
// }

// Question 3
// let number;

// do {
//   number = prompt("Enter a number greater than 100");
// } while(number <= 100 && number);

// Question 4
// let n = prompt('Enter a number');
// for (let i = 2; i <= n; i++) { 

//   for (let j = 2; j < i; j++) { 
//     if (i % j == 0) continue nextPrime; 
//   }

//   alert( i ); 
// }


// Question 5
// if ("browser" == "edge") {
//   alert("You've got the Edge!");
// } else if (
//   "browser" == "Chrome" ||
//   "browser" == "Firefox" ||
//   "browser" == "Safari" ||
//   "browser" == "Opera"
// ) {
//   alert("Okay we support these browsers too");
// } else {
//   alert("We hope that this page looks ok!");
// }
// Question 6
// let a = prompt('a?', '');
// switch (a) {
//   case 0:
//     alert(0);
//     break;
//   case 1:
//     alert(1);
//     break;
//   case 2:
//       case 3:
//     alert("2,3");
//     break;
//   default:
//     break;
// }


// Test 3
// Question 1
// function checkAge(age){
//   return age > 18 ?true:confirm('Did parents allow you?');
// }
// function checkAge(age) {
//   return (age > 18) || confirm('Did parents allow you?');
// }

// Question 2
// function min(a,b){
// let minimum = Math.min(a,b)
//  return minimum
// }

// Question 3
// function  pow(x,n){
//   let power = Math.pow(x,n)
//  return power
// }

// Question 4
// function convertToF(celcius){
//  let farenheit = (celcius * (9/5) + 32);
//  return farenheit;
// }
