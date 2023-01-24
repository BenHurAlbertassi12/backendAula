const express = require('express');
require('express-async-errors');
const errorMiddleware = require('./middlewares/error');
const routes = require('./routes/router');

const studentRoutes = require('./routes/studentRoutes');

const app = express();

app.use(express.json());

app.use('/course', routes);
app.use('/student', studentRoutes);

app.use(errorMiddleware);
