import express  from "express";
import cors from 'cors'
import mongoose from "mongoose";
import ProductRouter from "./ProductRouter.js";
import userRouter from "./userRouter.js";
import AdminRouter from'./AdminRouter.js'

const connection = mongoose.connect("mongodb://127.0.0.1:27017/e-commerce")

const app = express()
app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(cors())

app.use("/product",ProductRouter)

connection.then(()=>{
    app.listen(6000,()=>{
        console.log("Server is running at port 6000");
    })
})
.catch((err)=>{
    if (err) {
        console.log("There is an error",err);
    }
})