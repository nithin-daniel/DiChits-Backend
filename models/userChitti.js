const mongoose = require("mongoose");

const UserChittiSchema = mongoose.Schema(
    {
        vendor_id:{
            type:String
        },
        chit_id:{
            type:String
        }
    }
)

module.exports = mongoose.model("UserChittiSchema",UserChittiSchema);