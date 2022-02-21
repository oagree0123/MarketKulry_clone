import React, { useState } from 'react';
import styled from 'styled-components';

import { Text } from '../elements';
import Cart from '../components/Cart';

const CartList = (props) => {
  const [allSelect, setAllSelect] = useState(true);
  const [itemSelect, setItemSelect] = useState(true);
  const [count, setCount] = useState(1);

  return (
    <CartWrap>
      <CartTitle>
        <h2 style={{
          margin: "0",
          fontSize: "28px",
          fontWeight: "500",
          textAlign: "center",
          lineHeight: "35px",
          letterSpacing: "-1px",
        }}>
          장바구니
        </h2>
      </CartTitle>
          <CartCheckWrap>
            <CartAllCheck>
              { allSelect ?
                <AllCheckBtn
                  onClick={() => {
                    setAllSelect(false);
                  }}
                />:
                <AllUnCheckBtn onClick={() => {
                  setAllSelect(true);
                }}/>
              }
              <span style={{
                fontSize: "14px",
                fontWeight: "500",
                lineHeight: "24px",
                letterSpacing: "-.3px",
                color: "#4c4c4c",
              }}>
                전체선택 (2/2)
              </span>
            </CartAllCheck>
            <CartUnAllCheck>
              <span style={{
                fontSize: "14px",
                fontWeight: "500",
                lineHeight: "25px",
                color: "#4c4c4c",
              }}>
                선택삭제
              </span>
            </CartUnAllCheck>
          </CartCheckWrap>
      <CartContent>
        <CartListWrap>
          {/* Cart */}
          <CartCards>
            <CartCard>
              <CardInfoWrap>
                { itemSelect ?
                  <ItemCheckBtn onClick={() => {
                      setItemSelect(false);
                  }}/>:
                  <ItemUnCheckBtn onClick={() => {
                    setItemSelect(true);
                  }}/>
                }
                <img 
                  style={{
                    display: "block",
                    width: "60px",
                    hegiht: "78ox"
                  }}
                  alt='productImg'
                  src='https://img-cf.kurly.com/shop/data/goods/1637822466321y0.jpg'
                />
                <CardTitle>[한와담 블랙] 곱개장</CardTitle>
              </CardInfoWrap>
              <CardPriceWrap>
                <CardBtnWrap>
                  <CardBtn
                    onClick={() => {
                      if(count <= 0) {
                        return;
                      }
                      setCount(count-1);
                    }}
                  >-</CardBtn>
                  <CardCnt>{count}</CardCnt>
                  <CardBtn
                    onClick={() => {
                      setCount(count+1);
                    }}
                  >+</CardBtn>
                </CardBtnWrap>
                <CardPrice>
                  8,900원
                </CardPrice>
                <CardCloseBtn />
              </CardPriceWrap>
            </CartCard>
          </CartCards>
          <CartCards>
            <CartCard>
              <CardInfoWrap>
                { itemSelect ?
                  <ItemCheckBtn onClick={() => {
                      setItemSelect(false);
                  }}/>:
                  <ItemUnCheckBtn onClick={() => {
                    setItemSelect(true);
                  }}/>
                }
                <img 
                  style={{
                    display: "block",
                    width: "60px",
                    hegiht: "78ox"
                  }}
                  alt='productImg'
                  src='https://img-cf.kurly.com/shop/data/goods/1637822466321y0.jpg'
                />
                <CardTitle>[한와담 블랙] 곱개장</CardTitle>
              </CardInfoWrap>
              <CardPriceWrap>
                <CardBtnWrap>
                  <CardBtn
                    onClick={() => {
                      if(count <= 0) {
                        return;
                      }
                      setCount(count-1);
                    }}
                  >-</CardBtn>
                  <CardCnt>{count}</CardCnt>
                  <CardBtn
                    onClick={() => {
                      setCount(count+1);
                    }}
                  >+</CardBtn>
                </CardBtnWrap>
                <CardPrice>
                  8,900원
                </CardPrice>
                <CardCloseBtn />
              </CardPriceWrap>
            </CartCard>
          </CartCards>
        </CartListWrap>
        <CartInfo>
          <UserAddress>
            <AddrTitle>
              <img style={{
                marginRight: "4px",
              }}
                alt='addr' 
                src='https://res.kurly.com/pc/service/cart/2007/ico_location.svg' 
              /> 
              배송지
            </AddrTitle>
            <UserAddr>
              경기 고양시 일산서구 호수로 42 000동 우리집
            </UserAddr>
            <p style={{
              margin: "0",
              paddingTop: "8px",
              fontWeight: "300",
              fontSize: "14px",
              letterSpacing: "-.3px",
              color: "#5f0080",
            }}>샛별배송</p>
            <AddrBtn>
              배송지 변경
            </AddrBtn>
          </UserAddress>
          <TotalPriceWrap>
            <TotalPriceDl>
              <dt>상품금액</dt>
              <dd>
                27,480
                <span style={{
                    paddingLeft: "2px",
                    fontSize: "16px",
                    verticalAlign: "1px",
                }}>원</span>
              </dd>
            </TotalPriceDl>
            <TotalPriceDl>
              <dt>상품할인금액</dt>
              <dd>
                0
                <span style={{
                    paddingLeft: "2px",
                    fontSize: "16px",
                    verticalAlign: "1px",
                }}>원</span>
              </dd>
            </TotalPriceDl>
            <TotalPriceDl>
              <dt>배송비</dt>
              <dd>
                +3,000
                <span style={{
                    paddingLeft: "2px",
                    fontSize: "16px",
                    verticalAlign: "1px",
                }}>원</span>
              </dd>
            </TotalPriceDl>
              <FreeFeeWrap>
                12,345원 추가주문 시, 
                <strong style={{fontWeight: "400"}}> 무료배송</strong>
              </FreeFeeWrap>
            <AmountPriceDl>
              <dt>결제예정금액</dt>
              <dd>
                30,480
                <span style={{
                  paddingLeft: "2px",
                  fontSize: "16px",
                  fontWeight: "400",
                  verticalAlign: "1px",
                }}>원</span>
              </dd>
            </AmountPriceDl>
            <PointWrap>
                <span style={{
                  display: "inline-block",
                  width: "32.5px",
                  height: "18px",
                  marginRight: "5px",
                  borderRadius: "10px",
                  backgroundColor: "#ffbf00",
                  fontWeight: "400",
                  fontSize: "10px",
                  color: "#fff",
                  lineHeight: "16px",
                  textAlign: "center",
                  verticalAlign: "1px",
                  letterSpacing: "0.05em",
                }}>
                  적립
                </span>
                <span style={{
                  fontSize: "12px",
                  fontWeight: "300",
                  color: "#666",
                  letterSpacing: "0",
                }}>
                  구매 시 <strong style={{
                  fontSize: "12px",
                  fontWeight: "400",
                  color: "#666",
                  letterSpacing: "0.05em",
                }}>
                    120원 적립
                  </strong>
                </span>
              </PointWrap>
          </TotalPriceWrap>
          <OrderBtn>
            주문하기
          </OrderBtn>
        </CartInfo>
      </CartContent>
    </CartWrap>
  );
};

