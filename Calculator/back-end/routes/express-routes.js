const express = require('express');
const router = express.Router();
const CalculatorHistory = require('../models/history-model'); 

router.post('/history', async (req, res) => {
    try {
        const { expression, result } = req.body;
        const historyEntry = new CalculatorHistory({ expression, result });
        await historyEntry.save();
        res.status(201).json({ message: 'History entry saved successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.get('/getAllCalculations', async (req, res) => {
    try {
        const calculations = await CalculatorHistory.find().sort({ timestamp: -1 }).limit(10);
        res.status(200).json(calculations);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;
