const StudyPlan = require("../models/StudyPlan");
const { createPrompt, createJSON, createPromptParrafo } = require("../util/planCreationOptions");

const createPlan = async (req, res) => {
   const { questions, language, user } = req.body;

   const API_KEY = process.env.API_KEY;
   let result = null;

   try {
      console.log("STAR CREATING PLAN");
      const prompt = createPrompt(questions, language);
      const planResponse = await fetch("https://api.openai.com/v1/chat/completions", {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
            authorization: "Bearer " + API_KEY,
         },
         body: JSON.stringify({
            messages: [{ role: "user", content: prompt }],
            model: "gpt-3.5-turbo",
         }),
      });

      result = await planResponse.json();
   } catch (error) {
      return res.status(400).json({
         ok: false,
         content: error,
      });
   }

   try {
      console.log("SAVING IN DB");
      const studyPlan = new StudyPlan({
         userCreator: user,
         json: result.choices[0].message.content,
      });

      await studyPlan.save();
   } catch (error) {
      return res.status(400).json({
         ok: false,
         content: error,
      });
   }

   return res.status(200).json({
      ok: true,
      content: createJSON(result),
   });
};

const getPlan = async (req, res) => {
   let { user } = req.params;
   console.log();
   user = user.split("=");
   const studyPlans = await StudyPlan.find({ userCreator: user[1] });
   const result = await studyPlans;
   return res.status(200).json({
      ok: true,
      content: result,
   });
};
const getPlanContent = async (req, res) => {
   const { _id } = req.body;

   const studyPlans = await StudyPlan.findOne({ _id });
   const result = await studyPlans;
   console.log("result");
   return res.status(200).json({
      ok: true,
      content: result,
   });
};
const getParrafos = async (req, res) => {
   const { text } = req.body;
   const API_KEY = process.env.API_KEY;
   let result = null;

   try {
      console.log("STAR CREATING PLAN");
      const prompt = createPromptParrafo(text);
      const planResponse = await fetch("https://api.openai.com/v1/chat/completions", {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
            authorization: "Bearer " + API_KEY,
         },
         body: JSON.stringify({
            messages: [{ role: "user", content: prompt }],
            model: "gpt-3.5-turbo",
         }),
      });

      result = await planResponse.json();
      console.log(result);
   } catch (error) {
      console.log("error");
      return res.status(400).json({
         ok: false,
         content: error,
      });
   }

   return res.status(200).json({
      ok: true,
      content: result.choices[0].message.content,
   });
};

module.exports = {
   createPlan,
   getPlan,
   getPlanContent,
   getParrafos,
};
