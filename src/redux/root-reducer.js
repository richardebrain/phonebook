import { combineReducers } from "redux";
import contactReducer from "./contact-reducer/contact-reducer";
import storage from "redux-persist/lib/storage";
import toggleContactReducer from "./toggle-dropdown/toggle-dropdown.reducer";
import {persistReducer} from "redux-persist";


const persistConfig={
  key:'roots',
  storage,
  whiteList:["contacts"]
  
}

const persistdropDown={
  key:'root',
  storage,
  blackList:['dropdownVisibility']
}
const rootReducer = combineReducers({
  contacts:contactReducer,
  dropdownVisibility:persistReducer (persistdropDown,toggleContactReducer)
})
export default persistReducer(persistConfig,rootReducer)