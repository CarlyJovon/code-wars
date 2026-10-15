//Complete the solution so that it reverses all of the words within the string passed in.
//Words are separated by exactly one space and there are no leading or trailing spaces.


//Example 
//"The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"

//break up the string into an array (with a space)
//reverse the array
//join the array back together

function reverseWords(str){
  return str.split(" ").reverse().join(" "); //
}
