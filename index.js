const serverlessHttp = require('serverless-http');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const controller = require('./controller');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true }));

app.use('/example/hello', controller.hello);

app.use((req, res, next) => {
    console.log(req.path);
    res.status(404).json({msg : "Route not found"});
});

exports.handler = serverlessHttp(app);
