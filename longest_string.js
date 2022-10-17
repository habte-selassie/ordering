const string = ['web', 'development', 'tutorial','arizzabalaga'];




let longest = 0;

let longest_word = null;
function longestSubstring(string){

for (let i = 0; i < string.length; i++) {

   if(longest < string[i].length){
   longest = string[i].length ;
   longest_word = string[i];
       }
   }
        console.log(longest_word);
}
  
longestSubstring(string);