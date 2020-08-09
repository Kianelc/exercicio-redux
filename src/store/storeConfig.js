import { createStore, combineReducers } from "redux";

import numeroReducer from "./reducers/numeros";

const reducers = combineReducers({
  numeros: numeroReducer,
  nomes: function(state, action) {
    //console.log(state, " ", action);
    return ["Ana", "Bia", "Carlos"];
  }
});

function storeConfig() {
  return createStore(reducers);
}

export default storeConfig;
