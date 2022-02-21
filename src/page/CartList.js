import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import { Text } from '../elements';
import Cart from '../components/Cart';
import OrderInfo from '../components/OrderInfo';
import { actionCreators as cartActinos } from '../redux/modules/cart';

const CartList = (props) => {
  const dispatch = useDispatch();

  const cart_list = useSelector(state => state.cart.list)

  const [allSelect, setAllSelect] = useState(true);


  useEffect(() => {
    if(cart_list){
      dispatch(cartActinos.getCartDB());
    }
  }, [])

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
          {cart_list ?
          cart_list.map((c, i) => {
            return <Cart key={i} {...c} />
          }):
          null
          }
        </CartListWrap>
        <OrderInfo />
      </CartContent>
    </CartWrap>
  );
};

const CartWrap = styled.div`
  margin: 0 auto;
  margin-bottom: 240px;
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

export default CartList;