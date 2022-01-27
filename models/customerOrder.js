const mongoose = require("mongoose")

const CustomerOrderSchema= new mongoose.Schema({
    customer_name:{
        type:String,
        required:true
    },
    city_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"City",
        required:true
    },
    address:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        required:true 
    },
    confirmation:{
        type:String,
        required:true   
    },
    password:{
        type:String,
        required:true
    },
    time:{
        timestamps: new Date()
    }

})


exports.CustomerOrder = new mongoose.model("User",CustomerOrderSchema)
exports.CustomerOrderSchema = CustomerOrderSchema
