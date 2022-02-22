import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { actionCreators as cartActions } from "../redux/modules/cart";

const Cart = (props) => {
  console.log(props);
  const dispatch = useDispatch();

  const [item_select, setItemSelect] = useState(true);

  const editItemCount = (type) => {
    if(type === "plus") {
      dispatch(cartActions.editCartCountDB(props.productInCartId, props.count+1));
    }
    else if(type === "minus") {
      dispatch(cartActions.editCartCountDB(props.productInCartId, props.count-1));
    }
  }

  const deleteItem = () => {
    if(window.confirm("정말 삭제하시겠습니다까?")){
      dispatch(cartActions.deleteCartDB(props.productInCartId))
    }
  }

  return (
    <>
      <CartCards>
        <CartCard>
          <CardInfoWrap>
            {item_select ? (
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
              src={props.product.productImg}
            />
            <CardTitle>{props.product.productName}</CardTitle>
          </CardInfoWrap>
          <CardPriceWrap>
            <CardBtnWrap>
              <CardBtn
                onClick={() => {
                  if (props.count <= 0) {
                    return;
                  }
                  editItemCount("minus");
                }}
              >
                -
              </CardBtn>
              <CardCnt>{props.count}</CardCnt>
              <CardBtn
                onClick={() => {
                  editItemCount("plus");
                }}
              >
                +
              </CardBtn>
            </CardBtnWrap>
            <CardPrice>{(props.product.price * props.count).toLocaleString('ko-KR')}원</CardPrice>
            <CardCloseBtn onClick={deleteItem} />
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
