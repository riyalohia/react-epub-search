"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _index = _interopRequireDefault(require("../EpubView/index"));
var _style = require("./style");
var _TocToggleButton = _interopRequireDefault(require("./TocToggleButton"));
var _NavigationButtons = require("./NavigationButtons");
var _TocItem = _interopRequireDefault(require("./TocItem"));
var _excluded = ["showToc", "tocContainerWidth", "loadingView", "styles", "locationChanged", "epubViewStyles", "prevButton", "nextButton", "tocToggleButton", "tocItem", "tocChanged"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var EpubReader = function EpubReader(props) {
  var _props$showToc = props.showToc,
    showToc = _props$showToc === void 0 ? true : _props$showToc,
    _props$tocContainerWi = props.tocContainerWidth,
    tocContainerWidth = _props$tocContainerWi === void 0 ? '256px' : _props$tocContainerWi,
    _props$loadingView = props.loadingView,
    loadingView = _props$loadingView === void 0 ? 'Loading...' : _props$loadingView,
    _props$styles = props.styles,
    styles = _props$styles === void 0 ? _style.EpubReaderStyle : _props$styles,
    locationChanged = props.locationChanged,
    epubViewStyles = props.epubViewStyles,
    prevButton = props.prevButton,
    nextButton = props.nextButton,
    tocToggleButton = props.tocToggleButton,
    tocItem = props.tocItem,
    tocChanged = props.tocChanged,
    rest = _objectWithoutProperties(props, _excluded);
  var _useState = (0, _react.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    toc = _useState2[0],
    setToc = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    expandedToc = _useState4[0],
    setExpandedToc = _useState4[1];
  var readerRef = _react.default.useRef(null);
  var toggleToc = function toggleToc() {
    setExpandedToc(!expandedToc);
  };
  var next = function next() {
    var node = readerRef.current;
    console.log(node);
    // @ts-ignore
    node.nextPage();
  };
  var prev = function prev() {
    var node = readerRef.current;
    // @ts-ignore
    node.prevPage();
  };
  var onTocChange = function onTocChange(toc) {
    setToc(toc);
    if (tocChanged) tocChanged(toc);
  };
  var renderToc = function renderToc() {
    return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", {
      style: _objectSpread({
        width: tocContainerWidth
      }, styles.tocArea)
    }, toc.map(function (item, i) {
      var tocItemRenderer;
      var props = _objectSpread(_objectSpread({}, item), {}, {
        setLocation: setLocation
      });
      if (tocItem) tocItemRenderer = /*#__PURE__*/_react.default.cloneElement(tocItem, _objectSpread({}, props));else
        // @ts-ignore
        tocItemRenderer = /*#__PURE__*/_react.default.createElement(_TocItem.default, props);
      return /*#__PURE__*/_react.default.createElement("div", {
        key: i
      }, tocItemRenderer);
    })));
  };
  var setLocation = function setLocation(loc) {
    setExpandedToc(false);
    if (locationChanged) locationChanged(loc);
  };
  var renderTocToggleButton = function renderTocToggleButton() {
    if (tocToggleButton) {
      var togglebutton = /*#__PURE__*/_react.default.cloneElement(tocToggleButton, {
        expandedToc: expandedToc,
        toggleToc: toggleToc
      });
      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, togglebutton);
    }
    return /*#__PURE__*/_react.default.createElement(_TocToggleButton.default, {
      expandedToc: true,
      toggleToc: toggleToc
    });
  };
  var renderNavigationButtons = function renderNavigationButtons() {
    var prevButtonRenderer;
    var nextButtonRenderer;
    if (prevButton) prevButtonRenderer = /*#__PURE__*/_react.default.cloneElement(prevButton, {
      prev: prev
    });else prevButtonRenderer = /*#__PURE__*/_react.default.createElement(_NavigationButtons.PrevButton, {
      prev: prev
    });
    if (nextButton) nextButtonRenderer = /*#__PURE__*/_react.default.cloneElement(nextButton, {
      next: next
    });else nextButtonRenderer = /*#__PURE__*/_react.default.createElement(_NavigationButtons.NextButton, {
      next: next
    });
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, prevButtonRenderer, nextButtonRenderer);
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    style: styles.container
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: Object.assign({}, styles.readerArea, expandedToc ? {
      transform: "translateX(".concat(tocContainerWidth, ")")
    } : {})
  }, showToc && renderTocToggleButton(), /*#__PURE__*/_react.default.createElement("div", {
    style: styles.reader
  }, /*#__PURE__*/_react.default.createElement(_index.default, _extends({
    ref: readerRef,
    loadingView: loadingView
    // @ts-ignore
    ,
    styles: epubViewStyles
  }, rest, {
    tocChanged: onTocChange,
    locationChanged: locationChanged
  }))), /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, renderNavigationButtons())), showToc && toc.length && renderToc());
};
var _default = EpubReader;
exports.default = _default;