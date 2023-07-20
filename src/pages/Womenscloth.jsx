import axios from "axios";
import React, { useState, useEffect } from "react";
import Allitems from "../components/Allitems";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import EndPoints from "../api/Endpoint";

function Womenscloth() {
  const [womenscloth, setwomenscloth] = useState([]);

  const fetchdata = () => {
    axios
      .get(EndPoints.WOMEN_CLOTHING_URL)
      .then((response) => {
        console.log(response.data);
        setwomenscloth(response.data);
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
        {womenscloth.map((womenscloth, index) => (
          <Allitems key={index} data={womenscloth} />
        ))}
      </div>
    </div>
  </>
  )
}

export default Womenscloth
