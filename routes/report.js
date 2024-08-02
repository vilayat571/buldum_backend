const express = require("express");
const { addReport, allReports } = require("../controllers/reports");
const router = express.Router();

router.post("/api/v1/reports/add", addReport);
router.get("/api/v1/reports", allReports);

module.exports = router;
