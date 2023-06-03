const router = require('express').Router();
const catsManager = require('../managers/catsManager');

router.get('/', async(req,res) => {
    const cats = await catsManager.getAll();
    res.render('index',{cats});
});

module.exports = router;