import set from 'lodash/fp/set';

function createStore(reducer, middlewares) {
    let store = {
        reducer,
        subscribers: [],
        state: void(0)
    };

    let publicApi = {
      subscribe:  makeSubscribe(store),
      getState: makeGetState(store),
      dispatch: makeDispatch(store)
    };

    if(middlewares && middlewares.length) {
        publicApi = applyMiddlewares(publicApi, middlewares);
    }

    publicApi.dispatch({type: '@@INIT'}); //Set the initial state

    return publicApi;
}

function applyMiddlewares(store, middlewares) {
  return set('dispatch', middlewares.map((middleware, index) => middleware(store)(middlewares[index + 1] || store.dispatch))[0], store);
}

function makeDispatch(store) {
    return (action) => {
        let nextState = store.reducer(action, store.state);

        if (nextState !== store.state) {
            store.state = nextState;
            emitChange(store);
        }
    }
}

function makeSubscribe(store) {
    return (reduceFn, callback) => {
        store.subscribers.push({reduceFn, callback});
    }
}

function makeGetState(store) {
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
