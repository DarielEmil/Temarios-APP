const mongoose = require("mongoose");

const studyPlanSchema = new mongoose.Schema({
   userCreator: {
      type: String,
      required: true,
   },
   json: {
      type: String,
      required: true,
   },
});

const StudyPlan = mongoose.model("StudyPlan", studyPlanSchema);

module.exports = StudyPlan;
