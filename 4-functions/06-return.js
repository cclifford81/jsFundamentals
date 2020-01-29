let name = () => {
    return 'Casey';
}

let myNameIs = name();
console.log(myNameIs); 

/*
our functions take in data, manipulate it, and send it back out
CHALLENGE:

Make a tip calculator using a function
Have it RETURN the value
Capture that returned value in a VARIABLE
Print the variable
*/

function tipCalc(bill) {
    let tip = bill * 0.2;
    return tip.toFixed(2); ;
}

let totalTip = tipCalc(19.84) 
console.log(totalTip);

let tipCalc = bill => (bill * 0.2).toFixed(2);
let totalTip = tipCalc(19.84);
console.log(totalTip);
//can also consolelog toFixed




