import express from "express"
import ProductModle from "./DB/ProductModel.js"
const ProductRouter = express.Router()

ProductRouter.get("/" ,async(req,res)=>{
    const existinProducts= await ProductModle.find()
    console.log(existinProducts);
    res.json(existinProducts)
})



  ProductRouter.post("/add",async(req,res)=>{
    const productToRegister = new ProductModle(req.body)
    let result= await productToRegister.save()
    res.json(result)
  })

  export default ProductRouter