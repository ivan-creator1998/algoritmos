// ac

let notaFinal = 5
let participa_foro = false
let entrega_tarea = false
let cumpleNota = notaFinal >= 6

if (cumpleNota && participa_foro && entrega_tarea){
    console.log("¡Excelente!, certificado otorgado")
}else{
    console.log("Certificado no otorgado, recomendaciones")
    if(!cumpleNota)
    {
    console.log("- mejora tu nota final")
    }
    if(!participa_foro)
    {
    console.log("- Participa un poco mas en los foros")
    }
    if(!entrega_tarea){
    console.log("- entrega todos los trabajos")
    }
}