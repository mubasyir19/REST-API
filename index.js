const express = require('express')
const mongoose = require('mongoose')
const route = require('./routes/index')

const app = express()


//database connection
mongoose.connect("mongodb://localhost:27017/coba_api")
const db = mongoose.connection;
db.on('error', (error) => {
    console.error(error)
})
db.once('open', () => {
    console.log('database connection success...')
})

app.use(express.json())
app.use('/product', route)


app.get('/', (req, res) => {
    res.send("Selamat Datang")
})


//listening port
app.listen('3000', () => {
    console.log('console running at port 3000...')
})