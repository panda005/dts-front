import { createStore } from 'redux';
import { SELECT_COLLECTION } from "../actions";

const defaultState = {
    selectedCollection: "",
};

const doSomethings = (state = defaultState, action) => {
    switch(action.type) {
        case SELECT_COLLECTION:
            return Object.assign({}, state, {
                selectedCollction: state.selectedCollection
            });
        default:
            return state;
    }
};



