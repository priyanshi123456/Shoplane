import React from 'react'
import styled from '@emotion/styled';
import { AiFillHeart } from "react-icons/ai";
import { removeFromFavorites } from "../Store/favoritesSlice";
import { useDispatch } from "react-redux";

const MainRow = styled.div`
height: 200px;
 width: 90%;
 border: 2px solid rgb(216, 213, 213);
margin-top:30px;
 display:flex;

`;
const Cardbody = styled.div`
    font-size: 15px;
    margin-left: 20px;
`
const Textbody = styled.div`
padding-right : 30px;
margin-top : 20px
`
const Price = styled.div`
 font-size: 12px;
 padding-top: 80px;
 margin-left: 20px;
    
`
const Icon2 = {
  color: "red",
  position: "relative",
  width: "20px",
  height: "20px",
  cursor: "pointer",
};

function Showfav(props) {
  const { title, image, price } = props.data;
  const dispatch = useDispatch();

  // Removing Items from favroite page
  function removefav(payload) {
    dispatch(removeFromFavorites(payload));
  }
  return (
    <>
      <MainRow >
        <div className="col-md-2">
          <img src={image} style={{ width: "150px", height: "150px", marginTop: "20px" }} />
        </div>
        <div className="col-md-8">
          <Textbody>
            <Cardbody>Brand {title}</Cardbody>
            <Price>
              <span>&#x24;</span>
              {price}
            </Price>
          </Textbody>

        </div>
        <div className="col-md-2">
          <div style={{ marginLeft: "150px" }}>
            <AiFillHeart
              onClick={() => {
                removefav(props.data.id);

              }}
              style={Icon2}
            />
          </div>
        </div>
      </MainRow>

    </>
  )
}

export default Showfav
