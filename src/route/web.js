const express = require('express');
import homeControllers from '../controllers/homeControllers';

let router = express.Router();

let initWebRoutes = (app) => {
    router.get('/', homeControllers.getHomePage);

    router.get('/atn', (req, res) => {
        return res.send('Hello world with atn!');
    })
    return app.use("/", router);
}

module.exports = initWebRoutes;