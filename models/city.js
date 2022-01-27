const mongoose = require("mongoose")


const citySchema = new mongoose.Schema({
    city_name:{
        type:String,
        required:true
    },
    zipcode:{
        type:Number,
    },

})


exports.City = new mongoose.model("City",citySchema)
exports.citySchema = citySchema
