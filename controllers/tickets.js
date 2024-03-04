const Ticket = require('../models/flight');
module.exports = {
    new: newTicket,
    index,
    show,
    create
  };
  
  async function index(req, res) {
    const tickets = await Ticket.find({});
    res.render('tickets', { title: 'All tickets', tickets });
  }
  
  async function show(req, res) {
    const flight = await Ticket.findById(req.params.id);
    res.render('tickets/show', { title: 'Ticket Details', flight });
  }
  
  
  function newTicket(req, res) {
  const dt = newTicket.departure;
  const ticket = Ticket.findById(req.params.id);
  
  // Format the date for the value attribute of the input
  // let departsDate = `${dt.getFullYear()}-${(dt.getMonth() + 1).toString().padStart(2, '0')}`;
  // departsDate += `-${dt.getDate().toString().padStart(2, '0')}T${dt.toTimeString().slice(0, 5)}`;
  res.render('tickets/new', { title: 'Add a ticket', errorMsg: '' });
  }
  
  async function create(req, res) {
    // convert nowShowing's checkbox of nothing or "on" to boolean
    req.body.booked = !!req.body.booked;
    // Remove empty properties so that defaults will be applied
    for (let key in req.body) {
      if (req.body[key] === '') delete req.body[key];
    }
    try {
      await Ticket.create(req.body);``
      // Always redirect after CUDing data
      // We'll refactor to redirect to the tickets index after we implement it
      res.redirect('/tickets');  // Update this line
    } catch (err) {
      // Typically some sort of validation error
      console.log(err);
      res.render('tickets/new', { errorMsg: err.message });
    }
  }