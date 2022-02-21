import React, { useState } from "react";
import styled from "styled-components";

const Cart = (props) => {
  const [itemSelect, setItemSelect] = useState(true);
  const [count, setCount] = useState(1);
  
  return (
    <>
      <CartCards>
        <CartCard>
          <CardInfoWrap>
            {itemSelect ? (
              <ItemCheckBtn
                onClick={() => {
                  setItemSelect(false);
                }}
              />
            ) : (
              <ItemUnCheckBtn
                onClick={() => {
                  setItemSelect(true);
                }}
              />
            )}
            <img
              style={{
                display: "block",
                width: "60px",
                hegiht: "78ox",
              }}
              alt="productImg"
              src="https://img-cf.kurly.com/shop/data/goods/1637822466321y0.jpg"
            />
            <CardTitle>[한와담 블랙] 곱개장</CardTitle>
          </CardInfoWrap>
          <CardPriceWrap>
            <CardBtnWrap>
              <CardBtn
                onClick={() => {
                  if (count <= 0) {
                    return;
                  }
                  setCount(count - 1);
                }}
              >
                -
              </CardBtn>
              <CardCnt>{count}</CardCnt>
              <CardBtn
                onClick={() => {
                  setCount(count + 1);
                }}
              >
                +
              </CardBtn>
            </CardBtnWrap>
            <CardPrice>8,900원</CardPrice>
            <CardCloseBtn />
          </CardPriceWrap>
        </CartCard>
      </CartCards>
      <CartCards>
        <CartCard>
          <CardInfoWrap>
            {itemSelect ? (
              <ItemCheckBtn
                onClick={() => {
                  setItemSelect(false);
                }}
              />
            ) : (
              <ItemUnCheckBtn
                onClick={() => {
                  setItemSelect(true);
                }}
              />
            )}
            <img
              style={{
                display: "block",
                width: "60px",
                hegiht: "78ox",
              }}
              alt="productImg"
              src="https://img-cf.kurly.com/shop/data/goods/1637822466321y0.jpg"
            />
            <CardTitle>[한와담 블랙] 곱개장</CardTitle>
          </CardInfoWrap>
          <CardPriceWrap>
            <CardBtnWrap>
              <CardBtn
                onClick={() => {
                  if (count <= 0) {
                    return;
                  }
                  setCount(count - 1);
                }}
              >
                -
              </CardBtn>
              <CardCnt>{count}</CardCnt>
              <CardBtn
                onClick={() => {
                  setCount(count + 1);
                }}
              >
                +
              </CardBtn>
            </CardBtnWrap>
            <CardPrice>8,900원</CardPrice>
            <CardCloseBtn />
          </CardPriceWrap>
        </CartCard>
      </CartCards>
    </>
  );
};

const ItemCheckBtn = styled.button`
  margin-right: 32px;
  width: 24px;
  height: 24px;
  border: none;
  background: url("https://res.kurly.com/mobile/service/common/2006/ico_checkbox_checked.svg");
`;

const ItemUnCheckBtn = styled.button`
  margin-right: 32px;
  width: 24px;
  height: 24px;
  border: none;
  background: url("https://res.kurly.com/mobile/service/common/2006/ico_checkbox.svg");
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
  background-image: url("https://res.kurly.com/pc/service/cart/2007/ico_delete.svg");
  cursor: pointer;
`;

export default Cart;
