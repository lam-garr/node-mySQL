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

    static updateTitle(newTitle, id) {
        return db.query(`UPDATE notes SET title = '${newTitle}' WHERE id = ${id}`);
    }

    static deleteOne(id) {
        return db.query(`DELETE FROM notes WHERE id = ${id}`);
    }  
}

export default Note;