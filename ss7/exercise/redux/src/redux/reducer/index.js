import {combineReducers} from "redux";
import userService from "../../service/UserService";

export const rootReducer = combineReducers({
    countState: userService,
})