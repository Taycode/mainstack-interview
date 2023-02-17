import mongoose from "mongoose";
import BaseConfig from "../config";

export const Database = {
  async connect() {
    try {
      const db = await mongoose.connect(BaseConfig.MONGO_URI);
      console.log(" -> Database connected");
      return db;
    } catch (error) {
      console.log("-> Error connecting to DB");
      throw error;
    }
  },
};
