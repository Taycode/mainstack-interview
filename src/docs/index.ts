import swaggerUi from "swagger-ui-express";
import { Express } from "express";
import swaggerFile from "./swagger_output.json";

export default (app: Express) => {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));
};
