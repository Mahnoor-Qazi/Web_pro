import axios from "axios";


const url="http://localhost:5000";


//add to cart 
export const insertform = async (Data) => {
    return await axios.post(`${url}/category/:id`,Data);
  
  
  }
export const addProduct = async (Data)=>{
    return await axios.post(`${url}/product`,Data)
}

export const getProduct= async ()=>{
    const res=await axios.get(`${url}/product`)
    return res.data
}

//For Choice of the eid
export const addCategory = async (Data)=>{
    console.log(Error)
    return await axios.post(`${url}/category`,Data)
}
export const getCategory= async ()=>{
    const res=await axios.get(`${url}/category`)
    console.log(res);
    return res.data
}

export const deleteUsers = async (id) =>{
    return await axios.delete(`${url}/category/${id}`)
  }


// For User 
export const getUsers=async()=>{
    const res= await axios.get(`${url}/user`);
    return res.data;
}

export const addUser = async (Data)=>{
    console.log(Error)
    return await axios.post(`${url}/user`,Data)
}