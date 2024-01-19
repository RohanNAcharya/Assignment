const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 8080; 


const url = "mongodb://localhost:27017/CalculatorDatabase";

app.use(express.json());

const cors = require('cors');
app.use(cors());

async function connect() {
    try{
        // await mongoose.connect('mongodb+srv://ranjanShetty:admin2000@cluster0.ucsny8j.mongodb.net/CalculatorDatabase?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });
        await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("Connected to MongoDB");
    }catch (error){
        console.error(error);
    }
}

connect();

const historyRoutes = require('./routes/express-routes');
app.use('/history', historyRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
