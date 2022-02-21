import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import api from "../../api/api";
import { deleteCookie, setCookie } from "../../shared/Cookie";

//actions
const LOGIN = "LOGIN";
const LOG_OUT = "LOG_OUT";

//action creators
const logIn = createAction(LOGIN, (userInfo) => ({ userInfo }));
const logOut = createAction(LOG_OUT, (user) => ({ user }));

const token = localStorage.getItem("token");

//initialState
const initialState = {
  userInfo: {
    username: "",
    name: "",
  },
  is_login: false,
};

//middleware actions
const logInDB = (username, password) => {
  /* aaaa1234! abc */
  return async function (dispatch, getState, { history }) {
    const data = {
      username: username,
      password: password,
    };
    //dispatch(login(data.loginId));
    await api.post("/user/login", data)
      .then((response) => {
        console.log(response.headers.authorization);
        if (response.headers.authorization) {
          localStorage.setItem("token", response.headers.authorization);
        }

        api.get("/userinfo", {
            headers: {
              Authorization: `${response.headers.authorization}`,
            },
          })
          .then((response) => {
            dispatch(
              logIn({
                username: response.data.username,
                name: response.data.name,
              })
            );

            history.push("/");
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        window.alert("아이디와 비밀번호를 다시 확인해주세요!")
      });
  };
};

const loginCheckDB = () => {
  return async function (dispatch, getState, { history }) {
    await api
      .get("/userinfo", {
        headers: {
          Authorization: `${token}`,
        },
      })
      .then((response) => {
        dispatch(
          logIn({
            username: response.data.username,
            name: response.data.name,
          })
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

//reducer
export default handleActions(
  {
    [LOGIN]: (state, action) =>
      produce(state, (draft) => {
        setCookie("is_login", true);
        draft.userInfo = action.payload.userInfo;
        draft.is_login = true;
      }),
    [LOG_OUT]: (state, action) =>
      produce(state, (draft) => {
        deleteCookie("is_login")
        localStorage.removeItem("token");
        draft.userInfo = {
          username: "",
          name: "",
        };
        draft.is_login = false;
        console.log("로그아웃합니다");
      }),
  },
  initialState
);

//action creator export
const actionCreators = {
  logIn,
  logInDB,
  loginCheckDB,
  logOut,
};

export { actionCreators };
