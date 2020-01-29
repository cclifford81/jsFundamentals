/*
parameters are placeholders for data that will be accepted later, when we call the fucntion

*/

function counter(number, string) {
    for(let i = 0; i <= number; i++){
        console.log(i);
    }

    console.log(string);

}

counter(10, 'hello');
/*
CHALLENGE:

write a function that takes two parameters
1 parameter is for first name
2 parameteris for last name
have them come together in a variable insie the function
consolo.log hello, my name is <your name>'
call (or invoke) your fucntion

*/

function myName(fName, lName) {
    let fullName = fName + ' ' + lName;
    console.log(`Hello, my name is ${fullName}`)
}
myName('Casey', 'Clifford');



    