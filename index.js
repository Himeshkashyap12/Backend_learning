
require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

// virtual port 65000+
const jsonData={
  "squadName": "Super hero squad",
  "homeTown": "Metro City",
  "formed": 2016,
  "secretBase": "Super tower",
  "active": true,
  "members": [
    {
      "name": "Molecule Man",
      "age": 29,
      "secretIdentity": "Dan Jukes",
      "powers": ["Radiation resistance", "Turning tiny", "Radiation blast"]
    },
    {
      "name": "Madame Uppercut",
      "age": 39,
      "secretIdentity": "Jane Wilson",
      "powers": [
        "Million tonne punch",
        "Damage resistance",
        "Superhuman reflexes"
      ]
    },
    {
      "name": "Eternal Flame",
      "age": 1000000,
      "secretIdentity": "Unknown",
      "powers": [
        "Immortality",
        "Heat Immunity",
        "Inferno",
        "Teleportation",
        "Interdimensional travel"
      ]
    }
  ]
}
app.get('/', (req, res) => {
  res.send('Hello World !')
})
app.get('/twitter', (req, res) => {
  res.send('Hello twitters!')
})
app.get("/login",(req,res)=>{
  res.send('<h1>Please Login page</h1>')
})
app.get("/youtube",(req,res)=>{
  res.send('<h2>Chai aur code </h2>')
})
app.get("/json",(req,res)=>{
  res.json(jsonData)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})

