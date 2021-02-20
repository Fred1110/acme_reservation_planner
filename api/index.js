const router = require ('express').Router();
const  {models: {User, Restaurant, Reservation}} = require('../db');

router.get('/users', async(req, res, next) => {
  try {
    res.send(await User.findAll())
  } catch (error) {
    next(error)
  }
});

router.get('/restaurants', async(req, res, next) => {
  try {
    res.send(await Restaurant.findAll())
  } catch (error) {
    next(error)
  }
});

router.get('/reservations', async(req, res, next) => {
  try {
    res.send(await Reservation.findAll())
  } catch (error) {
    next(error)
  }
});

module.exports = router;
