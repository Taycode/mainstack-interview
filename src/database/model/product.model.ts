import { model, Schema } from "mongoose";

export type IProduct = {
  name: string;
  price: number;
};

const ProductSchema = new Schema<IProduct>({
  name: { type: String, required: true },
  price: { type: Number, required: true },
});

export const ProductModel = model("product", ProductSchema);
