// Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

    function between (a, b){
        //prep
        //p: two integers a , b,...a < b, 
        //r:an array of all intergers between the input...including inputs
        //e: a=1,b=4 --> [1,2,3,4]
        //p:use map for new array..use conditionals 

        //declare a result variable
            let r = []
        //iterate for a length (a to b inclusive) and push iterator value to result
        for (let i = a; i <= b; i++) {
            r.push(i);
        }
   return r
}
