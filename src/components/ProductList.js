import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import styled, { keyframes, css } from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { actionCreators as productActions } from "../redux/modules/product";
import { Text } from "../elements";
import Product from "./Product";

const ProductList = (props) => {
  const dispatch = useDispatch();

  const product_list = useSelector((state) => state.product.list);

  useEffect(() => {
    dispatch(productActions.getProductDB());
  }, []);



  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  return (
    <ProductListContainer>
      <ProductListWrap>
        <ProductListTitle>
          <Text is_size={"28px"}>이 상품 어때요?</Text>
        </ProductListTitle>
        <StyledSlider {...settings}>
          {product_list.map((p, idx) => {
            return <Product key={idx} {...p} />;
          })}
        </StyledSlider>
      </ProductListWrap>
    </ProductListContainer>
  );
};

const ProductListWrap = styled.div`
  width: 1050px;
  height: 435px;
`;

const ProductListContainer = styled.div`
    width: 1050px;
    height: 584px;
    margin: 0 auto;
    padding:32px 0px 40px
`;

const ProductListTitle = styled.div`
  width: 1050px;
  height: 50px;
  text-align: center;
  margin: 0px 0px 27px;
`;

const StyledSlider = styled(Slider)`
  .slick-list {
    //슬라이드 스크린
    width: 1050px;
    height: 435px;
    margin: 0 auto;
    overflow-x: hidden;
  }

  .slick-slide div { //슬라이더  컨텐츠
     cursor: pointer; 
  }

  .slick-track:before {
    clear: both;
    display: table; 
  }
  
  .slick-next:before{
    color: #000;
    width: 60px;
    height: 60px;
    right: 10px;
    font-size: 60px;
    z-index: 100;
    position: absolute;
    transform: translate(50%, -50%);
    transition: background 0.5s ease 0s;
    overflow: visible;

    content: url(https://s3.ap-northeast-2.amazonaws.com/res.kurly.com/kurly/ico/2021/arrow_list_right_60_60.svg);
  }
  
  .slick-prev:before {
    color: #000;
    width: 60px;
    height: 60px;
    left: 0px;
   
    font-size: 60px;
    z-index: 100;;
    position: absolute;
    transform: translate(-50%, -50%);
    transition: background 0.5s ease 0s;
    overflow: visible;

    content: url(https://s3.ap-northeast-2.amazonaws.com/res.kurly.com/kurly/ico/2021/arrow_list_left_over_60_60.svg);
  }
  
  .slick-track:after{
    clear: both;

    display: table;
    //content: '';

    box-sizing: border-box;
    margin: 0;
    padding: 0
  }
`;

const NextButton = styled.button`
  width: 60px;
  height: 60px;
  border-radius: 60px;
`;
export default ProductList;
