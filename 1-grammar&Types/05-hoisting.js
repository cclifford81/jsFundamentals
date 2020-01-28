/*

    -javascript is interpreted line by line (read top to bottom), and performs 2 passes of our code.
        -the first pass of the code recognizes where we have declared variables and stores them away in memory
            -looks at anything on the left side of our assignment operators (=)
        -the second pass of the code is where the values we have given our variables are actually assigned.

    -NOTE: variables are "hoisted" functions are too "hoisted" = stored away in memory
*/      

console.log(name);
let name = 'Zach';

b();

function b() {
        console.log('I have been hoisted');
}