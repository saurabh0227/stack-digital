import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

import logRoutes from './api/logs/route'

const app = express();

const port = 9000


app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type Authorization');
    next();
})

app.use('/', logRoutes)

app.use((error, req, res, next) => {
    console.log(error);
    const status = error.statusCode || 500;
    const message = error.message;
    const data = error.data;
    res.status(status).json({ message: message, data: data });
})

mongoose.connect(
    'mongodb://localhost:27017/stack-digital-saurabh',
    {
        useUnifiedTopology: true,
        useNewUrlParser: true
    }
).then(result => {
    app.listen(port, () => {
        console.log(`Port: ${port}`)
    })
}).catch(err => console.log(err))