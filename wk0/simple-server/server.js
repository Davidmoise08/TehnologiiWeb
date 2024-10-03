import express from "express";

const app = express();

app.get("/hello", (req, res, next) => {
    res.send("Hello world!");
});

app.listen(8080);