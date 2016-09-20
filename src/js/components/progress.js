import {completion} from '../selectors';

export default (element, {subscribe}) => {
    let state;

    subscribe(completion, (nextState) => {
        if (state !== nextState) {
            element.style.width = nextState + '%';
        }

        state = nextState;
    });
}