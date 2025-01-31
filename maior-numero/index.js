const express = require('express');
const app = express();
app.use(express.json());

app.post('/maior-numero', (req, res) => {
    const numeros = req.body.numeros; // Espera um array de 6 números
    if (!Array.isArray(numeros) || numeros.length !== 6) {
        return res.status(400).json({ error: 'É necessário fornecer exatamente 6 números.' });
    }
    const maior = Math.max(...numeros);
    return res.json({ maior });
});

app.listen(3003, () => {
    console.log('Servidor do maior número rodando em http://localhost:3003');
});