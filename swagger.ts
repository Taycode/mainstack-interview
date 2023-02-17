import swaggerAutogen from "swagger-autogen";

swaggerAutogen();

const outputFile = "./src/docs/swagger_output.json";
const endpointsFiles = ["./src/routes/index.ts"];

swaggerAutogen(outputFile, endpointsFiles);
