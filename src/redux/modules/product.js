import { createAction, handleActions } from "redux-actions";
import produce from "immer";
import moment from "moment";
import api from "../../api/api";
import axios from "axios";

// actions
const GET_PRODUCT = "GET_PRODUCT";

// action creators
const getProduct = createAction(GET_PRODUCT, (post_list) => ({ post_list }));

// initial state
const initialState = {
  list: [],
  
};

const initialPost = {
  productId: 0,
  productNam: "플레인요거트",
  price: 5000,
  desc: "장에 좋은 요거트",
  productImg:
    "https://media.istockphoto.com/photos/dog-puppy-on-garden-picture-id1142412984?k=20&m=1142412984&s=170667a&w=0&h=VLomTUSZwXDrVauJrpiyMboe0Q7lUYYiMO89sFy2dgY=",
}

//미들웨어

const getProductDB = () => {
  return async function (dispatch, getState) {
    await axios
      .get("http://localhost:3003/product")
      .then((response) => {
        //console.log("LikePst",response.data.sortByLike);
        console.log(response.data);
        dispatch(getProduct(response.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

const getOneProductDB = (product_id) => {
  return async function (dispatch, useState, { history }) {
    await axios
    .get(`http://localhost:3003/product/${product_id}`)
    .then(function (response) {
      console.log(response.data);
      dispatch(getProduct([response.data]));
    })
    .catch((err) => {
      console.log(err);
    });
  };
};

// reducer
export default handleActions({
  [GET_PRODUCT]: (state, action) => produce(state, (draft) => {
    draft.list.push(...action.payload.post_list);
        
    draft.list = draft.list.reduce((acc, cur) => {
      if(acc.findIndex(a => a.productId === cur.productId) === -1) {
        return [...acc, cur];
      } else {
        acc[acc.findIndex(a => a.productId === cur.productId)] = cur;
        return acc;
      }
    }, []);
  }),
}, initialState);

const actionCreators = {
  getProductDB,
  getOneProductDB,
};

export { actionCreators };
