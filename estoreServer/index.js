const express = require('express')
const app = express();
const productCategory = require('./routes/productCategory')

const port = 1010

app.use('/productCategory',productCategory)

app.listen(port, () => {

    console.log("Server is up on port ", port);
})