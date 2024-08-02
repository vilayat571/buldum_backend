const mongoose = require("mongoose");

const url =
  "mongodb+srv://vilayat:9P4rGkZsnWBE5j7I@buldumcluster.eorxd9h.mongodb.net/?retryWrites=true&w=majority&appName=buldumcluster";

db = () => {
  mongoose
    .connect(url)
    .then(() => console.log("DB connected"))
    .catch((err) => console.log(err.message));
};

module.exports = db;
