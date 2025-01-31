const express = require('express');
const router = express.Router();

router.post('/reajuste-salarial', (req, res) => {
    const { salarioAtual } = req.body;
    let aumento;
    if (salarioAtual >= 1500 && salarioAtual < 1750) {
        aumento = 0.15;
    } else if (salarioAtual >= 1750 && salarioAtual < 2000) {
        aumento = 0.12;
    } else if (salarioAtual >= 2000 && salarioAtual < 3000) {
        aumento = 0.09;
    } else if (salarioAtual >= 3000) {
        aumento = 0.06;
    } else {
        return res.status(400).json({ error: 'Salário fora do limite permitido.' });
    }
    const novoSalario = salarioAtual * (1 + aumento);
    return res.json({ novoSalario: novoSalario.toFixed(2) });
});

module.exports = router;