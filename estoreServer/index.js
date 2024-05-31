const express = require('express')
const app = express();
const cors = require('cors');
const productCategory = require('./routes/productCategory')

const port = 1010

app.use(cors());
app.use('/productCategory',productCategory);

app.listen(port, () => {

    console.log("Server is up on port ", port);
})