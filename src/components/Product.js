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
                history.push(`/detail/${productId}`)
            }}>
            <Image src={productImg} is_width={"249px"} is_height={"320px"} />
            <Text>{productName}</Text>
            <Text>{price}</Text>
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