import { applyMiddleware, legacy_createStore } from "redux";

import thunk from "redux-thunk"
import { combineReducers } from "redux";
import {reducer as AppReducer} from "./App/reducer"
import {reducer as AuthReducer} from "./Auth/reducer"
const rootReducer=combineReducers({AppReducer,AuthReducer})
const store=legacy_createStore(rootReducer,applyMiddleware(thunk))

export {store}


