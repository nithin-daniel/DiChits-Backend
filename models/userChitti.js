const mongoose = require("mongoose");

const UserChittiSchema = mongoose.Schema(
    {

        vendor_id: {
            type: String
        },
        chitti_id: {
            type: String
        }
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model("UserChitti", UserChittiSchema);