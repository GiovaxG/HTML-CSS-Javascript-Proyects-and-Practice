// 1. Imprime por consola tu nombre si una variable toma su valor

let name = "Giovanni"
if (name == "Giovanni") {
    console.log("Giovanni")
}

// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos

let user = "Giova"    
let password = "1234"
if (user == "Giova" & password == "1234") {
    console.log("Cuenta Accedida")
} else {
    console.log("Usuario o Contraseña incorrecto")
}

// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje

let number = -15

if (number > 0) {
    console.log("Es positivo")
} else if (number < 0 ) {
    console.log("Es negativo")
} else {
    console.log("Es cero")
}

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan

let age = 6

if (age>18) {
    console.log("Puede votar")
} else {
    console.log("Sos menor de edad")
    let ageless = 18 - age
    console.log("Te faltan", ageless ,"Años")
}

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad 

const adulto_menor = age > 18 ? "Adulto" : "Menor"

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"

let Month = 3

if ([12, 1, 2].includes(Month)) {
    console.log("Es Verano")
} else if ([3, 4, 5].includes(Month)) {
    console.log("Es Otoño")
} else if ([6, 7, 8].includes(Month)) {
    console.log("Es Invierno")
} else if ([9, 10, 11].includes(Month)) {
    console.log("Es Primavera")
} else {
    console.log("Mes inválido")
}

// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior

if (Month == 1) {
    console.log("31");
} else if (Month == 2) {
    console.log("28");
} else if (Month == 3) {
    console.log("31");
} else if (Month == 4) {
    console.log("30");
} else if (Month == 5) {
    console.log("31");
} else if (Month == 6) {
    console.log("30");
} else if (Month == 7) {
    console.log("31");
} else if (Month == 8) {
    console.log("31");
} else if (Month == 9) {
    console.log("30");
} else if (Month == 10) {
    console.log("31");
} else if (Month == 11) {
    console.log("30");
} else if (Month == 12) {
    console.log("31");
}

// switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma

let language

switch (language) {
    case english:
        console.log("Hi, Iam Giovanni")
        break;
    case spanish:
        console.log("Hola, soy Giovanni")
        break;
    case German:
        console.log("Hallo, ich bin Giovanni")
        break;
}

// 9. Usa un switch para hacer de nuevo el ejercicio 6

switch (Month) {
    case [12, 1, 2].includes(Month):
        console.log("Es Verano")
        break;
    case [3, 4, 5].includes(Month):
        console.log("Es Otoño")
        break;
    case [6, 7, 8].includes(Month):
        console.log("Es Invierno")
        break;
    case [9, 10, 11].includes(Month):
        console.log("Es Primavera")
        break;
}

// 10. Usa un switch para hacer de nuevo el ejercicio 7

