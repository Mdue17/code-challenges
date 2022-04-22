// Create a function that takes 2 integers in form of a string as an input, and outputs the sum (also as a string):

// Example: (Input1, Input2 -->Output)

// "4",  "5" --> "9"
function sumStr(a,b) {
    if ((a === "") && (b === "")) {
    return "0"}
    if (b === "") {
    return a }
    if (a === "") {
    return b}
      return (parseInt(a) + parseInt(b)).toString()
    }