// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.css';
// import { addProduct } from '../api';

// function AddProduct() {
//   // const [category, setCategory] = useState({
//   //   catId: '',
//   //   catTitle: '',
//   //   catdescription: '',
//   //   catbanner: '',
//   //   catrooms: []
//   // });

//   const [product, setProduct] = useState({
//     images: [],
//     title: '',
//     desc: '',
//     pricePerNight: 0
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setProduct((prevProduct) => ({
//       ...prevProduct,
//       [name]: value,
 
//     }))
  
//   console.log(product)

//     // if (name.startsWith('cat')) {
//     //   setCategory((prevCategory) => ({
//     //     ...prevCategory,
//     //     [name]: value,
//     //   }));
//     // } else if (name.startsWith('images')) {
//       const index = parseInt(name.substring(name.length - 2, name.length - 1), 10);
//       setProduct((prevProduct) => {
//         const updatedImages = [...prevProduct.images];
//         updatedImages[index] = value;
//         return {
//           ...prevProduct,
//           images: updatedImages,
//         };
//       });
//     // } else {
    
       
    
//   };

//   const saveDetails = async (e) => {
//     e.preventDefault();

//     // const requiredFields = ['catId', 'catTitle', 'catdescription', 'catbanner', 'id', 'title', 'desc', 'pricePerNight'];
//     // const missing = requiredFields.filter((field) => !product[field] && !category[field]);
//     // if (missing.length === 0) {
//     //   const formData = new FormData();
//     //   formData.append('catId', category.catId);
//     //   formData.append('catTitle', category.catTitle);
//     //   formData.append('description', category.catdescription);
//     //   formData.append('banner', category.catbanner);

//       const roomData = {
//         id: product.id,
//         images: product.images,
//         title: product.title,
//         desc: product.desc,
//         pricePerNight: product.pricePerNight
//       };
//       // formData.append('rooms', roomData);

      
//       // setCategory({
//       //   catId: '',
//       //   catTitle: '',
//       //   catdescription: '',
//       //   catbanner: '',
//       //   rooms: []
//       // });
//       // console.log("categoru: ", category);
//       const fetch = async()=>{
//         await addProduct(roomData);
//       console.log(roomData);
//       setProduct({
//         id: '',
//         images: [],
//         title: '',
//         desc: '',
//         pricePerNight: 0
//       });
//       }
//       fetch();
//     // } else {
//     //   console.log('Missing fields:', missing);
//     // }
//   };

//   return (
//     <div style={{ display: 'flex', flexDirection: 'column', width: '50%', marginLeft: '5rem' }}>
//       {/* <div className="mb-3">
//         <label htmlFor="formGroupExampleInput" className="form-label">
//           Enter the Category Id
//         </label>
//         <input
//           name="catId"
//           type="text"
//           value={category.catId}
//           onChange={handleChange}
//           className="form-control"
//           id="formGroupExampleInput"
//           placeholder="Enter the id of the category"
//         />
//       </div>
//       <div className="mb-3">
//         <label htmlFor="formGroupExampleInput2" className="form-label">
//           Category Name/Title
//         </label>
//         <input
//           name="catTitle"
//           type="text"
//           value={category.catTitle}
//           onChange={handleChange}
//           className="form-control"
//           id="formGroupExampleInput2"
//           placeholder="Enter the name of the category"
//         />
//       </div>
//       <div className="mb-3">
//         <label htmlFor="formGroupExampleInput2" className="form-label">
//           Category Description
//         </label>
//         <input
//           name="catdescription"
//           type="text"
//           value={category.catdescription}
//           onChange={handleChange}
//           className="form-control"
//           id="formGroupExampleInput2"
//           placeholder="Enter the description of the category"
//         />
//       </div>
//       <div className="mb-3">
//         <label htmlFor="formGroupExampleInput2" className="form-label">
//           Banner
//         </label>
//         <input
//           name="catbanner"
//           type="text"
//           value={category.catbanner}
//           onChange={handleChange}
//           className="form-control"
//           id="formGroupExampleInput2"
//           placeholder="Enter the banner URL"
//         />
//       </div>
//       <div className="mb-3">
//         <label htmlFor="formGroupExampleInput" className="form-label">
//           Enter the Room Id
//         </label>
//         <input
//           name="id"
//           type="text"
//           value={product.id}
//           onChange={handleChange}
//           className="form-control"
//           id="formGroupExampleInput"
//           placeholder="Enter the id of the room"
//         />
//       </div> */}
//       <div className="mb-3">
//         <label htmlFor="formGroupExampleInput2" className="form-label">
//           Room Name/Title
//         </label>
//         <input
//           name="title"
//           type="text"
//           value={product.title}
//           onChange={handleChange}
//           className="form-control"
//           id="formGroupExampleInput2"
//           placeholder="Enter the name of the room"
//         />
//       </div>
//       <div className="mb-3">
//         <label htmlFor="formGroupExampleInput2" className="form-label">
//           Room Description
//         </label>
//         <input
//           name="desc"
//           type="text"
//           value={product.desc}
//           onChange={handleChange}
//           className="form-control"
//           id="formGroupExampleInput2"
//           placeholder="Enter the description of the room"
//         />
//       </div>
//       <div className="mb-3">
//         <label htmlFor="formGroupExampleInput2" className="form-label">
//           Image URLs
//         </label>
//         <input
//           name="images[0]"
//           type="text"
//           value={product.images[0] || ''}
//           onChange={handleChange}
//           className="form-control"
//           id="formGroupExampleInput2"
//           placeholder="Enter the image URL 1"
//         />
//         <input
//           name="images[1]"
//           type="text"
//           value={product.images[1] || ''}
//           onChange={handleChange}
//           className="form-control"
//           id="formGroupExampleInput2"
//           placeholder="Enter the image URL 2"
//         />
//       </div>
//       <div className="mb-3">
//         <label htmlFor="formGroupExampleInput2" className="form-label">
//           Price
//         </label>
//         <input
//           name="pricePerNight"
//           type="number"
//           value={product.pricePerNight}
//           onChange={handleChange}
//           className="form-control"
//           id="formGroupExampleInput2"
//           placeholder="Enter the price per night"
//         />
//       </div>
//       <button
//         type="button"
//         onClick={saveDetails}
//         className="btn btn-success"
//         style={{ width: '25%' }}
//       >
//         Add Product
//       </button>
//     </div>
//   );
// }

// export default AddProduct;
