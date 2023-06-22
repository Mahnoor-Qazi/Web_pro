import React, { useContext, useEffect, useState } from 'react'
import CartContext from '../../store/cart-context';
import './Cart.scss';
import PersonalDetails from '../personalDetails/PersonalDetails';
import CloseIcon from '@mui/icons-material/Close';
import { useLocation } from 'react-router-dom';

import { GetCarts ,Remove } from '../../storage';
import { Button } from '@mui/material';
const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  



const remove=(object)=>{


  console.log("Cart Remove");
  Remove(object);
  alert("remove");
  window.location.reload(true);

}
 


  return (
    <div style={{marginBottom:"50%"}}>
   
   <h1 style={{marginLeft:"30%"}}>ADD TO CART</h1>

   {


GetCarts().map((data)=>(


   <table class="table">
  <thead class="thead-dark">
    <tr>
      <th scope="col">pic</th>
      <th scope="col">Tital</th>
      <th scope="col">price</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><img class="card-img-top" src={data.catbanner} alt="Card image cap" style={{width:"40%",height:"80px"}}/></td>
      <td>{data.catTitle}</td>
      <td>{data.price}</td>
      <td><Button onClick={(data)=>remove(data)} class="btn btn-success">  Remove - </Button></td>

    </tr>
  
  </tbody>
</table>





))
   }
</div>


  )
}

export default Cart;

