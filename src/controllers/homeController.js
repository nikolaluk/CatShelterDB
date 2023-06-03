const router = require('express').Router();

//GET
router.get('/', async (req,res) => {
    //const cats = await catManager.getAll();

    res.render('index');
});

module.exports = router;