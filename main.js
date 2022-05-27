const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

const Collections = {
    CuteCatz: [
        {
            name: "Franz Cat",
            description: "Friendly OpenSea Creature that enjoys long swims in the ocean.",
            external_url: "https://openseacreatures.io/3",
            image: "https://i.ibb.co/9WrhGKN/Cat-04.jpg",
        }
    ],
    BoredBirdz: [
        {
            name: "Black Feather",
            description: "A bird pirate.",
            external_url: "https://openseacreatures.io/3",
            image: "https://i.ibb.co/7nmvgk8/bird-01.jpg",
        },
        {
            name: "Frank",
            description: "A bored street bird.",
            external_url: "https://openseacreatures.io/3",
            image: "https://i.ibb.co/Q9h72ST/bird-02.png",
        },
        {
            name: "Adrian",
            description: "A bored sailor bird.",
            external_url: "https://openseacreatures.io/3",
            image: "https://i.ibb.co/xCQMQMR/bird-03.png",
        },
        {
            name: "Scrooge McBird",
            description: "A bored money lover bird.",
            external_url: "https://openseacreatures.io/3",
            image: "https://i.ibb.co/xLjwMHy/bird-04.jpg",
        },
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