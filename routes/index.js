const express = require('express');
const router = express.Router();



const auth = require('./users');
const suscriberDetails = require('./subscriber');
const Chittis = require('./chittis');
const payment = require('./payment');
const vendorDetails = require('./vendor');


router.use('/auth', auth);
router.use('/user', suscriberDetails);
router.use('/chitti', Chittis);
router.use('/payment', payment);
router.use('/vender', vendorDetails);






router.get('/', (req, res) => {
    res.json({
        status: 200,
        message: 'API is working properly'
    });
});


module.exports = router;