import {expect, spy} from 'chai';
import createStore from './createStore';
import identity from 'lodash';
import thunk from 'redux-thunk';

describe('createStore', function () {
  it('exposes the public API', () => {
      const store = createStore((action, state) => state);
      const methods = Object.keys(store);

      expect(methods.length).to.be.equal(3);
      expect(methods).to.include('subscribe');
      expect(methods).to.include('dispatch');
      expect(methods).to.include('getState');
  });
  it('should update state with reducer value', () => {
      const state = {test:true};
      const store = createStore(() => state);

      store.dispatch({type: 'TEST'});

      expect(store.getState()).to.be.equal(state);
  });
  it('should load the default state from reducers', () => {
      const defaultState = {test:true};
      const store = createStore((action, state = defaultState) => state);

      expect(store.getState()).to.be.equal(defaultState);
  });
  it('should dispatch action to reducer', () => {
      const reducer = spy(identity);
      const action = {type:'TEST'};
      const store = createStore(reducer);

      store.dispatch(action);

      expect(reducer).to.have.been.called.with(action);
      expect(reducer).to.have.been.called.twice;
  });
  it('should emit on state change', () => {
      const listener = spy(identity);
      const action = {type:'TEST'};
      const store = createStore(identity);

      store.subscribe(identity, listener)
      store.dispatch(action);

      expect(listener).to.have.been.called.once;
  });
  it('should integrate with redux middlewares', () => {
      const reducer = spy(identity);
      const action = {type:'TEST'};
      const store = createStore(reducer, [thunk]);

      store.dispatch((dispatch) => dispatch(action));

      expect(reducer).to.have.been.called.with(action);
      expect(reducer).to.have.been.called.twice;
  });
});
