const mongoose = require('mongoose');
// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

const flightSchema = new Schema({
    airline: {
        type: String,
        enum: ['American', 'Delta', 'JetBlue', 'United', 'Southwest']
      },
    airport: {
        type: String,
        enum: ['AUS', 'DEN', 'LAX', 'SAN', 'PDX'],
        default: 'DEN'
      },
    flightNo: {
      type: Number,
      min: 10,
        max: 9999,
        required: true
    },
    departure: {
        type: Date,
        default: function() {
        let date = new Date();
        date.setFullYear(date.getFullYear() + 1);
        return date;
          },
    destinations: [destinationSchema],
    booked: { type: Boolean, default: true },
},
} , {
  timestamps: true
});




// Compile the schema into a model and export it
module.exports = mongoose.model('Flight', flightSchema);