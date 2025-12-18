/*
//! Number methods
//*1 toFixed
let amount = 10.987;
let total = amount.toFixed(2);
console.log(typeof total)

//*2 isNaN
console.log(isNaN(amount))
console.log(isNaN(total))

//*3 ParseI/parseF
console.log(typeof parseFloat(total))

let a = '5'
console.log(a)
console.log(parseInt(a))
console.log(parseFloat(a))

//! AM Operators
//*1 Addition
let fruits = 100,
  vegis = 150;
let total = fruits + vegis;
console.log('The total amount is '+ total)
console.log('The you have to pay',total)

similar for -,*,/

//* modulas
let tStudent=100;
let pass=80;
let fail= tStudent % pass;
// console.log('The no. of fail students=', fail) 

//* Expo
let strength = 2**3;
// console.log(strength) 

//* Inc & Dec
let savings = 1000;
savings++;
console.log(savings++)
let afterSalary = savings + 500;
console.log("Savings after salary:",afterSalary)
console.log("Savings before salary:",savings-500)
*/
//! answer
// 1001
//  Savings after salary: 1502
//  Savings before salary: 502

//! Case Study
let MonthlyIncome = 3000;
let mExpenses = {
  Rent: 1200,
  Grocries: 600,
  Utilities: 300,
  Entertainment: 200,
};
let mSpent = Object.values(mExpenses).reduce((sum, value) => sum + value, 0);
console.log("Total monthly spent is:",'$',mSpent);
let mSaved = MonthlyIncome - mSpent;
console.log("Monthly Saving is:", '$',mSaved);
let spentPercentage = (mSpent / MonthlyIncome) * 100;
console.log("Spent percentage is:", spentPercentage+'%');
