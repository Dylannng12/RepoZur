





/*const svg = document.getElementById('wave-container');

// Configuración de las ondas
const waveCount =15; // Cantidad de ondas
const waveHeight = 110; // Altura de la onda
const waveWidth = 150; // Ancho de cada ciclo de onda
const lineSpacing = 10; // Espaciado entre líneas

for (let i = 0; i < waveCount; i++) {
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");

    // Generar una onda
    let d = "M 0 " + (i * lineSpacing); // Iniciar en el punto inicial de la línea
    for (let x = 0; x < svg.clientWidth; x += waveWidth) {
        const controlPoint1Y = (i * lineSpacing) - waveHeight;
        const controlPoint2Y = (i * lineSpacing) + waveHeight;
        d += ` Q ${x + waveWidth / 4} ${controlPoint1Y}, ${x + waveWidth / 2} ${i * lineSpacing}`;
        d += ` T ${x + waveWidth} ${i * lineSpacing}`;
    }

    path.setAttribute("d", d);
    path.setAttribute("stroke", "black");
    path.setAttribute("fill", "none");
    svg.appendChild(path);
}
*/