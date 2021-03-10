// Question 1
c = 2
d = 2

// Question 2
true 
false
true 
false
false
false

// Question 3
let name = prompt("What is your name?");
alert("Your name is " + name) ; 

// Question 4
let number = prompt("Input a number");
if (number > 0){
    alert(1);
} else if ( number < 0){
    alert(-1);
} else if(number = 0){
    alert(0);
}else{
    alert("Input a valid number");
}

// Question 5
let result;

a + b < 4 ? "below" : "over";


let message;
(login == 'Employee')?  message = 'Hello'
:(login == 'Director')? message = 'Greetings'
: (login == '')? message = 'No login'
:message = '';

// Question 6
2
// Question 7
if (age >= 14 && age <=90){
    console.log("You are qualified");
}

// Question 8
let qualified = (age >= 14 && age <=90)
if (!qualified){
console.log("You are not qualified");
}

if(age < 14 || age > 90){
    console.log("You are not qualified");
}
// Question 9
let login = prompt("Enter your login");
 if(login == "Admin"){
 let password =   prompt("Enter your password");
     if (password === "TheMaster"){
         alert("Welcome!")
     }else if (password === ""){
        alert("Cancelled")
     }else{
        alert("Wrong Password")
    }
} else if (login == "" || login == null){
    alert("Cancelled");
}else {
    alert("I don't know you.")
}