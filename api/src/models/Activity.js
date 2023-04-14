const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Activity', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true,
        },
        name : {
            type : DataTypes.STRING,
            allowNull: false
        },
        dificulty : {
            type : DataTypes.INTEGER,
            allowNull: false,
            validate: {
                min: 1,
                max: 5
            }
        },
        duration : {
            type : DataTypes.INTEGER
        },
        season : {
            type: DataTypes.ENUM("Summer", "Autumn", "Winter", "Spring"),
            allowNull:false
        }
    })
}