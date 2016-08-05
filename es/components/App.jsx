// 这里必须 引入 preact.h
import { h } from 'preact';
import Cmp from './Cmp';

export default function ({ name, age }) {
  return (<div class="app" id="app">
    <h1>Hello, { name } !</h1>
    <p>Your age is { age }.</p>
    <div><Cmp /></div>
  </div>);
};
