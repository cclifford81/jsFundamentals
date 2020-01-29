//Ternary
(num > 0) 

// if/else
if (num> 0) {
    console.log('yes'); 
}

let num = 6; 

// Ternary
(num == 0) {
    console.log('working')
} else if (num < 0) {
    console.log('not working');
} else {
    console.log('still not working');
}

let myAge = 23;

(myAge >=25) ? console.log

/*
************
  TERNARY       - go to: 04-ternary.js
************

    - a ternary basically acts as a shortcut for writing if & if/else statements
*/

let num = 6;

// Ternary:
num > 0 ? console.log("yes") : console.log("no");

// Instead of:
if (num > 0) {
  console.log("Yes");
} else {
  console.log("No");
}

//Conditional statements
if (num == 0) {
  console.log("hello");
} else if (num < 0) {
  console.log("hi");
} else {
  console.log("goodbye");
}

//Ternary operators
num == 0
  ? console.log("hello")
  : num < 0
  ? console.log("hi")
  : console.log("goodbye")(
      // can also be written as so if this is easier to read:
      num == 0
    )
  ? console.log("hello")
  : num < 0
  ? console.log("hi")
  : console.log("goodbye");

/*
CHALLENGE
************
    Write a ternary that does the same thing as the age challenge

    Age Challenge (if else):

    let age = 30;

    if (age >= 25) {
        console.log("Yay! You can rent a car!");
    } else if (age >= 21) {
        console.log("Yay! You can drink!");
    } else if (age >= 18) {
        console.log("Yay! You can vote!");
    } else {
        console.log("Sorry, you're too young to do anything fun.");
    }
*/

let myAge = 10;

myAge >= 25
  ? console.log("Yay! You can rent a car!")
  : myAge >= 21
  ? console.log("Yay! You can drink!")
  : myAge >= 18
  ? console.log("Yay! You can vote!")
  : console.log("Sorry, you're too young to do anything fun.");

/*
    - unlike conditionals, ternaries require the default/else catch all.
    - where an if/else statement can go without the else, and a switch can go without a default, ternaries need that catch all at the end, otherwise it will throw an error.
*/