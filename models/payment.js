const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const UserSchema = require('./users')

const PaymentSchema = mongoose.Schema(
    {
        user_chit_id: {
            type: String
        },
        ticket_number: {
            type: Number
        },
        user_id: {
            // type: Schema.Types.ObjectId, ref: 'UserSchema'
            type: String
        },
        user_name: {
            type: String
        }
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model("Payment", PaymentSchema);