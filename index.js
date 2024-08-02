const express = require("express");
const cors = require("cors");
const Reports = require("./routes/report.js");
const app = express();
const db=require('./config/db.js');

db();


app.use(cors());
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));

app.use("/", Reports);
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Backend started to listen on port ${PORT}`);
});
