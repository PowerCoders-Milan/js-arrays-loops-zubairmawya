// check if a number is prime or not
const isPrime = number => {
  let PrimeArrySize = getPrimes(number); 
  

 console.log(number + " =>    " + PrimeArrySize);
  if (PrimeArrySize.length <= 2) {
      return true
    } else {
      return false
      
    }
  }

const getPrimes = amount => {

  let primeArray = []
  for(let i = 1; i <= amount; i++){
    if (amount %  i=== 0 ){

      primeArray.push(i)
    }
  }

  return primeArray;
    
}
console.log(isPrime(2));
console.log(isPrime(9));
console.log(isPrime(11));
console.log(isPrime(100));