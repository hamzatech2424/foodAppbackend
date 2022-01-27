const mongoose = require("mongoose")


const OrderstatusSchema = new mongoose.Schema({
      placed_order_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"placeOrder",
        required:true
    },
    status_Catalogue_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Status",
        required:true
    },
    timeofOrderStatus:{
        timestamps: new Date()
    }

})


exports.OrderStatus = new mongoose.model("OrderStatus",OrderstatusSchema)
exports.OrderstatusSchema = OrderstatusSchema
