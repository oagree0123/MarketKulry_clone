import React from "react";

import styled from "styled-components";
import { useHistory } from "react-router-dom";

import { Image,Text } from "../elements";

const Product =(props) =>{
    const history = useHistory();

    const {productName, price,desc, productImg ,productId}=props;
    
    return(
        <ProductContainer>
          <div onClick={()=>{
            history.push(`/product/${productId}`)
            window.scrollTo(0, 0);
          }}>
            <Image src={productImg} is_width={"249px"} is_height={"320px"} />
            <p style={{
              marginBottom: "8px",
              fontSize: "16px",
              fontWeight: "300",
              lineHeight: 1.45,
              letterSpacing: "normal",
              overflow: "hidden",
              textOverflow: "ellipsis",
              color: "(51, 51, 51)",
            }}>
              {productName}
            </p>
            <p style={{
              margin: 0,
              fontSize: "16px",
              fontWeight: 700,
              lineHeight: 1.5,
              letterSpacing: "0.01em",
              color: "(51, 51, 51)",
            }}>{price.toLocaleString('ko-KR')}원
            </p>
          </div>
        </ProductContainer>
    )
}

const ProductContainer= styled.div`
  width: 249px;
  height: 435px;
  cursor: pointer;
  /* padding:0px 9px */
`;

export default Product;