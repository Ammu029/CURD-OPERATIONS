const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb://127.0.0.1/employee'

const app = express()

mongoose.connect(url)
const con = mongoose.connection

con.on('open', function(){
    console.log("connected")
})

app.use(express.json())

const empRouter = require('../CURDJS/Routers/Employees')
app.use('/Employees', empRouter)


app.listen(9000, function(){
    console.log("Server started")
})