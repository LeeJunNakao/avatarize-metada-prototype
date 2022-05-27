const express = require('express');
const { Collections, Contracts } = require('./data');
const app = express();

const PORT = process.env.PORT || 3000;



app.get('/:collection/:id', (req, res) => {
    const { collection, id } = req.params;

    const foundCollection = Collections[collection];
    const metadata = foundCollection ? foundCollection[id - 1] : null;
    res.send(metadata)
})

app.get('/nfts', () => {
    return Contracts;
})

app.listen(PORT, () => {
    console.log(`Runing app on port ${PORT}`)
})