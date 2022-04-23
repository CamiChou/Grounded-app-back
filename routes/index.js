import express from "express";
const router = express.Router();

import example from "./example.route.js";

// Splits routes into courses and majors
router.use("/test", example);

export default router;
