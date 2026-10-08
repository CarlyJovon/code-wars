//Write a function that accepts a non-negative integer n and a string s as parameters, 
//and returns a string of s repeated exactly n times.

//create a variable to store the output
//initialize result as an empty string
//use a for loop to repeat the string n times
//append s to the result on  each iteration 

function repeatStr (n, s) {
    let result = ''; 
    for (let i = 0; i <n; i++) { 
        result += s;
}
  return result;
}