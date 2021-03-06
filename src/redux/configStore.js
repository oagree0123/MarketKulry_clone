import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { createBrowserHistory } from "history";
import { connectRouter } from "connected-react-router";


import user from "./modules/user";
import product from "./modules/product";
import cart from "./modules/cart";
import comment from "./modules/comment";

export const history = createBrowserHistory();

const rootReducer = combineReducers({
    user,
    product,
    cart,
    comment,
    router: connectRouter(history),
  });

const middlewares = [thunk.withExtraArgument({history: history})];

// 지금이 어느 환경인 지 알려줘요. (개발환경, 프로덕션(배포)환경 ...)
const env = process.env.NODE_ENV;

if (env === "development") {
  const { logger } = require("redux-logger");
  middlewares.push(logger);
}

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      })
    : compose;
//미들웨어를 묶어보자
    const enhancer = composeEnhancers(
        applyMiddleware(...middlewares)
      );

      let store = (initialStore) => createStore(rootReducer, enhancer);

export default store();