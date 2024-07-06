require('dotenv').config()
const express = require('express')
const router = express.Router()
const VendorDetailsSchema = require("../models/vendorDetails");
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Chittis = require('../models/Chittis');


router.get('/chitti', async (req, res) => {
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

router.get('/chitti/:id', async (req, res) => {
    const id = req.params.id
    try {
        const chittis = await Chittis.find({ _id: id })
        if (chittis.length === 0) {
            return res.status(404).json({ status: 404, message: "Chitti Not Found" });

        }
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