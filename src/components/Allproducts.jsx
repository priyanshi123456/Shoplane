import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import Allitems from "./Allitems"
import EndPoints from "../api/Endpoint";

const Allproducts = () => {
  const [products, setproducts] = useState([]);

  // Fetch data from Url
  const fetchdata = () => {
    axios
      .get(EndPoints.PRODUCT_URL)
      .then((response) => {
        setproducts(response.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <div>
      {/* Mapping the product of cart */}
      <div className="row">
        {products.map((product, index)=>(
        <Allitems key= {index} data = {product}/>
        ))}
      </div>
    </div>
  );
};

export default Allproducts;
