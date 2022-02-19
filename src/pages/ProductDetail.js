import React from 'react';
import styled from 'styled-components';

import { Text } from '../elements';

const ProductDetail = () => {
  return (
    <DetailWrap>
      <ContentWrap>
        <ContentImg />
        <ContentDesc>
          <Text is_padding="10px 0px 29px 0px">
            <strong style={{
              fontSize:"24px",
              fontWeight: "500",
              lineHeight: "34px",
              wordBreak: "break-all",
              }}
            >
              [한와담 블랙] 곱개장
            </strong>
            <br/>
            <span 
              style={{
                fontSize:"14px",
                paddingTop:"4px",
                color:"#999999"
                }}
              >
                칼칼하게 즐기는 곱창 육개장
              </span>
          </Text>
          <Text
            is_size="14px"
          >
            회원할인가
          </Text>
          <Text is_padding="4px 0px 0px 0px">
            <span 
              style={{
                fontSize:"28px",
                paddingTop:"4px",
                lineHeight:"30px",
                fontWeight: "500",
                letterSpacing:"0",
              }}
            >
              8,900
              <span 
              style={{
                fontSize:"18px",
                padding:"0px 7px 0px 2px",
                fontWeight: "500",
                letterSpacing:"0",
                }}
              >원</span>
            </span>
            <span 
              style={{
                fontSize:"28px",
                paddingTop:"4px",
                lineHeight:"30px",
                fontWeight: "500",
                color:"#fa622f",
                letterSpacing:"0",
              }}
              >
              15%
            </span>
          </Text>
          <Text is_padding="7px 0px 0px 0px">
            <span
              style={{
                fontSize:"16px",
                paddingTop:"4px",
                lineHeight:"24px",
                fontWeight: "400",
                color:"#999",
                textDecoration:"line-through",
              }}
            >
              8,900원
              <img 
                 style={{
                  width: "24px",
                  height: "24px",
                  verticalAlign: "-6px",
                }}
                alt='quest' 
                src='https://res.kurly.com/kurly/ico/2021/question_24_24_c999.svg' 
              />
            </span>
          </Text>
          <Text is_padding="10px 0px 0px 0px">
            <SpanLine
              style={{
                fontSize:"14px",
                lineHeight:"18px",
                fontWeight: "500",
                color:"#5f0080",
              }}
            >
              일반 0.5%
            </SpanLine>
            <span
              style={{
                fontSize:"14px",
                lineHeight:"18px",
                fontWeight: "400",
                color:"#333333",
              }}
            >개당 </span>
            <span
              style={{
                fontSize:"14px",
                lineHeight:"18px",
                fontWeight: "500",
                color:"#333333",
              }}
            >
              38원 적립
            </span>
          </Text>
        </ContentDesc>
      </ContentWrap>
    </DetailWrap>
  );
};

const DetailWrap = styled.div`
  width: 1050px;
  margin: 0 auto;
  padding-top: 20px;
  color: #333333;
  line-height: 20px;
`;

const ContentWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ContentImg = styled.div`
  width: 430px;
  height: 552px;
  background-image: url("https://img-cf.kurly.com/shop/data/goods/1637822466321y0.jpg");
  background-repeat: no-repeat;
  background-size: cover;
`;

const ContentDesc = styled.div`
  width: 560px;
`;

const SpanLine = styled.span`
  &::after {
    content: "";
    display: inline-block;
    width: 1px;
    height: 12px;
    margin: 0 6px 0 7px;
    background-color: #d8d8d8;
    vertical-align: -1px;
  }
`;

export default ProductDetail;