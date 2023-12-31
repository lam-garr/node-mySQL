//const mysql = require("mysql");
import mysql from "mysql";
import express from "express";
import dotenv from "dotenv";
import apiRoutes from "./route/apiRoutes.js";

dotenv.config();

/* const db = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
}); */

/* db.connect((err) => {
    if(err) {
        throw err;
    }
    console.log("Connected");
}) */

const app = express();
app.use(express.json());
app.use("/api", apiRoutes);

/* app.get("/createdb", (req, res) => {
    let sql = "CREATE DATABASE samplenodemysql";
    db.query(sql, (err, result) => {
        if(err) throw err;
        res.send("Success");;
    })
});

app.get("createtable", (req, res) => {
    let sql = "CREATE TABLE users(id int AUTO_INCREMENT, name VARCHAR(255), desc VARCHAR(225), PRIMARY KEY (id))";
    db.query(sql, (err, result) => {
        if(err) throw err;
        res.send("Successfully created table");
    });
});

app.get("insertitem", (req, res) => {
    let item = {name: "John", desc: "This is John"};
    let sql = "INSERT INTO users SET ?";
    let query = db.query(sql, item, (err, result) => {
        if(err) throw err;
        res.send("Successfully inserted")
    })
})

app.get("getallitems", (req, res) => {
    let sql = "SELECT * FROM users";
    let query = db.query(sql, (err, results) => {
        if(err) throw err;
        res.send("Successfully selected all")
    })
})

app.get("getitem", (req, res) => {
    let sql = `SELECT * FROM users WHERE id = ${req.id}`;
    let query = db.query(sql, (err, result) => {
        if(err) throw err;
        res.send("Succesfully selected")
    })
})

app.get("updateitem", (req, res) => {
    let update = req.update;
    let sql = `UPDATE users SET name = ${update} WHERE id = ${req.id}`;
    let query = db.query(sql, (err, result) => {
        if(err) throw err;
        res.send("Successfully updated");
    });
});

app.get("deleteitem", (req, res) => {
    let sql = `DELETE FROM users where id = ${req.id}`;
    let query = db.query(sql, (err, result0 => {
        if(err) throw err;
        res.send("Succeddfully deleted");
    }));
});
 */
app.listen(process.env.PORT, ()=> {
    console.log(`Server listening on port ${process.env.PORT}`);
})