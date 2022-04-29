// Usando objeto express
const express = require('express')
    // App de Express
const app = express()
app.use(express.json()) // Indicamos que usaremos JSON
    // Puerto en que vamos a ver nuestra app: localhost:3000
const port = 3000

app.get('/v1/explorers', (req, res) => {
    console.log(`API Explorer GET ALL requests ${new Date()}`)
    const explorer1 = { id: 1, name: "Nelly1" }
    const explorer2 = { id: 2, name: "Nelly2" }
    const explorer3 = { id: 3, name: "Nelly3" }
    const explorer4 = { id: 4, name: "Nelly4" }
    const explorers = { explorer1, explorer2, explorer3, explorer4 }
    res.status(200).json(explorers)
});
//Endpoint get->Reegresar informacion 

app.get('/v1/explorers/:id', (req, res) => {
    console.log(`Api Explorers GET request ${new Date()}`)
    console.log(`Getting explorer with id ${req.params.id}`)

    const explorer1 = { id: 1, name: "Nelly" }
    res.status(200).json(explorer1)
});

//POST ENDPOINT
app.post('/v1/explorers', (req, res) => {
    console.log(`Api Explorers POST request ${new Date()}`)
    const requestBody = req.body;
    res.status(201).json({ message: "Created" })
})


// Con esto inicializamos esta app
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});