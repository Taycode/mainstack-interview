import { ProductController } from "../modules/product/product.controller";
import { Router } from "express";

const productController = new ProductController();

const router: Router = Router();

router.get("/fetch", productController.fetchAllProducts);
router.get("/fetch/:productId", productController.fetchOneProduct);
router.post("/create", productController.createProduct);
router.patch("/update/:productId", productController.updateProduct);
router.delete("/delete/:productId", productController.deleteProduct);

export const ProductRouter = router;
