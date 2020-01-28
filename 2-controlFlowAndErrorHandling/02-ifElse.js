/*
CHALLENGE
************

    Bronze:
    Write an if else statement that checks your name;
    If it is your name, console log '<name>'
    If the name does not match, console.log 'Hello, what is your name?'

    Silver:
    If It is your name, console log 'Hello, my name is <name>'

    Gold:
    If it is not your name, console log 'Hello, is your name <name here> ?'
*/

let weather = 30;

if (weather < 50) {
    console.log("Wear a jacket");
} else {
    console.log("No jacket necessary!");
}

let name = "Case";

if (name == "Casey") {
    console.log(name);
} else {     
    console.log(`Hello, is your name ${name}?`)
}
