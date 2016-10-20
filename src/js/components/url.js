import getSlidesDepthList from '../lib/getSlidesDepthList';
import {slide} from '../selectors';
import {setSlide} from '../actions';
import getHashAsNumber from '../lib/getHashAsNumber';

function mapState(state) {
  return slide(state);
}

export default ({dispatch, getState, subscribe}) => {
  let slide = mapState(getState());

  window.onhashchange = () => {
    let nextSlide = getHashAsNumber();

    if (!isNaN(nextSlide) && nextSlide !== slide) {
      dispatch(setSlide(nextSlide));
    }
  };

  subscribe(mapState, (nextSlide) => {
    if (slide !== nextSlide) {
      window.location.hash = nextSlide;
    }

    slide = nextSlide;
  });
}
