import express from "express"
import ProductModel from "./db/productModel.js"
const ProRouter = express.Router()

ProRouter.get("/",async(req, res) =>{
    const existingProducts = await ProductModel.find()
    console.log(existingProducts);
    res.json(existingProducts)

})

ProRouter.post("/add", async(req, res) => {
    const productToRegister = new ProductModel(req.body)
       res.json(productToRegister)
    let result = await productToRegister.save()
    console.log(result);
    res.json(result)
})


export default ProRouter;