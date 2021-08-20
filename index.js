const express = require("express");
const app = express();

app.get("/", function (req, res) {
    res.send("Hello World");
});

// CRUD -> Create, Read (All & Single/byId), Update, Delete

// "CRUD em memória"

// Lista de textos (strings)
const lista = ["Rick Sanchez", "Morty Smith"];
//              0               1

// [GET] /personagens
// Read All
app.get("/personagens", function (req, res) {
    res.send(lista);
});

// [GET] /personagens/:id
app.get("/personagens/:id", function (req, res) {
    const id = req.params.id - 1;

    const item = lista[id];

    res.send(item);
});
app.listen(3000);
