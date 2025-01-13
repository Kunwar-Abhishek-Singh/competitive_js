function removeDuplicateElement_by_using_indexOf (){
    let array = ["abhishek", "harish", "abhishek", "jitendra", "harish"]
let array2 = 
    array.filter((data, index)=>(array.indexOf(data) === index));
        // console.log(array.indexOf("jitendra"))
        console.log(array2)
        
}

removeDuplicateElement_by_using_indexOf();

//explanation

// First Element ("abhishek", index = 0):

// array.indexOf("abhishek") returns 0 (first occurrence index).
// index is also 0.
// Condition 0 === 0 is true. "abhishek" is included.
// Second Element ("harish", index = 1):

// array.indexOf("harish") returns 1 (first occurrence index).
// index is 1.
// Condition 1 === 1 is true. "harish" is included.
// Third Element ("abhishek", index = 2):

// array.indexOf("abhishek") returns 0 (first occurrence index).
// index is 2.
// Condition 0 === 2 is false. "abhishek" is excluded.
// Fourth Element ("jitendra", index = 3):

// array.indexOf("jitendra") returns 3 (first occurrence index).
// index is 3.
// Condition 3 === 3 is true. "jitendra" is included.
// Fifth Element ("harish", index = 4):

// array.indexOf("harish") returns 1 (first occurrence index).
// index is 4.
// Condition 1 === 4 is false. "harish" is excluded.
// Output:

// After filtering, the new array is: ["abhishek", "harish", "jitendra"].




//another method
