import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import mongoose from "mongoose";
import roomRouter from './routes/product.js'
import category from './routes/category.js'
import user from './routes/user.js';

import addtocart from './routes/user.js';

const app = express();
dotenv.config();//

const dbURL = process.env.Mongo_URL;

const connection= mongoose.connect(dbURL, {useUnifiedTopology: true, useNewUrlParser: true});

connection.then(()=>{console.log("DB Connected ")}).catch((e)=>{console.log( "Error:", e)})


app.listen(5000,()=>{console.log("Server is running ")})


// CORS middleware
app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json())
app.use('/product',roomRouter)
app.use('/category',category)
app.use('/user', user)

app.use('/category/:id', addtocart)


  
