import {expect} from 'chai';
import createStore from './createStore';

describe('createStore', function () {
    it('exposes the public API', () => {
      const store = createStore((state) => state);
      const methods = Object.keys(store);

      expect(methods.length).to.be.equal(3);
      expect(methods).to.include('subscribe');
      expect(methods).to.include('dispatch');
      expect(methods).to.include('getState');
  });
});
