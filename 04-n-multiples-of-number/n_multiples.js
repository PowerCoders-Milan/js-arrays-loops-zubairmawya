// function declaration
const nMultiplesOf = (number, limit) => {

    const multiples = [];
    let i = 1;
    while( i <= limit) {
        
        multiples.push(number * i);
        i++
        
    }
    return multiples

}
console.log(nMultiplesOf(2, 10));