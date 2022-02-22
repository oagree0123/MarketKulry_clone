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
            <Text>{productName}</Text>
            <Text>{price.toLocaleString('ko-KR')}원</Text>
            </div>
        </ProductContainer>
    )
}

const ProductContainer= styled.div`
 width: 267px;
 height: 435px;
 padding:0px 9px
`

export default Product;