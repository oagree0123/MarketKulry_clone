import { createAction, handleActions } from "redux-actions";
import produce from "immer";
import api from "../../api/api";
import axios from "axios";

// actions
const GET_CART = "GET_CART";
const ADD_CART = "ADD_CART";
const DELETE_CART = "DELETE_CART";

// action creators
const getCart = createAction(GET_CART, (cart_list) => ({cart_list}));
const addCart = createAction(ADD_CART, (cart_data) => ({cart_data}));
const deleteCart = createAction(DELETE_CART, (cart_index) => ({
  cart_index,
}));

// initial state
const initialState = {
  list: [
    /* {
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
    }, */
  ],
};

// middlewares
const getCartDB = () => {
  const token = localStorage.getItem('token');
  return function (dispatch, getState, { history }) {
    /* axios
    .get("http://localhost:3003/cart") */
    api.get(`/cart`, {
      headers: {
        Authorization: `${token}`,
      },
    })
    .then((response) => {
      console.log(response);
      dispatch(getCart(response.data));
    })
    .catch((err) => {
      console.log(err);
    });
  };
};

const addCartDB = (product_id, count) => {
  const token = localStorage.getItem('token');
  return function (dispatch, getState, { history }) {
    console.log(product_id, count);
    /* axios
      .post(`http://localhost:3003/cart/${product_id}`, {
        count: count,
      }) */
      api.post(`cart/${product_id}`, {
        count: count,
      }, {
        headers: {
          Authorization: `${token}`,
        }
      })
      .then((response) => {
        console.log(response.data);
        dispatch(addCart(response.data))
        console.log("카트담기 성공");
      })
      .catch((err) => {
        console.log("카트담기 실패", err);
      });
  };
};

const editCartCountDB = (productInCartId, count) => {
  const token = localStorage.getItem('token');
  return function (dispatch, getState, {history}) {
    /* axios
      .put(`http://localhost:3003/cart/${productInCartId}`, {
        count: count
      }) */
      api
      .put(`/cart/${productInCartId}`, {
        count: count
      }, {
        headers: {
          Authorization: `${token}`,
        }
      })
      .then((res) => {
        
      })
      .catch((err) => {
        console.log("카운트 변경 실패", err)
      })
  };
}

const deleteCartDB = (productInCartId) => {
  const token = localStorage.getItem('token');
  return function (dispatch, getState, { history }) {
    const _cart_list = getState().cart.list;

    /* axios
      .delete(`http://localhost:3003/cart/${productInCartId}`) */
      api.delete(`cart/${productInCartId}`, {
        headers: {
          Authorization: `${token}`,
        }
      })
      .then((response) => {
        const _cart_index = _cart_list.findIndex((c) => {
          return parseInt(c.productInCartId) === parseInt(productInCartId);
        })

        dispatch(deleteCart(_cart_index));
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
        draft.list.push(...action.payload.cart_list);

        draft.list = draft.list.reduce((acc, cur) => {
          if(acc.findIndex(a => a.productInCartId === cur.productInCartId) === -1) {
            return [...acc, cur];
          } else {
            acc[acc.findIndex(a => a.productInCartId === cur.productInCartId)] = cur;
            return acc;
          }
        }, []);
    }),
    [ADD_CART]: (state, action) =>
      produce(state, (draft) => {
        draft.list.push(action.payload.cart_data);
    }),
    [DELETE_CART]: (state, action) =>
      produce(state, (draft) => {
        const new_cart_product = draft.list.filter((c, i) => {
          console.log(c);
          console.log(action.payload.cart_index);

          return (
            parseInt(action.payload.cart_index) !==
            parseInt(i)
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
