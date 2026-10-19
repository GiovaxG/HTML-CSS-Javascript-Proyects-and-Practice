// Conditionals

// if (si)

let age = 13

if (age == 15) {
    console.log("Tienes 15 años")
}

// else (sino)

if (age == 15) {
    console.log("La edad es 15")
} else {
    console.log("La edad no es 15")
}

// else if 


if (age == 15) {
    console.log("La edad es 15")
} else if (age < 18) {
    console.log("Es menor a 18 años")
} else {
    console.log("La edad no es 15 ni es menor de edad")
}

// Ternario

const message = age ? "La edad es 15" : "La edad no es 15";

// Switch

let day = 0
let dayName

switch (day) {
    case 0:
        dayName = "Lunes"
        break;
    case 1:
        dayName = "Martes"
        break;
    case 2:
        dayName = "Miercoles"
        break;
    }
