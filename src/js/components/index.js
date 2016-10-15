import store from '../store';
import slidesComponent from './slides';
import keyDispatcher from './keyDispatcher';
import progress from './progress';
import controls from './controls';
import codeHighlight from './codeHighlight';
import hydrate from './hydrate';
import url from './url';

export default () => {
    let slides = document.querySelectorAll('body > section');
    controls(document.querySelector('.controls'), store);
    slidesComponent(slides, store);
    progress(document.querySelector('.progress'), store);
    keyDispatcher(document, store);
    codeHighlight(document.querySelectorAll('.code'), store);
    hydrate(slides, store);
    url(slides, store);
}
