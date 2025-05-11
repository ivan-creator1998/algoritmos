const readline = require('readline');

const rl = readline.createInterface({
input: process.stdin, output: process.stdout
})

function preguntarPromedio(callback) {

  rl.question('¿Cuál es tu promedio? ', (promedio1) => {
const promedio = parseFloat(promedio1);

if (isNaN(promedio) || promedio < 0 || promedio > 10) {
console.log("Error: El promedio debe ser un número entre 0 y 10.");

return preguntarPromedio(callback);
}

callback(promedio);
});
}


function preguntarMaterias(callback) {
rl.question('¿Cuántas materias aprobaste? ', (materias1) => {
const materias = parseInt(materias1);
if (isNaN(materias) || materias < 0 || materias > 10) {
console.log("Error: Las materias aprobadas deben ser un número entre 0 y 10.")
return preguntarMaterias(callback);
}
callback(materias);
})
}

// Función para preguntar disciplina y validar
function preguntarDisciplina(callback) {
  rl.question('¿Tienes buena disciplina? (sí/no) ', (disciplina1) => {
    const disciplina = disciplina1.trim().toLowerCase();
    if (disciplina !== "sí" && disciplina !== "si" && disciplina !== "no") {
      console.log("Error: Responde con 'sí' o 'no' solamente.");
      return preguntarDisciplina(callback);
    }
    callback(disciplina === "sí" || disciplina === "si");
  });
}

// Iniciar el flujo
preguntarPromedio((promedio) => {
  preguntarMaterias((materias) => {
    preguntarDisciplina((tieneBuenaDisciplina) => {
      if ((promedio >= 8 && materias >= 7) && tieneBuenaDisciplina) {
        console.log("¡Felicidades!, gana la beca");
      } else if ((promedio >= 5 && promedio < 8) && (materias >= 4 && materias <= 6) && tieneBuenaDisciplina) {
        console.log("¡Felicidades!, gana media beca");
      } else {
        console.log("No cumple para la beca");
      }
      rl.close();
    });
  });
});
