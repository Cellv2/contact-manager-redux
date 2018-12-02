import { createStore, applyMiddleware, compose } from "redux"; //compose lets us do more than one thing at once
import thunk from "redux-thunk";
import rootReducer from "./reducers/index.js";

const initialState = {};

const middleware = [thunk];

const store = createStore(
    rootReducer,
    initialState,
    compose(
        //compose ensures all middleware is run
        applyMiddleware(...middleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
            window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

export default store;
