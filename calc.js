const express = require("express");
const path = require("path");
const app = express();


// ## ES6 .mjs stuff
// import express from "express";
// import { join } from "path";
// import { fileURLToPath } from 'url';
// import { dirname } from 'path';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/index.html"));
});

app.get("/add", (req, res) => {
    var a = req.query.a ? Number(req.query.a) : 0;
    var b = req.query.b ? Number(req.query.b) : 0;
    var sum = a + b;

    if (Number.isNaN(sum)) {
        res.sendStatus(400);
    } else {
        res.send(sum.toString());
    }
});

app.get("/mul", (req, res) => {
    var a = req.query.a ? Number(req.query.a) : 1;
    var b = req.query.b ? Number(req.query.b) : 1;
    var sum = a * b;

    if (Number.isNaN(sum)) {
        res.sendStatus(400);
    } else {
        res.send(sum.toString());
    }
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
