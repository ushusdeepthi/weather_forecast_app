import express from "express";

import { getAllData, getSingleData } from "../controllers/index.js";

const router = express.Router();

router.get("/", getAllData);
router.get("/:date", getSingleData);

export default router;
