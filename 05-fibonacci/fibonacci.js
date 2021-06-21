// program to generate fibonacci series up to a certain number
const maxNumber = Math.ceil(Math.random()*200);
let n1 = 0, n2 = 1, nextTerm;
function getFibonacciSequence(maxNumber){
    let fibonacciArray = []

    fibonacciArray[0]= 0;
    fibonacciArray[1]= 1;
    for(let i = 2 ; i<  maxNumber; i++){
        fibonacciArray[i] = fibonacciArray[i-1] + fibonacciArray[i -2];
    }

    return fibonacciArray;
}


console.log(getFibonacciSequence(maxNumber));
