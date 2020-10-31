module.exports = app => {
    const pets = require("../controllers/pets.controller.js");

    var router = require("express").Router();

    router.get("/", pets.getAllPetsPartly);

    app.use('/api/pets', router);
};