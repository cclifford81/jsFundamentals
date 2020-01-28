/*
    BOOLEANS
        -A boolean has two possible values of either true or false
*/

let on = true
console.log(on);

let off = false; 
console.log(off);

/*
    -NULL
        -null is an empty value.  Think of it like any empty container:  nothing is in it, but it still exists as a space to fill
*/

let empty = null;
console.log(empty);

/*
    UNDEFINED
        -no value has been assigned and it does not act as an empty container, whereas null does.
*/

let undef = undefined; 
console.log(undef);

let correct; 
console.log(correct);

/*
    -Null is like a container with nothing in it
    -undefined is when a variable has never been set, or hasn't been created yet
*/

/*
    NUMBERS
        -numbers are literally just numbers.  Don't need anything special to write them
*/

let degrees = 33;
console.log(degrees);

let precise = 999999999999999; //15 9's
console.log(precise);

let rounded = 9999999999999999; // 16 9's JS can only hold 15 numbers * not the best for math just a limitation
console.log(rounded);

let decimal = 0.2 + 0.1;
console.log(decimal);

/*
    STRINGS
        -strings are datatypes used to represent text and are wrapped in either single or double quotes
*/

let stringOne = "double quotes";
let stringTwo = 'single quotes';


// numbers vs strings
let first = 1050 + 100;
let second = '1050' + '100';

console.log(first);
console.log(second); 
// use type of to check data type 
console.log(typeof first);
console.log(typeof second);

// if one data type is a string, and one is a number, the compiler will assume you are trying to work with strings and convert the number to a string


/*
    OBJECTS
        -Used to store MANY VALUES 
        -hold what are known as key/value pairs
*/

let frodo = {
    race: 'hobbit',
    rings: 1,
    cloak: true
}

console.log(frodo);
console.log(typeof frodo);

/*
    ARRAYS
        -arrays are containers that hold a list of items 
        Let list = [    'item1', 'item2', 'item3' ];
               (1)         (2)     (3)     

               1. name of the array (in this instance) or variable
               2. square brackets denote that it is an arrary
               3. each item, regardless of datatype, is separated by a comma
               4. object is anything that can be a container for a data type
    */

    let burritos = ['large', 4, true];
    console.log(burritos);

    console.log(typeof burritos);

    /*
        Challenge:
        Set 7 (or 8) variables:
        firstName
        lastName
        houseNumber
        aptNumber (if applicable)
        street
        city
        state
        zipecode

        sete each variable to its respective type.

        console.og your whole address (with space between variables)
    */



let firstName ='Casey';
let  lastName ='Clifford';
let houseNumber = 44;
let  aptNumber = 'D';
let  street ='Knoll Ct.';
let  city = 'Carmel';
let  state = 'Indiana';
let  zipecode = 46032;

console.log(firstName, lastName = ',', houseNumber, street + ',', city+ ',', state, zipecode);

/*
    STRING: PROPERTIES
    -properties are qualities associated with a specific datatype
    -set  ??? have properties, or qualities that are associated specifically with strings
*/

let myName = "Casey";
console.log(myName.length) // length will not start counting at 0 

/*
    STRING: METHODS
        -methods are tools that can help us manipulate certrain data
        -property & .method()
            -no parenthesis for properties
*/

let myNameIs = 'Casey';
console.log(myNameIs.toUpperCase());  //toUpperCase() a method to change a string to all uppercase

let home = 'My home is Greenwood';
console.log(home.includes('Greenwood'));
//chalenge search MDN for split string method

let sent = "this sentence will be split into individuals parts";
console.log(sent.split(" "));
