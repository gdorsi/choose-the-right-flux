import {hasPrev, hasNext} from '../selectors';
import {prev, next} from '../actions';

function mapState(state) {
    return {
        hasPrev: hasPrev(state),
        hasNext: hasNext(state)
    };
}

export default (element, {subscribe, dispatch}) => {
    let state = {};

    subscribe(mapState, (nextState) => {
        if (state.hasPrev !== nextState.hasPrev) {
            if (nextState.hasPrev) {
                element.querySelector('.prev').classList.remove('disabled');
            } else {
                element.querySelector('.prev').classList.add('disabled');
            }
        }
        if (state.hasNext !== nextState.hasNext) {
            if (nextState.hasNext) {
                element.querySelector('.next').classList.remove('disabled');
            } else {
                element.querySelector('.next').classList.add('disabled');
            }
        }

        state = nextState;
    });

    element.querySelector('.prev').addEventListener('click', () => dispatch(prev()));
    element.querySelector('.next').addEventListener('click', () => dispatch(next()));
}