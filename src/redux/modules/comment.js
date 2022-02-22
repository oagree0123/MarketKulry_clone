import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
import moment from "moment";
import api from "../../api/api";
import axios from "axios";

// actions
const GET_COMMENT = "GET_COMMENT";

// action creators
const getComment = createAction(GET_COMMENT, (comment_list) => ({ comment_list }));

// initial state
const initialState = {
  list: [],
};

// middlewares
const getCommentDB = () => {
  return function (dispatch, getState, {history}) {
    axios.get('http://localhost:3003/comments')
    .then((response) => {
      console.log(response.data)
      dispatch(getComment(response.data));
    })
    .catch((err) => {
      console.log("댓글 가져오기 실패", err);
    })
  }
}

// reducer
export default handleActions(
  {
    [GET_COMMENT]: (state, action) => 
      produce(state, (draft) => {
        draft.list.push(...action.payload.comment_list);

        draft.list = draft.list.reduce((acc, cur) => {
          if(acc.findIndex(a => a.commentId === cur.commentId) === -1) {
            return [...acc, cur];
          } else {
            acc[acc.findIndex(a => a.commentId === cur.commentId)] = cur;
            return acc;
          }
        }, [])
    }),
  }, 
  initialState
)

const actionCreators = {
  getCommentDB,
};

export { actionCreators };