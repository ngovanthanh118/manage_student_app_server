const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./untils/connection.js');
const route = require('./routes/route.js');
require('dotenv').config();
app.use(cors());

//Connected to database

db.connect();

//Express route

app.use('/api', route);
app.use('/api', express.static(path.join(__dirname, 'public')));


//Middleware
 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
})