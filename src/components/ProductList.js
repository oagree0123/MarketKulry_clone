import React from "react";
import { useDispatch, useSelector } from 'react-redux';

import styled, { keyframes, css } from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"

import { actionCreators as productActions } from '../redux/modules/product';
import { Text } from "../elements";
import Product from "./Product";

const ProductList = ()=>{
    //const dispatch=useDispatch();
    // const product_list = useSelector((state) => state.product.list);

    // React.useEffect(() => {
    //             dispatch(productActions.getProductMK());
    //     }, [])
    const product_list = 
        [{
        productId : "1",
        productName : "[스윗밸런스] 오늘의 샐러드 6종",
        price : "4,655원",
        desc : "",
        productImg :"https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbjFkuZ%2FbtrtE2JXhyF%2F3C7YeiaosE7lbO6umVRVo0%2Fimg.png"
        },
        {
        productId : "2",
        productName : "[이연복의 목란] 짬뽕 2인분",
        price : "12,935원",
        desc : "",
        productImg : "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbiXuXj%2FbtrtIlIwIsJ%2FBRzGHbPcOYIa7jvHsyWrW0%2Fimg.png"
        },
        {
        productId : "3",
        productName : "[탄단지] 가벼운 한식 도시락 6종",
        price : "4,200원",
        desc : "장에 좋은 요거트",
        productImg :"https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbQWWMg%2FbtrtKH48Kut%2Fe0dGCfdltNMXpXP2GGckqK%2Fimg.png"
        },
        {
        productId : "4",
        productName : "[신규회원 이벤트] [존쿡 델리미트] 바베큐 백립",
        price : "1,000원",
        desc : "장에 좋은 요거트",
        productImg :"https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fb3aBg0%2FbtrtHTZOAGd%2F8YJK3kICPUeyJNlkNFX8p1%2Fimg.png"
        },
        {
        productId : "5",
        productName : "[스윗밸런스] 오늘의 샐러드 6종",
        price : "4,655원",
        desc : "장에 좋은 요거트",
        productImg :"https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbjFkuZ%2FbtrtE2JXhyF%2F3C7YeiaosE7lbO6umVRVo0%2Fimg.png"
        },
        ]
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1
          };
    return(
        <ProductListContainer>
        < ProductListWrap>
         
            <ProductListTitle>
                <Text is_size={"28px"}>이 상품 어때요?</Text>
                </ProductListTitle>
      
            <StyledSlider {...settings}>
            {product_list.map((p,idx)=>{
                return(
                    <Product key={idx} {...p}/>
                )
            })}
             </StyledSlider>
        </ ProductListWrap>
        </ProductListContainer>
    )
}
const ProductListWrap = styled.div`
    width: 1050px;
    height: 435px;
`
const ProductListContainer = styled.div`
    width: 1050px;
    height: 584px;
    margin: 0 auto;
`
const ProductListTitle = styled.div`
    width: 1050px;
    height: 50px;
    text-align: center;
    margin: 0px 0px 27px
`
const StyledSlider = styled(Slider)`
   height: 90%; //슬라이드 컨테이너 영역

  .slick-list {  //슬라이드 스크린
    width: 1050px;
    height: 435px;
    margin: 0 auto;
    overflow-x: hidden;
   
  }

  .slick-slide div { //슬라이더  컨텐츠
    /* cursor: pointer; */
  }

  .slick-dots {  //슬라이드의 위치
    bottom: 20px;
    margin-top: 200px;
  }

  .slick-track { //이건 잘 모르겠음
    width: 100%;
  }
`;
export default ProductList;