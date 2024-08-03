const express = require("express");
const { addReport, allReports, findReport } = require("../controllers/reports");
const router = express.Router();

router.post("/api/v1/reports/add", addReport);
router.get("/api/v1/reports", allReports);
router.post("/api/v1/reports/find", findReport);

module.exports = router;
