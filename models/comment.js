const mongoose = require("mongoose")

const commentsSchema= new mongoose.Schema({
    placed_Order_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"placeOrder",
        required:true
    },
    customer_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"customer",
        required:true
    },
    comment_text:{
        type:Number,
        required:true
    },
    isComplaint:{
        type:Boolean,
        required:true 
    },
    isPraised:{
        type:Boolean,
        required:true   
    },
    time:{
        timestamps: new Date()
    }

})


exports.Comments = new mongoose.model("Comments",commentsSchema)
exports.commentsSchema = commentsSchema