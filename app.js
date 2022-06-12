const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const {readdirSync} = require('fs');
const app = express();

// app.use(bodyParser.json())
// app.use(bodyParser());
const cors = require('cors');
require('dotenv').config();
app.use(cors());
app.use(morgan('dev'))
// app.use(express.json());
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));

// app.use(bodyParser.urlencoded({ extended: true }));

const db = process.env.db
mongoose.connect(db).then(
    console.log('db connected successfully')
).catch((err)=>{
    console.log(err)
})


readdirSync("./routers").map((r) => app.use("/api", require(`./routers/${r}`)));


app.listen('8080',()=>{
    console.log(`Server is runing on port 8080`)
})