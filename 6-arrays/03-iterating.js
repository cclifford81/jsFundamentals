/*
the forEach() method executes a provided function once for a each element in an array
the forEach() method does the same thing as for a loop or for of Loop - both iterate over properties in an array


*/

let food = ['Pecan Pie', 'Shrimp', 'Quesadilla', 'Cheese Cake', 'Hotdog'];

for(let i = 0; i < food.length; i++){
    console.log(food[i]);
}
//forEach is function in concise body
food.forEach(foodItem => console.log(foodItem));

foodItem = 'Pecan Pie'; 
foodItem = 'Shripm';
foodItem = 'Quesadilla';

//block body form

food.forEach(individualsFoodItem => {
    console.log(individualsFoodItem);
})

let food = ['Pecan Pie', 'Shrimp', 'Quesadilla', 'Cheese Cake', 'Hotdog'];

food.forEach(function(foodItem){
    console.log(foodItem);
})
//    regardless of name, the 2nd parameter will show index
food.forEach(function(foodItem, index){
    console.log(index);
})
//e.g., foodItem and index can be

/*
CHALLENGE

*NOTES
Create an array containing movies
Use .forEach() to list your movies
add another movie at the end
and replace on of your exsisting movies with another one.
*/

let movie = ['Iron Man', 'Thor', 'Avengers', 'Ant Man', 'End Game'];

movie.forEach(function(movieItem){
    console.log(movieItem);
})

movie.push('Winter Soldier') //appends or 'pushes' an item into the array.  Appends to the end
console.log('push:', movie);

movies.splice(3, 1, 'Winter soldier');

movie.forEach(function(movieItem){
    console.log(movieItem)
})

