const express = require("express");
const router = express.Router();
// -------------------------------------------------------------- BAT Apply routes
const registerRouter = require("./routes/register.js");
const contactDetailsRouter = require("./routes/contact-details.js");
const correspondenceRouter = require("./routes/correspondence.js");
const dashboardRouter = require("./routes/dashboard.js");
const personalDetailsRouter = require("./routes/personal-details.js");
const educationRouter = require("./routes/education-and-qualifications.js");
const workHistoryRouter = require("./routes/work-experience.js");

// -------------------------------------------------------------- routes
router.get("/your-application", dashboardRouter);
router.get("/register/:step", registerRouter);
router.get("/personal-details/:step", personalDetailsRouter);
router.get("/contact-details/main/:area?", contactDetailsRouter);
router.get("/contact-details/correspondence/:area?", correspondenceRouter);
router.get("/education-and-qualifications/:step?", educationRouter);
router.get("/work-history/:step?", workHistoryRouter);
// -------------------------------------------------------------- export
module.exports = router;