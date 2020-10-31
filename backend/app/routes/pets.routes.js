module.exports = app => {
    const pets = require("../controllers/pets.controller.js");

    var router = require("express").Router();

    router.post('/main', pets.createPet_main);
    router.post('/additional/:id', pets.createPet_additional);
    router.post('/catch/:id', pets.createPet_catch_info);
    router.post('/move/:id', pets.createPet_move);
    router.post('/responsible/:id', pets.createPet_responsible);

    router.post('/vac', pets.makeVaccination);
    router.post('/san', pets.makeSanitation);
    router.post('/health', pets.makeHealth);

    router.get("/", pets.getAllPets);

    router.get("/:id", pets.getOnePet);

    router.get("/health/:id", pets.getHealth);

    router.get("/vaccination/:id", pets.getVaccination);

    router.get("/sanitation/:id", pets.getSanitation);

    router.get("/owner/:id", pets.getPet_owner);


    app.use('/api/pets', router);
};