module.exports = (sequelize, Sequelize) => {
    const Pet_sanitasion = sequelize.define("Pets_sanitasion", {
        card_num: {
            type: Sequelize.STRING
        },
        order: {
            type: Sequelize.INTEGER
        },
        date: {
            type: Sequelize.STRING
        },
        medicine: {
            type: Sequelize.STRING
        },
        dose: {
            type: Sequelize.STRING
        },
    });

    return Pet_sanitasion;
};