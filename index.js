const express = require('express')
let mysql = require('mysql2');
const app = express();
const port = 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.get('/', (req,res) => {
    res.send('Hello world');
});

app.listen(port, () => {
    console.log('server is running on port ${port}');
});

