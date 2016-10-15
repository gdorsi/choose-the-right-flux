function createStore(reducer, middlewares) {
    var store = {
        reducer,
        subscribers: []
    };

    store.subscribe = subscribe(store);
    store.getState = getState(store);

    if(middlewares && middlewares.length) {
        store.dispatch = middlewares.map((middleware, index) => middleware(store)(middlewares[index + 1] || dispatch(store)))[0];
    } else {
        store.dispatch = dispatch(store);
    }

    store.dispatch({}); //Set the initial state

    return store;
}

function dispatch(store) {
    return (action) => {
        let nextState = store.reducer(action, store.state);

        if (nextState !== store.state) {
            store.state = nextState;
            emitChange(store);
        }
    }
}

function subscribe(store) {
    return (reduceFn, callback) => {
        store.subscribers.push({reduceFn, callback});
    }
}

function getState(store) {
    return () => store.state;
}

function emitChange(store) {
    store.subscribers.forEach(({reduceFn, callback}) => {
        if(!callback) {
            callback = reduceFn;
            callback(store.state);
        } else {
            callback(reduceFn(store.state))
        }
    });
}

export default createStore;
