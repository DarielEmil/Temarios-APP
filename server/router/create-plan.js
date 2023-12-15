const express = require("express");
const router = express.Router();
const planController = require("../controllers/planController");

router.get("/create-plan", planController.createPlan);

module.exports = router;
