const mongoose = require("mongoose")

const MenuItemSchema= new mongoose.Schema({
    item_name:{
        type:String,
        required:true
    },
    category_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Category",
        required:true
    },
    description:{
        type:String,
        required:true
    },
    ingredients:{
        type:String,
        required:true
    },
    receipe:{
        type:String,
        required:true
    },
    price:{
        type:Number
    },
    active:{
        type:Boolean
    }


})


exports.MenuItem = new mongoose.model("MenuItem",MenuItemSchema)
exports.MenuItemSchema = MenuItemSchema