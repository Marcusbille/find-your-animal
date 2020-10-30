module.exports = (sequelize, Sequelize) => {
    const Pet_image = sequelize.define("Pets_images", {
        card_num: {
            type: Sequelize.STRING
        },
        image_src: {
            type: Sequelize.STRING
        }
    });

    return Pet_image;
};