import { combineReducers, applyMiddleware, createStore } from "redux";
import { thunk } from "redux-thunk";
import authReducer from "./reducers/authReducer";
import searchReducer from "./reducers/searchReducer";
import { dataReducer, favoriteReducer } from "./reducers/reducers";

const rootReducer = combineReducers({
    favorite: favoriteReducer,
    data: dataReducer,
    auth: authReducer,
    search: searchReducer,
    // Thêm reducer khác nếu cần
});
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
