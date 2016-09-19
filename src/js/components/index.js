import store from '../store';
import slidesComponent from './slides';
import keyDispatcher from './keyDispatcher';

export default (slides) => {
    slidesComponent(slides, store);
    keyDispatcher(document, store);
}