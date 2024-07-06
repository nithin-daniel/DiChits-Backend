require('dotenv').config()
const express = require('express')
const router = express.Router()
const UsersSchema = require("../models/users");
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');


router.post('/register', async (req, res) => {
    const { role, password, phoneNumber } = req.body;
    try {
        let user = await UsersSchema.findOne({ phoneNumber: phoneNumber });

        if (user) {
            return res.status(400).json({ message: 'Phone number already used' });
        }
        const salt = await bcrypt.genSalt(10)
        const salt_password = await bcrypt.hash(password, salt);
        const newUser = new UsersSchema({
            role: role,
            password: salt_password,
            phoneNumber: phoneNumber
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

router.post("/login", async (req, res) => {
    try {
        const { phoneNumber, password } = req.body;
        if (!phoneNumber) {

            return res.status(400).json({ message: 'Phone Number Required' });
        }
        if (!password) {

            return res.status(400).json({ message: 'Password Required' });
        }
        const user = await UsersSchema.findOne({ phoneNumber: phoneNumber });

        if (user.length === 0) {
            return res.status(400).json({ message: 'User not found' });
        }
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (user && passwordMatch) {
            return res.status(200).json({
                status: 200,
                message: 'User Logged in'
            })
        }
        return res.status(400).json({ message: 'Phone or Password is wrong' });

    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
})

module.exports = router;