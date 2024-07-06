require('dotenv').config()
const express = require('express')
const router = express.Router()
const UsersSchema = require("../models/users");


const mongoose = require('mongoose');
const Chittis = require('../models/Chittis');


router.post('/add', async (req, res) => {
    const { name, user_id, date_of_start, no_of_tickets, amount } = req.body;
    try {
        const chitti = new Chittis({
            user_id: user_id,
            name: name,
            date_of_start: date_of_start,
            no_of_tickets: no_of_tickets,
            amount: amount
        });
        await chitti.save()
        return res.status(200).json({
            status: 200,
            message: 'Chitti created successfully'
        });
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
});

module.exports = router;