
'use strict';

import { h } from 'preact';
import render from 'preact-render-to-string';

import App from './components/App';

module.exports = function (data) {
  return render(<App {...data}/>);
};
