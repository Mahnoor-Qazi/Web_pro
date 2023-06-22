

const addtoCart = [];

export  function AddToCart(data){

addtoCart.push(data);


return addtoCart;

}


export const GetCarts=()=>{


    return addtoCart;

}


export const Remove = (object) => {
    console.log("Data Removed", object);
  
    const updatedCart = addtoCart.filter((item) => item._id !== object._id);
    // or if you're using JavaScript ES6 destructuring, you can use:
    // const updatedCart = addtoCart.filter(({ _id }) => _id !== object._id);
  
    console.log(updatedCart, "Updated Cart");
  
    // Update the addtoCart array with the updatedCart
    addtoCart.splice(0, addtoCart.length, ...updatedCart);
  }
  



