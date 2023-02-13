const express = require('express');
const jsonData = require('./json');

//instanciation du reouter
const router = express.Router();

//creation de l'api /getData qui retourne le fichier json jsonData
router.get('/getData', async (req, res) => {
    try{
        res.json(jsonData);
    }
    catch(error){
    res.status(500).json({message: error.message});
    }
})

//rendre l'api accessible dans tous le projet
module.exports = router;
