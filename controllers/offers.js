const OfferModel = require("../models/offers");

// get, delete, post 


const addArOffer = async (req, res) => {
  try {
    const { text } = await req.body;

    if (text.length < 30) {
      return res.status(404).json({
        status: "FAILED",
        message: "Zəhmət olmasa daha ətraflı yazın!",
      });
    } else if (text.length > 30) {
      const newBlog = await OfferModel.create(req.body);
      return res.status(201).json({
        status: "OK",
        message: "Təklifiniz uğurla əlavə edilmişdir!",
        offer: newBlog,
      });
    }
  } catch (error) {
    return res.status(404).json({
      status: "FAILED",
      message: error.message,
    });
  }
};

const allOffers = async (req, res) => {
  try {
    const allOffers = await OfferModel.find();

    return res.status(200).json({
      status: "OK",
      message: "Bütün təkliflər",
      count: allOffers.length,
      offers: allOffers,
    });
  } catch (error) {
    return res.status(404).json({
      status: "FAILED",
      message: error.message,
    });
  }
};

const deleteOffer = async (req, res) => {
  try {
    const { id } = req.params;
    await OfferModel.findByIdAndDelete(id);
    const allOffers = await OfferModel.find();
    const count = allOffers.length;
    return res.status(200).json({
      status: "OK",
      message: "Mövcud təklif uğurla silindi!",
      count,
    });
  } catch (error) {
    return res.status(404).json({
      status: "FAILED",
      message: error.message,
    });
  }
};

module.exports = {
  addArOffer,
  allOffers,
  deleteOffer,
};
