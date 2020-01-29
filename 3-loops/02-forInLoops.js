/*
    -great for counting key/value pairs in an object.  Properties in an object are what is called enumerable
        -for in loops will iterate over an objects enumerable properties
*/

let student = {
    name: "Peter",
    awesome: true,
    degree:  "JavaScript",
    week: 1
}

console.log(student.degree); // dot notation

for(let item in student) { 
    // console.log(item)
    console.log(item);
    console.log(student [item]) // object bracket notation *also arrays
}

let dogArray = ['great dane', 'husky', 'boarder collie', 'dalmation', 'pug']

for (let dog in dogArray) {
    console.log(dogArray[dog])
}
//good practice to keep 'let' inside paraenthesis BUT only needed when working on a globally scoped code

/*
Challenge:  write a for in loop that capitalizes the first letter of a name, and Lowercases the rest of the name
*/

let name = 'zACH';
let capName;

for (let i in name) {
    if (i == 0) {
        capName = name[i].toUpperCase();
    } else {
        capName += name[i].toLowerCase();
    }
}
console.log(name);
//doesn't work for me, not sure why

/*
-for of loops look at the iterable properties of an array 
-can't use forof loops on objects because objects are enumerable, not iterable

-for in - for objects
-for of - for arrays
*/

let dogArray = ['great dane', 'husky', 'boarder collie', 'dalmation', 'pug']

for(let dog of dogArray) {
    console.log(dog, 'goes bark');
}
