const router = require('express').Router();
const catsManager = require('../managers/catsManager');

router.get('/', async(req,res) => {
    const search = req.query.search;
    const cats = await catsManager.getAll(search);
    res.render('index',{cats,search});
});

module.exports = router;