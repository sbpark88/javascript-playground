import express, { response } from "express";
import path from "path";

const router = express.Router();
const __dirname = path.resolve();

export default router;

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "main.html"))
})

router.get("/playground1", (req, res) => {
  res.render(path.join(__dirname, "views", "group1/playground1.ejs"))
})

router.get("/playground2", (req, res) => {
  res.render(path.join(__dirname, "views", "group1/playground2.ejs"))
})

router.get("/playground3", (req, res) => {
  res.render(path.join(__dirname, "views", "group2/playground3.ejs"))
})
