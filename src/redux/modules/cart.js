import { createAction, handleActions } from "redux-actions";
import produce from "immer";
import api from "../../api/api";
import axios from "axios";

// actions
const GET_CART = "GET_CART";
const ADD_CART = "ADD_CART";
const DELETE_CART = "DELETE_CART";

// action creators
const getCart = createAction(GET_CART, () => ({}));
const addCart = createAction(ADD_CART, () => ({}));
const deleteCart = createAction(DELETE_CART, (product_in_cart_id) => ({
  product_in_cart_id,
}));

// initial state
const initialState = {
  list: [
    {
      id: 1,
      productInCartId: 1,
      count: 5,
      product: {
        productId: 1,
        productName: "[한와담 블랙] 곱개장",
        price: 8900,
        desc: "칼칼하게 즐기는 곱창 육개장",
        productImg:
          "https://img-cf.kurly.com/shop/data/goods/1637822466321y0.jpg",
      },
    },
    {
      id: 2,
      productInCartId: 2,
      product: {
        productId: 2,
        productName: "[블루] MSC인증 자숙랍스터 2미 (냉동)",
        price: 42000,
        desc: "손쉽게 즐기는 탱글한 속살",
        productImg:
          "https://img-cf.kurly.com/shop/data/goods/1637650155968y0.jpg",
      },
      count: 2,
    },
    {
      id: 3,
      productInCartId: 3,
      product: {
        productId: 3,
        productName: "[오뗄블랙라벨] 1980 알뜰 소시지",
        price: 4900,
        desc: "추억의 분홍 소시지",
        productImg:
          "https://img-cf.kurly.com/shop/data/goods/1642140736583y0.jpg",
      },
      count: 2,
    },
    {
      id: 4,
      productInCartId: 4,
      product: {
        productId: 4,
        productName: "[오뗄블랙라벨] 1980 알뜰 소시지",
        price: 4900,
        desc: "추억의 분홍 소시지",
        productImg:
          "https://img-cf.kurly.com/shop/data/goods/1642140736583y0.jpg",
      },
      count: 2,
    },
  ],
};

// middlewares
const getCartDB = () => {
  return function (dispatch, getState, { history }) {
    dispatch(getCart());
  };
};

const addCartDB = (product_id, count) => {
  return function (dispatch, getState, { history }) {
    console.log(product_id, count);
    axios
      .post(`http://localhost:3003/cart/${product_id}`, {
        counts: count,
      })
      .then((response) => {
        /* dispatch(addCart()) */
        console.log("카트담기 성공");
      })
      .catch((err) => {
        console.log("카트담기 실패", err);
      });
  };
};

const editCartCountDB = (productInCartId, count) => {
  return function (dispatch, getState, {history}) {
    axios
      .put(`http://localhost:3003/cart/${productInCartId}`, {
        count: count
      })
      .then((res) => {
        
      })
      .catch((err) => {
        console.log("카운트 변경 실패", err)
      })
  };
}

const deleteCartDB = (productInCartId) => {
  return function (dispatch, getState, { history }) {
    axios
      .delete(`http://localhost:3003/cart/${productInCartId}`)
      .then((response) => {
        dispatch(deleteCart(productInCartId));
      })
      .catch((err) => {
        console.log("카트 삭제에 실패했습니다.", err);
      });
  };
};

// reducer
export default handleActions(
  {
    [GET_CART]: (state, action) =>
      produce(state, (draft) => {
        draft.list.push();
    }),
    [ADD_CART]: (state, action) =>
      produce(state, (draft) => {
        draft.list.unshift();
    }),
    [DELETE_CART]: (state, action) =>
      produce(state, (draft) => {
        const new_cart_product = draft.list.filter((c, i) => {
          return (
            parseInt(c.productInCartId) !==
            parseInt(action.payload.product_in_cart_id)
          );
        });

        draft.list = new_cart_product;
    }),
  },
  initialState
);

const actionCreators = {
  getCartDB,
  addCartDB,
  editCartCountDB,
  deleteCartDB,
};

export { actionCreators };
