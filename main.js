const express = require('express');
const res = require('express/lib/response');
const { Collections, Contracts } = require('./data');
const app = express();

const PORT = process.env.PORT || 3001;


app.get('/nfts', (req, res) => {
    res.send({ contracts: Contracts });
})

app.get('/:collection/:id', (req, res) => {
    const { collection, id } = req.params;

    const foundCollection = Collections[collection];
    const metadata = foundCollection ? foundCollection[id - 1] : null;
    res.send(metadata)
})



app.listen(PORT, () => {
    console.log(`Runing app on port ${PORT}`)
})