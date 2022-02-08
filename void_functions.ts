function add(n1: number, n2: number) {
    return n1 + n2;
}

function printResult(num: number): void{
    console.log('result: ' + num);
}

printResult(add(5, 12))


  

//function types
//in this way we assign combineValues it takes only the function that takes only the parametrs are number and the return value is number
let combineValues: (a: number, b: number) => number;
combineValues = add;
//combineValues = printResult;  // ERROR b/c printREsult function it hasn't 2 parametrs and not return value
console.log(combineValues(8, 4));


//callback function
function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
    const result = n1 + n2;
    cb(result);
}
addAndHandle(10, 20, (result) => {
    console.log(result)
    
})