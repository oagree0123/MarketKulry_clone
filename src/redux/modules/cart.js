import { createAction, handleActions } from "redux-actions";
import produce from "immer";

import moment from "moment";
import api from "../../api/api";
import axios from "axios";

// actions
const GET_CART = "GET_CART";
const ADD_CART = "ADD_CART";
const DELETE_CART = "DELETE_CART";
const ORDER_CART ="ORDER_CART";

// action creators
const getCart = createAction(GET_CART, (cart_list) => ({cart_list}));
const addCart = createAction(ADD_CART, () => ({}));
const deleteCart = createAction(DELETE_CART, (product_in_cart_id) => ({
  product_in_cart_id,
}));
const orderCart = createAction(ORDER_CART,()=>({}));


// initial state
const initialState = {
  list: [
    
  ],
};

// middlewares
const getCartDB = () => {
    return async function (dispatch, getState) {
        const token = localStorage.getItem("token");
        axios
        //   .get("http://localhost:3003/cart")
           .get("http://3.38.178.109/cart",{
            headers: {
          Authorization: `${token}`,
        }})
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
  return function (dispatch, getState, { history }) {
    console.log(product_id, count);
    const token = localStorage.getItem("token");
    axios
      .post(`http://3.38.178.109/cart/${product_id}`, {
        count: count,
      },
      {
          headers: {
        Authorization: `${token}`,
      }
    }
    )
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
      .put(`http://3.38.178.109/cart/${productInCartId}`, {
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
      .delete(`http://3.38.178.109/cart/${productInCartId}`)
      .then((response) => {
        dispatch(deleteCart(productInCartId));
      })
      .catch((err) => {
        console.log("카트 삭제에 실패했습니다.", err);
      });
  };
};

const orderCartDB = (productInCartIdList)=>{
    return function (dispatch, getState,{history}){
        // dispatch(orderCart());
        const token = localStorage.getItem("token");
        axios
        .post("http://3.38.178.109/order",{
            productInCartIdList: productInCartIdList
        },
        {
            headers: {
          Authorization: `${token}`,
        }
      }
        )
        .then((response)=>{
            console.log("주문하기 성공!",response)
            dispatch(orderCart());
            
        })
        .catch((err)=>{
            console.log("주문하기 실패", err)
        })
    }
}



// reducer
export default handleActions(
  {
    [GET_CART]: (state, action) =>
      produce(state, (draft) => {
        draft.list.push(...action.payload.cart_list)
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
    [ORDER_CART]: (state, action) =>
      produce(state, (draft) => {
        draft.list=[];
    }),
  },
  initialState
);

const actionCreators = {
  getCartDB,
  addCartDB,
  editCartCountDB,
  deleteCartDB,
  orderCartDB,

};

export { actionCreators };
