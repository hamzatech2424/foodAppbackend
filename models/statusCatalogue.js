const mongoose = require("mongoose")


const StatusSchema = new mongoose.Schema({
    status_name:{
        type:String,
        required:true
    },

})


exports.Status = new mongoose.model("Status",StatusSchema)
exports.StatusSchema = StatusSchema
