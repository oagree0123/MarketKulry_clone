import React from 'react';
import styled from 'styled-components';

import { useDispatch, useSelector } from 'react-redux';
import { actionCreators as cartActinos } from '../redux/modules/cart';

const OrderInfo = (props) => {
  const dispatch = useDispatch();

  /* let productInCartIdList = [];
  const cart_list = props; */
  const is_login = useSelector(state => state.user.is_login);
  const cart_list = useSelector(state => state.cart.list);
  
  
  const orderCart = ()=>{
    let productInCartIdList = []

    for(let i=0; i < cart_list.length; i++){
      productInCartIdList.push(cart_list[i].productInCartId)
    }

    dispatch(cartActinos.orderCartDB(productInCartIdList))
  }

  let cur_price = props.cur_price;
  let total_price = 0;
  const delivery_fee = 3000;

  if(parseInt(props.cur_price) >= 50000 ) {
    total_price = cur_price;
  }
  else {
    total_price = cur_price + delivery_fee;
  }

  return (
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
                {cur_price.toLocaleString("ko-KR")}
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
                {
                  cur_price >= 50000 ?
                  "0" : 
                    cur_price === 0 ?
                    "0" :
                    "+3,000"
                }
                <span style={{
                    paddingLeft: "2px",
                    fontSize: "16px",
                    verticalAlign: "1px",
                }}>원</span>
              </dd>
            </TotalPriceDl>
              <FreeFeeWrap>
                {
                  cur_price >= 50000 ?
                  "0원 추가주문 시," :
                  `${(50000 - cur_price).toLocaleString('ko-KR')}원 추가주문 시,`
                }
                <strong style={{fontWeight: "400"}}> 무료배송</strong>
              </FreeFeeWrap>
            <AmountPriceDl>
              <dt>결제예정금액</dt>
              <dd>
                { cur_price === 0 ?
                  "0" :
                  (total_price).toLocaleString('ko-KR')
                }
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
          <OrderBtn 
          onClick={()=>{
            if(!is_login) {
              window.alert("로그인 후 주문이 가능합니다!")
              return;
            }
            orderCart()
          }}
          >
            주문하기
          </OrderBtn>
        </CartInfo>
  );
};

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

export default OrderInfo;