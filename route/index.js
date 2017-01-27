'use strict'

const express = require('express');
const routes = express.Router();
const db = require('../models');
const Hotel = db.models.Hotel;
const Restaurant = db.models.Restaurant;
const Activity = db.models.Activity;

routes.get('/', function(req, res, next) {

  const hotelPromise = Hotel.findAll();
  const restaurantPromise = Restaurant.findAll();
  const activityPromise = Activity.findAll();
  Promise.all([hotelPromise, restaurantPromise, activityPromise])
  .then(function([hotels, restaurants, activities]) {

    // hotels.forEach(function(hotel) {
    //   console.log(hotel.name);
    // })
    // restaurants.forEach(function(rest) {
    //   console.log(rest.name);
    // })
    // activities.forEach(function(activity) {
    //   console.log(activity.name);
    // })

    res.render('index', { hotels, restaurants, activities});
  })
  .catch(next)
});

module.exports = routes;
