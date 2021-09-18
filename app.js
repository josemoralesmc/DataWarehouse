require('dotenv').config();
const express = require('express');
const expressJwt = require('express-jwt');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
app.use(express.static('public'));
// middlewares 



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
/* app.use(expressJwt({
    secret: process.env.jwt_pass,
    algorithms: ['HS256']
}).unless({
    path: ['/api/login', '/api/registrar']
})); */



//routes
app.use('/api', require('./routes/auth.routes'));
app.use('/api/usuarios', require('./routes/usuarios.routes'))
app.use('/api/contactos', require('./routes/contactos.routes'))
app.use('/api', require('./routes/region.routes'))
app.use('/api/compania', require('./routes/compania.routes'))

app.listen(process.env.PORT, () => { console.log('Servidor escuchando en el puerto ' + process.env.PORT); });