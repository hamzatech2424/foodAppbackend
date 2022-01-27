const mongoose = require("mongoose")

const placeOrderSchema= new mongoose.Schema({
    restaurant_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"restaurant",
        required:true
    },
    order_time:{
        timestamps: new Date()
    },
    food_ready:{
        timestamps: new Date()

    },
    estimated_delieverytime:{
        timestamps: new Date()
    },
    actual_delieverytime:{
        timestamps: new Date()
    },
    customer_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"customer",
        required:true   
    },
    price:{
        type:Number,
        required:true
    },
    discount:{
        type:Number,
        required:true
    },
    final_price:{
        type:Number,
        required:true
    },
    comment:{
        type:String,
        required:true
    },
    order_time:{
        timestamps: new Date()
    }

})


exports.placeOrder = new mongoose.model("User",placeOrderSchema)
exports.placeOrderSchema = placeOrderSchema
