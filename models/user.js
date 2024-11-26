const { DataTypes } = require('sequelize');
const sequelize = require('../db'); // Import Sequelize instance

const User = sequelize.define(
  'User',
  {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password_hash: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    first_name: {
      type: DataTypes.STRING,
    },
    last_name: {
      type: DataTypes.STRING,
    },
    phone_number: {
      type: DataTypes.STRING,
    },
  },
  {
    tableName: 'Users', // Match your database table name
    timestamps: false, // Disable Sequelize's default createdAt/updatedAt fields
  },
);

module.exports = User;
