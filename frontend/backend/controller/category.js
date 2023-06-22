import { categoryModel } from '../Model/Product.js'

export const postCategory=async(req,res)=>{
    try{
       
        const category = req.body;
        const categoryData = new categoryModel(category);
        await categoryData.save();
        res.send("Categroy saved");
    }catch(e){
        console.log("Error in Post Category is : ",e);
    }
  }

  export const getCategory =async(req,res)=>{
    const category = await categoryModel.find();
    console.log("The Category is : ", category);
    res.json(category);
  }

  

  export  const getDelete= async (req,res)=>{
    console.log(req.params.id);
    try {
       
    
        await categoryModel.findByIdAndDelete(req.params.id);
    } catch (error) {
        console.log(error); 
    }
    
    }

