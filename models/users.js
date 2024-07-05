const mongoose = require("mongoose");
const {nanoid} = require('nanoid');

const UsersSchema = mongoose.Schema(
    {
        user_id:{
            type:String,
            default: ()=>nanoid(),
            required:true,
            unique:true
        },
        role:{
            type:String
        },
        password:{
            type:String
        },
        phoneNumber:{
            type:String
        }
    },
    {
        timestamps:true
    }
)

module.exports = mongoose.model("UsersSchema",UsersSchema);