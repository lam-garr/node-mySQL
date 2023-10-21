import express from "express";
import { GET_index} from "../controller/apiControllers.js";

const router = express.Router();

router.get("/", GET_index);

export default router;

