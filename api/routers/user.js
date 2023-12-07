import express from "express";
import { getBalance, getPending, setBalance } from "../controlers/user.js";

const Router = express.Router();

Router.post("/setbalance/:id", setBalance);
Router.get("/getbalance/:id", getBalance);
Router.get("/pending/:id", getPending);

export default Router;
