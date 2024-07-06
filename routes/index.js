const express = require('express');
const router = express.Router();



const auth = require('./users');
const suscriberDetails = require('./subscriber');


router.use('/auth', auth);
router.use('/user', suscriberDetails);



router.get('/', (req, res) => {
    res.json({
        status: 200,
        message: 'API is working properly'
    });
});


module.exports = router;