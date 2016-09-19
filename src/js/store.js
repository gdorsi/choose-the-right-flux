import createStore from './lib/createStore';
import reducer from './reducer';

export default createStore(reducer, [
    (store) => (next) => (action) => {
        console.log(action);
        next(action);
        console.log(store.getState());
    }
]);
