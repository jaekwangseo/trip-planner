'use strict'

const db = require('./db');
const Place = require('./place');
const Activity = require('./activity');
const Hotel = require('./hotel');
const Restaurant = require('./restaurant');

Activity.belongsTo(Place);
Restaurant.belongsTo(Place);
Hotel.belongsTo(Place);

module.exports = db;