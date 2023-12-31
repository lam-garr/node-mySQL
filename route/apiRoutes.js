import express from "express";
import { GET_index, GET_allNotes, 
    GET_oneNote, POST_saveNote, 
    POST_updateTitle, POST_deleteNote,
    POST_updateContents, GET_createdTime,
    GET_noteId} from "../controller/apiControllers.js";

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

router.get("/updatecontents", POST_updateContents);

router.get("/deletenote", POST_deleteNote);

router.get("/getcreatedtime", GET_createdTime);

router.get("/getid", GET_noteId);

export default router;

