const express = require('express')
const cors = require('cors')
const app = express()
// const ctrl = require('controller.js')

app.use(express.json())
app.use(cors())


const {getHouses, deleteHouse, createHouse, updateHouse} = require('./controller.js')
app.get(`/api/houses`, getHouses)
app.post(`/api/houses`, createHouse)
app.put(`/api/houses/:id`, updateHouse)
app.delete(`/api/houses/:id`, deleteHouse)




app.listen(5000, () => console.log(`Server running on 5000`))