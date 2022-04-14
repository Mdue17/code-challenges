// Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.


function shortcut(string){        //takes in a strind
    return string.replace(/[aeiou]/gi,'')    //this will retturn a new string where vowels in og strings are replaced with an empty string
}
shortcut(examples)
// Examples
// "hello"     -->  "hll"
// "codewars"  -->  "cdwrs"
// "goodbye"   -->  "gdby"
// "HELLO"     -->  "HELLO


/*
 * Function to check whether the given number is Even or Odd.
 * @params = integer number
 * @return = returns "Even" if the number is even "Odd" otherwise.
 */



/*
 * Function to check whether the given number is Even or Odd.
 * @params = integer number
 * @return = returns "Even" if the number is even "Odd" otherwise.
 */
function even_or_odd(number) {
    return ( (number % 2) == 0 ) ? "Even" : "Odd";
  }
function even_or_odd(number) {
    return ( (number % 2) == 0 ) ? "Even" : "Odd";
  }
