
import { cartModel } from "../Model/addtocart.js";

export const postCategory=async(req,res)=>{
  const ti=  req.body.catTitle;
  console.log(ti);
  
  }

  export const getCategory =async(req,res)=>{
    const category = await cartModel.find();
    console.log("The Category is : ", category);
    res.json(category);
  }

  

  export  const getDelete= async (req,res)=>{
    console.log(req.params.id);
    try {
       
    
        await cartModel.findByIdAndDelete(req.params.id);
    } catch (error) {
        console.log(error); 
    }
    
    }

