import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import { useSelector } from "react-redux";
import Showcartitems from "../components/Showcartitems";
import Summary from "../components/Summary";

function Cartpage() {
  let items = useSelector((state) => state.cart.item);
  return (
    <>
      <Navbar />
      <Header />
      <div style={{ display: "flex" }}>
        <div style={{width:"75%"}} >
          {items.map((product, index) => (
            <Showcartitems key={index} data={product} />
          ))}
        </div>
        {items.length > 0 ? ( <div style={{height:"30%"}}>
         <Summary/>
        </div>):(
          <h2 style={{marginRight:"50%"}}>Empty</h2>
        )}
      </div>
    </>
  );
}

export default Cartpage;
