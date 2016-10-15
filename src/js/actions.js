import * as actionTypes from './actionTypes';

export function initialize(depthList) {
    return {
        type: actionTypes.LOAD_DEPTH_LIST,
        payload: {depthList}
    }
}

export function next() {
    return {
        type: actionTypes.NEXT
    }
}

export function prev() {
    return {
        type: actionTypes.PREV
    }
}

export function setSlide(slide) {
    return {
        type: actionTypes.SET_SLIDE,
        payload: slide
    }
}