const CartWrap = styled.div`
  margin: 0 auto;
  width: 1050px;
`;

const CartTitle = styled.div`
  padding: 50px 0px 51px 0px;
  width: 1050px;
  margin: 0 auto;
`;

const CartContent = styled.div`
  width: 1050px;
  margin: 0 auto;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`;

const CartListWrap = styled.div`
  width: 742px;
  border-bottom: 1px solid #000;
`;

const CartCheckWrap = styled.div`
  width: 742px;
  margin-left: 2px;
  height: 60px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-bottom: 1px solid #000;
`;

const CartAllCheck = styled.div`
  padding: 18px 0px;
  width: 121px;
  height: 60px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const CartUnAllCheck = styled.div`
  padding: 18px 0 17px 20px;
  width: 73.5px;
  text-align: right;
  box-sizing: content-box;

  &::before {
    content: "";
    float: left;
    width: 1px;
    height: 14px;
    margin: 6px 21px 0 0;
    background-color: #ddd;
  }
`;

const AllCheckBtn = styled.button`
  margin-right: 12px;
  width: 24px;
  height: 24px;
  border: none;
  background: url('https://res.kurly.com/mobile/service/common/2006/ico_checkbox_checked.svg');
`;

const AllUnCheckBtn = styled.button`
  margin-right: 12px;
  width: 24px;
  height: 24px;
  border: none;
  background: url('https://res.kurly.com/mobile/service/common/2006/ico_checkbox.svg');
