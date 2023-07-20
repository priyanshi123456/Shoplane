import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { BiUserCircle } from 'react-icons/bi';
import { useNavigate } from "react-router-dom";

const NAME = styled.span`
  color: rgb(110, 203, 235);
  font-size: 30px;
`;
const Circle = styled.span`
height: 20px;
width: 20px;
background-color: red;
border-radius: 50%;
display: inline-block;
position : relative;
bottom : 10px;
right : 7px;
`;
const Num = styled.h6`
height : 40px;
width : 20px;
color : white;
padding-left : 5px

`
const Button = {
  padding: "3px 25px 3px 25px",
}
const Usercirle = {
  height: "20px",
  width: "20px",
}
const Bucket = {
  cursor: "pointer",
  height: "25px",
  width: "25px",
}
const Login ={
  fontWeight: '600'

}



function Navbar() {
  const navigate = useNavigate();
  const track = useSelector((state) => state.cart.item);
  

  // Navigate to cart page
  function Cartpage(){
    navigate("/cart")
  }

  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid" >
          <a class="navbar-brand" href="#">
            <NAME>SHOP</NAME>
            <span style={{ fontSize: "30px" }}>LANE</span>
          </a>
          <div className="d-flex " style={{ paddingLeft: "70%" }}>
            <div className="dropdown " >
              <button type="button" style={Button} className="btn  border dropdown-toggle shadow-sm  bg-white rounded" data-bs-toggle="dropdown" aria-expanded="false" data-bs-offset="10,20">
                <BiUserCircle style={Usercirle} /> <span style={Login}>Login</span>
                <br /><span style={Login} >or SignUp </span>
              </button>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to='/login'>Login</Link></li>
                <li><Link className="dropdown-item" to='/Register'>Sign Up</Link></li>
                <li><Link className="dropdown-item" to='/favroite'>Favroite</Link></li>
                <li><Link className="dropdown-item" to='/cart'>cart</Link></li>
              </ul>
            </div>
          </div>
          <div style={{ display: "flex" }}>
            <FontAwesomeIcon
              style={Bucket}
              icon={faCartShopping}
              onClick={Cartpage}
            />
            <div>
              <Circle><Num>{track.length}</Num></Circle>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
