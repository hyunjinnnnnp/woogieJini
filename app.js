import { join } from "path";
import express from "express";
import logger from "morgan";
import Image from "./models/Image.js";
import "./db";

const app = express();

const PORT = 4000;

const handleListening = () => {
  console.log(`✅ Listening on : http://localhost:${PORT}`);
};

app.listen(PORT, handleListening);
app.set("view engine", "pug");
app.set("views", join(__dirname, "views"));
app.use(logger("dev"));
app.use(express.static(join(__dirname, "static")));

const handleHome = async (req, res) => {
  try {
    const imgObj = await Image.findById("603393838601131eecdbbdcb");
    const array = imgObj.imgList;
    console.log(array);
    res.render("home", { pageTitle: "BlaBLA", array });
  } catch (error) {
    console.log(error);
    res.render("home", { pageTitle: "failed", imgObj: [] });
  }
};

app.get("/", handleHome);
