import express from "express";
import fileUpload from "express-fileupload";
import { uploadExcel, saveExcel } from "../controller/BookController.js";

const router = express.Router();
router.use(fileUpload());

router.post("/uploadExcel", uploadExcel);

router.post("/saveExcel", saveExcel);

export default router;
