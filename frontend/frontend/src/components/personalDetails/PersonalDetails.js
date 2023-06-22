import React, { useState, useContext } from 'react';
import CartContext from '../../store/cart-context';
import CartProvider from '../../store/CartProvider';
import { orders } from '../../utils/data';
import './PersonalDetails.scss';
import CloseIcon from '@mui/icons-material/Close';

const PersonalDetails = (props) => {
    const cartCtx = useContext(CartContext);
    const [name, setName] = useState(null);
    const [city, setCity] = useState(null);
    const [address, setaddress] = useState(null);
    const [zip, setZip] = useState(null);
    const [phone, setPhone] = useState(null);
    const [message, setMessage] = useState(null);

    const submitHandler = (e) => {
        e.preventDefault();

     const order = {
        name,
        city,
        address,
        zip,
        phone,
        rooms : cartCtx.items,
        subtotal : cartCtx.totalAmount
     }

     orders.push(order);
     cartCtx.resetCart();
     setMessage('Order placed successfuly.');

    }

  return (
    <div className='info'>
        <form action="" className="form" onSubmit={submitHandler}>
        <div className='header'><h4>Enter Personal Details</h4>  <CloseIcon onClick= {props.close} className="close"/></div>
          <div className="input">
           <label htmlFor="name">Name</label>
           <input type="text" id='name' onChange={(e) => setName(e.target.value)}/>
          </div>
          <div className="input">
           <label htmlFor="city">City</label>
           <input type="text" id='city' onChange={(e) => setCity(e.target.value)}/>
          </div>
          <div  className="input">
          <label htmlFor="address">address</label>
           <input type="text" id='address' onChange={(e) => setaddress(e.target.value)}/>
          </div>
          <div  className="input">
          <label htmlFor="zip">Zip</label>
           <input type="number" id='zip' onChange={(e) => setZip(e.target.value)}/>
          </div>
          <div  className="input">
          <label htmlFor="phone">Phone</label>
           <input type="phone" id='phone' onChange={(e) => setPhone(e.target.value)}/>
          </div>
          <div className="action">
          <button>Submit</button>
            {message && <p className='msg'>{message}</p>}
          </div>
      </form>
      
    </div>
  )
}

export default PersonalDetails
