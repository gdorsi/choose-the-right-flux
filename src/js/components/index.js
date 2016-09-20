import store from '../store';
import slidesComponent from './slides';
import keyDispatcher from './keyDispatcher';
import progress from './progress';
import controls from './controls';

export default () => {
    controls(document.querySelector('.controls'), store);
    slidesComponent(document.querySelectorAll('body > section'), store);
    progress(document.querySelector('.progress'), store);
    keyDispatcher(document, store);
}