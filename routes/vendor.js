require('dotenv').config()
const express = require('express')
const router = express.Router()
const  VendorDetailsSchema  = require("../models/vendorDetails");
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');


router.post('/register', async (req, res) => {
    const { role, password, phoneNumber, email } = req.body;
    try {
        let user = await VendorDetailsSchema.findOne({ email: email });

        if (user) {
            return res.status(400).json({ message: 'Email id already used' });
        }
        const salt = await bcrypt.genSalt(10)
        const salt_password = await bcrypt.hash(password, salt);
        const newUser = new UsersSchema({
            role: role,
            password: salt_password,
            phoneNumber: phoneNumber,
            email: email
        })
        await newUser.save()
        return res.status(200).json({
            status: 200,
            message: 'User created successfully'
        })
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
});

module.exports = router;