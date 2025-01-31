const express = require('express');
const app = express();
app.use(express.json());

app.post('/ordenar-numeros', (req, res) => {
    const numeros = req.body.numeros; // Espera um array de 5 números
    if (!Array.isArray(numeros) || numeros.length !== 5) {
        return res.status(400).json({ error: 'É necessário fornecer exatamente 5 números.' });
    }
    const ordenados = numeros.sort((a, b) => a - b);
    return res.json({ ordenados });
});

app.listen(3004, () => {
    console.log('Servidor de ordenar números rodando em http://localhost:3004');
});