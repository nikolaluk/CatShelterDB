const Cat = require('../models/Cat');

const create = (name,description,imageUrl,breed) => {
    const cat = new Cat({name,description,imageUrl,breed});

    return cat.save();
}

const getAll = async () => {
    const cats = await Cat.find().lean();
    return cats;
}

const getById = (id) => {
    return Cat.findById(id).lean();
}

const updateById = (id,name,description,imageUrl,breed) => {
    return Cat.findByIdAndUpdate(id,{name,description,imageUrl,breed})
}

exports.create = create;
exports.getAll = getAll;
exports.getById = getById;
exports.updateById = updateById;