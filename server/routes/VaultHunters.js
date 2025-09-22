import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import VaultHunters from "../data/VaultHunters.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json(VaultHunters);
});

router.get("/:id", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../../client/public/vaulthunter.html"));
});

export default router;
