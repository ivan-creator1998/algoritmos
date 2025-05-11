const readline = require("readline")

const rl = readline.createInterface({input:process.stdin, output: process.stdout})

rl.question("¿cual es la temperatura?",(temperatura1) => {
rl.question("¿cual es el nivel del rio?", (nivelrio1) => {
rl.question("¿cual es la humedad?", (humedad1) => {

let temperatura = parseInt(temperatura1)
let nivelRio = parseInt(nivelrio1)
let humedad = parseInt(humedad1)


if (temperatura >= 40 || nivelRio >= 75 || humedad <= 10){
    console.log("¡ALERTA ROJA! evacuacion inmediata")
}
else if((temperatura >= 35 && temperatura <= 39) || (humedad > 10 && humedad <20) || (nivelRio <= 75 && nivelRio >= 60)){
 console.log("¡ALERTA NARANJA! riesgo de evacion")
 }
 else if((temperatura > 26 && temperatura < 35) && (humedad>=20) || (nivelRio >= 40 && nivelRio <= 60)){
 console.log("¡ALERTA AMARILLA! precaucion")
}
else{
    console.log("¡ALERTA VERDE! no hay ningun riesgo") 
}

rl.close
}) 
})
})

