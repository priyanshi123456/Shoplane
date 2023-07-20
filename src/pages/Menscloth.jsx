import axios from "axios";
import React, { useState, useEffect } from "react";
import Allitems from "../components/Allitems";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import EndPoints from "../api/Endpoint";

function Menscloth() {
  const [menscloth, setmenscloth] = useState([]);

  const fetchdata = () => {
    axios
      .get(EndPoints.MENS_CLOTHING_URL)
      .then((response) => {
        console.log(response.data);
        setmenscloth(response.data);
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
        {menscloth.map((menscloth, index) => (
          <Allitems key={index} data={menscloth} />
        ))}
      </div>
    </div>
  </>
  )
}

export default Menscloth
