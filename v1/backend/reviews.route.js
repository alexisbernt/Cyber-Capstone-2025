import express from "express"
import AnotherFile from "./example.controller.js"

const router = express.Router()

router.route("/").get((req, res) => res.send("hello world"))