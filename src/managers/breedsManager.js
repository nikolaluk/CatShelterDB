const Breed = require('../models/Breed');

const create = (name) => {
    const breed = new Breed({name});

    return breed.save();
}

const getAll = async () => {
    const breeds = await Breed.find().lean();

    return breeds
}

exports.create = create;
exports.getAll = getAll;