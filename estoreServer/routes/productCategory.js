const express = require('express')
const productCategory = express.Router();
const mysql = require('mysql')

//below we establish a connection with the database.
//using createPool() is better than getConnection() as it can handle multiple requests.
const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "root",
    database: "estore",
    port: 3306,
    multipleStatements: true
})


productCategory.get("/", (req, res) => {
    let categorydata;

    pool.query("Select * from categories", (err, categories) => {
        if (!err) {
            categorydata = categories;
            res.status(200).send(categorydata);
        }
        else {
            categorydata = err;
            res.status(500).send(categorydata);
        }
    })

})

module.exports = productCategory;