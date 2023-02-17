import dotenv from "dotenv";

dotenv.config();

const DefaultConfig = {
  PORT: process.env.PORT,
  MONGO_URI: "mongodb://bujit-db:27017/bujit",
};

export default DefaultConfig;
