import express from"express";
import mongoose from "mongoose";
import cors from "cors";
import ProductRouter from "./productRouter.js";


const connection = mongoose.connect("mongodb://127.0.0.1:27017/e-commerce")

const app =express()
app.use =(express.urlencoded({extended:false}))
app.use =(express.json())
app.use =(cors({origin:"http;//localhost:4000"}));

app.use =("/product",ProductRouter)

connection.then(() => {

    app.listen(4000, () =>
        console.log("Server started at4000"))
})
    .catch((err) => console.log("error ",err ));

