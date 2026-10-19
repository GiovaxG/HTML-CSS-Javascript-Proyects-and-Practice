// Operadores

let a = 5
let b = 10

console.log(a + b) // Suma
console.log(a - b) // Resta
console.log(a * b) // Multiplicacion
console.log(a / b) // Division

console.log(a % b) // Modulo
console.log(a ** b) // Potencia

a++ // Incremento
console.log(a)

b-- // Decremento
console.log(b)


// Operadores de asignacion

let myVar = 2 // "=" Igual
console.log(myVar)
myVar += 2 // "+=" Suma el numero a si mismo
console.log(myVar)

myVar -= 2
myVar *= 2
myVar /= 2
myVar %= 2
myVar **= 2

// Operadores de Comparacion

console.log(a > b)
console.log(a < b)
console.log(a <= b)
console.log(a >= b)
console.log(a == b)
console.log(a == a)
console.log(a == 6) // Igualdad por valor
console.log(a == "6") // Igualdad por valor
console.log(a === 6) // Igualdad por tipo y valor
console.log(a === "6")
console.log(a != 6)
console.log(a !== "6")

// Operadores Logicos

// && (and)

console.log(5>10 && 10<2)
console.log(15>10 && 10<12)

// || (or)

console.log(5>10 || 10<2)
console.log(5>10 || 10<12)

// ! (not)

console.log(!(5>10 && 10<2))
console.log(!(5>10 || 10<12))

// Operadores Terrarios

const isSunny = false

isSunny ? console.log("Esta soleado") : console.log("No esta soleado")