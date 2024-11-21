// let firstName = "Ezeh";
// let lastName = "Ebubechukwu";
// let emailAddress = "ebubs101@gmail.com";
// let age = 20;
// let score = 100;
// let isGraduated = false;
// let cgpa = 4.35;



// // console.log(firstName);

// let myProfile = {
//      firstName: "ebube",
//      lastName: "Ebubechukwu",
//      emailAddress:"ebus101@gmail.com",
//      age:20,
//      score:100,
//      isGraduated:false,
//      cgpa:4.35,
// };

// console.log(myProfile);

// // classwork

// const myClassWork =[
//     {
//         firstName: "ebube",
//         lastName: "Ebubechukwu",
//         emailAddress:"ebus101@gmail.com",
//         age:20,
//         school:"University of arcadian empire",
//         skinColor: "green",
//         nationality: "alien",
//         stateOfOrigin: "mars"
//       },
//      {
//         firstName: "ebube",
//         lastName: "Ebubechukwu",
//         emailAddress:"ebus101@gmail.com",
//         age:20,
//         score:100,
//         isGraduated:false,
//         cgpa:4.35,
//      }, 

// ];

// // myClassWork.skinColor = "red";
// console.log(myClassWork);
// // console.log(myClassWork.skinColor);

// // array
// const numbers = [2,6,7,8,9];
// // console.log(numbers[1]);

// //array
 
// let index = 0;

// // while (index < numbers.length) {
// //     console.log(numbers[index]);
// // //increment
// //     index++;
// // }

// // let sum = 0;
// // while (index < numbers.length) {
// //     sum += numbers[index];

// //    index++;
// // }

// // console.log(sum);


// // for loop
// for (let i= 0; i < numbers.length; i++) {
//      console.log(numbers[i]);
// }

// // for in loop 
// for (let i in numbers) {
//      console.log(numbers[i]);
// }

// // for of loop 
// for (let num of numbers) {
//      console.log(num);
// }

// // create a function that adds two numbers
// // function decleration


// function addTwoNumbers() {
//      return 50 + 30;
// }

// console.log(addTwoNumbers());
// // generic function
// // num1 and num2 are parameters
// function addNumbers(num1,num2) {
//      return num1 + num2
// }

// // 20 & 10 are the function arguements 
// let total = addNumbers(20,10);

// console.log(total);

// function addNewNumbers(num1,num2) {
//      if (typeof num1 !== "number" || typeof num2 !== "number"){
//           return "Please enter a valid number";
//      }

//      console.log("your Answer");

//      return num1 + num2;
     
// }

// let sum = addNewNumbers(60,10);

// console.log(sum);


// function addNewNumbers(nums) {
//      let sum = 0;
     
//      for (let num of nums) {
//           sum += num;
//      }
//      return sum;
// }


// // function expression 
// let addTwoNumbers = function () {
//      return 2 + 50;
// };

// let answer = addTwoNumbers();;

// console.log(answer);

function add(a,b) {
     if (typeof a === "number" || typeof b === "number") {
          console.log(a +  "is a number" );
     }

}

console.log(add(5,2))    

function myColor(code) {
     switch(code)   {
          case 1 :
               console.log("Red");
               break;

          case 2 :
               console.log("Green")
               break;
          default :  
               console.log("Unkonown code");   
     } 
        
}
console.log(myColor(2));



let user = {
     userName:"Ebube",
     email: "ebubs@gmail.com",
     age:20,

     getUserInfo : function() {
          return `my name is ${this.userName}!`;
     },
};
user.height = 200,
delete user.height;

console.log(user); 