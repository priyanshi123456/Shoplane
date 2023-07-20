import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";

function Star({ stars, reviews }) {
  const ratingstart = Array.from({ length: 5 }, (elem, index) => {
    let num = index + 0.5;

    return (
      <span key={index}>
        {stars >= index + 1 ? (
          <FaStar style={{color:"#FDCC0D"}} />
        ) : stars > num ? (
          <FaStarHalfAlt />
        ) : (
          <AiOutlineStar />
        )}
      </span>
    );
  });

  return <div>
    {ratingstart}
    <span style={{paddingLeft : "6px"}}>({reviews})</span>
  </div>;
}

export default Star;
