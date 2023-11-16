const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const app = express()
mongoose.connect('mongodb://127.0.0.1:27017/form').then( () => {
    console.log('database connected')
} ).catch( () => {
    console.log('database not connected')
} )

// form schema
const formSchema = new mongoose.Schema({
    name : String,
    email : String
})

const form = new mongoose.model('formInputs', formSchema)

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended: false}))

app.get('/', (req, res) => {
    res.render('index')
})

app.post('/login', (req, res) => {
    res.redirect('/')
    console.log(req.body)
    form.create({name : req.body.userName, email : req.body.userEmail})
})

app.listen(3000, () => {
    console.log('app is ready')
})