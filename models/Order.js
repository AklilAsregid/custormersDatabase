const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
    Customer_id:[
        {type:Schema.Types.ObjectId,ref:'Customers'}
    ],
    orderStatus:{
        type:String,
    },
    orderItem:{
        type:String,
    },
    order_date:{
        type:Date,
        default:Date.now
    },

})

const Order = mongoose.model('Contact',orderSchema)
module.exports = Order