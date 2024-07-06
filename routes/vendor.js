require('dotenv').config()
const express = require('express')
const router = express.Router()
const VendorDetailsSchema = require("../models/vendorDetails");
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Chittis = require('../models/Chittis');


router.get('/all-chitti', async (req, res) => {
    const { id } = req.body;
    try {
        const chittis = await Chittis.find({ user_id: id })
        return res.status(200).json({
            status: 200,
            message: 'Chitti retrived successfully',
            data: chittis
        });
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
});

module.exports = router;