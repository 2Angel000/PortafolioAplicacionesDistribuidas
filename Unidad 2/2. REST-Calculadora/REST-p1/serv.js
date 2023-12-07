const express = require('express');
const app = express();
const port = 3000; // Change the port if needed

app.use(express.json());

app.get('/add', (req, res) => {
    const num1 = req.query.num1;
    const num2 = req.query.num2;
    const result = parseFloat(num1) + parseFloat(num2);
    res.json({ result });
    console.log("Hello Add");
});

app.get('/subtract', (req, res) => {
    const num1 = req.query.num1;
    const num2 = req.query.num2;
    const result = parseFloat(num1) - parseFloat(num2);
    res.json({ result });
    console.log("Hello Subtract");
});

app.get('/multiply', (req, res) => {
    const num1 = req.query.num1;
    const num2 = req.query.num2;
    const result = parseFloat(num1) * parseFloat(num2);
    res.json({ result });
    console.log("Hello Multiply");
});

app.get('/divide', (req, res) => {
    const num1 = req.query.num1;
    const num2 = req.query.num2;
    if (num2 === 0) {
        res.status(400).json({ error: 'Cannot divide by zero' });
    } else {
        const result = parseFloat(num1) / parseFloat(num2);
        res.json({ result });
        console.log("Hello Divide");
    }
});

app.listen(port, () => {
    console.log(`REST Calculator started at http://localhost:${port}`);
});