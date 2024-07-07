require('dotenv').config()
const express = require('express')
const router = express.Router()



const mongoose = require('mongoose');
const chittiRequest = require('../models/chittiRequest');



router.post('/add', async (req, res) => {
    const { chitti_id, user_id } = req.body;
    try {
        const chittirequest = new chittiRequest({
            user_id: user_id,
            chitti_id: chitti_id
        });

        await chittirequest.save();

        return res.status(200).json({
            status: 200,
            message: 'Chitti created successfully'
        });
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
});

module.exports = router;