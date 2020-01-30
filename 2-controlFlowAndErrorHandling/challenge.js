/*
Silver:
    If the first letter of a string is uppercase, only console.log that letter
    if it is not, console.log the rest of the string Without the first letter, and change them to lowercase

Gold:
    If the first letter of a string is uppercase, console.log that that first letter of a string  plus the rest of the string to lowercase
    If it is not, console.log the first letter of the string to uppercase plus the rest of the string to lowercase
*/
//Bronze

/*
let name = 'zAchARy';


if (name[0] == name[0].toUpperCase()) {
    let isUppercase = name[0] + name.slice(1).toLowerCase();
    console.log(isUppercase);
} else {
    let isNotUppercase = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    console.log(isNotUppercase);
};

// SILVER
/*

/*
CHALLENGE
************
    Look up the format for an Else If statement

    Set a variable of age and give it a number of your choice
    Create an else if statement that checks the following:
    If the age is 17 or younger, console.log 'Sorry, you're too young to do anything.'
    If the age is at least 18, console.log 'You can vote!'
    If the age is at least 21, console.log 'You can drink!'
    If the age is at least 25, console.log 'You can rent a car!'
*/
let age = 20

If(age >=25) 
    console.log('you can rent a car!');
  else if (age >= 21) {
    console.log("Yay! You can drink!");
} else if (age >= 18) {
    console.log('You can vote!');
} else if (age >= 17) {
    console.log("Sorry, you're too young to do anything.");
}
 