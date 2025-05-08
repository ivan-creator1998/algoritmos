
let temperatura = 62
let nivelRio = 20
let humedad = 20

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


    
