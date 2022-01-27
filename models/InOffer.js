const mongoose = require("mongoose")

const inOfferSchema= new mongoose.Schema({
    offer_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Offer",
        required:true
    },
    menu_item_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"MenuItem",
        required:true
    }

})


exports.InOffer = new mongoose.model("InOffer",inOfferSchema)
exports.inOfferSchema = inOfferSchema