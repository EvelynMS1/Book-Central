const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class SavedBook extends Model {}

SavedBook.associate = models => {
    SavedBook.belongsTo(models.User, {
      foreignKey: 'user_id',
    });
};

SavedBook.init(
    {
        book_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
   
        title: {
           type: DataTypes.STRING,
           allowNull: false,
        },
       
        authors: {
            type: DataTypes.STRING,
        },

        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id',
            },
        },

        isbn: {
            type: DataTypes.STRING,
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'savedBook', // change modelName to 'SavedBook' to match the class name
    }
);

module.exports = SavedBook;
