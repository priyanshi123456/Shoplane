import React from 'react'
import styled from "@emotion/styled";
import { useSelector } from "react-redux";


const Order = styled.div`
padding: 15px;
`
const Main = styled.div`
margin-left : 30%;
margin-top : 30px;
 height: 90%;
    width: 100%;
    border: 2px solid rgb(216, 213, 213); 
     
`
const Mainhead = styled.div`
  font-size: 20px;
  margin-bottom: 10px;
  font-weight : 700;
`
const Space = styled.span`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const Dollar = styled.span`
padding-right : 4px;
  
`


function Summary() {
  const price = useSelector((state)=>state.cart.totalprice)

 

  const shippingestimate = 5;
  const taxestimate = 5;

  return (
    <>

     <Main>
        <Order>
          <Mainhead>Order Summary</Mainhead>
          <Space>
            <div>
              <h6>Subtotal</h6>
              <h6>Shipping estimate</h6>
              <h6>Tax estimate</h6>
              <h6>Order total</h6>
            </div>
            <div style={{paddingLeft:"20px"}}>
              <h6> <Dollar>&#x24;</Dollar>{Math.ceil(price)}</h6>
              <h6> <Dollar>&#x24;</Dollar>{shippingestimate}</h6>
              <h6> <Dollar>&#x24;</Dollar>{taxestimate}</h6>
              <h6> <Dollar>&#x24;</Dollar>{Math.ceil(price+shippingestimate+taxestimate)}</h6>
            </div>
          </Space>
        </Order>
      </Main>
    </>
  )
}

export default Summary
