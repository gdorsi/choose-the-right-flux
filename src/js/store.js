import createStore from './lib/createStore';
import reducer from './reducer';
import createLogger from 'redux-logger';

const logger = createLogger();

export default createStore(reducer, [
    logger
]);
