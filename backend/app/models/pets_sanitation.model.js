module.exports = (sequelize, Sequelize) => {
    const Pet_sanitation = sequelize.define("Pets_sanitation", {
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

    return Pet_sanitation;
};