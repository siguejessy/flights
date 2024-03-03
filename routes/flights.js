const express = require('express');
const router = express.Router();
// You'll be creating this controller module next
const flightsCtrl = require('../controllers/flights');
	
// GET /flights
router.get('/flights', flightsCtrl.index);
// GET /flights/new
router.get('/flights/new', flightsCtrl.new);
// GET /flights/:id (show functionality) MUST be below new route
router.get('/flights/:id', flightsCtrl.show);
// POST /flights
router.post('/flights', flightsCtrl.create);
	
module.exports = router;
