const mongoose = require("mongoose");

const PaymentSchema = mongoose.Schema(
    {
        user_chit_id:{
            type:String
        },
        ticket_number:{
            type:Number
        },
        user_id:{
            type:String
        }
    },
    {
        timestamps:true
    }
)

module.exports = mongoose.model("Payment",PaymentSchema);