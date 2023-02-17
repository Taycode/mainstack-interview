import { ProductService } from "./product.service";
import { Response, Request } from "express";
import { CreateProductDto } from "./dto/create-product.dto";
import { UpdateProductDto } from "./dto/update-product.dto";

const productService = new ProductService();

export class ProductController {
  async createProduct(req: Request, res: Response) {
    const payload: CreateProductDto = req.body;
    const newProduct = await productService.createProduct(payload);
    return res.status(201).json({
      status: true,
      message: "Product created successfully",
      data: newProduct,
    });
  }
  async fetchAllProducts(req: Request, res: Response) {
    const products = await productService.fetchAllProducts();
    return res.status(200).json({
      status: true,
      message: "Product fetched successfully",
      data: products,
    });
  }
  async fetchOneProduct(req: Request, res: Response) {
    const { productId } = req.params;
    const fetchedProduct = await productService.fetchOneProduct(productId);
    return res.status(200).json({
      status: true,
      message: "Product fetched successfully",
      data: fetchedProduct,
    });
  }
  async deleteProduct(req: Request, res: Response) {
    const { productId } = req.params;
    const deletedProduct = await productService.deleteProduct(productId);
    return res.status(200).json({
      status: true,
      message: "Product deleted successfully",
      data: deletedProduct,
    });
  }
  async updateProduct(req: Request, res: Response) {
    const { productId } = req.params;
    const payload: UpdateProductDto = req.body;
    const updatedProduct = await productService.updateProduct(
      productId,
      payload
    );
    return res.status(200).json({
      status: true,
      message: "Product updated successfully",
      data: updatedProduct,
    });
  }
}
