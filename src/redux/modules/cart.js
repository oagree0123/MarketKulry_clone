import { createAction, handleActions } from "redux-actions";
import produce from "immer";
import moment from "moment";
import api from "../../api/api";
import axios from "axios";

// actions
const GET_CART = "GET_CART";
const ADD_CART = "ADD_CART";
const EDIT_CART = "EDIT_CART";
const DELETE_CART = "DELETE_CART";

// action creators
const getCart = createAction(GET_CART, (cart_list) => ({cart_list}));
const addCart = createAction(ADD_CART, (cart_data) => ({cart_data}));
const editdCart = createAction(EDIT_CART, (cart_id, count) => ({ cart_id, count }));
const deleteCart = createAction(DELETE_CART, (cart_index) => ({
  cart_index,
}));

// initial state
const initialState = {
  list: [],
  total_price: 0,
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
        dispatch(editdCart(productInCartId, count));
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
        let _card_data = action.payload.cart_data;

        draft.list = draft.list.map((c, i) => {
          console.log(c);
          if(c.productInCartId === _card_data.productInCartId) {
            let new_count = _card_data.count
            return {...c, count: new_count};
          } else{
            return c;
          }
        })
        /* draft.list.push(action.payload.cart_data); */   
    }),
    [EDIT_CART]: (state, action) =>
      produce(state, (draft) => {
        // 수량 체인지
        let cart_idx = draft.list.findIndex(v => v.productInCartId === action.payload.cart_id)

        draft.list[cart_idx].count = action.payload.count;
    }),
    [DELETE_CART]: (state, action) =>
      produce(state, (draft) => {
        const new_cart_product = draft.list.filter((c, i) => {
          console.log(c);
          console.log(action.payload.cart_index);

          return (
            parseInt(action.payload.cart_index) !==parseInt(i)
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
