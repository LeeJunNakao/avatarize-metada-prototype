const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

const Collections = {
    CuteCatz: [
        {
            name: "Franz Cat",
            description: "Friendly OpenSea Creature that enjoys long swims in the ocean.",
            external_url: "https://openseacreatures.io/3",
            image: "https://ibb.co/Pg6MtXN",

        }
    ]
}

app.get('/:collection/:id', (req, res) => {
    const { collection, id } = req.params;

    const foundCollection = Collections[collection];
    const metadata = foundCollection ? foundCollection[id - 1] : null;
    res.send(metadata)
})

app.listen(PORT, () => {
    console.log(`Runing app on port ${PORT}`)
})