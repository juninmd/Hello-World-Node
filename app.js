var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send("hello World");
});

app.listen(27015, function () {
    console.log("Aplicação Rodando - porta 27015");
});