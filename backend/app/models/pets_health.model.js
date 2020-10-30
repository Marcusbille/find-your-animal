module.exports = (sequelize, Sequelize) => {
    const Pet_health = sequelize.define("Pets_health", {
        card_num: {
            type: Sequelize.STRING
        },
        check_date: {
            type: Sequelize.STRING
        },
        anamnesis: {
            type: Sequelize.STRING
        }
    });

    return Pet_health;
};