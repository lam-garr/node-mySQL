import express from "express";
import { GET_index, GET_allNotes, GET_oneNote, POST_saveNote, POST_updateTitle, POST_deleteNote} from "../controller/apiControllers.js";

const router = express.Router();

router.get("/", GET_index);

/* router.get("/getallnotes", async (req, res) => {
    const notes = await getNotes();
    res.send(notes);
}); */

router.get("/getallnotes", GET_allNotes);

router.get("/getonenote", GET_oneNote);

router.get("/savenote", POST_saveNote);

router.get("/updatetitle", POST_updateTitle);

router.get("/deletenote", POST_deleteNote);

export default router;

