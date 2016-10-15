import getSlidesDepthList from '../lib/getSlidesDepthList';
import {slide} from '../selectors';
import {setSlide} from '../actions';
import getHashAsNumber from '../lib/getHashAsNumber';

function reduceState(state) {
  return slide(state);
}

export default (slides, {dispatch, getState, subscribe}) => {
  let slide = reduceState(getState());

  window.onhashchange = () => {
    let nextSlide = getHashAsNumber();

    if (!isNaN(nextSlide) && nextSlide !== slide) {
      dispatch(setSlide(nextSlide));
    }
  };

  subscribe(reduceState, (nextSlide) => {
    if (slide !== nextSlide) {
      window.location.hash = nextSlide;
    }

    slide = nextSlide;
  });
}
