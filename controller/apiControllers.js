import express from "express";

export function GET_index(req, res) {
    res.json({message:"Welcome"});
}