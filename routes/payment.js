require('dotenv').config()
const express = require('express')
const router = express.Router()
const UsersSchema = require("../models/users");


const mongoose = require('mongoose');
const payment = require('../models/payment');
const suscriberDetails = require('../models/suscriberDetails');



router.post('/add', async (req, res) => {
    try {
        const { ticket_number, user_id, user_chit_id } = req.body;
        const username = await suscriberDetails.findOne({ user_id: user_id })
        const NewPayment = new payment({
            user_id: user_id,
            user_chit_id: user_chit_id,
            ticket_number: ticket_number,
            user_name:username.name
        });

        await NewPayment.save()

        return res.status(200).json({
            status: 200,
            message: 'Payment Details created successfully'
        });
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
});

module.exports = router;