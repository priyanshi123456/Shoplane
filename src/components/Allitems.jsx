import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faL } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { add_to_cart, remove_to_cart } from "../Store/CartSlice";
import Star from "./Star";
import { AiFillHeart } from "react-icons/ai";
import { addToFavorites, removeFromFavorites } from "../Store/favoritesSlice";
import styled from "@emotion/styled";

const Icon1 = {
  color: "black",
  position: "relative",
  width: "20px",
  height: "20px",
  left: "90%",
  cursor: "pointer",
};
const Icon2 = {
  color: "red",
  position: "relative",
  width: "20px",
  height: "20px",
  left: "90%",
  cursor: "pointer",
};

const Image = styled.img`
  height: 16rem;
  padding: 20px 30px;
`;
const Button1 = {
 backgroundColor:"blue",
  width:"100%",
  marginTop:"10px",
}
const Button2 ={
  backgroundColor:"red",
  width:"100%",
  marginTop:"10px",
}
const Price = styled.h2`
  font-size: 16px;
  padding-top :10px;
`
const Brand = styled.span`
font-weight : 700;
`

function Allitems(props) {
  const [isInCart, setIsInCart] = useState(false);
  const [buttonColor, setButtonColor] = useState("blue");
  const [isInfav, setIsInfav] = useState(false);
  const [heartColor, setheartColor] = useState("black");
  const dispatch = useDispatch();
  const { title, image, id, price, rating } = props.data;

  const isLongName = title.length > 35;

  //Add product in cart
  function addproduct(payload) {
    setIsInCart(true);
    setButtonColor("red");
    dispatch(add_to_cart(payload));
  }

  //remove product from cart
  function removeproduct(payload) {
    setIsInCart(false);
    setButtonColor("blue");
    dispatch(remove_to_cart(payload));
  }

  //Add fav in favroite page
  const addfav = (fav) => {
    setIsInfav(true);
    setheartColor("red");
    dispatch(addToFavorites(fav));
  };

  //remove fav from favroite page
  function removefav(payload) {
    setIsInfav(false);
    setheartColor("black");
    dispatch(removeFromFavorites(payload));
  }
  

  return (
    <div class="col-sm-3 sm-3">
      <div class="card" style={{ height: "100%", marginTop: "30px" }}>
        {isInfav ? (
          <AiFillHeart
            onClick={() => {
              removefav(props.data.id);
              
            }}
            style={Icon2}
          />
        ) : (
          <AiFillHeart
            onClick={() => {
              addfav(props.data);
            }}
            style={Icon1}
          />
        )}
        <Image src={image} />
        <div class="card-body">
          <h5 className={`title ${isLongName ? "long-name" : "shortname"}`}>
           <Brand>Brand,</Brand> {title}
          </h5>
          <Star stars={rating.rate} reviews={rating.count} />
          <Price>
            <span>&#x24;</span>
            {price}
          </Price>
          {isInCart ? (
            <button
              className="btn btn-primary btn-block"
              onClick={() => {
                removeproduct(props.data);
              }}
              style={Button2}
            >
              Remove from Cart
            </button>
          ) : (
            <button
              className="btn btn-primary btn-block"
              onClick={() => {
                addproduct(props.data);

              }}
              style={Button1}
            >
              Add to Cart
              <FontAwesomeIcon
                icon={faCartShopping}
                style={{ width: "45px" }}
               
              />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Allitems;
