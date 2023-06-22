import React, { useState, useContext } from 'react'
import { useLocation, useParams } from 'react-router-dom';
import CartContext from '../store/cart-context';
// import data from '../utils/data';
import './Room.scss';


const Room = () => {

  const location = useLocation();
  
  const [data,setData] = useState([]);
  const param = useParams();
  const [quantity, setQuantity] = useState(1);
  const cartCtx = useContext(CartContext);
  
  const rooms = data.map((item) =>  item.rooms);
  let roomData;
  
  for(let i = 0; i < rooms.length; i++) {
  const room = rooms[i].filter(r => r.id == param.id);
    
  if(room.length > 0) {
    roomData = room[0];
    break;
  }
}

  const addToCartHandler = amount => {
    cartCtx.addItem({
      _id: roomData._id,
      name: roomData.title,
      desc: roomData.desc,
      images: roomData.images,
      amount: quantity,
      price: roomData.pricePerNight
    });
  };

  return (
    <div>
      {

      }
    </div>
    // <div className='room'>
    //   <div className="image">
    //     <img src={roomData.images[0]} alt="" />
    //   </div>
    //   <div className="description">
    //     <h4 className="title">{roomData.title}</h4>
    //     <p className='desc'>{roomData.desc}</p>
    //     <h4 className="price">${roomData.pricePerNight}</h4>
    //     <div className="quantity">
    //       <span onClick={() => { setQuantity(prev => prev - 1) }}>-</span>{quantity}<span onClick={() => { setQuantity(prev => prev + 1) }}>+</span>
    //     </div>
    //     <button onClick={addToCartHandler}>Select Room</button>
    //   </div>
    // </div>
  )
}

export default Room
