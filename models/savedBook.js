
//using extending model method to define model
const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class SavedBook extends Model {}
//init(attributes,options)
SavedBook.init(
    {
        book_id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
   
        title:{
           type:DataTypes.STRING,
           allowNull:false,
        },
       
        authors:{
            type:DataTypes.STRING
        },
        user_id:{
            type: DataTypes.INTEGER,
            references: {
              model: 'user',
              key: 'id',
            },
        },

        // isbn:{
        //     type:DataTypes.STRING
        // },

    },
    {
        sequelize,
        timestamps:false,
        freezeTableName: true,
        underscore: true,
        modelName:'savedbook'
    }

);

module.exports = SavedBook;