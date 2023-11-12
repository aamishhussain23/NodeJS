const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/Product').then(() => {
    console.log('mongoDB connected')
})
.catch(() => {
    console.log('Not connected')
})

const phone = new mongoose.Schema({
    name : String,
    price : Number,
    status : Boolean
})


const mobile = new mongoose.model('phone', phone)

const adder = async () => {
    const result = await mobile.create({name : 'realme', price : 5500, status : true})
    console.log(result)
}


const search = async () => {
    const result = await mobile.find({price : {$eq : 36000}})
    console.log(result)
}

// adder() 
search() 