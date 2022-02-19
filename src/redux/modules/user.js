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

const nori = () => {
    return async function (dispatch, getState,{history}) {
        const token = localStorage.getItem('token');
        //dispatch(login(data.loginId));
        await api.get('/userinfo',{                
            headers: {
                Authorization:`${token}`
            }
        })
            .then((response) => {
                // console.log("토큰 확인했나요",response.headers.authorization);
              
                    console.log(response.data)
                }
    )
            .catch((err) => {
               console.log(err);
            //    window.alert("아이디와 비밀번호가 일치하지 않습니다.")
        })
    }
}

//middleware actions

const logInDB = (username, password) => {
    return async function (dispatch, getState,{history}) {
        const data = {
            username: username,
            password: password,
        }
        //dispatch(login(data.loginId));
        await api.post('/user/login', data)
            .then((response) => {
                // console.log("토큰 확인했나요",response.headers.authorization);
                if (response.headers.authorization) {
                    localStorage.setItem('token', response.headers.authorization);
                    // dispatch(login(response))
                     history.push('/')
                    //window.location.replace("/")
                    console.log("로그인이 되었어요")
                }
            })
            .catch((err) => {
               console.log(err);
            //    window.alert("아이디와 비밀번호가 일치하지 않습니다.")
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
    logInDB,
    logOut,
    nori
};

export { actionCreators }