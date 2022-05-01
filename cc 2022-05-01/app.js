//create a function which answers "Are you playing banjo?". If your name starts with the letter "R" or lowercase "r. Are you playing banjo!"

//this function takes a name as its only argument, and returns one of the following strings
// name + "plays banjo" 
//name + "does not play banjo"


function areYouPlayingBanjo(name){
    //PREP
    //p: always a valid string, alpha chars, no empty strings;
    //r: a str representing if plays banjo or not;
    //e:"Adam", "Adam does not play banjo";
    //  "Raul", "Raul plays banjo";
    //p: call on the includes methods on name and pass in r as a value
    //p use || operator to check for both cases
    //p use conditionals to return str name plays banjo

    console.log('this is a param',name)
    console.log('this is ',name[0])
    let firstLetter = name[0].toLowerCase

    return firstLetter === "r" ? `${name} plays banjo` : `${name} does not play banjo`
}