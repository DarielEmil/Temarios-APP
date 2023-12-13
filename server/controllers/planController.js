const StudyPlan = require("../models/StudyPlan");
const { createPrompt, createJSON } = require("../util/planCreationOptions");

const createPlan = async (req, res) => {
   const { questions, language } = req.body;

   const API_KEY = "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";
   let result = null;
   try {
      const prompt = createPrompt(questions, language);
      const planResponse = await fetch("https://api.openai.com/v1/chat/completions", {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + API_KEY,
         },
         body: JSON.stringify({
            messages: [{ role: "user", content: prompt }],
            model: "gpt-3.5-turbo",
         }),
      });

      result = await planResponse.json();
   } catch (error) {
      console.log(error);
   }

   try {
      const studyPlan = new StudyPlan({
         userCreator: "cris",
         json: result.choices[0].message.content,
      });

      await studyPlan.save();
   } catch (error) {}

   return res.status(200).json({
      ok: true,
      content: createJSON(result),
   });
};

module.exports = {
   createPlan,
};
