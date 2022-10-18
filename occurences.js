const string = 'abebe'
const arraystring = string.split("")
let count = 0;
const emptyarray = [];
console.log(arraystring);
function occurenceCount(arraystring){
for (let i = 0; i < arraystring.length; i++) {
   
    for (let j = i+1; j <arraystring.length; j++){
        
        if (arraystring[i] === arraystring[j]) {
            
            console.log(arraystring[j]);
            emptyarray.push(arraystring[j])
                console.log(emptyarray);
           break;
               
        }
       
       }
    }
 }
 
occurenceCount(arraystring);


console.log(arraystring.join('*'));

