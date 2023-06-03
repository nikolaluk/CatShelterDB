const router = require('express').Router();
const breedsManager = require('../managers/breedsManager');
const catsManager = require('../managers/catsManager');

//GET
router.get('/add-breed',(req,res) => {
    res.render('addBreed');
});

router.get('/add-cat', async(req,res) => {
    const breeds = await breedsManager.getAll();
    res.render('addCat',{breeds});
});

router.get('/edit/:id', async(req,res) => {
    const cat = await catsManager.getById(req.params.id);

    res.render('editCat', cat);
});

router.get('/shelter/:id', async(req,res) => {
    const cat = await catsManager.getById(req.params.id);

    res.render('catShelter',cat);
});


//POST
router.post('/add-breed', (req, res) => {
    const name = req.body.breed;
    breedsManager.create(name);
    res.redirect('/');
});

router.post('/add-cat', (req, res) => {
    const {name,description,imageUrl,breed} = req.body;
    catsManager.create(name,description,imageUrl,breed);
    res.redirect('/');
});

router.post('/edit/:id', async(req,res) => {
    const {name,description,imageUrl,breed} = req.body;

    await catsManager.updateById(req.params.id,name,description,imageUrl,breed);

    res.redirect('/');
});

router.post('/shelter/:id', async(req,res) => {
    const id = req.params.id;

    await catsManager.deleteById(id);
    
    res.redirect('/');
});

module.exports = router;