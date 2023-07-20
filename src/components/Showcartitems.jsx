import React from "react";
import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { remove_to_cart, increament, decreament } from "../Store/CartSlice";


const MainRow = styled.div`
 border: 2px solid rgb(216, 213, 213);
margin-top:30px;
 display:flex;

`;
const Cardbody = styled.div`
    font-size: 15px;
    padding-right : 40%
`
const Textbody = styled.div`
padding-right : 30px;
margin-top : 20px
`
const Price = styled.div`
 font-size: 15px;
 padding : 10% 0 5% 0;
 margin-left: 10px;
    
`
const Image =  {
  height : "150px",
  width : "150px",
  padding : "20px"

}
const Delete =  {
  cursor:"pointer",
  padding : "6% 0 0% 80%"

}
const Buttonbox = styled.button`
position : relative;
bottom : 5em;
left : 30em;
border : none;

`
const Quan = styled.span`
margin : 0 10px 0 10px`


function Showcartitems(props) {
 
  let dispatch = useDispatch();
  const { title, image, price, quantity} = props.data;
 
  // console.log(sum)


  function handleremove(payload) {
    console.log(payload)
    dispatch(remove_to_cart(payload));
  }

  function Increamentquantity(payload){
    dispatch(increament(payload))
  }

  function Decrementquantity(payload){
    dispatch(decreament(payload))
  }

  return (
    <>
      <MainRow >
        <div className="col-md-2">
          <img src={image} style={Image} />
        </div>
        <div className="col-md-8">
          <Textbody>
            <Cardbody>Brand {title}</Cardbody>
            <Price>
              <span>&#x24;</span>
              {price}
            </Price>
            <Buttonbox>
            <button  class="btn btn-light"onClick={() => Increamentquantity(props.data)}>+</button>
            <Quan>{quantity}</Quan>
            <button class="btn btn-light" onClick={() => Decrementquantity(props.data)}>-</button>
            </Buttonbox>
          </Textbody>

        </div>
        <div className="col-md-2">
          <div> 
            <FontAwesomeIcon icon={faTrash} style={Delete} onClick={() => handleremove(props.data)}/>  
          </div>
        </div>
      </MainRow>

    </>
  );
}

export default Showcartitems;
