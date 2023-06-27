const express = require('express');
require('dotenv').config();
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');

const app = express();

connectDB();

app.use(express.json());

app.use('/users', userRoutes);

const port = process.env.PORT || 3003;
app.listen(port, () => {
    console.log(`app is listening on port ${port}`);
})