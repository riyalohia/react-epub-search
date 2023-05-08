"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PrevButton = exports.NextButton = void 0;
var React = _interopRequireWildcard(require("react"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var styles = {
  prev: {
    left: 1
  },
  next: {
    right: 1
  },
  arrow: {
    outline: 'none',
    border: 'none',
    background: 'none',
    position: 'absolute',
    top: '50%',
    marginTop: -32,
    fontSize: 64,
    padding: '0 10px',
    color: '#E2E2E2',
    fontFamily: 'arial, sans-serif',
    cursor: 'pointer',
    userSelect: 'none',
    fontWeight: 'normal'
  },
  arrowHover: {
    color: '#777'
  }
};
var NextButton = function NextButton(_ref) {
  var next = _ref.next;
  return /*#__PURE__*/React.createElement("button", {
    style: Object.assign({}, styles.arrow, styles.next),
    onClick: next
  }, "\u203A");
};
exports.NextButton = NextButton;
var PrevButton = function PrevButton(_ref2) {
  var prev = _ref2.prev;
  return /*#__PURE__*/React.createElement("button", {
    style: Object.assign({}, styles.arrow, styles.prev),
    onClick: prev
  }, "\u2039");
};
exports.PrevButton = PrevButton;