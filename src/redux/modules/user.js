import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import api from "../../api/api"


//actions
const LOGIN = "LOGIN";
const LOG_OUT = "LOG_OUT";

//action creators
const logIn = createAction(LOGIN, (user) => ({ user }));
const logOut = createAction(LOG_OUT, (user) => ({user}));

//initialState
const initialState = {
    username: null,
    name: null,
      
}


//middleware actions
const logInMK = (username, password) => {
    /* aaaa1234! abc */
    return async function (dispatch, getState,{history}) {
        const data = {
            username: username,
            password: password,
        }
        //dispatch(login(data.loginId));
        await api.post('/user/login', data)
            .then((response) => {
                console.log(response);
                if (response.headers.Authorization) {
                    localStorage.setItem('token', response.headers.Authorization);
                    // dispatch(login(response))
                    // history.push('/')
                    //window.location.replace("/")
                    console.log("로그인이 되었어요")
                }
            })
            .catch((err) => {
               console.log(err);
               window.alert("아이디와 비밀번호가 일치하지 않습니다.")
        })
    }
}


//reducer
export default handleActions({
    [LOGIN]: (state, action) => produce(state, (draft) => {
        draft.user = action.payload.user
        console.log("action.payload.user",action.payload.user)
    }),
    [LOG_OUT]: (state, action) =>
    produce(state, (draft) => {
        localStorage.removeItem("token")
        window.location.replace("/")
        console.log("로그아웃합니다")
    }),
},
    initialState
);

//action creator export
const actionCreators = {
    logIn,
    logInMK,
    logOut
};

export { actionCreators }