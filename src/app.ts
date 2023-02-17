import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import AppRoute from "./routes";
import Docs from "./docs";
import { Database } from "./database";

export default class App {
  static async boot() {
    const app = express();
    app.use(cors());
    app.use(bodyParser.json());
    await Database.connect();
    AppRoute(app);
    Docs(app);
    return app;
  }
}
