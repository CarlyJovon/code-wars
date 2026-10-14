//Create a function that returns the CSV representation of a two-dimensional numeric array

//parameter - array 
//retun - a string 
//example - [0,1,2,3,4] 
//comma seperated values - plain text with a record on each line and seperated by commas
//2-D numeric array - stores #s in a grid format or rows and columns

//map() creates a new array of row strings 
//join() array -> string and , seperates the rows 

function toCsvText(array) {
    return array.map(row => row.join(",")).join("\n");

}