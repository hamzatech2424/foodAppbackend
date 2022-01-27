const mongoose = require("mongoose")

const CategorySchema= new mongoose.Schema({
      category_name:{
        type:String,
        required:true
    },


})


exports.Category = new mongoose.model("Category",CategorySchema)
exports.CategorySchema = CategorySchema