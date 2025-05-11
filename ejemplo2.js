const readline = require ("readline")
const rl = readline.createInterface({
input: process.stdin, 
output: process.stdout
})

rl.question("que edad tienes?", (edad1) => {
rl.question("¿Cual es tu estatura?", (estatura1) =>{
rl.question("¿tienes alguna discapacidad?", (discapacidad1)=>{

    let edad = parseInt(edad1)
let estatura = parseFloat(estatura1)
let discapacidad = discapacidad1.toLocaleLowerCase() === "si" || 
                           discapacidad1.toLocaleLowerCase() === "si"
if (discapacidad) {
console.log("puedes ingresar a la zona para personas con discapacidad")

}else if ((edad >= 3 && edad <= 12) && (estatura >= 0 && estatura <= 1.4)) {
console.log("puedes ingresar a la zona de niños")

}else if ((edad >= 13 && edad <= 17) && (estatura >= 1.4 && estatura >= 1)) {
console.log("puedes ingresar a la zona de jóvenes")

}else if (edad >= 18 && estatura >= 1 ) {
console.log("puedes ingresar a la zona de adultos")

}else {
console.log("no puedes ingresar, no cumples con los requisitos")
}    
rl.close()
})
})    
})






