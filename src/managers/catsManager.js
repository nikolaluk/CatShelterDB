const Cat = require('../models/Cat');

const create = (name,description,imageUrl,breed) => {
    const cat = new Cat({name,description,imageUrl,breed});

    return cat.save();
}

const getAll = async (search) => {
    let cats = await Cat.find().lean();

    if(search){
        cats = cats.filter(cat => cat.breed.toLowerCase().includes(search.toLowerCase()));
    }

    return cats;
}

const getById = (id) => {
    return Cat.findById(id).lean();
}

const updateById = (id,name,description,imageUrl,breed) => {
    return Cat.findByIdAndUpdate(id,{name,description,imageUrl,breed})
}

const deleteById = (id) => {
    return Cat.findByIdAndDelete(id);
}

exports.create = create;
exports.getAll = getAll;
exports.getById = getById;
exports.updateById = updateById;
exports.deleteById = deleteById;