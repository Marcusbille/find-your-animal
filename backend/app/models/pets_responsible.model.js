module.exports = (sequelize, Sequelize) => {
    const Pet_responsible = sequelize.define("Pets_responsible", {
        card_num: {
            type: Sequelize.STRING
        },
        person: {
            type: Sequelize.STRING,
        }
    });

    return Pet_responsible;
};