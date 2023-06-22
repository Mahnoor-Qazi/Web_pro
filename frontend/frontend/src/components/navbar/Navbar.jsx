import React, { useContext, useState } from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Cart from "../cart/Cart";
import './Navbar.scss'
import CartContext from '../../store/cart-context';

const Navbar = () => {
  const [showCart, setShowCart] = useState(false);
  const cartCtx = useContext(CartContext);
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <Link className="item" to="/">
            <img className="logo" src="https://dynamic.brandcrowd.com/asset/logo/31e64b0a-fc8a-423b-a588-47adc7d07928/logo-search-grid-1x?logoTemplateVersion=2&v=638179032206270000&text=MABALI+HOTEL" />
            <Link className="title" to="/">
              MABALI HOTEL 
            </Link>
          </Link>
        </div>
       
        <div className="right">
        
          <Link className="item" to="/">
            Hompage
          </Link>
          <Link className="item" to="/aboutus">
            About Us
          </Link>
          <Link className="item" to="/services">
            Services
          </Link>
          <Link className="item" to="/login">
            Admin
          </Link>
          <div className="item">
            <SearchOutlinedIcon />
          </div>
          <div className="item">
            
          <Link className="item" to="/cart">
            cart
          </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;