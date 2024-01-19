const mongoose = require('mongoose');

const calculatorHistorySchema = new mongoose.Schema({
    expression: String,
    result: Number,
    timestamp: { type: Date, default: Date.now }
});

const CalculatorHistory = mongoose.model('CalculatorHistory', calculatorHistorySchema);

module.exports = CalculatorHistory;
