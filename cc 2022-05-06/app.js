// Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).

// If they are, change the array value to a string of that vowel.

// Return the resulting array.
function isVow(a){
    // PREP
    // Array of Num, Does each number rep. a char code?, Always given numbers?
    // R: array with string case vowels replaced
    // E: isVow([118,117,120,121,117,98,122,97,120,106,104,116,113,114,113,120,106]),[118,"u",120,121,"u",98,122,"a",120,106,104,116,113,114,113,120,106]);
    //    isVow([101,121,110,113,113,103,121,121,101,107,103]),["e",121,110,113,113,103,121,121,"e",107,103]);
    // P: 
    // store vowelCodes into separate array
    const vowelCode = [117, 97, 101, 105, 111 ];
    // map through a array
    const replacedVowelCodes = a.map((element) => {
      let currIndex = vowelCode.indexOf(element);
      // check indexOf the "vowelCode" array 
      // if not -1 store vowel char 
      if(vowelCode.indexOf(element) !== -1) {
        switch(true) {
            case element === 97:
              return "a";
            break;
            case element === 101:
              return "e";
            break;
            case element === 105:
              return "i";
            break;
            case element === 111:
              return "o";
            break;
            case element === 117:
              return "u";
            break;
        }
      }
      // else store regular sequence of nums
      return element;
    });
    return replacedVowelCodes;
  }