import React, { useEffect, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import './Category.scss';
import { getCategory, insertform } from '../api.js';
import { AddToCart } from '../storage';

const Category = () => {
 
  var uselocation = useLocation();

  var categorySelect= uselocation.state?.data;
  const [ totalAddToCart,setAddTotal]= useState([]);
 
  const onclick = (e) => {
    e.preventDefault();

 

    
    const totalData = AddToCart(categorySelect);
    setAddTotal(totalData);
    console.log(totalAddToCart);
    console.log(categorySelect);
    console.log(totalData.at(0)._id)
alert("ADD");
  };

    
  return (

<div class="col-xs-12 col-md-6 bootstrap snippets bootdeys" style={{marginTop:"10%",marginLeft:"10%",marginBottom:"10%"}}>
    <div class="product-content product-wrap clearfix">
      <div class="row">
          <div class="col-md-5 col-sm-12 col-xs-12">
            <div class="product-image"> 
              <img src={categorySelect.catbanner} style={{width:"350px",height:"350px"}} alt="194x228" class="img-responsive"/> 
              <span class="tag2 hot">
                HOT
              </span> 
            </div>
          </div>
          <div class="col-md-7 col-sm-12 col-xs-12">
          <div class="product-deatil">
              <h5 class="name">
                <a href="#">
                {categorySelect.catTitle} <span>Category</span>
                </a>
              </h5>
              <p class="price-container">
                <span>${categorySelect.price}</span>
              </p>
              <span class="tag1"></span> 
          </div>
          <div class="description">
            <p>{categorySelect.catdescription} </p>
          </div>
          <div class="product-info smart-form">
            <div class="row">
              <div class="col-md-6 col-sm-6 col-xs-6"> 
              <button  class="btn btn-success" onClick={(e) => onclick(e)}>ADDTOCART</button> 
              </div>
              <div class="col-md-6 col-sm-6 col-xs-6">
                <div class="rating">
                  <label for="stars-rating-5"><i class="fa fa-star"></i></label>
                  <label for="stars-rating-4"><i class="fa fa-star"></i></label>
                  <label for="stars-rating-3"><i class="fa fa-star text-primary"></i></label>
                  <label for="stars-rating-2"><i class="fa fa-star text-primary"></i></label>
                  <label for="stars-rating-1"><i class="fa fa-star text-primary"></i></label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>

   
  );
};

export default Category;
