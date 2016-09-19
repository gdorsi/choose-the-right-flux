import {next, prev} from '../actions';

export default (element, { dispatch }) => {
    element.addEventListener('keydown', (evt) => {
        switch(evt.which) {
            case 37: //LEFT
                evt.preventDefault();
                dispatch(prev());
                break;
            case 39: //RIGHT
                evt.preventDefault();
                dispatch(next());
                break;
        }
    });
}