const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Serving from ExpressJS');
});

const port = 3000;

app.listen(port, () => {console.log(`App listening on port ${port}`)});