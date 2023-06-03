const express = require('express');
const path = require('path');


function expressConfig(app){
    app.use(express.static(path.resolve(__dirname,'../content')));
    app.use(express.urlencoded({ extended: false }))
}

module.exports = expressConfig;