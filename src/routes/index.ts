import { Express, Request, Response } from "express";
import { ProductRouter } from "./product.router";

const Route = (app: Express) => {
  app.use("/product", ProductRouter);
  app.get("/", async (req: Request, res: Response) => {
    res.send("Hello World");
  });
  return app;
};

export default Route;
