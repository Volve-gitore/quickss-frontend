import { combineReducers, createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import authReducer from "./reducers/auth";
import restaurantReducer from "./reducers/hotelResto";

const rootReducer = combineReducers({
  auth: authReducer,
  items: restaurantReducer
});

export const store = createStore(rootReducer, applyMiddleware(ReduxThunk));
