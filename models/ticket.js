const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const ticketSchema= new Schema({
    seat: {
        type: String,
        match: /[A-F][1-9]\d?/
    },
    price: {
        type: Number,
        min: 0,
      },
<<<<<<< Updated upstream
    flight: {
      type: ObjectId,
        ref: 'Flight'
    },
} , {
=======
    }, {
>>>>>>> Stashed changes
  timestamps: true
});

// Compile the schema into a model and export it
module.exports = mongoose.model('Ticket', ticketSchema);