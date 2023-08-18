const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
const port = 3006
app.use(bodyParser.json({ limit: "30mb",extended:true }));
app.use(cors)

app.get("/", (req, res) => {
    res.send("hello world")
})
app.listen(port)
