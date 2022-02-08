// ////normal object
// ////this is the best method
// // const person = {
// //     name:'John',
// //     age:30
// // }
// // console.log(person.name)

////object in TS we can write in this way
////string,number,Array,object,Tuple
// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number, string];  //tuple
// } = {
//   name: "John",
//   age: 30,
//     hobbies: ["Sports", "cooking"],
//   role:[2,'author'] // Tuplealways in array only one number and one string  c

// };

// person.role.push('admin');
// // person.role[1] = 10; it doesn't work because on the top we declare role with Tuple type

// let favoriteActivities: string[];
// favoriteActivities = ['Sports', 'reading']
// let favoriteActivity: any[];
// favoriteActivity = ['Sports', 8]

// console.log(person.role);

// for (const hobby of person.hobbies) {
//     console.log(hobby.toUpperCase());
//     // console.log(hobby.map());  //ERROR b/c this hobby is a string not an Array
// }


//Enum
////this is normal JS
// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;
//// instead of this Enum is better that is
enum Role { ADMIN='Admin', READ_ONLY=100, AUTHOR="AUTHOR" };
const person= {
//   name: string;
//   age: number;
//   hobbies: string[];
//   // role: [number, string]; //tuple
// } = {
  name: "John",
  age: 30,
  hobbies: ["Sports", "cooking"],
  // role: [2, "author"], // Tuplealways in array only one number and one string  c
role:Role.ADMIN
};

if (person.role === Role.ADMIN) {
  console.log("is Admin")
}
