/*
    -a variable is a named container for storing data
    -we name variables so that we can refer to them again
*/

let a = 2;

    let     b   =   1;
/*  (1)    (2) (3)  (4)

    1. javascript keyword
    2. variable name
    3. assignment operator
    4. value

*/

console.log(a + b);

let hello = 'test one';
let helloo = 'test two';

console.log(hello)


/*
    notes on variables:
        -a variable namemust begin with a letter, underscore, or dollar sign
        -numbers may follow the above characters, but they can't come first
        -  javascript is case sensitive = 'hello' * 'Hello' are two separate variables
        -no spaces allowed in variable names
        -camelCase is the best practice for naming variables with multiple words
        -this helps with readablility

*/

//let ThisBeProperCamelCase

/*
    var, let, const:

        -var: 'old' keyword for variables in jaascript
        -let: 'new' keyword introduced for variables in ES6
        (newer version of javascript)

        -const: unchangeable variable once declared
*/

/*
    declartions vs initialization

        -declarations are the LEFT SIDE ofa  variable
            -let x = 
            -declarations are on the left side of the assignment operator (=)
        -initializations are the RIGHT SIDE of the variable
            -it sets the value of the variable
            -the value we initialize our varable is what is on the right side of the assignment
*/

let x; 
console.log('Declaration:', x); //undeinfed dec

x = 10; 
console.log('Initializtion:', x); // initialization: 10

x = 100; 
console.log('Reinitalization', x);

let y = 'hello';
console.log (x,y);

const today = 'great';
console.log(today);

today = 'Wonderful';
console.log(today);

