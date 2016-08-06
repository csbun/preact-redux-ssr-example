import { h, render } from 'preact';
import container from './container';

const data = window.__backend_data__;

render(
  container(data),
  document.body,
  document.getElementById('app')
);
