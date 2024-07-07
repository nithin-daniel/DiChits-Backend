require('dotenv').config()
const express = require('express')
const router = express.Router()
const UsersSchema = require("../models/users");
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');


router.post('/register', async (req, res) => {
    const { role, password, phone_number } = req.body;
    try {
        let user = await UsersSchema.find({ phoneNumber: phone_number });
        if (!user.length == 0) {
            return res.status(400).json({ message: 'Phone number already used' });
        }
        const salt = await bcrypt.genSalt(10)
        const salt_password = await bcrypt.hash(password, salt);
        const newUser = new UsersSchema({
            role: role,
            password: salt_password,
            phoneNumber: phone_number,
            // id:  mongoose.Types.ObjectId()

        })
        await newUser.save()
        const subscriber_details = await findOne({ user_id: newUser._id })
        return res.status(200).json({
            status: 200,
            message: 'User created successfully',
            data: { "new user details": newUser, "User Subscription Detials":subscriber_details}
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
                message: 'User Logged in',
                data: user
            })
        }
        return res.status(400).json({ message: 'Phone or Password is wrong' });

    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
})

module.exports = router;