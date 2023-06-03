const Breed = require('../models/Breed');

const getAll = async function(){
    let breeds = await Breed.find().lean();

    return breeds;
}

exports.getAll = getAll;