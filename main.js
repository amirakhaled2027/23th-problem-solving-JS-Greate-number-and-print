//Make a function take two parameters num1 and num2 and print the greater number or if they are equal print they are equal.
function compareNumber(x , y){
    var largestNumber = Math.max(x, y);
  
    if(x > y || y > x) {
      return largestNumber;
    } 
    else if(x === y) {
      return "The numbers are equal";
    } 
    else{ 
      return false;
    }
  } 
  document.write(compareNumber(3, 3));