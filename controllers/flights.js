// controllers/flights.js
const Flight = require('../models/flight');

module.exports = {
  index,
  show,
  new: newFlight,
  create
};


async function index(req, res) {
  const flights = await Flight.find({});
  res.render('flights/index', { title: 'All Flights', flights });
}

async function show(req, res) {
  const flight = await Flight.findById(req.params.id);
  res.render('flights/show', { title: 'Flight Details', flight });
}
//OG Code from mongoose movie lab
// function newFlight(req, res) {
//   // We'll want to be able to render an  
//   // errorMsg if the create action fails
//   res.render('flights/new', { title: 'Add a Flight', errorMsg: '' });
// }

const newFlight = new Flight();
// Obtain the default date
const dt = newFlight.departs;
// Format the date for the value attribute of the input
let departsDate = `${dt.getFullYear()}-${(dt.getMonth() + 1).toString().padStart(2, '0')}`;
departsDate += `-${dt.getDate().toString().padStart(2, '0')}T${dt.toTimeString().slice(0, 5)}`;
res.render('flights/new', { departsDate });


async function create(req, res) {
  // convert nowShowing's checkbox of nothing or "on" to boolean
  req.body.booked = !!req.body.booked;
  // Remove empty properties so that defaults will be applied
  for (let key in req.body) {
    if (req.body[key] === '') delete req.body[key];
  }
  try {
    await Flight.create(req.body);``
    // Always redirect after CUDing data
    // We'll refactor to redirect to the flights index after we implement it
    res.redirect('/flights');  // Update this line
  } catch (err) {
    // Typically some sort of validation error
    console.log(err);
    res.render('flights/new', { errorMsg: err.message });
  }
}