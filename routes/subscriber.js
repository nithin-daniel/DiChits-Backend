require('dotenv').config()
const express = require('express')
const router = express.Router()
const UsersSchema = require("../models/users");
const SuscriberDetailsSchema = require("../models/suscriberDetails");

const mongoose = require('mongoose');


router.post('/subscriber-details', async (req, res) => {
    const { dob, gender, age, location, pincode, address, aadhar, user_id } = req.body;
    try {
        const user = await SuscriberDetailsSchema.findOne({ id: user_id });
        if (user) {
            return res.status(400).json({ message: "User Already created the Subscruber Details" });
        }
        const subscriberDetails = new SuscriberDetailsSchema({
            id:user_id,
            dob:dob,
            gender:gender,
            age:age,
            location:location,
            pincode:pincode,
            address:address,
            aadhar:aadhar
        });
        await subscriberDetails.save()
        return res.status(200).json({
            status: 200,
            message: 'Subscriber Details created successfully'
        });
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
});

module.exports = router;