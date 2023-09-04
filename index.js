//const mysql = require("mysql");
import mysql from "mysql";
import express from "express";
import dotenv from "dotenv";

dotenv.config();

const db = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
});

db.connect((err) => {
    if(err) {
        throw err;
    }
    console.log("Connected");
})

const app = express();

app.listen(process.env.PORT, ()=> {
    console.log(`Server listening on port ${process.env.PORT}`);
})