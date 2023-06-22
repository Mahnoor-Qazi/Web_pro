import  {roomModel} from '../Model/Product.js'


const getRoom=async(req,res)=>{
  const data= await roomModel.find()
  console.log("get rooms")
  res.json(data)
}
 const postRoom=async(req,res)=>{
  try{
      const room =req.body
      const roomdata=new roomModel(room)
      await roomdata.save();
      res.send("saved")
  }catch(e){
    console.log(e)
  }
 }

 export {getRoom,postRoom}


 