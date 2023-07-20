import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Navlist = styled.div`
  padding-top: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-decoration: none;
  padding-left: 210px;
`;

const Linkstyle = {
  color: 'black',
  textDecoration : "none",
  fontWeight : "600",
  fontSize : "16px"
}


function Header() {
  return (
    <>
      <div className="header-box">
        <hr/>
        <Navlist>
          <div>
            <Link to="/" style={Linkstyle}>All</Link>
          </div>
          <div>
            <Link to="/electronics"style={Linkstyle}>
              Electronics
            </Link>
          </div>
          <div>
            <Link to="/jewellery" style={Linkstyle}>
              Jewelery
            </Link>
          </div>
          <div>
            <Link to="/menscloth" style={Linkstyle}>
              Men's Clothing
            </Link>
          </div>
          <div className="womens">
            <Link to="/womenscloth" style={Linkstyle}>
              Women's clothing
            </Link>
          </div>
        </Navlist>
        <hr/>
      </div>
    </>
  );
}

export default Header;
