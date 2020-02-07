/*function foo() {
    function bar() {
        setTimeout( ()=>console.log('curly'),1000)
    }

    console.log('larry')
    return bar
}


let x = foo()
x()
console.log('moe')


Que se imprime ?  larry moe curly


function makeAdder(x){
       return  function (y) {
            return x + y 
        }

}


var add5 = makeAdder(5)
var add8= makeAdder(8)
var add20= makeAdder(20)



console.log(makeAdder(10)  )
console.log(add8(6) === 14)
console.log(add20(6) === 26 )


function f(x) {
  x *=2
  return function(y){
      y *= x
      return function(z){
          return z*y
      }
  }
}


let g = f(3)(4)(5)

console.log(g)


function cumulative (list) {
    let output= []
    for (let i = 0 ; i < list.length ; i++ ){
        if (i == 0){
            output.push(list[i])
        }else{
            output.push(list[i] + output[i - 1 ])
        }

 }
return output
}
// 1 ,3,6,10,15

console.log(cumulative([1,2,3,4,5]))


const f  = n =>     n <= 1 ? 1 : n * f(n - 1)
 

console.log(f(4))  // cuanto seria    


let event = {
    name: "Hot Dog and Burger Sunday",
    financials: {
        baseCost: "$19.99",
        discountsAvailable: false,
        maxCost: "$29.99"
    },
    subscribers: [
        // lots of subscribers here
    ]
}
let eventPrice;
const assignEvent = ({ financials: { baseCost: price } }) => {
    console.log(price);
    eventPrice = price;
}
assignEvent(event);
console.log(eventPrice);
//eventPrice = "$19.99"
 

 function f(x) {
     console.log(x)
     
 }

 f ('foo')
 setTimeout(() => {f("bar")},0)
 f('baz')
*/

let sayHi = - => console.log("hi");

sayHi()
