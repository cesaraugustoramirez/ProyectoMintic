const express = require('express');
const app = express();
const routes = require('./routes');
const morgan = require('morgan');
const mongoose = require('mongoose');
const dbConfig = require('./config/db');
const cors = require('cors');

app.use(express.json())


mongoose.connect(dbConfig.dbStringConnect)
    .then(db => console.log("db connected"))
    .catch(err => console.error(err))

const port = 3001;

app.use(cors());

//utilizando variables de entorno definidas en el archivo .env
require('dotenv').config();

app.use(morgan("dev"));

app.get('/', (req, res) => {
    res.json({ status: 200 });
})

app.use('/productos', routes.productsRouter);
app.use('/usuarios', routes.usersRouter);
app.use('/ventas', routes.salesRouter);
app.use('/auth', routes.authRouter);

app.listen(port, () => {
    console.log(`listening on port http://localhost:${port}`);
});
