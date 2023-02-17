import dotenv from "dotenv";

dotenv.config();

const keys = process.env;

const DefaultConfig = {
  PORT: keys.PORT as string,
  MONGO_URI: keys.MONGO_URI as string,
};

export default DefaultConfig;
