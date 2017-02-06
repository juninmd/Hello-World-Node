var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send("hello World");
});

app.listen(process.env.PORT || 27015, function () {
    console.log("Aplicação Rodando - porta " + (process.env.PORT || 27015));
});