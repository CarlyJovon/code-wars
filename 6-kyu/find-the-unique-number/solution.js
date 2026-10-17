//There is an array with some numbers. 
//All numbers are equal except for one. Try to find it!

/*
Parameters: arr (an array of #'s)
Return: the number that comes up once
Example: findUniq([1,1,1,2,1,1,]) | return 2 

Psuedocode: 
- go through each number in the array 
- find the number that has first and last positon the same
- return unique number
*/

function findUniq(arr) {
    return arr.find(num => arr.indexOf(num) === arr.lastIndexOf(num)); 
}
