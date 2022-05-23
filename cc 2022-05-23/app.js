// Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, saying each of the following phrases each time a petal was torn:

// I love you
// a little
// a lot
// passionately
// madly
// not at all
// When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.

// Your goal in this kata is to determine which phrase the girls would say for a flower of a given number of petals, where nb_petals > 0.

function howMuchILoveYou (n){
    //prep
    //p:number of petals passed in as a whole num
    //r: a phrase the girl would say
    //e: howMuchIloveYou (7) --> 'i love you"
    //e: howmuchiloveyou (3)--> "not at all"
    //p: condtionals stating each num for a phrase
    let nb_petals = n % 6
    if (nb_petals === 2){
         return "i love you"
    }else if(nb_petals === 3){
        return "a little"
    }else if(nb_petals === 4){
        return "a lot"
    }else if(nb_petals === 5){
        return "passionately"
    }else if(nb_petals === 6){
        return "madly"
    }else{
        return "not at all"
    }
}