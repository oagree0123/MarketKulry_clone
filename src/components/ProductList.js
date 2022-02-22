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

  const product_datas = [
    {
      id: 1,
      productId: 1,
      productName: "[한와담 블랙] 곱개장",
      price: "8900",
      desc: "칼칼하게 즐기는 곱창 육개장",
      productImg: "https://img-cf.kurly.com/shop/data/goods/1637822466321y0.jpg"
    },
    {
      id: 2,
      productId: 2,
      productName: "[블루] MSC인증 자숙랍스터 2미 (냉동)",
      price: 42000,
      desc: "손쉽게 즐기는 탱글한 속살",
      productImg: "https://img-cf.kurly.com/shop/data/goods/1637650155968y0.jpg"
    },
    {
      id: 3,
      productId: 3,
      productName: "[오뗄블랙라벨] 1980 알뜰 소시지",
      price: 4900,
      desc: "추억의 분홍 소시지",
      productImg: "https://img-cf.kurly.com/shop/data/goods/1642140736583y0.jpg"
    },
    {
      id: 4,
      productId: 4,
      productName: "[Dole] 유기농 바나나 500g",
      price: 2980,
      desc: "건강하게 즐기는 유기농 과일 (1팩/500g)",
      productImg: "https://img-cf.kurly.com/shop/data/goods/1637923209812l0.jpg"
    },
    {
      id: 1,
      productId: 1,
      productName: "[한와담 블랙] 곱개장",
      price: "8900",
      desc: "칼칼하게 즐기는 곱창 육개장",
      productImg: "https://img-cf.kurly.com/shop/data/goods/1637822466321y0.jpg"
    },
    {
      id: 2,
      productId: 2,
      productName: "[블루] MSC인증 자숙랍스터 2미 (냉동)",
      price: 42000,
      desc: "손쉽게 즐기는 탱글한 속살",
      productImg: "https://img-cf.kurly.com/shop/data/goods/1637650155968y0.jpg"
    },
    {
      id: 3,
      productId: 3,
      productName: "[오뗄블랙라벨] 1980 알뜰 소시지",
      price: 4900,
      desc: "추억의 분홍 소시지",
      productImg: "https://img-cf.kurly.com/shop/data/goods/1642140736583y0.jpg"
    },
    {
      id: 4,
      productId: 4,
      productName: "[Dole] 유기농 바나나 500g",
      price: 2980,
      desc: "건강하게 즐기는 유기농 과일 (1팩/500g)",
      productImg: "https://img-cf.kurly.com/shop/data/goods/1637923209812l0.jpg"
    }
  ]

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
          <p style={{
            color: "rgb(51, 51, 51)",
            fontSize: "28px",
            lineHeight: 1.15,
            letterSpacing: "-0.26px",
            fontWeight: 500,
          }} 
          >이 상품 어때요?</p>
          
        </ProductListTitle>
        <StyledSlider {...settings}>
          {product_datas.map((p, idx) => {
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
    top: -55px;
    right: 30px;
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
    top: -55px;
    left: 18px;
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
