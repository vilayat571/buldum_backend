const ReportSchema = require("../models/reports.js");

const addReport = async (req, res) => {
  try {
    const newReport = await ReportSchema.create(req.body);
    const reports = await ReportSchema.find();

    return res.status(201).json({
      status: "OK",
      message: "Elan baxış üçün anbara əlavə edildi!",
      count: reports.length,
      report: newReport,
    });
  } catch (error) {
    return res.status(404).json({
      status: "FAILED",
      message: error.message,
    });
  }
};

const allReports = async (req, res) => {
  try {
    const reports = await ReportSchema.find();
    return res.status(201).json({
      status: "OK",
      message: "Bütün elanlar!",
      count: reports.length,
      reports,
    });
  } catch (error) {
    return res.status(404).json({
      status: "FAILED",
      message: error.message,
    });
  }
};

const deleteReport = async (req, res) => {
  try {
    const { id } = await req.params;

    if (id) {
      await ReportSchema.findByIdAndDelete(id);
      return res.status(200).json({
        status: "OK",
        message: "Elan silinmişdir",
        count: reports.length,
        reports,
      });
    } else {
      return res.status(200).json({
        status: "Failed",
        message: "Belə bir elan yoxdur!",
        count: reports.length,
        reports,
      });
    }
  } catch (error) {
    return res.status(404).json({
      status: "FAILED",
      message: error.message,
    });
  }
};

module.exports = {
  addReport,
  allReports,
  deleteReport,
};
