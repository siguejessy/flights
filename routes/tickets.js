const express = require('express');
const router = express.Router();
const ticketsCtrl = require('../controllers/tickets');

router.get('/', ticketsCtrl.index);
router.get('/new', ticketsCtrl.new);
router.get('/:id', ticketsCtrl.show);
// POST /movies/:id/reviews (create review for a movie)
router.post('/flights/:id/tickets', ticketsCtrl.create);

module.exports = router;