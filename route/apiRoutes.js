import express from "express";
import { GET_index} from "../controller/apiControllers.js";
import {getNotes} from "../db.js"

const router = express.Router();

router.get("/", GET_index);

router.get("/getallnotes", async (req, res) => {
    const notes = await getNotes();
    res.send(notes);
});

export default router;

