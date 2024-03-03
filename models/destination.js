const mongoose = require('mongoose');
const Schema = mongoose.Schema;
  
const destinationSchema = new Schema({
    airport: {
      type: String,
      enum: ['AUS', 'SAL', 'MEX', 'CDG', 'PDX']
    },
    arrival: {
      type: Date,
        },
  }, {
    timestamps: true
  });
  
module.exports = mongoose.model('Destination', destinationSchema);