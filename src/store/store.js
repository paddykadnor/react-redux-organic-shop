import {createStore,combineReducers,applyMiddleware} from "redux";
import {shpReducer} from "../reducer/shpreducer";
import {catReducer} from "../reducer/catReducer";
import {proReducer} from "../reducer/proReducer";
import thunk from "redux-thunk";
import {composeWithDevTools} from 'redux-devtools-extension';
const store = createStore(combineReducers({
shpReducer,
catReducer,
proReducer
}),
composeWithDevTools(applyMiddleware(thunk)));

export default store;