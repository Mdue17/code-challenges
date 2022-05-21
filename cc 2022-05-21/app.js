//Your task is to sum the differences between consecutive pairs in the array in descending order.

function sumOfDifferences(arr) {
    //prep
    //p:an array of numbes,,may be empty at times
    //r:return the sum of the differences between the max and min values
    //e:sumOfDifferences([2, 1, 10])
    //Returns 9
    //Descending order: [10, 2, 1]
    //Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9
    //p:use sort to arrange in order, itterate through the array subtracting using indexes and add

    let sorted = arr.sort((a,b)=> b - a)
    let sum = 0;
    for (let i = 0; i < sorted.length - 1; i++){
        sum += (arr[i] - arr[i + 1]);
    }
    return sum;
}

