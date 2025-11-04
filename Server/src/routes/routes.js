import express from "express";
import {get_db, add_db, update_db, delete_db} from "../controllers/controllers.js";


const Routes_db = express.Router();

Routes_db.get("/", get_db);
Routes_db.post("/", add_db);
Routes_db.put("/:id", update_db);
Routes_db.delete("/:id", delete_db);

export default Routes_db;