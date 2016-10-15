import {expect} from 'chai';
import * as actionTypes from './actionTypes';
import {
    initialize,
    prev,
    next,
    setSlide
} from './actions';

describe('Actions creators', function () {
    describe('initialize', function () {
        it('should create LOAD_DEPTH_LIST action', function () {
            const depthList = [];

            expect(initialize(depthList)).to.deep.equal({
                type: actionTypes.LOAD_DEPTH_LIST,
                payload: depthList
            });
        });
    });
    describe('prev', function () {
        it('should create PREV action', function () {
            expect(prev()).to.deep.equal({
                type: actionTypes.PREV
            });
        });
    });
    describe('next', function () {
        it('should create NEXT action', function () {
            expect(next()).to.deep.equal({
                type: actionTypes.NEXT
            });
        });
    });
    describe('setSlide', function () {
        it('should create SET_SLIDE action', function () {
            const slide = 3;

            expect(setSlide(slide)).to.deep.equal({
                type: actionTypes.SET_SLIDE,
                payload: slide
            });
        });
    });
});
