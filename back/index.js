import express from"express";
import mongoose from "mongoose";
import cors from "cors";
import ProductRouter from "./productRouter.js";

const connection = mongoose.connect("mongodb://localhost:27017")

const app =express()
app.use =(express.urlencoded({extended:false}))
app.use =(express.json())
app.use =(cors());

app.use =("/product",ProductRouter)

connection.then(() => {
    app.listen(4000, () =>
        console.log("Server started at 4000"))
})
    .catch((err) => console.log("error  "));

