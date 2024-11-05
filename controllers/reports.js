const ReportSchema = require("../models/reports.js");

const addReport = async (req, res) => {
  try {
    const {
      categories,
      isActive,
      city,
      area,
      description,
      fullName,
      status,
      email,
      phone,
    } = req.body;
    const idCode = String(Math.random()).slice(2, 7);
    const newReport = await ReportSchema.create({
      categories,
      isActive,
      city,
      area,
      description,
      fullName,
      status,
      email,
      phone,
      code: idCode,
    });

    const reports = await ReportSchema.find();

    return res.status(201).json({
      status: "OK",
      message: "Elan baxış üçün anbara əlavə edildi!",
      count: reports.length,
      code: newReport.code,
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
    const { status, categories } = req.query;
    const limitValue = req.query.limit;
    const skipValue = req.query.skip;

    const filter = {};
    if (status) filter.status = status;
    if (categories) filter.categories = categories;

    let reports = await ReportSchema.find(filter)
      .limit(limitValue)
      .skip(skipValue);

    return res.status(200).json({
      status: "OK",
      message: "Bütün elanlar",
      count: reports.length,
      reports: reports,
    });
  } catch (error) {
    return res.status(404).json({
      status: "FAILED",
      message: error.message,
    });
  }
};

const findReport = async (req, res) => {
  try {
    const { code } = await req.body;
    const idCode = await ReportSchema.findOne({ code });

    if (idCode) {
      return res.status(200).json({
        status: "OK",
        message: "Kodunuza uyğun elan!",
        report: idCode,
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

const deleteReport = async (req, res) => {
  try {
    
    const { id } = req.params; 

    if (id) {
      await ReportSchema.findByIdAndDelete(id);
      const reports = await ReportSchema.find(); 
      return res.status(200).json({
        status: "OK",
        message: "Elan silinmişdir",
        count: reports.length,
        reports,
      });
    } else {
      const reports = await ReportSchema.find(); 
      return res.status(401).json({
        status: "FAILED",
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
  findReport,
};
