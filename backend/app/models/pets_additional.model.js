module.exports = (sequelize, Sequelize) => {
    const Pet_additional = sequelize.define("Pets_additional", {
        card_num: {
            type: Sequelize.STRING
        },
        id_tag: {
            type: Sequelize.BIGINT
        },
        ster_date: {
            type: Sequelize.STRING
        },
        doctor: {
            type: Sequelize.STRING
        },
        socialised: {
            type: Sequelize.STRING
        }
    });

    return Pet_additional;
};