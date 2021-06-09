const mongoose = require('mongoose')

const orderSchema = mongoose.Schema({
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