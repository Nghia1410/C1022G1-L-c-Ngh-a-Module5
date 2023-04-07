// import {combineReducers} from "redux";
// import userService from "../../service/UserService";

// export const rootReducer = combineReducers({
//     countState: userService,
// })
import { BrowserRouter,ReactDOM } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../store";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
      <BrowserRouter>
          <App />
      </BrowserRouter>
  </Provider>
);