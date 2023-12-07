function contarPalabras() {
    const texto = document.getElementById('texto').value;
    fetch(`http://192.168.231.126:3000/contar-palabras?texto=${texto}`)
        .then(response => response.json())
        .then(data => {
            const resultadoElement = document.getElementById('resultado');
            resultadoElement.innerHTML = `<p>El recuento de palabras es: ${data.palabras}</p>
            <p>El recuento de letras es: ${data.letras}</p>`;
        })
        .catch(error => console.error('Error al consumir el microservicio: ', error));
}

function revertirTexto() {
    const texto = document.getElementById('texto').value;
    fetch(`http://192.168.231.126:3001/revertir?texto=${texto}`)
        .then(response => response.json())
        .then(data => {
            const resultadoElement = document.getElementById('resultado');
            resultadoElement.innerHTML = `<p>El recuento de palabras es: ${data.revertido}</p>`;
        })
        .catch(error => console.error('Error al consumir el microservicio: ', error));
}

function convertirNumero() {
    const texto = document.getElementById('texto').value;
    fetch(`http://192.168.231.126:3002/convertir?texto=${texto}`)
        .then(response => response.json())
        .then(data => {
            const resultadoElement = document.getElementById('resultado');
            resultadoElement.innerHTML = `<p>El recuento de palabras es: ${data.convertido}</p>`;
        })
        .catch(error => console.error('Error al consumir el microservicio: ', error));
}