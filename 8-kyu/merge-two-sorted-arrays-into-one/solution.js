//Create a function to merge arrays
function mergeArrays(a, b) {
  //combine the arrays
  const combined = a.concat(b);
  
  //Set removes the duplicate values 
  const unique = new Set(combined);
  
  //Create array that is sorted in ascending order without any duplicates 
  
    return [...unique].sort((a,b) => a - b);
}