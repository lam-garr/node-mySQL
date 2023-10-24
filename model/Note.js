import db from "../db.js";

class Note {
    constructor(title, contents) {
        this.title = title;
        this.contents = contents;
    }

    static findAll() {
        let sql = "SELECT * FROM notes";
        return db.execute(sql);
    }
}

export default Note;