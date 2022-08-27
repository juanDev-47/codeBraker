import express from "express";
import dotenv from "dotenv";
import codeBreaker from "./api/routes/codeBreaker.js";

// for no using this way, put in package.json a tag => "type": "module"
// const express = require('express');
const port = process.env.PORT || 4000;


dotenv.config();


const app = express();

app.use(express.json({limit: "60mb"}));


// routes
app.use("/", codeBreaker);


// end middlewares

app.listen(port || 4000, () => {
    console.log(`connect to server in port ${port}`);
});
