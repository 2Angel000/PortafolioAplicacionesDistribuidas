const numberToWords=require('number-to-words');
const express = require('express');
const app = express();
const PORT = 3000;
const IP = "127.0.0.1";

app.use(express.json()); // Middleware para analizar el cuerpo de la solicitud en formato JSON

// Contador de palabras
app.post('/contar-palabras', (req, res) => {
    const texto = req.body.texto;
    // Para dividir el texto en palabras
    const palabras = texto.split(/\s+/).filter(palabra => palabra !== '');
    const contadorCaracter = texto.length;
    const contadorPalabras = palabras.length;

    res.json({ contadorCaracter, contadorPalabras });
});

//Revertir el Texto
app.post('/revertir?texto',(req, res)=>{
    const texto = req.body.texto;
    const textoInvertido = texto.split('').reverse().join('');
    res.json({textoInvertido});
});

//Número a letra
app.post('/convertir?texto',(req, res)=>{
    const numero = req.body.numero;
    const numeroEnLetras = numberToWords.toWords(numero);
    res.json({numeroEnLetras});
});


app.listen(PORT, () => {
    console.log(`Microservicio corriendo en http://${IP}:${PORT}/contador`);
});