import express from "express";
import Note from "../model/Note.js";

export function GET_index(req, res) {
    res.json({message:"Welcome"});
}

export async function GET_allNotes(req, res) {
    const [results] = await Note.findAll();
    res.send(results);
}

export async function GET_oneNote(req, res) {
    const [results] = await Note.findOne(1);
    res.send(results);
}

export async function POST_saveNote(req, res) {
    const [results] = await Note.save("Another note", "note of something else");
    res.json(results.insertId);
}

export async function POST_updateTitle(req, res) {
    const [results] = await Note.updateTitle("New Title", 3);
    res.json(results);
}

export async function POST_updateContents(req, res) {
    const [results] = await Note.updateContents("New Contents", 5);
    res.json(results);
}

export async function POST_deleteNote(req, res) {
    const [results] = await Note.deleteOne(3);
    res.json(results);
}

export async function GET_createdTime(req, res) {
    const [results] = await Note.getCreatedTime(1);
    res.json(results[0].created);
}

export async function GET_noteId(req, res) {
    const [results] = await Note.getId(1);
    res.json(results[0].id);
}