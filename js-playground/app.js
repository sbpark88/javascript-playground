import express from "express";
import router from "./router/index.js";
import ejs from "ejs";

const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Playground app listening at http://localhost:${port}`)
})

app.use(express.static("public"));
app.use(express.static("router"));
app.use("/scripts", express.static("node_modules"));
app.disable("etag");
app.set("views", "/views");
app.set("view engine", "ejs");
app.engine("ejs", ejs.renderFile);
app.use(router);
