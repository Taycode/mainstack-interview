import { ProductRepository } from "../../database/repository/product.repository";
import { CreateProductDto } from "./dto/create-product.dto";
import { UpdateProductDto } from "./dto/update-product.dto";
import { IProduct } from "../../database/model/product.model";

export class ProductService {
  async fetchAllProducts() {
    return ProductRepository.find({});
  }

  async fetchOneProduct(productId: string) {
    return ProductRepository.findOne({ _id: productId });
  }

  async createProduct(payload: CreateProductDto) {
    return ProductRepository.create(payload);
  }

  async deleteProduct(productId: string) {
    return ProductRepository.deleteOne(productId);
  }

  async updateProduct(productId: string, payload: UpdateProductDto) {
    const cleanedPayload: Partial<IProduct> = {
      name: payload.name,
      price: payload.price,
    };
    return ProductRepository.findOneAndUpdate(
      { _id: productId },
      cleanedPayload,
      { new: true, omitUndefined: true }
    );
  }
}
