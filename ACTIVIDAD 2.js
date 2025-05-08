// solicitud para ingresar al parque
let edad = 2
let estatura = 1.6
let discapacidad = false

if (discapacidad) {
    console.log("puedes ingresar a la zona para personas con discapacidad")

}else if ((edad >= 3 && edad <= 12) && (estatura >= 0 && estatura <= 1.4)) {
    console.log("puedes ingresar a la zona de niños")

}else if ((edad >= 13 && edad <= 17) && (estatura >= 1.4 && estatura >= 1)) {
    console.log("puedes ingresar a la zona de jóvenes")

}else if (edad >= 18 || estatura >= 1 ) {
    console.log("puedes ingresar a la zona de adultos")

}else {
    console.log("no puedes ingresar, no cumples con los requisitos")
}
