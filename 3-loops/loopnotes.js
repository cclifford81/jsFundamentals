/*
It's important to include the let keyword inside of our loop. In the case we have a global variable named the same as the variable inside of our loop, you could potentially run into some scope issues.
*/

let i = 7 for(i = 0; i < 10; i++) {
    console.log(i); // 0 1 2 3 4 5 6 7 8 9
    }console.log('global variable:', i) // global variable: 10

/*
Above, without the let keyword in our for loop, we're pulling in our global variable of i (7) and using that as our initial expression in our loop. After the loop runs, we can see in the additional console.log that our global variable actually prints as 10 now instead of 7, since the loop incremented it.
*/

let i = 7 for(let i = 0; i < 10; i++) {
    console.log(i); // 0 1 2 3 4 5 6 7 8 9
    }console.log('global variable:', i) // global variable: 7
/*
Above, we have a global variable of i that's initialized as 7. In our for loop, we are declaring a new variable of i and initializing it as 0 - instead of grabbing i from our globally scoped variable of i. Notice that our final console.log of i still prints as unchanged (7), since we declared a new variable within the local scope of our for loop. (edited) 
*/

/*
for ( let j = 0;  j <  5; j++ ) {
    console.log(j + " ")
}


for ( let j = 10;  j >  5; j-- ) {
    console.log(j);
}


for ( let j = 5; j<16; j++ ) {
    console.log(j);
}


for ( let j = 0; j <= 10; j+=2) {
    console.log(j);
}

let count = 0;
for ( ;  count < 9; ++count ) {
  console.log(count);
}

let student = { name: "Peter", awesome: true,
degree: "JavaScript", week: 1 }

*/

/*
let studentName = "pAuL";
let capName;

for (let x in studentName) {
   if (x == 0) {
      capName = studentName[x].toUpperCase();
      } else {
      capName += studentName[x].toLowerCase();
   }
}
console.log(capName); 
*/

blah = function () {
    return lala;
    lala = "hi";
  };
  console.log(blah());
//lala is not defined

/*
function sum(a, b) {
    return a + b;
  }
  console.log(sum(1, 2, 3, 4));

  function foo () {
    return bar();
    function bar() {
      return "Poppin' bottles";
    }
  }
  console.log(foo());
*/

/*
function whatDoesItDo(val) {
    return val ? 1 : 2;
  }; 

  function whatDoesItDo(color)
    color = 'blue'
    
    if (color !== 'blue' || color !== 'green') {
       color = 'red';
    }
    return color;
 }; 
 
 console.log(whatDoesItDo());
*/

let FB = () => {
  for(let i = 0; i <=10; i++) {
      if (i % 15 == 0) {
          console.log("FizzBuzz");
      } else if(i % 5 == 0) {
          console.log("Buzz");
      } else if(i % 3 == 0) {
          console.log("Fizz");
      } else{
          console.log(i);
      }
  }
}

FB();
/// from above


