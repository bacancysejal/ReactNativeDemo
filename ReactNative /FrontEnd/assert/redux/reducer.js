import {    LOADER_SET,
            NOTIFICATION_PUSH,
            NOTIFICATION_POP, } from "./actions";

export const loader = (state = false, action) => {
    switch (action.type) {
        case LOADER_SET:
            return action.state;

        default:
            return state;
    }
};

export const toast = (state = [], action) => {
    switch (action.type) {
        case NOTIFICATION_PUSH:
            return [...state, action.text];

        case NOTIFICATION_POP:
            return state.length > 0 ? state.slice(1) : state;

        default:
            return state;
    }
};