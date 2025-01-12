function checkPalindrome (string) {
    let temp="";
    for(i=string.length-1;i>=0;i--){
        temp +=string[i]
    }
    if(temp === string){
        console.log("Yes, ",string," is a Palindrome String");
    }else{
        console.log("No, ", string, " is not a Palindrome String");
    }
}

checkPalindrome("abhishek");