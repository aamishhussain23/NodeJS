const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')

const app = express()
const port = 5000
app.use(bodyParser.urlencoded({extended: false}))
 

app.get('/', (req, resp) => {
    resp.sendFile(path.join(__dirname + '/index.html'))
})


app.post('/info/form', (req, resp) => {
    resp.send(`<h2>your name is : ${req.body.name}</br>your email is : ${req.body.email}</br>your password is : ${req.body.password}</h2>`)
    console.log(req.body)
})



app.listen(port, () => {
    console.log(`server is running on port ${port}`)
})