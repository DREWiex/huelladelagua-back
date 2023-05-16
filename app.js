const express = require('express');
const cors = require('cors');
require('dotenv').config();

// port config
const app = express();
const port = process.env.PORT;

// cors middleware
app.use(cors());

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));
// parse application/json
app.use(express.json());


app.listen(port, () => console.log(`Servidor a la escucha del puerto: ${port}`));