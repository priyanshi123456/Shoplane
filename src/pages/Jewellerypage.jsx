import axios from "axios";
import React, { useState, useEffect } from "react";
import Allitems from "../components/Allitems";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import EndPoints from "../api/Endpoint";

function Jewellerypage() {
  const [jewel, setjewel] = useState([]);

  const fetchdata = () => {
    axios
      .get(EndPoints.JEWELERY_URL)
      .then((response) => {
        console.log(response.data);
        setjewel(response.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <>
      <Navbar />
      <Header />
      <div>
        <div className="row">
          {jewel.map((jewellery, index) => (
            <Allitems key={index} data={jewellery} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Jewellerypage;
