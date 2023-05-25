const express = require('express');
const cors = require('cors');
const {conexion}=require('./helpers/bdConnect');
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


//cabeceras de protección
/* app.use((req, res, next) => {
    res.setHeader('Content-Security-Policy', "default-src 'self'");
    res.setHeader('Strict-Transport-Security', 'max-age=31536000; includeSubDomains');
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.setHeader('X-Frame-Options', 'SAMEORIGIN');
    next();
}); */


//conectar
conexion()

//rutas
app.use('/api/v1',require('./routers/apiRouter'))


app.listen(port, () => console.log(`Servidor a la escucha del puerto: ${port}`));