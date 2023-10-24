import express from "express";
import Note from "../model/Note.js";

export function GET_index(req, res) {
    res.json({message:"Welcome"});
}

export async function GET_allNotes(req, res) {
    const [results] = await Note.findAll();
    res.send(results);
}