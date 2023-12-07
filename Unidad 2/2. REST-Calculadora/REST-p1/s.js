// Importar módulos
const express = require('express');

// Inicializar la aplicación
const app = express();

// Definir rutas y métodos
app.get('/sumar/:num1/:num2', (req, res) => {
    const num1 = parseInt(req.params.num1);
    const num2 = parseInt(req.params.num2);
    const resultadoImpr = num1 + num2;
    const resultado = " "+ num1 + " + " + num2 + " = " + resultadoImpr + " ";
    res.send({ resultado  });
});

app.get('/restar/:num1/:num2', (req, res) => {
    const num1 = parseInt(req.params.num1);
    const num2 = parseInt(req.params.num2);
    const resultadoImpr = num1 - num2;
    const resultado = " "+ num1 + " - " + num2 + " = " + resultadoImpr + " ";
    res.send({ resultado });
});

app.get('/multiplicar/:num1/:num2', (req, res) => {
    const num1 = parseInt(req.params.num1);
    const num2 = parseInt(req.params.num2);
    const resultadoImpr = num1 * num2;
    const resultado = " "+ num1 + " * " + num2 + " = " + resultadoImpr + " ";
    res.send({ resultado });
});

app.get('/dividir/:num1/:num2', (req, res) => {
    const num1 = parseInt(req.params.num1);
    const num2 = parseInt(req.params.num2);
    if (num2 === 0) {
        res.send('No se puede dividir por cero');
    } else {
        const resultadoImpr = num1 / num2;
        const resultado = " "+ num1 + " / " + num2 + " = " + resultadoImpr + " ";
        res.send({ resultado });
    }
});

app.get('/cuadrado/:num1', (req, res) => {
    const num1 = parseInt(req.params.num1);
    const resultadoImpr = num1 * num1;
    const resultado = " "+ num1 + " ^2 " + " = " + resultadoImpr + " ";
    res.send({ resultado });
});

app.get('/raiz/:num1', (req, res) => {
    const num1 = parseInt(req.params.num1);
    const resultadoImpr = Math.sqrt(num1);
    const resultado = " "+ num1 + " Raiz 2 " + " = " + resultadoImpr + " ";
    res.send({ resultado });
});

app.get('/exponencial/:num1/:num2', (req, res) => {
    const num1 = parseInt(req.params.num1);
    const num2 = parseInt(req.params.num2);
    const resultadoImpr = Math.pow(num1, num2);
    const resultado = " "+ num1 + " ^" +  num2 + " = " + resultadoImpr + " ";
    res.send({ resultado });
});

// Establecer el puerto
const PORT = 3000;
const HOST = '0.0.0.0';

// Iniciar el servidor
app.listen(PORT, HOST, () => {
    console.log(`Servidor corriendo en http://${HOST}:${PORT}`);
});

/*
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});

*/