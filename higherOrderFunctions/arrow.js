////////// PROBLEM 1 //////////

/*
  Which syntax was used to create the function below?
  Uncomment the answer underneath.
*/

const exclaim = function(str) {
  return str.toUpperCase() + '!!!'
}


// expression



////////// PROBLEM 2 //////////

/*
  Which syntax was used to create the function below?
  Uncomment the answer underneath.
*/

const exclaimTwo = str => {
  return str.toUpperCase() + '!!!'
}

// arrow


/*
  Rewrite exclaimTwo to be a single line.
  Call your new function exclaimThree

  Brownie points if you use a template string
*/

// const exclaimThree = str => { return str.toUpperCase() + '!!!'}
const exclaimThree = str => { return `${str.toUpperCase()}` + '!!!'}

const name = exclaimThree('christian')
console.log(name)




////////// PROBLEM 3 //////////

/*
  Which syntax was used to create the function below?
  Uncomment the answer underneath.
*/

function exclaimFour(str) {
  return str.toUpperCase() + '!!!'
}

// declaration




////////// PROBLEM 4 //////////

/*
    Write an arrow function called 'jsNinja' that returns the string: 'I am a JavaScript ninja!'
*/

//CODE HERE

const jsNinja = string => { return 'I am a JavaScript ninja!'}

let log = jsNinja()
console.log(log)



////////// PROBLEM 5 //////////

/*
    Write an arrow function called 'compareNums' that takes in 2 parameters, 
    which will be numbers. 
    The function should return the bigger number. 
    If the numbers are the same, just return the number.

    Brownie points if you use a ternary statement (only spend significant time on this if you have wiggle room)
*/

//CODE HERE

// const compareNums = (num1, num2) => {
//   if (num1 > num2){
//     return num1
//   } else if(num1 === num2) {
//     return num1
//   } else {
//     return num2
//   }
// }
// let compare = compareNums(4, 12)
// let compare2 = compareNums(4, 4)
// let compare3 = compareNums(6, 2)
// console.log(compare)
// console.log(compare2)
// console.log(compare3)

const compareNums2 = (num1, num2) => {
  return (num1 >= num2 ? num1 : num2)
}
let compare = compareNums2(5, 7)
console.log(compare)

const compareNums3 = (num1, num2) => Math.max(num1, num2)

let mathObject = compareNums3(5, 10)
console.log(mathObject)

  
////////// PROBLEM 6 //////////

/*
    Write a one line arrow function called 'bestMovie' that takes in one parameter,
    which will be a string of a movie title. 
    The function should return the string: 'MOVEIEPARAM is the best movie ever!'. 
    For example, if we passed in 'Sharknado', 
    we would expect the function to return 'Sharknado is the best movie ever!'

    Brownie points for using a template string (again don't spend too much time figuring
    that out)
*/

//CODE HERE

const bestMovie = string => {
  return `${string} ` + 'is the best movie ever!'
}

const sharknado = bestMovie('Sharknado')
const lakePlacid = bestMovie('Lake Placid')
const tremors = bestMovie('Tremors')
console.log(sharknado)
console.log(lakePlacid)
console.log(tremors)


