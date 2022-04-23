import express from "express";
import controller from "../controllers/example.controller.js";

const router = express.Router();
router.get("/something", controller.test);

export default router;
