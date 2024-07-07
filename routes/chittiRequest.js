require('dotenv').config()
const express = require('express')
const router = express.Router()



const mongoose = require('mongoose');
const chittiRequest = require('../models/chittiRequest');
const Chittis = require('../models/Chittis');


router.get('/', async (req, res) => {
    const { chittiId } = req.body;

    try {
        const chitti = await chittiRequest.find({ chitti_id: chittiId, status: "PENDING" })
        if (chitti.length === 0) {
            return res.status(404).json({ message: "Chitti not found" });

        }

        return res.status(200).json({
            status: 200,
            message: 'Chitti request list successfully',
            data: chitti
        });
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
});

router.post('/accept', async (req, res) => {
    const { chittiId } = req.body;

    try {
        const chitti = await chittiRequest.findOne({ chitti_id: chittiId, status: "PENDING" })
        if (chitti.length === 0) {
            return res.status(404).json({ message: "Chitti not found" });

        }
        chitti.status = "ACCEPTED"
        await chitti.save()

        return res.status(200).json({
            status: 200,
            message: 'Chitti request accepted successfully',
            data: chitti
        });
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
});

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