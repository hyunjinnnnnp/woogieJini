import { join } from "path";
import express from "express";
import logger from "morgan";

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

// const handleHome = () => console.log("from app.js");

app.get("/", (req, res) => {
  res.render("home", { pageTitle: "Bye" });
});