`;

const ItemCheckBtn = styled.button`
  margin-right: 32px;
  width: 24px;
  height: 24px;
  border: none;
  background: url('https://res.kurly.com/mobile/service/common/2006/ico_checkbox_checked.svg');
`;

const ItemUnCheckBtn = styled.button`
  margin-right: 32px;
  width: 24px;
  height: 24px;
  border: none;
  background: url('https://res.kurly.com/mobile/service/common/2006/ico_checkbox.svg');
`;

const CartCards = styled.div`
  margin-left: 2px;
  border-bottom: 1px solid #f4f4f4;
`;

const CartCard = styled.div`
  width: 100%;
  height: 128px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-bottom: 1px solid #f4f4f4;
`;

const CardInfoWrap = styled.div`
  width: 463px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const CardTitle = styled.p`
  margin-left: 20px;
`;

const CardPriceWrap = styled.div`
  padding-left: 10px;
  width: 279px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const CardBtnWrap = styled.div`
  width: 86px;
  height: 30px;
  display: flex;
  align-items: center;
  border: 1px solid #dddfe1;
  border-radius: 3px;
  overflow: hidden;
`;

const CardBtn = styled.button`
  width: 30px;
  height: 30px;
  background: none;
  border: none;
`;

const CardCnt = styled.div`
  width: 26px;
  height: 26px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const CardPrice = styled.div`
  margin-left: 16px;
  width: 116px;
  text-align: right;
`;

const CardCloseBtn = styled.button`
  margin-left: 14px;
  width: 30px;
  height: 30px;
  border: none;
  background-color: #fff;
  background-image: url('https://res.kurly.com/pc/service/cart/2007/ico_delete.svg');
  cursor: pointer;
`;

const CartInfo = styled.div`
  width: 284px;
  margin-left: 24px;
`;

const UserAddress = styled.div`
  width: 284px;
  padding: 23px 19px 20px 19px;
  border: 1px solid #f2f2f2;
  border-bottom: 0;
  line-height: 1;
  letter-spacing: 0em;
  color: #4c4c4c;
  font-size: 12px;
`;

const AddrTitle = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 20px;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -.3px;
`;

const UserAddr = styled.div`
  padding-top: 11px;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0.05em;
`;

const AddrBtn = styled.button`
  margin-top: 17px;
  width: 100%;
  height: 36px;
  color: #5f0080;
  font-size: 12px;
  line-height: 34px;
  letter-spacing: 0;
  border: 1px solid #5f0080;
  border-radius: 4px;
  background-color: #fff;
  text-align: center;
`;

const TotalPriceWrap = styled.div`
  padding: 9px 18px 18px 20px;
  background-color: #fafafa;
  border: 1px solid #f2f2f2;
`;

const TotalPriceDl = styled.dl`
  margin: 0;
  padding-top: 9px;
  height: 36px;
  display: flex;
  justify-content: space-between;
  align-items: start;
  color: #4c4c4c;
  box-sizing: border-box;

  & > dt {
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: -.5px;
  }

  & > dd {
    font-size: 18px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: -.5px;
  }
`;

const FreeFeeWrap = styled.div`
  padding-top: 3px;
  font-size: 12px;
  font-weight: 300;
  line-height: 18px;
  text-align: right;
  letter-spacing: 0.05em;
  color: #5f0080;
`;

const AmountPriceDl = styled.dl`
  margin-top: 17px;
  margin-bottom: 0;
  padding-top:17px;
  height: 30px;
  display: flex;
  justify-content: space-between;
  align-items: start;
  color: #4c4c4c;
  border-top: 1px solid #eee;
  box-sizing: content-box;

  & > dt {
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: -.5px;
  }

  & > dd {
    font-size: 22px;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: -.5px;
  }
`;

const PointWrap = styled.div`
  padding-top: 9px;
  text-align: right;
  letter-spacing: 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const OrderBtn = styled.div`
  margin-top: 20px;
  width: 100%;
  height: 52px;
  color: #fff;
  font-size: 16px;
  font-weight: 500;
  line-height: 54px;
  text-align: center;
  letter-spacing: 0;
  background-color: #5f0080;
  border: 1px solid #5f0081;
  border-radius: 6px;
  cursor: pointer;
  box-sizing: content-box;
`;

export default CartList;