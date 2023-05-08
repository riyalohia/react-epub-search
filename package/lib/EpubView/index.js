"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _index = _interopRequireDefault(require("epubjs/lib/index"));
var _style = require("./style");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); } // @ts-ignore
;

// Exclude the html tags that are not visible in render tree.
var searchExcludedKeywords = ['cvi', 'Title', 'title', 'part', 'toc'];
var EpubView = /*#__PURE__*/function (_Component) {
  _inherits(EpubView, _Component);
  var _super = _createSuper(EpubView);
  function EpubView(props) {
    var _this;
    _classCallCheck(this, EpubView);
    _this = _super.call(this, props);
    _defineProperty(_assertThisInitialized(_this), "onLocationChange", function (loc) {
      var _this$props = _this.props,
        location = _this$props.location,
        onNavigation = _this$props.onNavigation,
        locationChanged = _this$props.locationChanged;
      var newLocation = loc && loc.start;
      if (location !== newLocation) {
        var _this$rendition$book$, _locations$start, _locations$start$disp;
        _this.location = newLocation;
        var isEndOfBook = _this.rendition.location.atEnd;
        var isStartOfBook = _this.rendition.location.atStart;
        var locations = _this.rendition.location;
        var currentChapter = // @ts-ignore
        (_this$rendition$book$ = _this.rendition.book.spine.items[locations.start.index]) === null || _this$rendition$book$ === void 0 ? void 0 : _this$rendition$book$.idref;
        var pageNoInChapter = (_locations$start = locations.start) === null || _locations$start === void 0 ? void 0 : (_locations$start$disp = _locations$start.displayed) === null || _locations$start$disp === void 0 ? void 0 : _locations$start$disp.page;
        if (locationChanged) locationChanged(newLocation);
        if (onNavigation) onNavigation({
          isEndOfBook: isEndOfBook,
          isStartOfBook: isStartOfBook,
          currentChapter: currentChapter,
          pageNoInChapter: pageNoInChapter
        });
      }
    });
    _defineProperty(_assertThisInitialized(_this), "onHandleImage", function (_e, i) {
      var handleImageClick = _this.props.handleImageClick;
      i.document.documentElement.addEventListener('click', function (e) {
        var imageSrc = e.target.src;
        var imageHeight = e.target.height;
        var imageWidth = e.target.width;
        if (handleImageClick) handleImageClick(imageSrc, imageHeight, imageWidth);
      });
    });
    _defineProperty(_assertThisInitialized(_this), "searchWithinBook", function (searchTerm) {
      // @ts-ignore
      var filteredSpineItems = _this.book.spine.spineItems.filter(function (item) {
        var searchExcludedWords = searchExcludedKeywords.filter(function (word) {
          return item.idref.includes(word);
        });
        return !item.idref.includes(searchExcludedWords[0]);
      });
      return Promise.all(filteredSpineItems.map(function (item) {
        return item.load(_this.book.load.bind(_this.book)).then(item.find.bind(item, searchTerm)).finally(item.unload.bind(item));
      })
      // @ts-ignore
      ).then(function (results) {
        return Promise.resolve([].concat.apply([], results));
      });
    });
    _defineProperty(_assertThisInitialized(_this), "onSearchChange", function (searchTerm) {
      var onChangeSearchResults = _this.props.onChangeSearchResults;
      if (searchTerm) {
        _this.searchWithinBook(searchTerm).then( /*#__PURE__*/function () {
          var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(results) {
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  if (onChangeSearchResults) onChangeSearchResults(results);
                case 1:
                case "end":
                  return _context.stop();
              }
            }, _callee);
          }));
          return function (_x) {
            return _ref.apply(this, arguments);
          };
        }());
      } else {
        if (onChangeSearchResults) onChangeSearchResults([]);
      }
    });
    _defineProperty(_assertThisInitialized(_this), "handleKeyPress", function (_ref2) {
      var key = _ref2.key;
      key && key === 'ArrowRight' && _this.nextPage();
      key && key === 'ArrowLeft' && _this.prevPage();
    });
    _this.state = {
      isLoaded: false,
      toc: []
    };
    _this.viewerRef = /*#__PURE__*/_react.default.createRef();
    _this.location = props.location;
    // @ts-ignore
    _this.book = _this.rendition = _this.prevPage = _this.nextPage = null;
    return _this;
  }
  _createClass(EpubView, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.initBook();
      document.addEventListener('keyup', this.handleKeyPress, false);
    }
  }, {
    key: "resetBook",
    value: function resetBook(navigateToTop) {
      var _this2 = this;
      this.setState({
        isLoaded: false
      }, function () {
        _this2.initBook(navigateToTop);
      });
    }
  }, {
    key: "initBook",
    value: function initBook() {
      var _this3 = this;
      var navigateToTop = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      var _this$props2 = this.props,
        url = _this$props2.url,
        tocChanged = _this$props2.tocChanged,
        epubInitOptions = _this$props2.epubInitOptions;
      if (this.book) {
        this.book.destroy();
      }
      this.book = new _index.default(url, epubInitOptions);
      this.book.loaded.navigation.then(function (_ref3) {
        var toc = _ref3.toc;
        _this3.setState({
          isLoaded: true,
          toc: toc
        }, function () {
          tocChanged && tocChanged(toc);
          _this3.initReader(navigateToTop);
        });
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.book) {
        this.book.destroy();
      }
      // @ts-ignore
      this.book = this.rendition = this.prevPage = this.nextPage = null;
      document.removeEventListener('keyup', this.handleKeyPress, false);
    }
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps) {
      return !this.state.isLoaded || nextProps.location !== this.props.location || nextProps.location !== this.props.location;
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps.location !== this.props.location && this.location !== this.props.location) {
        this.rendition.display(this.props.location);
      }
      if (prevProps.url !== this.props.url) {
        this.resetBook();
      }
      if (prevProps.searchTerm !== this.props.searchTerm && this.props.searchTerm) {
        this.onSearchChange(this.props.searchTerm);
      }
      if (prevProps.fontSize !== this.props.fontSize) {
        this.renderFontSize();
      }
      if (prevProps.themeColor !== this.props.themeColor) {
        this.changeThemeColor();
      }
    }
  }, {
    key: "initReader",
    value: function initReader(navigateToTop) {
      var _this4 = this;
      var toc = this.state.toc;
      var _this$props3 = this.props,
        location = _this$props3.location,
        epubOptions = _this$props3.epubOptions,
        searchTerm = _this$props3.searchTerm,
        fontSize = _this$props3.fontSize,
        themeColor = _this$props3.themeColor,
        resetBook = _this$props3.resetBook,
        getRendition = _this$props3.getRendition;
      var updatedLocation = navigateToTop ? 0 : location;
      var node = this.viewerRef.current;
      this.rendition = this.book.renderTo(node, _objectSpread({
        // @ts-ignore
        contained: true,
        width: '100%',
        height: '100%'
      }, epubOptions));
      this.prevPage = function () {
        _this4.rendition.prev();
      };
      this.nextPage = function () {
        _this4.rendition.next();
      };
      this.registerEvents();
      this.registerTheme();
      if (getRendition) getRendition(this.rendition);
      if (resetBook) resetBook(this.resetBook);
      if (typeof updatedLocation === 'string' || typeof updatedLocation === 'number') {
        this.rendition.display(updatedLocation);
      } else if (toc.length > 0 && toc[0].href) {
        this.rendition.display(toc[0].href);
      } else {
        this.rendition.display();
      }

      // Apply theme on book initialization
      if (themeColor) {
        this.rendition.themes.select(themeColor);
      }
      if (fontSize) {
        this.renderFontSize();
      }
      if (searchTerm) {
        this.onSearchChange(searchTerm);
      }
    }
  }, {
    key: "registerEvents",
    value: function registerEvents() {
      var _this$props4 = this.props,
        handleKeyPress = _this$props4.handleKeyPress,
        handleTextSelected = _this$props4.handleTextSelected,
        handleImageClick = _this$props4.handleImageClick;
      this.rendition.on('locationChanged', this.onLocationChange);
      this.rendition.on('keyup', handleKeyPress || this.handleKeyPress);
      if (handleImageClick) this.rendition.on('rendered', this.onHandleImage);
      if (handleTextSelected) {
        this.rendition.on('selected', handleTextSelected);
      }
    }
  }, {
    key: "registerTheme",
    value: function registerTheme() {
      var theme = this.props.theme;
      if (theme) this.rendition.themes.register(theme);
    }
  }, {
    key: "renderFontSize",
    value: function renderFontSize() {
      var fontSize = this.props.fontSize;
      this.rendition.themes.fontSize("".concat(fontSize, "%"));
      this.rendition.views().forEach(function (view) {
        // @ts-ignore
        if (view.pane) view.pane.render();
      });
    }
  }, {
    key: "changeThemeColor",
    value: function changeThemeColor() {
      // This is a hack because switching between themes is not smooth
      // Refer https://github.com/futurepress/epub.js/issues/1208
      this.resetBook(false);
    }
  }, {
    key: "renderBook",
    value: function renderBook() {
      var styles = this.props.styles;
      return /*#__PURE__*/_react.default.createElement("div", {
        ref: this.viewerRef,
        style: _objectSpread(_objectSpread({}, _style.EpubViewStyle.view), styles === null || styles === void 0 ? void 0 : styles.view)
      });
    }
  }, {
    key: "render",
    value: function render() {
      var isLoaded = this.state.isLoaded;
      var _this$props5 = this.props,
        loadingView = _this$props5.loadingView,
        styles = _this$props5.styles;
      return /*#__PURE__*/_react.default.createElement("div", {
        style: _objectSpread(_objectSpread({}, _style.EpubViewStyle.viewHolder), styles === null || styles === void 0 ? void 0 : styles.viewHolder)
      }, isLoaded && this.renderBook() || loadingView);
    }
  }]);
  return EpubView;
}(_react.Component);
_defineProperty(EpubView, "defaultProps", {
  searchTerm: '',
  loadingView: null,
  locationChanged: null,
  tocChanged: null,
  epubOptions: {},
  epubInitOptions: {}
});
var _default = EpubView;
exports.default = _default;