import express from "express";
import  getBook  from "../controller/bookController.js";

const router = express.Router();

// GET all books
router.get('/', getBook);

export default router;