
//using extending model method to define model
const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class BookTest extends Model {}
//init(attributes,options)
BookTest.init(
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


        isbn:{
            type:DataTypes.STRING
        },

    },
    {
        sequelize,
        timestamps:false,
        freezeTableName: true,
        underscore: true,
        modelName:'bookTest'
    }

);

module.exports = BookTest;