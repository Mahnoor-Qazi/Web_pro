import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Categories.scss";
import { getCategory } from "../../api";


const Categories = () => {


  const [data, setData] = useState([]);

  useEffect(()=>{
    const fetch =async()=>{
        const res=await getCategory();
        setData(res)
    }
        fetch();
        console.log(data)
  },[])

  

  
  return (
    <div>      <h3 style={{marginLeft:"40%"}}>Room Categories</h3>
    <div className="categories">
{ data.map((d)=> (


<div class="card" style={{width: "18rem"}} >
<img class="card-img-top" src={d.catbanner} alt="Card image cap" style={{width:"100%",height:"150px"}}/>
  <div class="card-body">
    <h5 class="card-title">{d.catTitle}</h5>
   <Link to={`/category/c1`}  state={{data:d}}  className="link">
          <button class="btn btn-primary">view</button>   
            </Link>
  </div>
</div>






)

)  
}    </div>

    </div>
  );
};

export default Categories;
