const number = 12;

function factor(number){

 for (let i = 1; i < 10; i++) {

   if (number*i%number === 0) {
    let factorization = number*i;
     console.log(factorization);
   }
   
   }
}
factor(number);