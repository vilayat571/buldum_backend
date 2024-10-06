const expres = require("express");
const { addArOffer, allOffers, deleteOffer } = require("../controllers/offers");

const router = expres.Router();

router.post("/api/v1/offers/add", addArOffer);
router.get("/api/v1/offers", allOffers);
router.delete("/api/v1/offers/:id", deleteOffer);

module.exports = router;
