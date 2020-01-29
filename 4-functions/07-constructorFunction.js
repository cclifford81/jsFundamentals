/*
constructor function helps automat object creation
BEST PRACTICE Constructor Function Starts with Captial letter
*/





// (1)      (2)        (3) 
function Person(name, age, canVote){
//   (4)  (5)    (6) 
    this.name = name;
    this.age = age;
    this.canVote = canVote;
}

//              (7)   (8)
let person4 = new Person('James', 80, true);
console.log(person4);

let person5 = new Person('Casey', 30, true);
console.log(person5);

/*
1. the function keyword
2. the function name. for constructor functions the Name of the functions hould be CAP
3. the parameters.  these will be the values for the keys in our object once a new 'Person' is created
4. the 'this' keyword refers back to whatever called it, or whatever activates it.  In this case, 'this' refers bak to 'Person'
5. the keys of the new object we're creating. 
6. the areguement we pass through our function call
7. & 8. the new keyword creates a new instance of our 'Person' function, with the values we pass into that function when invoking it
*/