import ReactDOM from "react-dom";
import { createStore } from "redux";
import App from "./App";
import allReducer from "./reducers";
import { Provider } from "react-redux";

const store = createStore(
  allReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
