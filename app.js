import "./db";
import bodyParser from "body-parser";
import { join } from "path";
import express from "express";
import logger from "morgan";
import Image from "./models/Image.js";
import "./models/Image";

const app = express();

const PORT = 4000;

const handleListening = () => {
  console.log(`✅ Listening on : http://localhost:${PORT}`);
};

app.use(bodyParser.json());
app.listen(PORT, handleListening);
app.set("view engine", "pug");
app.set("views", join(__dirname, "views"));
app.use(logger("dev"));

app.use(express.static(join(__dirname, "static")));

const handleHome = async (req, res) => {
  try {
    const image = await Image.findOne({});
    const sources = image.imgSrc;
    res.render("home", { pageTitle: "BlaBLA", sources });
  } catch (error) {
    console.log(error);
    res.render("home", { pageTitle: "failed", sources: [] });
  }
};

app.get("/", handleHome);
