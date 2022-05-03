
class SmallestIntegerFinder {
    findSmallestInt(args) {
      let smallestInteger;
   
      for (let i = 0; i < args.length; i++){
          if ( args[i] <= args[0] ) {
              args[0]  = args[i];    
              smallestInteger = args[i];
          }
        }
      return smallestInteger;
    }
  }
  
  
  // Ask clarifying questions: the example clarifies about negative numbers and it says it won't be an empty array
  
  // function signature = function(array) => integer
  
  // sample data [34, -345, -1, 100] => =345
  
  // psuedo code
  // create a class called SmallestIntegerfinder that has a constructor function that takes an array as an argument
  // initialize a variable called smallestInteger
  // create a for loop that loops over the array
  // if the number in the array at i is less than or equal to the first number of the array the first number of the array becomes that number and the variable smallestInteger is changed to it
  // return the smallest integer