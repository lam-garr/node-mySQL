import express from "express";
import { GET_index, GET_allNotes} from "../controller/apiControllers.js";

const router = express.Router();

router.get("/", GET_index);

/* router.get("/getallnotes", async (req, res) => {
    const notes = await getNotes();
    res.send(notes);
}); */

router.get("/getallnotes", GET_allNotes);

export default router;

