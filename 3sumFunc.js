function func(a) {
 
  return function(b) {
        return a + b
  }
 
}

let sumFunction = func(911);
let sum = sumFunction(88);
console.log(sum);
