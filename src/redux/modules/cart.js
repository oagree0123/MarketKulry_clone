import { createAction, handleActions } from "redux-actions";
import produce from "immer";
import moment from "moment";
import api from "../../api/api";
import axios from "axios";

// actions
const GET_CART = "GET_CART";

// action creators
const getCart = createAction(GET_CART, (cart_list) => ({ cart_list }));

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

const getCartDB = () => {
  return async function (dispatch, getState) {
    await axios
      .get("http://localhost:3003/cart")
      .then((response) => {
        //console.log("LikePst",response.data.sortByLike);
        console.log(response);
        dispatch(getCart(response.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};



// reducer
export default handleActions({
  [GET_CART]: (state, action) => produce(state, (draft) => {
    draft.list.push(...action.payload.cart_list);
        
    
  }),
}, initialState);

const actionCreators = {
    getCartDB
};

export { actionCreators };
