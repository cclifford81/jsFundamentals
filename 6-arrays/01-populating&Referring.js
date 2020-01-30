/*
arrays are containers that hold a list of items
donted by []
can hold multiple datatypes
each item, regardless of datatype, is separated by a comma
*/
//             (0)       (1)      (3)
let list = ['orange', 'banana', 'apple']
console.log(list[1]);
/*
when calling an array, we can append square brackets onto the end of our array with the inde number we want to reference.  This is called square bracket notiation

*/

let students = ['Matt', 'Bob', 'Jeff', 'AB', 23, true, ['Kris', 'Taylor', 'Will']];

//console.log(typeof students); //object
console.log(students instanceof Array); //true
console.log(students instanceof Object);//true
console.log(students[2]);  //Jeff
/*
CHALLENGE:
dive into nested array and pull the value 'Will'
printe out "Hello Will"
*/

console.log(students[6][2]);

let name = students[6][2];
console.log(`Hello ${name}`);
//Prints Hello Will 


