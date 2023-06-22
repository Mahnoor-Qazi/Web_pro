import { userModel } from "../Model/user.js"

const postUser= async()=>{
    try{
        const usr =req.body
        const usrData=new userModel(usr)
        await usrData.save();
        res.send("saved")
    }catch(e){
      console.log(e)
    }
}

const getUser = async(req,res)=>{
    const data= await userModel.find()
  console.log("get rooms")
  res.json(data)
}

export {getUser,postUser};