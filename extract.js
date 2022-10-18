const string = "thequickbrownfoxjumpsoverthelazydog"

 const emptyarray = [];

const arraystring = string.split("");

// const arraystrin = arraystrin.sort();
console.log(arraystring);

function extractor(arraystring){
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
 
extractor(arraystring);




