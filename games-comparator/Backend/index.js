const {db,port} = require('./conf.js');
const express = require('express');
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.get("/", (req,res)=>{
    res.send("Test!")
});

app.get('/', (req,res)=>{
    db.query("SELECT * from gamescomparator"), (err, results)=>{
        if (err) {
            res.status(500).send("Error retrieving data")
        } else {
            res.status(200).json(results)
        }
    }
})