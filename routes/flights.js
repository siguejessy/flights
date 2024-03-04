const express = require('express');
const router = express.Router();
const flightsCtrl = require('../controllers/flights');
	
<<<<<<< Updated upstream
// GET /flights
router.get('/flights', flightsCtrl.index);
// GET /flights/new
router.get('/flights/new', flightsCtrl.new);
// GET /flights/:id (show functionality) MUST be below new route
router.get('/flights/:id', flightsCtrl.show);
// POST /flights
router.post('/flights', flightsCtrl.create);
	
module.exports = router;
=======

router.get('/', flightsCtrl.index);
router.get('/new', flightsCtrl.new);
router.get('/:id', flightsCtrl.show);
router.post('/', flightsCtrl.create);


module.exports = router;
>>>>>>> Stashed changes
