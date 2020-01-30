let food = ['Pecan Pie', 'Shrimp', 'Quesadilla', 'Cheese Cake', 'Hotdog'];

food.push('Pizza') //appends or 'pushes' an item into the array.  Appends to the end
console.log('push:', food);

food.push('Pizza'); // appends or 'pushes' on item into the array.  Apeends to the nd
console.log('push:', food);

food.splice(1,1, "Bananas"); // (position / how many to delete / what to add in its place
console.log('splice:', food);

food.splice(2, 0, 'Sweet Potato Pie'); // (position / how many to delete (0) / what to add in its place
console.log('splices 2:', food);

food.pop(); // removes the last item of an array
console.log('push:', food); 

food.shift();  // removes the first element in an array
console.log('shift:', food);

food.unshift(); //unshift adds 1 or more items to the beginning of the array
console.log('unshift:', food);

console.log('orginal array', food);


