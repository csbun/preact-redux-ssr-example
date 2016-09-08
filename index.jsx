const { h, render, Component } = preact;
const { Provider, connect } = preactRedux;
const { createStore } = Redux;
/** @jsx h */

function logMsg(msg) {
  const elLog = document.getElementById('log');
  if (elLog) {
    const elP = document.createElement('pre');
    elP.innerText = `[${(new Date()).toLocaleTimeString()}] ${msg}`;
    elLog.appendChild(elP);
  }
}

/**
 * redux
 */
function reducer(state) {
  return state;
}
const initState = {
  name: 'Hans',
  age: 18,
};
const store = createStore(reducer, initState);

/**
 * Components
 */
class ChildComponent extends Component {
  render() {
    return (<div>
        <p>Hello, {this.props.name}!</p>
        <p>You are {this.props.age} years old.</p>
        <p><img src="notfound.png" /></p>
    </div>);
  }
}

const Child = connect(reducer)(ChildComponent);

class App extends Component {
  constructor() {
    super();
  }
  render() {
    return (<div id="my-app">
      <Provider store={store}>
        <Child />
      </Provider>
    </div>);
  }
}

// // server-side rendering
const ssrHtml = preactRenderToString(<App />);
document.body.innerHTML = `
  <div>Preact</div>
  <div id="container">${ssrHtml}</div>
  <div id="log"></div>
`;
logMsg('server rendered');
// client-side rendering
setTimeout(function() {
  render(
    <App />,
    document.getElementById('container'),
    document.getElementById('my-app')
  );
  logMsg('client rendered');
}, 7000);
