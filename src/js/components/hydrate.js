import getSlidesDepthList from '../lib/getSlidesDepthList';
import {initialize, setSlide} from '../actions';
import getHashAsNumber from '../lib/getHashAsNumber';

export default (slides, {dispatch}) => {
    let activeSlide =  getHashAsNumber();

    dispatch(initialize(getSlidesDepthList(slides)));

    if (activeSlide && !isNaN(activeSlide)) {
        dispatch(setSlide(activeSlide));
    }
}
