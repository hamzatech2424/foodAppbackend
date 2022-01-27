const mongoose = require("mongoose")


const customerSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    passwordHash:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone_number:{
        type:Number,
        required:true 
    },
    address:{
        type:String,
        required:true   
    },
    street:{
        type:String,
        required:true   
    },
    apartment:{
        type:String,
        required:true   
    },
    city:{
        type:String,
        required:true   
    },
    isAdmin:{
        type:Boolean,
        default:false
    },
    time_joined:{
        type:Date,
        default:Date.now()
    }

})


exports.customer = new mongoose.model("User",customerSchema)
exports.customerSchema = customerSchema
