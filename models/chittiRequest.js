const mongoose = require("mongoose");


const ChittiRequestSchema = mongoose.Schema(
    {
        user_id: {
            type: String
        },
        chitti_id: {
            type: String
        },
        status:{
            type: String, 
            default: 'PENDING'
        }
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model("Chitti_Request", ChittiRequestSchema);