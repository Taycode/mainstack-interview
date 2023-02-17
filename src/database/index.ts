import mongoose from "mongoose";
import BaseConfig from "../config";

export const Database = {
  async connect() {
    try {
      const db = await mongoose.connect(BaseConfig.MONGO_URI);
      process.stdout.write(" -> Database connected");
      return db;
    } catch (error) {
      process.stdout.write("-> Error connecting to DB");
      throw error;
    }
  },
};
