//Create a function that checks if a number n is divisible by two numbers,  x AND y. 
//All inputs are positive, non-zero numbers.

//check if n divided by x leaves a remainder
//check if n divided by y leaves a remainder 
//check if both conditions are true


function isDivisible(n, x, y) {
    return n % x === 0 && n % y === 0; 
}
