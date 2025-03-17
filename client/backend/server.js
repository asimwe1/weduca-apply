require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const formRoutes = require('./routes/form.routes');
const connectDB = require('./config/db');

const app = express();


app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT || 3000;


connectDB().then(() => {
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
});


app.use(bodyParser.json());
app.use('/api', formRoutes);