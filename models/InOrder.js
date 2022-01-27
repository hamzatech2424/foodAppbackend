const mongoose = require("mongoose")

const inorderSchema= new mongoose.Schema({
    placed_Order_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"placeOrder",
        required:true
    },
    offer_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Offer",
        required:true
    },
    menu_item_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"MenuItem",
        required:true
    },
    quantity:{
        type:Number,
        required:true 
    },
    item_price:{
        type:Number,
        required:true   
    },
    price:{
        type:Number,
        required:true   
    },
    comment:{
        type:String,
    }

})


exports.Inorder = new mongoose.model("Inorder",inorderSchema)
exports.inorderSchema = inorderSchema