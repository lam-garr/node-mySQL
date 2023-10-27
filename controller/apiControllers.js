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