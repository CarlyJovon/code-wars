//Implement a function that returns true when a given string only contains a single digit (0-9), false otherwise.
//match number between 0-9

String.prototype.digit = function() { 
  return /^[0-9]$/.test(this);
  };


