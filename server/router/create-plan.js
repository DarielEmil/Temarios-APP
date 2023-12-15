const express = require("express");
const router = express.Router();
const { createPlan, getPlan, getPlanContent, getParrafos } = require("../controllers/planController");

router.post("/create-plan", createPlan);
router.get("/get-plan/:user", getPlan);
router.post("/get-plan-content", getPlanContent);
router.post("/get-parrafos", getParrafos);

module.exports = router;
