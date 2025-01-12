function findVowel(string){
    let vowelArray = []
    for(i=0;i<string.length;i++){
        if(string[i] === "a" || string[i] === "e" || string[i] === "i" || string[i] === "o" || string[i] === "u"){
            vowelArray.push(string[i])
        }
    }
    if(vowelArray.length > 0){
        console.log("vowels found in the string are: ", vowelArray)
    }else{
        console.log("No any Vowels found");
    }
}
findVowel("education")