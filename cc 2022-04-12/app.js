//given an array of intergers,return a new array with each value doubled

// for example
//[1, 2, 3] --> [2, 3, 4]

//P: is it always going to be intergers? are we goingto be given an special characters?an empty arr ever?
//R: Return a new arr with each value double
//E: if we are given [2,3,4] should return [4,6,8]
// if we are ghiven [4,5,6] should return [8,10,12]
//p:
// make a function that takes in an array
    function doubled(arr){
        if(arr=== undefined ||  arr.length=== 0){
            console.log('array is invalid')
        }else{
        return arr.map(element=>element*2)
    }
}