const mongoose = require("mongoose");

const OfferModel = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
});


module.exports=mongoose.model('OfferModel', OfferModel)