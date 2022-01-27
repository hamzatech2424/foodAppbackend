const mongoose = require("mongoose")

const offerSchema= new mongoose.Schema({
    date_active_from:{
        type:new Date(),
        required:true
    },
    time_active_from:{
        type:new Date(),
        required:true
    },
    date_active_to:{
        type:new Date(),
        required:true
    },
    time_active_to:{
        type:new Date(),
        required:true
    },
    offer_price:{
        type:Number
    }


})


exports.Offer = new mongoose.model("Offer",offerSchema)
exports.offerSchema = offerSchema