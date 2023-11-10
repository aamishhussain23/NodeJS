const express = require('express')

const app = express()
const port = 5000

app.set('view engine', 'ejs')

app.get('/', (req, resp) => {
    resp.render('index', {name : 'AaMiSh'})
})


app.listen(port, () => {
    console.log(`server is running on port ${port}`)
})