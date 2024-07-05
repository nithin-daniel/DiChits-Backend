const mongoose = require("mongoose");

const PaymentSchema = mongoose.Schema(
    {
        user_chit_id:{
            type:String
        },
        ticket_number:{
            type:Number
        }
    },
    {
        timestamps:true
    }
)

module.exports = mongoose.exports("PaymentSchema",PaymentSchema);