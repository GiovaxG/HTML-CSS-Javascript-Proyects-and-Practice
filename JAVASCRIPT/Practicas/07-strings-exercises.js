// 1. Concatena dos cadenas de texto
let card = "Ataque y " + "Defensa"
// 2. Muestra la longitud de una cadena de texto
console.log(card.length)
// 3. Muestra el primer y último carácter de un string
console.log(card[0])
console.log(card[15])
// 4. Convierte a mayúsculas y minúsculas un string
console.log(card.toUpperCase())
console.log(card.toLowerCase())
// 5. Crea una cadena de texto en varias líneas
let p = ` Bruuu
uuuuu
uuuuu
`
// 6. Interpola el valor de una variable en un string

console.log(`Su carta tiene ${card}!`)

// 7. Reemplaza todos los espacios en blanco de un string por guiones

console.log(card.replace(" ","-"))

// 8. Comprueba si una cadena de texto contiene una palabra concreta

console.log(card.includes("Ataque"))

// 9. Comprueba si dos strings son iguales

console.log( p == card)

// 10. Comprueba si dos strings tienen la misma longitud

console.log(card.length == p.length)