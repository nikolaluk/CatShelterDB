//System modules
const express = require('express');

//Modules
const expressConfig = require('./config/expressConfig');
const handlebarsConfig = require('./config/handlebarsConfig');
const dbConfig = require('./config/dbConfig');

//Router
const homeController = require('./controllers/homeController');
const catsController = require('./controllers/catsController');

//const router = require('./routes');

//App
const app = express();
const port = 5000;

//Config
expressConfig(app);
handlebarsConfig(app);
dbConfig()
    .then(() => console.log("DB connected successfully"))
    .catch((err) => console.log('DB error', err.message));

//Routes
app.use(homeController);
app.use('/cats',catsController);





app.listen(port, () => console.log(`Server listening on port ${port}...`));