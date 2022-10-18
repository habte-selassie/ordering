let amount = 46;
let coins = [25,10,5,2,1,0.5];

function amountConversion(amount,coins,value){
    
switch (coins[0]) {
    case value:0
    amount = amount*4
    console.log(amount); 
        break;
}
switch (coins[1]) {
    case value:1
        amount = amount*10
        console.log(amount);
        break;  
}
switch (coins[2]) {
    case value:2
        amount = amount*20
        console.log(amount);
        break;
}
switch (coins[3]) {
    case value:3
        amount = amount*50
        console.log(amount);
        break;   
}
switch (coins[4]) {
    case value:4
    amount = amount*100
    console.log(amount);
        break;
}
switch (coins[5]) {
    case value:5
    amount = amount*200
    console.log(amount);

       default:
         break;
  }
     
}
amountConversion(amount,coins,25)






