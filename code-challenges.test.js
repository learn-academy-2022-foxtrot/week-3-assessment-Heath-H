// ASSESSMENT 3: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

// a) Create a test with expect statements for each of the variables provided.


// const fibLength1 = 6
// // Expected output: [1, 1, 2, 3, 5, 8]

// const fibLength2 = 10
// // Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]


// describe ("fibSequence"), () => {
//       //it method describes what function does
//       it("takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence", () => {
//           const fibLength1 = 6
//           //Expected output: [1, 1, 2, 3, 5, 8]
//           const fibLength2 = 10
//           //Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
          
          
//       //expect calls on function and compares result to determined expected output using .toEqual
//       expect(fibSequence(fibLength1)).toEqual([1, 1, 2, 3, 5, 8])
//       expect(fibSequence(fibLength2)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
//       }
//       )}
      
     
//       console.log(fibSequence(fibLength1)).toEqual([1, 1, 2, 3, 5, 8])

     // ReferenceError: describe is not defined




// b) Create the function that makes the test pass.

//PsudoCode:
// create a function (fibSequence)
// that takes in a input ()
// if input is greater than 2 (if i >2)
// use a for loop?

// add numbers together and push to new 
// repeat (index) times
//number must be greater than 2 though

// const fibSequence = () => {
//   const seqArray = [];

//   let num1 = 1;
//   let num2 = 1;

//   for (let i = 0; i < num; i++) {

//     let numAdd = num1 + num2;


//     seqArray.push(num1);


//     num1 = num2;
//     num2 = numAdd;
//   }

//   return seqArray;

// };









// --------------------2) Create a function that takes in an object and returns an array of the numbers sorted from least to greatest.
// Hint: Check out this resource: Object.values() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/values

// a) Create a test with expect statements for each of the variables provided.

describe("studyTime", () => {
  it("Create a function that takes in an object and returns an array of the numbers sorted from least to greatest.", () => {
    const studyMinutesWeek1 = {
      sunday: 90,
      monday: 30,
      tuesday: 20,
      wednesday: 15,
      thursday: 30,
      friday: 15,
      saturday: 60,
    };
    expect(studyTime(studyMinutesWeek1)).toEqual([15, 15, 20, 30, 30, 60, 90]);
    const studyMinutesWeek2 = {
      sunday: 100,
      monday: 10,
      tuesday: 45,
      wednesday: 60,
      thursday: 20,
      friday: 15,
      saturday: 65,
    };
    expect(studyTime(studyMinutesWeek2)).toEqual([10, 15, 20, 45, 60, 65, 100]);
  });
});





// // b) Create the function that makes the test pass.

// Psuedocode:
// need to declare the function (studyTime)
// iterate over the funtion to get the values: objects.values.
// .sort() method to sort through numbers least to greatest, 


const studyTime = (obj) => {
  let newArray = [];

  for (let val in obj) {
    newArray.push(obj[val]);
    newArray = sortedArr.sort((a, b) => a - b);
  }
  return newArray;

};






// // --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// // a) Create a test with expect statements for each of the variables provided.

describe("accuArr", () => {
  it("takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.", () => {
    const accountTransactions1 = [100, -17, -23, -9];
    expect(accuSum(accountTransactions1)).toEqual([100, 83, 60, 51]);
    const accountTransactions2 = [250, -89, 100, -96];
    expect(accuSum(accountTransactions2)).toEqual([250, 161, 261, 165]);
    const accountTransactions3 = [];
    expect(accuSum(accountTransactions3)).toEqual([]);
  });
});




// const accountTransactions1 = [100, -17, -23, -9]
// // Expected output: [100, 83, 60, 51]

// const accountTransactions2 = [250, -89, 100, -96]
// // Expected output: [250, 161, 261, 165]

// const accountTransactions3 = []
// // Expected output: []

// // b) Create the function that makes the test pass.

// create function accuArr
// create if statement if array is empty to return empty array using arr.length equal to 0 ( === 0) to return [], and an else for the rest of 
// then create new let condition with an array holding first value at[0]
// create for loop to iterate after the first value 
// sum the value of newArray
// return the newArray

const accuArr= (arr) => {
  if (arr.length === 0) {
    return []
  } else {
  let newArray = [arr[0]];
  for (let i = 1; i < arr.length; i++) {
    newArray[i] = newArray[i - 1] + arr[i];
  }
  return newArray;
}}

