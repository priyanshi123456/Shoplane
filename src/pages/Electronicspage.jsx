import axios from "axios";
import React, { useState, useEffect } from "react";
import Allitems from "../components/Allitems";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import EndPoints from "../api/Endpoint";

function Electronicspage() {

  const [electronics, setelectronics] = useState([]);

  const fetchdata = () => {
    axios
      .get(EndPoints.ELECTRONIC_URL)
      .then((response) => {
        console.log(response.data);
        setelectronics(response.data);
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
        {electronics.map((elec, index) => (
          <Allitems key={index} data={elec} />
        ))}
      </div>
    </div>
  </>
  )
}

export default Electronicspage
