import getSlidesDepthList from '../lib/getSlidesDepthList';
import {initialize} from '../actions';
import {slide, fragment} from '../selectors';

function reduceState(state) {
    return {
        fragment: fragment(state),
        slide: slide(state)
    };
}

function showSlide(slide, prev) {
    slide.classList.add('active');
    prev && prev.classList.remove('active');
}

function showFragment(slide, fragment) {
    let fragments = slide.querySelectorAll('.fragment'),
        i = 0;

    while (i <= fragment) {
        fragments[i].classList.add('visible');
        i++;
    }
}

function hideFragment(slide, fragment) {
    let fragments = slide.querySelectorAll('.fragment'),
        i = fragments.length - 1;

    while (i > fragment) {
        fragments[i].classList.remove('visible');
        i--;
    }
}

export default (slides, {dispatch, subscribe}) => {
    let state = {};

    subscribe(reduceState, (nextState) => {
        if (state.slide !== nextState.slide) {
            showSlide(slides[nextState.slide], slides[state.slide]);
        }

        if (state.fragment !== nextState.fragment) {
            if (state.fragment < nextState.fragment) {
                showFragment(slides[nextState.slide], nextState.fragment);
            } else {
                hideFragment(slides[nextState.slide], nextState.fragment);
            }
        }

        state = nextState;
    });

    dispatch(initialize(getSlidesDepthList(slides)));
}