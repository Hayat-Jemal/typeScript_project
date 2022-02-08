//union type
// function combine(input1: number | string, input2: number | string) {
//     let result;
//     if (typeof input1 === 'number' && typeof input2 === 'number') {
//         result = input1 + input2;
//     } else {
//         result = input1.toString() + input2.toString();

//     }
//         return result
//     }
// const combinedAges = combine(30, 40);
// console.log(combinedAges);

// const combinedNames = combine('Max', 'Anna');
// console.log(combinedNames)


//literal types
// function combine(
//     input1: number | string,
//     input2: number | string,
//     resultConversion: 'as-number' | 'as-text'  //this is literal types
// ) {
//   let result;
//   if (typeof input1 === "number" && typeof input2 === "number" || resultConversion==='as-number') {
//     result = +input1 + +input2;
//   } else {
//     result = input1.toString() + input2.toString();
//   }
//   return result;
// }
// const combinedAges = combine(30, 40, "as-number");
// console.log(combinedAges);

// const combinedStringAges = combine('30', '40', "as-number");
// console.log(combinedStringAges);


// const combinedNames = combine("Max", "Anna", 'as-text');
// console.log(combinedNames);



//aliases
type Combinable = number | string;
type ConversionDescriptor = 'as-number' | 'as-text';
function combine(
  input1: Combinable,
  input2: Combinable,
  resultConversion: ConversionDescriptor //this is literal types
) {
  let result;
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultConversion === "as-number"
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}
const combinedAges = combine(30, 40, "as-number");
console.log(combinedAges);

const combinedStringAges = combine("30", "40", "as-number");
console.log(combinedStringAges);

const combinedNames = combine("Max", "Anna", "as-text");
console.log(combinedNames);





