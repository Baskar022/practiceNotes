//! Comparision Ops
/*
let divA = 10;
let divB = 20;
let divC = 10.0,
  divD = "10";

console.log(divA == divB);
console.log(divA == divC); //T
console.log(divA === divC); //T
console.log(divA == divD); //T
console.log(divA===divD); //F

let isADEqual = divA == divD;
console.log(isADEqual) //T

let isGreaterAB = divA > divB;
let isGreaterAD = divA > divD;
console.log(isGreaterAB) //F
console.log(isGreaterAD) //F
let isGEAD = divA >= divD;
console.log(isGEAD) //T
let SNEAB = divA !== divB;
console.log(SNEAB) //T
let SNEAD = divA !== divD;
console.log(SNEAD) //T
*/
//!String
let name = "abc",
  dept = "Comps",
  country = `India`,
  info = "using this var for finding index of for";
// console.log(dept)
// let nameL = name.length;
// console.log(nameL)
// console.log(country.length)
// let charAcc = dept[0,1];
// console.log(charAcc)
// console.log(name.toUpperCase());
// console.log(dept.toLowerCase());

let forIndex = info.indexOf('for');
// console.log(forIndex) //15
// console.log(info.slice(7,16))

// console.log(info.replace('index','position'))
// console.log(name.replace('abc','xyz'))

let tempLit = `hi
this is a multi-line
         string`;
// console.log(tempLit)

// console.log(name.concat(' ',country))
// console.log(dept+' '+country)

let greet = `Hello Mr.${name} we know 
you are from ${dept} 
and     country ${country}`
console.log(greet)