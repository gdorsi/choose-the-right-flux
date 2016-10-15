import {expect} from 'chai';
import * as actionTypes from './actionTypes';
import reducer from './reducer';

describe('reducer', function () {
  describe('LOAD_DEPTH_LIST', function () {
    it('should load the payload into the state as depthList', function () {
        const depthList = [];
        const action = {
            type: actionTypes.LOAD_DEPTH_LIST,
            payload: depthList
        };
        const state = {};

        expect(reducer(action, state)).to.deep.equal({
            depthList
        });
    });
  });
  describe('NEXT', function () {
    it('should increment the slide counter when the depth is 0', function () {
        const depthList = [0, 0, 0];
        const action = {
            type: actionTypes.NEXT
        };
        const state = { slide: 0, fragment: -1, depthList };

        expect(reducer(action, state)).to.deep.equal({
            depthList,
            slide: 1,
            fragment: -1
        });
    });
    it('should increment the fragment counter when the depth is more than fragment', function () {
        const depthList = [2, 0, 0];
        const action = {
            type: actionTypes.NEXT
        };
        const state = { slide: 0, fragment: -1, depthList };

        expect(reducer(action, state)).to.deep.equal({
            depthList,
            slide: 0,
            fragment: 0
        });
    });
    it('should increment the slide counter when the depth is less than fragment', function () {
        const depthList = [2, 0, 0];
        const action = {
            type: actionTypes.NEXT
        };
        const state = { slide: 0, fragment: 1, depthList };

        expect(reducer(action, state)).to.deep.equal({
            depthList,
            slide: 1,
            fragment: -1
        });
    });
  });
  describe('PREV', function () {
    it('should decrement the slide counter when the fragment is -1', function () {
        const depthList = [0, 2, 0];
        const action = {
            type: actionTypes.PREV
        };
        const state = { slide: 2, fragment: -1, depthList };

        expect(reducer(action, state)).to.deep.equal({
            depthList,
            slide: 1,
            fragment: 1
        });
    });
    it('should decrement the fragment counter when the fragment is more than -1', function () {
        const depthList = [0, 2, 0];
        const action = {
            type: actionTypes.PREV
        };
        const state = { slide: 1, fragment: 0, depthList };

        expect(reducer(action, state)).to.deep.equal({
            depthList,
            slide: 1,
            fragment: -1
        });
    });
  });
  describe('SET_SLIDE', function () {
    it('should set the slide with the payload value', function () {
        const action = {
            type: actionTypes.SET_SLIDE,
            payload: 10
        };
        const state = { slide: 2, fragment: 3 };

        expect(reducer(action, state)).to.deep.equal({
            slide: 10,
            fragment: -1
        });
    });
  });
});
