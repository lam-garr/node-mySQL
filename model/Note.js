import db from "../db.js";

class Note {
    constructor(title, contents) {
        this.title = title;
        this.contents = contents;
    }
}

export default Note;