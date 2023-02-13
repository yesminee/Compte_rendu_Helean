const express = require('express');
const jsonData = require('./json');

const router = express.Router();

router.get('/getData', async (req, res) => {
    try{
        res.json(jsonData);
    }
    catch(error){
    res.status(500).json({message: error.message});
    }
})

module.exports = router;