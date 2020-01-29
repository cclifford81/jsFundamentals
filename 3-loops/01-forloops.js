/*
for loops take in 3 parameters;
1. initial expression
2. condition
3. increment expression


*/

//      (1)     (2)     (3) ++ incrases by 1 each time
for (let i = 0; i < 10; i++) {
    console.log(i);
}

//Challenge: using a for loop, count to 20, by 2's

for (let i = 0; i <= 20; i += 2) {
    console.log(i);
}

//Challenge: using a for loop, count from 10 to 0, going down by 1

for (let i = 10; i >= 0; i -=1) {
    console.log(i);
}
//Challenge: using a for loop, count from 0, going down by 2's to -24

for (let i = 0; i >= -24; i += -2) {
    console.log(i);
}

// Challenge: using a for a loop, go through a name and display each letter individually
let name = "Casey"

for (let i = 0; i < name.length; i++) {
    console.log(name[i]);
  }
// Challenge: make a for loop where you add up all the numbers from 1 to 50 (should equal 1275)

let sum = 0;

for (let i = 1; i <= 50; i++) {
    sum += i;
}
console.log(sum)
