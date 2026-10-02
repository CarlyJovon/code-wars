function spEng(sentence){
//convert text to lowercase and check for english
  return sentence.toLowerCase().includes('english');
}

//true 
console.log(spEng("abcdEnglishf"));


//false
console.log(spEng("abcdEglinshf"));