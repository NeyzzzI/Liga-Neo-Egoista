
// Datos de ejemplo de jugadores
const jugadores = [
    { nombre: "Pedro", salario: 5000, puntos: 120 },
    { nombre: "Juan", salario: 4000, puntos: 90 },
    { nombre: "Carlos", salario: 3000, puntos: 75 },
    { nombre: "Luis", salario: 2000, puntos: 50 },
    { nombre: "Sofia", salario: 3500, puntos: 100 }
];

// Función para actualizar la tabla
function actualizarRanking() {
    // Ordenar jugadores por puntos
    jugadores.sort((a, b) => b.puntos - a.puntos);

    const tabla = document.getElementById("ranking");
    tabla.innerHTML = ""; // Limpiar tabla antes de actualizar

    jugadores.forEach((jugador, index) => {
        const fila = document.createElement("tr");

        // Crear celdas para cada jugador
        const posicion = document.createElement("td");
        posicion.textContent = index + 1;
        fila.appendChild(posicion);

        const nombre = document.createElement("td");
        nombre.textContent = jugador.nombre;
        fila.appendChild(nombre);

        const salario = document.createElement("td");
        salario.textContent = `$${jugador.salario}`;
        fila.appendChild(salario);

        const puntos = document.createElement("td");
        puntos.textContent = jugador.puntos;
        fila.appendChild(puntos);

        // Agregar la fila a la tabla
        tabla.appendChild(fila);
    });
}

// Llamar a la función para inicializar la tabla
actualizarRanking();
