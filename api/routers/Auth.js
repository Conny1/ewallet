import express from "express";
import { Login, Register, Verifybyemail } from "../controlers/Auth.js";

const Router = express.Router();

Router.post("/register", Register);
Router.post("/login", Login);

Router.put("/verify", Verifybyemail);

export default Router;
