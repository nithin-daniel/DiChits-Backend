require('dotenv').config()
const express = require('express')
const router = express.Router()
const UsersSchema = require("../models/users");
const SuscriberDetailsSchema = require("../models/suscriberDetails");

const mongoose = require('mongoose');
const Chittis = require('../models/Chittis');


router.post('/subscriber-details', async (req, res) => {
    const { dob, gender, age, location, pincode, address, aadhar, user_id, name, pan_no } = req.body;
    try {
        const user = await SuscriberDetailsSchema.findOne({ id: user_id });
        if (user) {
            return res.status(400).json({ message: "User Already created the Subscruber Details" });
        }
        const subscriberDetails = new SuscriberDetailsSchema({
            user_id: user_id,
            dob: dob,
            gender: gender,
            age: age,
            location: location,
            pincode: pincode,
            address: address,
            aadhar: aadhar,
            name: name,
            pan_no:pan_no
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



router.post('/subscriber-request', async (req, res) => {
    const { user_id, chitti_id } = req.body;
    try {
        const chitti = await Chittis.findOne({ _id: chitti_id });
        if (chitti.length === 0) {
            return res.status(400).json({ message: "Chitti not found" });
        }
        const newChttiRequest = new SuscriberDetailsSchema({
            user_id: user_id,
            dob: dob,
            gender: gender,
            age: age,
            location: location,
            pincode: pincode,
            address: address,
            aadhar: aadhar
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

router.get("/chitti", async (req, res) => {

    const chitti = await Chittis.find({})

    if (chitti.length == 0) {
        return res.status(400).json({ message: "Chitti not found" });

    }
    return res.status(200).json({
        status: 200,
        message: 'Chitti retrived successfully',
        data: chitti
    });
})

module.exports = router;