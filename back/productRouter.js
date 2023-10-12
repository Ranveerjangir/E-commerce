import express from "express"
import ProductModel from "./DB/productModel.js"
const ProductRouter = express.Router()

ProductRouter.get("/",async(req, res) =>{
    const existingProducts = await ProductModel.find()
    console.log(existingProducts);
    res.json(existingProducts)

})

ProductRouter.post("/add", async(req, res) => {
    const productToRegister = new ProductModel(req.body)
    console.log(productToRegister);
    let result = await productToRegister.save()
    res.json(result)
})


export default ProductRouter;