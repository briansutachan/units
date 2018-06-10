// function outer() {
//     let counter = 0;
//     function incrementCounter() {
//         counter++;
//     }
//     incrementCounter();
// }

// console.log(outer());

function outer() {
    let counter = 0;
    function incrementCounter(){
        counter ++;
    }

    return incrementCounter;
}

var myNewFunction = outer();
console.log(myNewFunction.toString());

console.log(myNewFunction());
console.log(myNewFunction());
console.log(myNewFunction());
console.log(myNewFunction());

