let a = 5,
  b = 10;
// function addition() {
//     return a+b;
// }
// console.log('The sumition is: ',addition(a,b))
// function addition() {
//   let c = a + b;
//   console.log("The sumition is: ", c);
//   return c;
// }
// console.log("The sumition: ", addition());
// addition();
// addition(15,15) //15
// console.log(a); //5
// console.log(c) //error c is not defined

//! Func para & argu
// function addPara(n1,n2) {
//     console.log('The sum is:',(n1+n2))
//     alert(n1+n2)
//     return (n1,
//     n2,'hi'
//     )
// }
// addPara('you','hi')//no hi will show in console for return
// console.log(addPara(10,10)) //sum then for return it will give hi

//!fnc exp
// const addNum = function(n1,n2) {
//     console.log(n1+n2)
//     return n1+n2
// }
// console.log(addNum(5,20)) // 25 then 25
// addNum(10,30) //40

//! Arrow fnc
//* FE this
// const person = {
//     name: 'Dark',
//     show: function() {
//         console.log(this.name);
//     }
// }
// person.show() //dark
// //* AF this
// const p2={
//     name: 'Kai',
//     show: ()=> {
//         console.log(this.name)
//     }
// }
// p2.show() //blank
// console.log(p2.show()) //blank + undefined
// console.log(typeof p2.show()) //blank + undefined

//* FE return (YK SAA)
//* AF return
// const rtn= (a,b) => a+b;
// console.log(rtn(5,10)) //15

//*FE constructor
// const student= function(name) {
//     this.name=name;

// }
// const s1= new student('John');
// console.log(s1.name) //John
//*AF  constructor
// const student= (name) => {
//     this.name=name;
// }
// const s1 = new student('Brock') //student is not a constructor
// console.log(s1.name)

//* FE arguments object
// const test = function() {
//     console.log(arguments)
// }
// test(1,2,3,4) //[1,2,3,4, callee: ƒ, Symbol(Symbol.iterator): ƒ]
//* AF constructor
const test= () => {
    console.log(arguments)
}
test(1,2,3,4) //error arg is not defined