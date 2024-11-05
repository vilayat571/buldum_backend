const express = require("express");
const { addReport, allReports, findReport, deleteReport } = require("../controllers/reports");
const router = express.Router();

router.post("/api/v1/reports/add", addReport);
router.get("/api/v1/reports", allReports);
router.delete("/api/v1/reports/delete/:id", deleteReport);
router.post("/api/v1/reports/find", findReport);

module.exports = router;
