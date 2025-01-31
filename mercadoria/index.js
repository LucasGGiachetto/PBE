const express = require('express');
const app = express();
app.use(express.json());

app.post('/mercadoria', (req, res) => {
    const { nome, preco } = req.body;
    let aumento = preco < 1000 ? 0.05 : 0.07;
    let novoPreco = preco * (1 + aumento);
    return res.json({ nome, novoPreco: novoPreco.toFixed(2) });
});

app.listen(3002, () => {
    console.log('Servidor da mercadoria rodando em http://localhost:3002');
});