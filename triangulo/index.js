const express = require('express');
const app = express();
app.use(express.json());

app.post('/triangulo', (req, res) => {
    const { a, b, c } = req.body;
    if (a === b && b === c) {
        return res.json({ tipo: 'EQUILÁTERO' });
    } else if (a !== b && b !== c && a !== c) {
        return res.json({ tipo: 'ESCALENO' });
    } else {
        return res.json({ tipo: 'ISÓSCELES' });
    }
});

app.listen(3001, () => {
    console.log('Servidor do triângulo rodando em http://localhost:3001');
});