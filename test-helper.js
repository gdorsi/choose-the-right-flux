require('babel-core/register')({
  presets: ['es2015']
});

let jsdom = require('jsdom');
let spies = require('chai-spies');
let chai = require('chai')

chai.use(spies);

const doc = jsdom.jsdom('<!doctype html><html><body></body></html>');
const win = doc.defaultView;

global.document = doc;
global.window = win;

Object.keys(window).forEach((key) => {
  if (!(key in global)) {
    global[key] = window[key];
  }
});
