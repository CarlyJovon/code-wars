/*Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. 
You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. 
Be careful, there shouldn't be a space at the beginning or the end of the sentence! */

//create a function with "words" as parameter
//use array method join on "words" in the array 
//return the sentence from the joined words in the array 

function smash (words) { 
   return words.join(' ');
};

//example
const arrayOfWords = ["My", "name", "is", "Carly"]; 
const sentenceSmash = smash(aarayOfWords)

console.log(sentenceSmash)
