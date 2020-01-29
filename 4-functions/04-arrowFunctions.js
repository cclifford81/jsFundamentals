/*
arrow fucntions don't get hoisted
it's a quick way to write a function
all fat arrow functions need to be set to a variable

*/
/*
let hi = () => {
    console.log('hello');
}
*/

//concise body
let hi = () => console.log('hello');  //fucntion must be invoked below

hi();

//block body
let hi = () => {
    console.log('hello');
    //return keyword must be present inside of a block body arrow function
}
hi(); 

//CONCISE VS BLOCK  

let apples = num => console.log(`There are ${num} apples.`);

apples(10);

let counting = num => {
    for(let i = 0; i <= num; i++){
        console.log(i);
    }
}
counting(20);

/*
if no paramters, we have to have the parens()
if there is a single parameter yu can choose to have no parens or include the parens
if there are multiple parameters, you have to include parens

*/

