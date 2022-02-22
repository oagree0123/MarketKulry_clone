import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import { Text, Button } from '../elements';
import CommentList from '../components/CommentList';
import { actionCreators as cartActions } from '../redux/modules/cart';

const Detail = (props) => {
  const dispatch = useDispatch();

  const product_id = props.product_id;

  const [count, setCount] = useState(1);
  const [price, setPrice] = useState(props.price);
  const [point, setPoint] = useState(38);

  const clickOrder = () => {
    dispatch(cartActions.addCartDB(product_id, count))
  }

  return (
    <DetailWrap>
      <ContentWrap>
        <ContentImg 
          style={{
            backgroundImage: `url('${props.productImg}')`
          }}
        />
        <ContentDesc>
          <Text is_padding="10px 0px 29px 0px">
            <strong style={{
              fontSize:"24px",
              fontWeight: "500",
              lineHeight: "34px",
              wordBreak: "break-all",
              }}
            >
              {/* [한와담 블랙] 곱개장 */}
              {props.productName}
            </strong>
            <br/>
            <span 
              style={{
                fontSize:"14px",
                paddingTop:"4px",
                color:"#999999"
                }}
              >
                {/* 칼칼하게 즐기는 곱창 육개장 */}
                {props.desc}
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
              {price.toLocaleString('ko-KR')}
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
              0%
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
              {price.toLocaleString('ko-KR')}원
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
              {point}원 적립
            </span>
          </Text>
          <InfoWrap>
            <DefiWrap style={{
                paddingBottom: "0px",
              }}
            >
              <dd >
                판매단위
              </dd>
              <dt>1팩</dt>
            </DefiWrap>
            <DefiWrap>
              <dd>중량/용량</dd>
              <dt>600g</dt>
            </DefiWrap>
            <DefiWrap style={{
                    borderTop: "1px solid #f4f4f4",
                }}
            >
              <dd>
                포장타입
              </dd>
              <dt>
                냉동/스티로폼
                <strong style={{
                    display: "block",
                    paddingTop: "4px",
                    fontWeight: "400",
                    fontSize: "12px",
                    color: "#666",
                    lineHeight: "16px",
                }}>
                  택배포장은 에코포장이 스티로폼으로 대체됩니다.
                </strong>
              </dt>
            </DefiWrap>
            <DefiWrap style={{
                    borderTop: "1px solid #f4f4f4",
                    borderBottom: "1px solid #f4f4f4"
                }}
            >
              <dd>유통기한</dd>
              <dt>후면 별도 표기일까지</dt>
            </DefiWrap>
          </InfoWrap>
          <CartWrap>
            <CntWrap>
              <CartCountWrap>
                <Text 
                  is_width="128px"
                  is_size="14px"
                  is_color="#666666"
                >
                  구매수량
                </Text>
              </CartCountWrap>
              <CntBtnWrap>
                <CntBtn
                  onClick={() => {
                    if(count <= 0) {
                      return;
                    }
                    setCount(count-1);
                  }}
                >-</CntBtn>
                <CartCnt>{count}</CartCnt>
                <CntBtn
                  onClick={() => {
                    setCount(count+1);
                  }}
                >+</CntBtn>
              </CntBtnWrap>
            </CntWrap>
            <TotalWrap>
              <TotalPrice>
                <span style={{
                  fontSize: "13px",
                  fontWeight: "500"
                }}>
                  총 상품금액:
                </span>
                <span 
                  style={{
                    fontSize:"32px",
                    paddingLeft:"8px",
                    lineHeight:"32px",
                    fontWeight: "700",
                    letterSpacing:"0",
                  }}
                >
                  {(price*count).toLocaleString('ko-KR')}
                  <span 
                  style={{
                    fontSize:"18px",
                    padding:"0px 7px 0px 2px",
                    fontWeight: "500",
                    letterSpacing:"0",
                    }}
                  >원</span>
                </span>
              </TotalPrice>
              <PointWrap>
                <span style={{
                  display: "inline-block",
                  width: "38px",
                  height: "20px",
                  marginRight: "5px",
                  borderRadius: "10px",
                  backgroundColor: "#ffbf00",
                  fontWeight: "700",
                  fontSize: "11px",
                  color: "#fff",
                  lineHeight: "20px",
                  textAlign: "center",
                  verticalAlign: "1px",
                  letterSpacing: "0",
                }}>
                  적립
                </span>
                <span style={{
                  fontSize: "14px",
                  letterSpacing: "0",
                }}>
                  구매 시 <strong style={{
                  fontSize: "14px",
                  letterSpacing: "0",
                }}>
                    {(point*count).toLocaleString('ko-KR')}원 적립
                  </strong>
                </span>
              </PointWrap>
            </TotalWrap>
            <CartBtnWrap>
              <LikeBtn />
              <AlarmBtn disabled />
              <CartBtn onClick={clickOrder} >장바구니 담기</CartBtn>
            </CartBtnWrap>
          </CartWrap>
        </ContentDesc>  
      </ContentWrap>
      <DetailInfoWrap>
        <WhyWrap>
          <p style={{
            display: "block",
            width: "1000px",
            fontSize: "33px",
            fontWeight: "400",
            color: "#666",
            textAlign: "center",  
          }}>
            WHY KURLY
          </p>
          <WhyTop>
            <WhyBox style={{marginLeft: "0px",}}>
              <div><img alt="why" src='https://res.kurly.com/pc/ico/1910/01_check.svg' /></div>
              <div style={{
                marginTop: "10px",
                fontSize: "18px",
                fontWeight: "500",
                textAlign: "center",
                lineHeight: "27px",
                color: "#5f0080",
              }}>깐깐한 상품위원회</div>
              <p style={{
                marginTop: "22px",
                marginBottom: "0px",
                color: "#333",
                padding: "0",
                fontSize: "16px",
                fontWeight: "300",
                lineHeight: "1.56",
                letterSpacing: "-.4px",
                textAlign: "center",
              }}>
                나와 내 가족이 먹고 쓸 상품을 고르는<br />
                마음으로 매주 상품을 직접 먹어보고,<br />
                경험해보고 성분, 맛, 안정성 등 다각도의<br />
                기준을 통과한 상품만을 판매합니다.<br />
              </p>
            </WhyBox>
            <WhyBox>
            <div><img alt="why" src='https://res.kurly.com/pc/ico/1910/02_only.svg' /></div>
              <div style={{
                marginTop: "10px",
                fontSize: "18px",
                fontWeight: "500",
                textAlign: "center",
                lineHeight: "27px",
                color: "#5f0080",
              }}>차별화된 Kurly Only 상품</div>
              <p style={{
                marginTop: "22px",
                marginBottom: "0px",
                color: "#333",
                padding: "0",
                fontSize: "16px",
                fontWeight: "300",
                lineHeight: "1.56",
                letterSpacing: "-.4px",
                textAlign: "center",
              }}>
                전국 각지와 해외의 훌륭한 생산자가<br />
                믿고 선택하는 파트너, 마켓컬리.<br />
                3천여 개가 넘는 컬리 단독 브랜드, 스펙의<br />
                Kurly Only 상품을 믿고 만나보세요.<br />
              </p>
              <span style={{
                  display: "block",
                  width: "100%",
                  height: "19px",
                  margin: "16px 0",
                  fontSize: "13px",
                  fontWeight: "300",
                  letterSpacing: "-.29px",
                  textAlign: "center",
                  color: "#666",
              }}
              >(온라인 기준 / 자사몰, 직구 제외)</span>
            </WhyBox>
            <WhyBox>
            <div><img alt="why" src='https://res.kurly.com/pc/ico/1910/03_cold.svg' /></div>
              <div style={{
                marginTop: "10px",
                fontSize: "18px",
                fontWeight: "500",
                textAlign: "center",
                lineHeight: "27px",
                color: "#5f0080",
              }}>신선한 풀콜드체인 배송</div>
              <p style={{
                marginTop: "22px",
                marginBottom: "0px",
                color: "#333",
                padding: "0",
                fontSize: "16px",
                fontWeight: "300",
                lineHeight: "1.56",
                letterSpacing: "-.4px",
                textAlign: "center",
              }}>
                온라인 업계 최초로 산지에서 문 앞까지<br />
                상온, 냉장, 냉동 상품을 분리 포장 후<br />
                최적의 온도를 유지하는 냉장 배송 시스템,<br />
                풀콜드체인으로 상품을 신선하게 전해드립니다.<br />
              </p>
              <span style={{
                  display: "block",
                  width: "100%",
                  height: "19px",
                  margin: "16px 0",
                  fontSize: "13px",
                  fontWeight: "300",
                  letterSpacing: "-.29px",
                  textAlign: "center",
                  color: "#666",
              }}
              >(샛별배송에 한함)</span>
            </WhyBox>
          </WhyTop>
          <WhyBottom>
            <WhyBox>
            <div><img alt="why" src='https://res.kurly.com/pc/ico/1910/04_price.svg' /></div>
              <div style={{
                marginTop: "10px",
                fontSize: "18px",
                fontWeight: "500",
                textAlign: "center",
                lineHeight: "27px",
                color: "#5f0080",
              }}>고객, 생산자를 위한 최선의 가격</div>
              <p style={{
                marginTop: "22px",
                marginBottom: "0px",
                color: "#333",
                padding: "0",
                fontSize: "16px",
                fontWeight: "300",
                lineHeight: "1.56",
                letterSpacing: "-.4px",
                textAlign: "center",
              }}>
                매주 대형 마트와 주요 온라인 마트의 가격<br />
                변동 상황을 확인해 신선식품은 품질을<br />
                타협하지 않는 선에서 최선의 가격으로,<br />
                가공식품은 언제나 합리적인 가격으로<br />
                정기 조정합니다.<br />
              </p>
            </WhyBox>
            <WhyBox>
            <div><img alt="why" src='https://res.kurly.com/pc/ico/1910/05_eco.svg' /></div>
              <div style={{
                marginTop: "10px",
                fontSize: "18px",
                fontWeight: "500",
                textAlign: "center",
                lineHeight: "27px",
                color: "#5f0080",
              }}>환경을 생각하는 지속 가능한 유통</div>
              <p style={{
                marginTop: "22px",
                marginBottom: "0px",
                color: "#333",
                padding: "0",
                fontSize: "16px",
                fontWeight: "300",
                lineHeight: "1.56",
                letterSpacing: "-.4px",
                textAlign: "center",
              }}>
                친환경 포장재부터 생산자가 상품에만<br />
                집중할 수 있는 직매입 유통구조까지,<br />
                지속 가능한 유통을 고민하며 컬리를 있게<br />
                하는 모든 환경(생산자, 커뮤니티, 직원)이<br />
                더 나아질 수 있도록 노력합니다.<br />
              </p>
            </WhyBox>
          </WhyBottom>
        </WhyWrap>
      </DetailInfoWrap>
      <CommentList 
        product_id={product_id}
        product_name={props.productName} 
        product_img={props.productImg} 
      />
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

const InfoWrap = styled.div`
  width: 560px;
  margin-top: 19px;
  padding-bottom: 19px;
  border-top: 1px solid #f4f4f4;
`;

const DefiWrap = styled.dl`
  margin: 0px;
  padding: 18px 0px;

  & > dd {
    float: left;
    margin-left: 0;
    width: 128px;
    font-size: 14px;
    color: #666;
    line-height: 20px;
  }

  & > dt {
    overflow: hidden;
    font-size: 14px;
    line-height: 20px;
  }
`;

const CartWrap =styled.div`
  padding-bottom: 40px;
`;

const CntWrap = styled.div`
  display: flex;
  padding-bottom: 18px;
  border-bottom: 1px solid #f4f4f4;
`;

const CartCountWrap = styled.div`
  width: 128px;
  padding-bottom: 5px;
`;

const CntBtnWrap = styled.div`
  width: 88px;
  height: 30px;
  padding-bottom: 5px;
  display: flex;
  align-items: center;
  border: 1px solid #dddfe1;
  border-radius: 3px;
  overflow: hidden;
`;

const CartCnt = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`

const CntBtn = styled.button`
  width: 28px;
  height: 28px;
  background: none;
  border: none;
`;

const TotalWrap = styled.div`
  color: #333;
  letter-spacing: 0;
  padding: 30px 0px 20px 0px;
  overflow: hidden;
`;

const TotalPrice = styled.div`
  text-align: right;
  height: 32px;
  overflow: hidden;
`;

const PointWrap = styled.div`
  padding-top: 13px;
  text-align: right;
  letter-spacing: 0;
`;

const CartBtnWrap = styled.div`
  width: 560px;
  display: flex;
  justify-content: space-between;
`;

const LikeBtn = styled.button`
  margin-right: 8px;
  width: 54px;
  height: 54px;
  color: transparent;
  background-image: url('https://res.kurly.com/pc/service/pick/btn-itemdetail-like.svg');
  background-repeat: no-repeat;
  background-size: 32px;
  border: 1px solid #ddd;
  border-radius: 3px;
  box-sizing: border-box;
  text-align: center;
  background-position: center center;
  background-color: #fff;
  cursor: pointer;
`;

const AlarmBtn = styled.button`
  margin-right: 8px;
  width: 54px;
  height: 54px;
  color: transparent;
  background-image: url('https://res.kurly.com/pc/service/goodsview/btn-itemdetail-restock-dim.svg');
  background-repeat: no-repeat;
  background-size: 32px;
  border: 1px solid #ddd;
  border-radius: 3px;
  box-sizing: border-box;
  text-align: center;
  background-position: center center;
  background-color: #fff;
  cursor: pointer;
`;

const CartBtn = styled.button`
  width: 432px;
  color: #fff;
  background: #5f0081;
  border: 1px solid #5f0081;
  border-radius: 3px;
  font-size: 16px;
  font-weight: 600;
  line-height: normal;
`;

const DetailInfoWrap = styled.div`
  width: 1050px;
`;

const WhyWrap = styled.div`
  padding:"44px 40px 88px 0px !important";
`;

const WhyTop = styled.div`
  margin-top: 45px;
  margin-bottom: 16px;
  width: 1000px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const WhyBottom = styled.div`
  width: 1000px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const WhyBox = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
  margin-top: 43px;
  margin-left: 10px;
  width: 315px;
  height: 251px;
  text-align: center;
`;


export default Detail;