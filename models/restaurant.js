const mongoose = require("mongoose")


const restaurantSchema = new mongoose.Schema({
    address:{
        type:String,
        required:true
    },

})

exports.restaurant = new mongoose.model("restaurant",restaurantSchema)
exports.restaurantSchema = restaurantSchema
