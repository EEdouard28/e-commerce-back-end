const { Model, DataTypes, INTEGER } = require('sequelize');

const sequelize = require('../config/connection.js');

//new sequelize model for category
//define primary key
class Category extends Model {}

Category.init({
    // define columns
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    category_name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, 
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category', //ability to create foreign key on different table
  }
);

module.exports = Category;

