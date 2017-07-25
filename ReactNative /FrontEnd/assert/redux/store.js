/**
 * @providesModule ReduxStore
 */

import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { loader, toast } from "./reducer";

const store = createStore(
    combineReducers({
        loader,
        toast,
    }),
    compose(
        applyMiddleware(),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )
);

export default store;
