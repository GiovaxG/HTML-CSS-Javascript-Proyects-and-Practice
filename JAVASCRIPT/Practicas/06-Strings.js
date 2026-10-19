// Strings

// Suma

let myname = "Giovanni"
let Greetings = "Hola, Soy " + myname + "!"
console.log(Greetings)  

// Longitud

console.log(Greetings.length)

// Caracter

console.log(Greetings[0])
console.log(Greetings[11])

// Funciones Comunes

console.log(Greetings.toUpperCase()) 
console.log(Greetings.toLowerCase()) 
console.log(Greetings.indexOf("Giovanni")) 
console.log(Greetings.includes(myname)) 
console.log(Greetings.slice(0, 10)) 
console.log(Greetings.replace(myname, "Enzo")) 

// Templates literals

let myMessage = `Hola soy
Javascript`

console.log(myMessage)

console.log(`Hola, ${myname}!`)
