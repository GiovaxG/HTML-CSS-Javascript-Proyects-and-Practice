/*
Clase 28 - Ejercicios: Estructuras
Vídeo: https://youtu.be/1glVfFxj8a4?t=11451
*/

// 1. Crea un array que almacene cinco animales

let animals = new Array()
animals = ["Perro", "Gato", "Caballo", "Vaca", "Burro"]


// 2. Añade dos más. Uno al principio y otro al final

animals.push("Mula")
animals.unshift("Elefante")
console.log(animals)

// 3. Elimina el que se encuentra en tercera posición

animals.splice(2, 1)
console.log(animals)

// 4. Crea un set que almacene cinco libros

let books = new Set(["El Quijote", "Cien años de soledad", "La sombra del viento", "1984", "El principito"])

// 5. Añade dos más. Uno de ellos repetido

books.add("1914")
console.log(books)

// 6. Elimina uno concreto a tu elección

books.delete("Cien años de soledad")
console.log(books)

// 7. Crea un mapa que asocie el número del mes a su nombre

let NumberMonth = new Map([
    [1, "Enero"],
    [2, "Febrero"],
    [3, "Marzo"],
    [4, "Abril"],
    [5, "Mayo"],
    [6, "Junio"],
    [7, "Julio"],
    [8, "Agosto"],
    [9, "Septiembre"],
    [10, "Octubre"],
    [11, "Noviembre"],
    [12, "Diciembre"]
])
console.log(NumberMonth)

// 8. Comprueba si el mes número 5 existe en el map e imprime su valor

if (NumberMonth.has(5)) {
    console.log(NumberMonth.get(5))
}
// 9. Añade al mapa una clave con un array que almacene los meses de verano

let ListVerano = new Array(12,1,2,3)
console.log(Verano)

NumberMonth.set("Verano", ListVerano)
console.log(NumberMonth)

// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map

let myArray = new Array()
let mySet = new Set(myArray)