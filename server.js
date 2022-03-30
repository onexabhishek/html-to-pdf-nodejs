const express = require("express");
const pdfGenerator = require("./lib/pdfGenerator");

const server = express();
const port = 3000;

// '....'

// Set up View Engine
server.set('view engine', 'ejs');
server.set('views', __dirname + '/views');

// Set up V1 routes
server.get('/', async (req, res) => {
    const pdf = await pdfGenerator('http://localhost:3000/invoice');
    res.json({
        status: 'success',
        path: pdf
    })

});

server.get('/invoice', async (req, res) => {
    res.render('invoice')

});


// eslint-disable-next-line import/prefer-default-export
try {
    server.listen(port, () => {
        console.log(`Connected successfully on port ${port}`);
    });
} catch (error) {
    console.error(`Error occured: ${error.message}`);
}