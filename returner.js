// const array = [1,99,1,2,3,4,5,6,7,8,9,10];
// let largest=9;
// let largest_number = null;
// function SecondGreatest(array){
//     for (let i = 0; i < array.length; i++) {

//       if(largest < array[i]){
//        largest = array[i];
//        largest_number = array[i]
//        console.log(largest_number);
//     }

//      else if(largest > array[i]){
//             console.log(largest_number);
//        }

//        else if(largest === array[i]){
//         console.log('they are equal brother');
//        }
   
//     }
// }
// SecondGreatest(array);

const array1 = [1,99,1,2,4,6,8,9,10,-1];
let lowest1 = 0;
let lowest_number1="";

function secondLowest(array1) {
for (let i = 0; i < array1.length; i++) {

    
    if ( array1[i] < lowest1 ) {

        lowest1 = array1[i];
       lowest_number1 = array1[i]
       console.log(lowest_number1); 

    }
    else if( array1[i]> lowest1 ){
       
        console.log(lowest_number1);
    }
    else if(array1[i] === lowest1 ){
        
        console.log(lowest_number1);
    }
    else{
        
        console.log('null');
       
    }
}
       
}
secondLowest(array1)