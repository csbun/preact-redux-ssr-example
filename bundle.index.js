/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _preact = preact;
	var h = _preact.h;
	var render = _preact.render;
	var Component = _preact.Component;
	var _preactRedux = preactRedux;
	var Provider = _preactRedux.Provider;
	var connect = _preactRedux.connect;
	var _Redux = Redux;
	var createStore = _Redux.createStore;
	/** @jsx h */

	function logMsg(msg) {
	  var elLog = document.getElementById('log');
	  if (elLog) {
	    var elP = document.createElement('pre');
	    elP.innerText = '[' + new Date().toLocaleTimeString() + '] ' + msg;
	    elLog.appendChild(elP);
	  }
	}

	/**
	 * redux
	 */
	function reducer(state) {
	  return state;
	}
	var initState = {
	  name: 'Hans',
	  age: 18
	};
	var store = createStore(reducer, initState);

	/**
	 * Components
	 */

	var ChildComponent = function (_Component) {
	  _inherits(ChildComponent, _Component);

	  function ChildComponent() {
	    _classCallCheck(this, ChildComponent);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(ChildComponent).apply(this, arguments));
	  }

	  _createClass(ChildComponent, [{
	    key: 'render',
	    value: function render() {
	      return h(
	        'div',
	        null,
	        h(
	          'p',
	          null,
	          'Hello, ',
	          this.props.name,
	          '!'
	        ),
	        h(
	          'p',
	          null,
	          'You are ',
	          this.props.age,
	          ' years old.'
	        ),
	        h(
	          'p',
	          null,
	          h('img', { src: 'notfound.png' })
	        )
	      );
	    }
	  }]);

	  return ChildComponent;
	}(Component);

	var Child = connect(reducer)(ChildComponent);

	var App = function (_Component2) {
	  _inherits(App, _Component2);

	  function App() {
	    _classCallCheck(this, App);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(App).call(this));
	  }

	  _createClass(App, [{
	    key: 'render',
	    value: function render() {
	      return h(
	        'div',
	        { id: 'my-app' },
	        h(
	          Provider,
	          { store: store },
	          h(Child, null)
	        )
	      );
	    }
	  }]);

	  return App;
	}(Component);

	// // server-side rendering


	var ssrHtml = preactRenderToString(h(App, null));
	document.body.innerHTML = '\n  <div>Preact</div>\n  <div id="container">' + ssrHtml + '</div>\n  <div id="log"></div>\n';
	logMsg('server rendered');
	// client-side rendering
	setTimeout(function () {
	  render(h(App, null), document.getElementById('container'), document.getElementById('my-app'));
	  logMsg('client rendered');
	}, 7000);

/***/ }
/******/ ]);