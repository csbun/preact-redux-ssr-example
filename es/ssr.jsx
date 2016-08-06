
'use strict';

import { h } from 'preact';
import render from 'preact-render-to-string';
import container from './container';

module.exports = function (initData) {
  // Render the component to a string
  const html = render(container(initData));

  return {
    html,
    state: initData,
  };
};
