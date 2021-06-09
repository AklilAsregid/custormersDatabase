const mongoose = require('mongoose')

const customerSchema = mongoose.Schema({
    contactName:{
        type:String,
    },
    companyName:{
        type:String
    },
    address:{
        type:String
    },
    phoneNumber:{
        type:String,
    }
    ,
    Date:{
        type:Date,
        default:Date.now
    }
})

const Customers = mongoose.model('Customers',customerSchema)

module.exports = Customers