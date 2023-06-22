import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { addCategory, getCategory } from '../api';
import { deleteUsers } from '../api';


function AddCategory() {
  const [category, setCategory] = useState({
    catTitle: '',
    catdescription: '',
    catbanner: '',
    price:'',
    catrooms: []
  });

  const deleteuser = async (id) => {
    await deleteUsers(id);
    alert("delet");
    window.location.reload(true);
    };

  const [rooms,setRooms]=useState([])
  const [selectedRooms,setSelectedRooms]=useState([])
  useEffect(()=>{
    const fetch =async()=>{
        const res=await getCategory();
        setRooms(res)
    }
        fetch();
        console.log(rooms)
  },[])
  const fetchdata = async ()=>{
    const res=await getCategory();
        setRooms(res)
  }
 
const addRoom=(product)=>{
    setSelectedRooms([...selectedRooms,product])
    console.log(selectedRooms)
    
}
  const handleChange=(e)=>{
       const {name,value}=e.target
       setCategory({...category,[name]:value})
  }
  const save = ()=>{
    const requiredFields = [ 'catTitle', 'catdescription', 'catbanner','pricev'];
    const missing = requiredFields.filter((field) =>  !category[field]);
    if (missing.length === 0) {
        const updatedCategory = {
            ...category,
            catrooms: [...selectedRooms]
          };
      
          // Perform any further operations with the updatedCategory object if needed
      
         
      const formData = new FormData();
      formData.append('catId', category.catId);
      formData.append('catTitle', category.catTitle);
      formData.append('description', category.catdescription);
      formData.append('banner', category.catbanner);

     
      formData.append('rooms', selectedRooms);
      
      setCategory(updatedCategory);
      
    } else {
        console.log('Missing fields:', missing);
      }
  }
  
  const saveDetails = async (e) => {
    e.preventDefault();
    
    save();
      console.log("categoru: ", category);     
      addCategory(category);
      alert("add");
      window.location.reload(true);
  };

  return (
    <div style={{ display: 'flex'}}>
    <div style={{ display: 'flex', flexDirection: 'column', width: '50%', marginLeft: '5rem' }}>
      
      <div className="mb-3">
        <label htmlFor="formGroupExampleInput2" className="form-label">
          Category Name/Title
        </label>
        <input
          name="catTitle"
          type="text"
          value={category.catTitle}
          onChange={handleChange}
          className="form-control"
          id="formGroupExampleInput2"
          placeholder="Enter the name of the category"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="formGroupExampleInput2" className="form-label">
          product Description
        </label>
        <input
          name="catdescription"
          type="text"
          value={category.catdescription}
          onChange={handleChange}
          className="form-control"
          id="formGroupExampleInput2"
          placeholder="Enter the description of the category"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="formGroupExampleInput2" className="form-label">
          Banner
        </label>
        <input
          name="catbanner"
          type="text"
          value={category.catbanner}
          onChange={handleChange}
          className="form-control"
          id="formGroupExampleInput2"
          placeholder="Enter the banner URL"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="formGroupExampleInput2" className="form-label">
          Price        </label>
        <input
          name="price"
          type="text"
          value={category.price}
          onChange={handleChange}
          className="form-control"
          id="formGroupExampleInput2"
          placeholder="Enter the price"
        />
      </div>
      <button
        type="button"
        onClick={saveDetails}
        className="btn btn-success"
        style={{ width: '25%' }}
      >
        Save product
      </button>
     
    </div>
    
    <div className="mb-3" style={{ backgroundColor: 'black', overflowY: 'scroll', maxHeight: '400px' }}>
  {
    rooms.map((room) => (


      <div className="card" >
                  <div className="card-body">
                      <h5 className="card-title">ROOM REMOVE </h5>
                      <button type="button" className="btn btn-primary" style={{ marginTop: "20%" }} onClick={() => deleteuser(room._id)}>
                    {room.catTitle}
                  </button>                      

                  </div>
              </div>

      ))
  }
</div>

    </div>
  );
}

export default AddCategory;
