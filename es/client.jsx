import { h, render } from 'preact';

import App from './components/App';
const data = window.__backend_data__;

render(
  <App {...data} />,
  document.body,
  document.getElementById('app')
);
