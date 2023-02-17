import { BaseRepository } from "./base";
import { ProductModel, IProduct } from "../model/product.model";

export const ProductRepository = new BaseRepository<IProduct>(ProductModel);
