const mongoose = require("mongoose");

const VendorDetailsSchema = mongoose.Schema(
    {
        user_id:{
            type:String,
            required:true
        },
        name:{
            type:String
        },
        location:{
            type:String
        },
        pincode:{
            type:Number
        },
        address:{
            type:String
        }
    },
    {
        timestamps:true
    }
)

module.exports = mongoose.model("VendorDetailsSchema",VendorDetailsSchema);