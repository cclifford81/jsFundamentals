/*
    - switch statements execute a block of code depending on different cases
    - switch statements often use the break or default keywords (or both together)  - both keywords are optional
​
        - break keyword breaks out of the current condition & switch statement
        - default keyword specifies code to run if there is no case match
*/
​
let officeCharacter = 'Jim';
​
switch (officeCharacter) {
    case "Michael":
        console.log('My mind is going a mile an hour');
        break;
    case "Dwight":
        console.log('Perfectenschlag');
        break;
    case "Jim":
        console.log("Bears. Beets. Battlestar Galactica");
        break;
    default:
        console.log(`I'm sorry, ${officeCharacter}, but do I know you?`);
}
​
/*
CHALLENGE
************
    Write a dessert menu;
    If the dessert is pie, console.log 'Pie, pie, me oh my!'
    If the dessert is cake, console.log 'Cake is great!'
    If the dessert is ice cream, console.log 'I scream for ice cream!'
    Otherwise, have your switch statement console.log 'Not on the menu.'
*/
​
let dessert = "Pie";
​
switch (dessert) {
    case 'Pie':
        console.log('pie pie me oh my');
        break;
    case 'Cake':
        console.log('cake is great');
        break;
    case 'Ice cream':
        console.log('i scream for ice cream');
        break;
    default:
        console.log('not on the menu');
}