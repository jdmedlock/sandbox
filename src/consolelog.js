// console.assert 
const errorMsg = "the # is not even"
let number = 3
//console.assert(number % 2 === 0, "%o", { number, errorMsg })

// console.count
function greet(user) {
  //console.count(user)
  return `hi ${user}`
}
  
greet(`Andres`)
greet(`Dinesh`)
greet('Andres')
//console.count('Andres')

// console.debug
const value = 'world'
console.debug('Hello, %s.', value)
