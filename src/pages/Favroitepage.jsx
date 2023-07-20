import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import { useSelector } from "react-redux";
import Showfav from "../components/Showfav";
 
function Favroitepage() {
  let fav = useSelector((state) => state.favorites);
  return (
    <>
      <Navbar />
      <Header />
      {fav.length > 0 ? (<div>  
        <div className="row">
          {fav.map((product, index) => (
            <Showfav key={index} data={product} />
          ))}
        </div>
      </div>):(<h2 className="text-center">No Favorites</h2>)}  {/* If NO item in favroite */}
      
    </>
  );
}
export default Favroitepage;