const IP = '192.168.231.126';
const PORT = '3000';

// Definir la función para hacer solicitudes GET al servidor
async function hacerPeticion(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log('Ha ocurrido un error: ', error);
    }
}

// Ejemplo de uso de la función con las distintas operaciones
hacerPeticion('http://' + IP + ':' + PORT + '/sumar/3/5');
hacerPeticion('http://' + IP + ':' + PORT + '/restar/10/5');
hacerPeticion('http://' + IP + ':' + PORT + '/multiplicar/4/6');
hacerPeticion('http://' + IP + ':' + PORT + '/dividir/10/2');
hacerPeticion('http://' + IP + ':' + PORT + '/cuadrado/2');
hacerPeticion('http://' + IP + ':' + PORT + '/raiz/25');
hacerPeticion('http://' + IP + ':' + PORT + '/exponencial/5/2');