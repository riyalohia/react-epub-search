"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var React = _interopRequireWildcard(require("react"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var styles = {
  tocButton: {
    background: 'none',
    border: 'none',
    width: 32,
    height: 32,
    position: 'absolute',
    top: 10,
    left: 10,
    borderRadius: 2,
    outline: 'none',
    cursor: 'pointer'
  },
  tocButtonExpanded: {
    background: '#f2f2f2'
  },
  tocButtonBar: {
    position: 'absolute',
    width: '60%',
    background: '#ccc',
    height: 2,
    left: '50%',
    margin: '-1px -30%',
    top: '50%',
    transition: 'all .5s ease'
  },
  tocButtonBarTop: {
    top: '35%'
  },
  tocButtonBottom: {
    top: '66%'
  }
};
var TocToggleButton = function TocToggleButton(_ref) {
  var toggleToc = _ref.toggleToc,
    expandedToc = _ref.expandedToc;
  return /*#__PURE__*/React.createElement("button", {
    style: Object.assign({}, styles.tocButton, expandedToc ? styles.tocButtonExpanded : {}),
    onClick: toggleToc
  }, /*#__PURE__*/React.createElement("span", {
    style: Object.assign({}, styles.tocButtonBar, styles.tocButtonBarTop)
  }), /*#__PURE__*/React.createElement("span", {
    style: Object.assign({}, styles.tocButtonBar, styles.tocButtonBottom)
  }));
};
var _default = TocToggleButton;
exports.default = _default;