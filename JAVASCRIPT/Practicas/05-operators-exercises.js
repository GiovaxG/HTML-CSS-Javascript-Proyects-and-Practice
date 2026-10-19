

// 1. Crea una variable para cada operación aritmética

let a = 5*5
let b = 10+1
let c = 5-4
let d = 5/50

// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas

let isA = a += b
let isB = b -= d
let isC = c **= a
let isD = d %= c

// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación

console.log(10>5)
console.log(50 == 50)
console.log(35 >= 25)
console.log(100 >= 99)
console.log( 1000 == 1000)

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación

console.log(10 < 5)
console.log(50 != 50)
console.log(35 <= 25)
console.log(100 <= 99)
console.log( 1000 !== 1000)

// 5. Utiliza el operador lógico and

console.log(5>2 && 10>3)

// 6. Utiliza el operador lógico or

console.log(5>15 || 10>5)

// 7. Combina ambos operadores lógicos

console.log(5>2 && 10>3 || 100 < 99)

// 8. Añade alguna negación

console.log(!(5>2 && 10>3 || 100 < 99))

// 9. Utiliza el operador ternario

const isSunny = false

isSunny ? console.log("Esta soleado") : console.log("No esta soleado")

// 10. Combina operadores aritméticos, de comparáción y lógicas

console.log(!(5>2*5 && 10>3 || 100 < 100-1))