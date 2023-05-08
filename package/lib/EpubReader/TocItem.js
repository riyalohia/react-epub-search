"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var React = _interopRequireWildcard(require("react"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var styles = {
  tocAreaButton: {
    userSelect: 'none',
    background: 'none',
    border: 'none',
    display: 'block',
    fontFamily: 'sans-serif',
    width: '100%',
    fontSize: '.9em',
    textAlign: 'left',
    padding: '.9em 1em',
    borderBottom: '1px solid #ddd',
    color: '#aaa',
    boxSizing: 'border-box',
    outline: 'none',
    cursor: 'pointer'
  }
};
var TocItem = function TocItem(props) {
  var label = props.label,
    subitems = props.subitems,
    href = props.href,
    setLocation = props.setLocation;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setLocation(href);
    },
    style: styles.tocAreaButton
  }, label), subitems && subitems.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      paddingLeft: 10
    }
  }, subitems.map(function (item, i) {
    return /*#__PURE__*/React.createElement(TocItem, _extends({
      key: i
    }, props, item));
  })));
};
var _default = TocItem;
exports.default = _default;