// 这里必须 引入 preact.h
import { h } from 'preact';
import { Provider } from 'preact-redux';
import { createStore } from 'redux';

import App from './components/App';
import reducers from '../redux/reducers';

export default function (initData) {
  // Create a new Redux store instance
  const store = createStore(reducers, initData);
  // universal component
  return (<Provider store={store}>
      <App />
    </Provider>);
};
