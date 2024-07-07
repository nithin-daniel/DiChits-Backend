require('dotenv').config()
const express = require('express')
const router = express.Router()
const UsersSchema = require("../models/users");


const mongoose = require('mongoose');
const Chittis = require('../models/Chittis');
const userChitti = require('../models/userChitti');
const suscriberDetails = require('../models/suscriberDetails');


router.post('/add', async (req, res) => {
    const { name, user_id, date_of_start, no_of_tickets, amount, vendor_id } = req.body;
    try {
        const companyName = await suscriberDetails.find({ user_id: user_id });
        const chitti = new Chittis({
            user_id: user_id,
            name: name,
            date_of_start: date_of_start,
            no_of_tickets: no_of_tickets,
            amount: amount,
            company_name: companyName.name
        });

        const user_chitti = new userChitti({
            vendor_id: vendor_id,
            user_id: user_id,
            chitti_id: chitti.id
        });

        await chitti.save();
        await user_chitti.save()

        return res.status(200).json({
            status: 200,
            message: 'Chitti created successfully'
        });
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
});

module.exports = router;