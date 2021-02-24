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
  const id = "60363acef9066826ffb5211e";
  try {
    const dataObj = await Image.findOne({
      _id: id,
    });
    const sources = dataObj.imgSrc;
    // console.log(dataObj.imgSrc);
    res.render("home", { pageTitle: "BlaBLA", sources });
  } catch (error) {
    console.log(error);
    res.render("home", { pageTitle: "failed", imgObj: [] });
  }
};

app.get("/", handleHome);
