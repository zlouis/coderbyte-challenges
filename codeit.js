//Reverses a string
function FirstReverse(str) { 
   var splitString = str.split("");
   var arrayString = splitString.reverse();
   
   var joinString  = arrayString.join("");

  // code goes here  
  return joinString; 
         
}

//changes letters to their following letters and converts vowels to capitals
function LetterChanges(str) { 
var converted = str.replace(/[a-z]/gi, function(char) {
    return (char === 'z') || (char === 'Z') ? 'a' : String.fromCharCode(char.charCodeAt()+1) 
})
var doVowels = converted.replace(/a|e|i|o|u/gi, function(vowels) {
    return vowels.toUpperCase();
})
  // code goes here  
  return doVowels; 
         
}

// Adds number ex. 4+3+2+2+1
  Function addingnumber (str) {
var answer = 0;
for (var i=1; I <=num ; I ++ ) {
answer = answer + 1
}
return answer
} 

//captitalizes the first letter of each word
Function capitalize (str) {
Var splitWords = str.split(“  “);
For (var i=0 ; I < splitWords.length;i++) {
splitWords[i] = splitWords[i].substring(0,1).toUpperCase()  + splitWords[i].substring(1);
}
Return splitWords.join(“ “);
};

//wraps = = symbol around letters
Function simplesymbol (str) {
Var symbol = ‘=’ + ‘str’ + ‘=’ ;
For (var i=0;1 <str.length; i ++ ) {
  If (str[i].match(/[a-z]/i) !==’null’) {
  If (str[i-1] !==’+’ || str[1+1] !==’+’ ) {
Return false
}
