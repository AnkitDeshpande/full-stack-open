import { legacy_createStore as createStore } from "redux";

const reducer = (store, action) => {
    if (action.type === "ADD_COUNT") {
        return { ...store, counter: store.counter + action.payload }
    }
}

const store = createStore(reducer);