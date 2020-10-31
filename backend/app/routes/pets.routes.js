module.exports = app => {
    const pets = require("../controllers/pets.controller.js");

    var router = require("express").Router();

    router.get("/", pets.getAllPets);

    router.get("/:id", pets.getOnePet);

    app.use('/api/pets', router);
};