module.exports = app => {
    const shelters = require("../controllers/shelters.controller.js");

    var router = require("express").Router();

    router.get("/", shelters.getShelters);

    app.use('/api/shelters', router);
};