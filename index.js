const express = require("express");
const cors = require("cors");
const app = express();
const db = require("./config/db.js");
app.use(cors());
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
db();

const Reports = require("./routes/report.js");
const Offer = require("./routes/offer.js");
app.use("/", Reports);
app.use("/", Offer);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Backend started to listen on port ${PORT}`);
});
