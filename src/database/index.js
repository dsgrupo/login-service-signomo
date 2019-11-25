const Sequelize = require('sequelize');

const User = require('../app/models/User');
const Review = require('../app/models/Review');
const dbConfig = require('../config/database');

const connection = new Sequelize(dbConfig);

User.init(connection);
Review.init(connection);

User.associate(connection.models);
Review.associate(connection.models);

module.exports = connection;
