// Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.

// Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't

function loveFunc(flower1, flower2){
    //PREP
    //P:NUMBER OF PETALS...for each flower
    //R:true if one of the flower has even amd other has odd number...false if both are even or both are odd
    //E:(1,4) returns true....(2, 4) returns false
    //P:use conditionals, use % to determine if odd or even
    
    if ( flower1 % 2 === 0 && flower2 % 2 != 0){
        return true
    }else if ( flower2 % 2 === 0 && flower1 % 2 != 0) {
        return true
    }else{
        return false
    }

}