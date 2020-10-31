module.exports = app => {
    const pets = require("../controllers/pets.controller.js");

    var router = require("express").Router();

    router.post("/", pets.createPet);

    router.get("/", pets.getAllPets);

    router.get("/:id", pets.getOnePet);

    router.get("/health/:id", pets.getHealth);

    router.get("/vaccination/:id", pets.getVaccination);

    router.get("/sanitation/:id", pets.getSanitation);

    router.get("/owner/:id", pets.getPet_owner);


    app.use('/api/pets', router);
};