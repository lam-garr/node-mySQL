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

    static findOne(id) {
        return db.query(`SELECT * FROM notes WHERE id = ${id}`)
    }

    static save(title, contents) {
        return db.query(`INSERT INTO notes (title, contents) VALUES (?,?)`,
        [title, contents]);
    }
}

export default Note;