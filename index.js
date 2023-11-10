const express = require('express')

const app = express()
const port = 3000

const db = []

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, resp) => {
    resp.render('index')
})

app.get('/success', (req, resp) => {
    resp.render('success')
})

app.get('/data', (req, res) => {
    res.send(db)
})

app.post('/success', (req, resp) => {
    resp.redirect('/success')
    console.log(req.body)
    db.push({name : req.body.name, email : req.body.email})
})


app.listen(port, () => {
    console.log(`server is running on port ${port}`)
})