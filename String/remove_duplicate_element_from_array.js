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
function removeDuplicateElement_by_using_Set () {
    let array = ["abhishek", "harish", "abhishek", "jitendra", "harish"]
    let uniqueArray = [...new Set(array)];
    console.log("uniqueArray is: ", uniqueArray)
}

removeDuplicateElement_by_using_Set();

//explanation

// Input Array:

// The array contains some duplicate elements: ["abhishek", "harish", "abhishek", "jitendra", "harish"].
// Set Object:

// A Set is a built-in JavaScript object that stores only unique values. It automatically removes duplicate entries when elements are added to it.
// Example: new Set(["a", "b", "a"]) creates a Set containing {"a", "b"} (no duplicates).
// new Set(array):

// Converts the array into a Set, removing all duplicates.
// In this case:
// javascript
// Copy code
// new Set(["abhishek", "harish", "abhishek", "jitendra", "harish"]);
// Produces a Set containing: {"abhishek", "harish", "jitendra"}.
// Spread Operator (...):

// The spread operator (...) is used to expand an iterable (like a Set) into individual elements.
// Example: ...[1, 2, 3] becomes 1, 2, 3.
// When applied to the Set, it converts its elements back into an array.
// javascript
// Copy code
// [...new Set(array)];
// Results in the array: ["abhishek", "harish", "jitendra"].
// Assigning to uniqueArray:

// The resulting array is stored in the variable uniqueArray.
// Output:

// Finally, console.log(uniqueArray) displays: ["abhishek", "harish", "jitendra"].
// Why Use This Method?
// Simplicity: This is the shortest and most efficient way to remove duplicates from an array.
// Readability: The code is clear and easy to understand with minimal syntax.
// Performance: Creating a Set and using the spread operator is faster than alternatives like using loops or the filter method for larger datasets.
// Summary:
// The code removes duplicates from the array by converting it to a Set (which ensures uniqueness) and then back to an array using the spread operator.
// Result: ["abhishek", "harish", "jitendra"].