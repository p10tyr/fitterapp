import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import homeReducer from "../container/HomeContainer/reducer";
import home2Reducer from "../container/Home2Container/reducer";
import singleJobReducer from "../container/SingleJobContainer/reducer";

export default combineReducers({
	form: formReducer,
	homeReducer,
	home2Reducer,
	singleJobReducer
});
