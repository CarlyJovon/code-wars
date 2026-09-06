function basicOp(operation, value1, value2){
  //Code
  switch(operation) { 
  case '+':
    return value1 + value2; 
  case '-': 
      return value1 - value2; 
  case '*': 
      return value1 * value2;
  case '/': 
      return value1 / value2;
  default:
      return 0;
  }
}
  
//default skips all other cases and results to 0