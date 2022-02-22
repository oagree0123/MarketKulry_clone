import { createAction, handleActions } from "redux-actions";
import produce from 'immer';
import moment from "moment";
import api from "../../api/api";
import axios from "axios";

// actions
const GET_COMMENT = "GET_COMMENT";
const SET_PREVIEW = "SET_PREVIEW"
const ADD_COMMENT = "ADD_COMMENT";
const DELETE_COMMENT = "DELETE_COMMENT";
const EDIT_COMMENT = "EDIT_COMMENT";

// action creators
const getComment = createAction(GET_COMMENT, (comment_list) => ({ comment_list }));
const setPreview = createAction(SET_PREVIEW, (preview) => ({ preview }));
const addComment = createAction(ADD_COMMENT, (postId, comment, name, date, is_me) => ({ postId, comment, name, date, is_me }));
const deleteComment = createAction(DELETE_COMMENT, (postId, commentId) => ({ postId, commentId }))
const editComment = createAction(EDIT_COMMENT, (postId, commentId, newComment) => ({ postId, commentId, newComment }))

//initialState
const initialState = {
    list: [],
    preview: null,
    uploading: false,
}

//middleware actions
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

const addCommentDB = (productId, comment = {}) => {
    return async function (dispatch, getState) {
        const token = localStorage.getItem('token');
        const form = new FormData()
        form.append('title', comment.title)
        form.append('contents', comment.contents)
        form.append('img',comment.img)
        await api.post(`comment/${productId}`, 
        form,
            {
                headers: {
                    Authorization:
                        `${token}`
                }
            }
        ).then(function (response) {
            console.log("response",response)
        }).catch((err) => {
            console.log("댓글 추가하기 실패", productId, err);
        })
    }
}

const deleteCommentDB = (commentId) => {
    return async function (dispatch, getState) {
        const token = localStorage.getItem('token');
        await api.delete(`/comment/${commentId}`,
            {
                headers: {
                    Authorization:
                        `${token}`
                }
            }
        ).then(function (response) {
            console.log("response",response)
        }).catch((err) => {
            console.log("댓글 삭제가 실패했습니다.", err)
        })
    }
}

const editCommentDB = (commentId, newComment={}) => {
    return async function (dispatch, getState) {
        const token = localStorage.getItem('token');
        const form = new FormData()
        form.append('title', newComment.title)
        form.append('contents', newComment.contents)
       // form.append('editImg', newComment.img)
        await api.put(`/api/comment/update/${commentId}`, { 'comment': newComment },
            {
                headers: {
                    Authorization:
                        ` ${token}`
                }
            }
        ).then(function (response) {
            dispatch(editComment(commentId,newComment));
        }).catch((err) => {
            console.log("댓글 수정에 실패했습니다.", err)
        })
    }
}

//reducer
export default handleActions({
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
  
    [SET_PREVIEW]: (state, action) =>
    produce(state, (draft) => {
        draft.preview = action.payload.preview;
        console.log("action.payload.preview",action.payload.preview)
    }),
    [ADD_COMMENT]: (state, action) =>
     produce(state, (draft) => {
        draft.list[action.payload.postId].unshift(action.payload);
    }),

    [DELETE_COMMENT]: (state, action) => 
    produce(state, (draft) => {
        const filter_comment = draft.list[action.payload.postId].filter((c) => c.commentId !== action.payload.commentId)
        draft.list[action.payload.postId] = filter_comment;
    }),

    [EDIT_COMMENT]: (state, action) => 
    produce(state, (draft) => {
        const newComments = draft.list[action.payload.postId].find((c) => c.commentId === action.payload.commentId)
        newComments.comment = action.payload.newComment;
    })
},
    initialState
);


const actionCreators = {
    getCommentDB,
    addCommentDB,
    deleteCommentDB,
    editCommentDB,
    setPreview,
};

export { actionCreators };