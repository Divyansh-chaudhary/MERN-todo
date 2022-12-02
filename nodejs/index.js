import express from "express";
import { connectDB } from "./start/db.js";
import TodoRouter from "./routes/todo.js";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(4000, () => {
  console.log("RUNNING PORT - ", 4000);
  connectDB();
});

app.use("/todo", TodoRouter);
