(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("lodash"));
	else if(typeof define === 'function' && define.amd)
		define("delta-formio-export", ["_"], factory);
	else if(typeof exports === 'object')
		exports["delta-formio-export"] = factory(require("lodash"));
	else
		root["delta-formio-export"] = factory(root["_"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__0__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__0__;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _lodash = __webpack_require__(0);

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FormioExportUtils = {

  /**
   * Verifies an object properties.
   *
   * @param {Object} obj
   *   The object to verify
   * @param {Object} props
   *   The properties to be verified
   * @returns {Object}
   *   The verified object
   */
  verifyProperties: function verifyProperties(obj, props) {
    // verify arguments
    props = _lodash2.default.isPlainObject(props) ? props : {};
    obj = _lodash2.default.isPlainObject(obj) ? obj : {};

    // verify each property
    _lodash2.default.forEach(props, function (prop, key) {
      // check if there is any default value defined
      if (prop.hasOwnProperty('default') && !obj.hasOwnProperty(key)) {
        // set default property value
        obj[key] = prop.default;
      }
      // check if the property is required and defined
      if (prop.required && _lodash2.default.isNil(obj[key])) {
        // if not defined, throw error
        throw new Error('[FormioExportUtils] invalid property (' + key + ' is required)');
      }
      // check that the property type is valid (defined by constructors)
      if (prop.hasOwnProperty('type') && obj.hasOwnProperty(key)) {
        // check if property has a valid type
        var found = !!_lodash2.default.find(_lodash2.default.isArray(prop.type) ? prop.type : [prop.type], function (type) {
          return FormioExportUtils.isOfType(obj[key], type);
        });

        // check if there has been a match
        if (!found) {
          // if no match found, throw error
          throw new Error('[FormioExportUtils] invalid property (' + key + ' type is invalid)');
        }
      }
    });
    // return the verified object
    return obj;
  },


  /**
   * Check if an object is of a certain type
   *
   * @param {any} obj
   *   The object to check
   * @param {Function} type
   *   The type (constructor) to compare to
   * @returns {Boolean}
   *   Is of same type
   */
  isOfType: function isOfType(obj, type) {
    switch (type) {
      case null:
        return _lodash2.default.isNull(obj);
      case undefined:
        return _lodash2.default.isUndefined(obj);
      case String:
        return _lodash2.default.isString(obj);
      case Number:
        return _lodash2.default.isNumber(obj);
      case Boolean:
        return _lodash2.default.isBoolean(obj);
      case Array:
        return _lodash2.default.isArray(obj);
      case Object:
        return _lodash2.default.isPlainObject(obj);
      case Element:
        return _lodash2.default.isElement(obj) || _lodash2.default.isObject(obj) && obj.nodeType > 0;
      case Function:
        return _lodash2.default.isFunction(obj);
      case Date:
        return _lodash2.default.isDate(obj);
      case RegExp:
        return _lodash2.default.isRegExp(obj);
      case Error:
        return _lodash2.default.isError(obj);
      case Symbol:
        return _lodash2.default.isSymbol(obj);
      default:
        console.warn('[FormioExportUtils] type not implemented');
        return false;

    }
  },


  /**
   * Check if an object is a valid Formio form
   *
   * @param {Object} [obj={}]
   *   The object to check
   * @returns {Boolean}
   *   Is valid Formio form
   */
  isFormioForm: function isFormioForm() {
    var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    return _lodash2.default.isPlainObject(obj) && _lodash2.default.isArray(obj.components) && obj.display === 'form';
  },


  /**
   * Check if an object is a valid Formio wizard
   *
   * @param {Object} [obj={}]
   *   The object to check
   * @returns {Boolean}
   *   Is valid Formio wizard
   */
  isFormioWizard: function isFormioWizard() {
    var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    return _lodash2.default.isPlainObject(obj) && _lodash2.default.isArray(obj.components) && obj.display === 'wizard';
  },


  /**
   * Check if an object is a valid Formio submission
   *
   * @param {Object} [obj={}]
   *   The object to check
   * @returns {Boolean}
   *   Is valid Formio submission
   */
  isFormioSubmission: function isFormioSubmission() {
    var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    return _lodash2.default.isPlainObject(obj) && _lodash2.default.isPlainObject(obj.data) && obj.hasOwnProperty('_id');
  },


  /**
   * Get the value for a component key, in the given submission.
   *
   * @param {Object} data
   *   A submission or data object to search.
   * @param {String} key
   *   A for components API key to search for.
   */
  getValue: function getValue(data, key) {
    var search = function search(obj) {
      if (_lodash2.default.isPlainObject(obj)) {
        if (_lodash2.default.has(obj, key)) {
          return obj[key];
        }

        var value = null;

        _lodash2.default.forOwn(obj, function (prop) {
          var result = search(prop);

          if (!_lodash2.default.isNil(result)) {
            value = result;
            return false;
          }
          return true;
        });
        return value;
      }
      return null;
    };

    return FormioExportUtils.isFormioSubmission(data) ? search(data.data) : search(data);
  },


  /**
   * Interpolate a string and add data replacements.
   *
   * @param string
   *   The template string to use for interpolation
   * @param data
   *   The data object to interpolate
   * @returns {XML|string|*|void}
   */
  interpolate: function interpolate(string, data) {
    var templateSettings = {
      evaluate: /\{%(.+?)%\}/g,
      interpolate: /\{\{(.+?)\}\}/g,
      escape: /\{\{\{(.+?)\}\}\}/g
    };

    try {
      return _lodash2.default.template(string, templateSettings)(data);
    } catch (err) {
      console.warn('Error interpolating template', err, string, data);
      return null;
    }
  },


  /**
   * Iterate through each component within a form.
   *
   * @param {Object} components
   *   The components to iterate.
   * @param {Function} fn
   *   The iteration function to invoke for each component.
   * @param {Boolean} includeAll
   *   Whether or not to include layout components.
   * @param {String} path
   *   The current data path of the element. Example: data.user.firstName
   * @param {Object} parent
   *   The parent object.
   */
  eachComponent: function eachComponent(components, fn, includeAll, path, parent) {
    if (!components) return;
    path = path || '';
    components.forEach(function (component) {
      var hasColumns = component.columns && Array.isArray(component.columns);
      var hasRows = component.rows && Array.isArray(component.rows);
      var hasComps = component.components && Array.isArray(component.components);
      var noRecurse = false;
      var newPath = component.key ? path ? path + '.' + component.key : component.key : '';

      // Keep track of parent references.
      if (parent) {
        // Ensure we don't create infinite JSON structures.
        component.parent = _lodash2.default.clone(parent);
        delete component.parent.components;
        delete component.parent.componentMap;
        delete component.parent.columns;
        delete component.parent.rows;
      }

      if (includeAll || component.tree || !hasColumns && !hasRows && !hasComps) {
        noRecurse = fn(component, newPath);
      }

      var subPath = function subPath() {
        if (component.key && (['datagrid', 'container', 'editgrid'].includes(component.type) || component.tree)) {
          return newPath;
        } else if (component.key && component.type === 'form') {
          return newPath + '.data';
        }
        return path;
      };

      if (!noRecurse) {
        if (hasColumns) {
          component.columns.forEach(function (column) {
            return FormioExportUtils.eachComponent(column.components, fn, includeAll, subPath(), parent ? component : null);
          });
        } else if (hasRows) {
          component.rows.forEach(function (row) {
            return row.forEach(function (column) {
              return FormioExportUtils.eachComponent(column.components, fn, includeAll, subPath(), parent ? component : null);
            });
          });
        } else if (hasComps) {
          FormioExportUtils.eachComponent(component.components, fn, includeAll, subPath(), parent ? component : null);
        }
      }
    });
  },


  /**
   * Creates a DOM element with optional attributes and children elements.
   *
   * @param {String} tag
   *   The DOM element tag name
   * @param {any} args
   *   The DOM element attributes and / or children nodes
   * @returns {Element}
   *   The DOM element
   */
  createElement: function createElement(tag) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var el = document.createElement(tag);
    var attributes = {};

    // check if there are attributes defined
    if (!!args[0] && _typeof(args[0]) === 'object') {
      attributes = args[0];
      // ...and remove them from args
      args = args.slice(1);
    }
    // check if HTML style is defined as object
    if (!!attributes.style && _typeof(attributes.style) === 'object') {
      // transform the style object into string
      attributes.style = _lodash2.default.map(attributes.style, function (value, key) {
        return key + ':' + value;
      }).join(';');
    }
    // check if innerHTML is defined
    if (attributes.hasOwnProperty('innerHTML')) {
      // ...and delete the original innerHTML property
      el.innerHTML = attributes.innerHTML;
      delete attributes.innerHTML;
    } else {
      // create HTML element with supplied attributes and children (if any)
      _lodash2.default.forEach(args, function (arg) {
        if (_lodash2.default.isString(arg)) {
          el.appendChild(document.createTextNode(arg));
        } else if (_lodash2.default.isElement(arg) || _lodash2.default.isObject(arg) && arg.nodeType > 0) {
          el.appendChild(arg);
        }
      });
    }

    _lodash2.default.forEach(attributes, function (value, key) {
      el.setAttribute(key, value);
    });
    // return the created HTML element
    return el;
  }
};

exports.default = FormioExportUtils;
module.exports = exports['default'];

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _lodash = __webpack_require__(0);

var _lodash2 = _interopRequireDefault(_lodash);

var _utils = __webpack_require__(1);

var _utils2 = _interopRequireDefault(_utils);

var _2 = __webpack_require__(5);

var _3 = _interopRequireDefault(_2);

var _plugins = __webpack_require__(12);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BaseComponent = function () {
  function BaseComponent(component, data) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    _classCallCheck(this, BaseComponent);

    if (!(this instanceof BaseComponent)) {
      return new BaseComponent(component, data);
    }

    this.type = '';
    this._options = _lodash2.default.cloneDeep(options);
    this._value = null;
    this._dims = {};
    this._baseWidth = 1;
    this._baseHeight = 1;

    if (_lodash2.default.isObject(component) && component.hasOwnProperty('type')) {
      var comp = _lodash2.default.cloneDeep(component);

      for (var property in comp) {
        this[property] = comp[property];
      }
    }

    if (data === null) {
      return this;
    }

    if (_lodash2.default.isPlainObject(data)) {
      this._value = _utils2.default.getValue({ data: data }, this.key);
      if (_lodash2.default.isNil(this._value) && !this.input) {
        this._value = _lodash2.default.cloneDeep(data);
      }
    } else {
      this._value = data;
    }
  }

  _createClass(BaseComponent, [{
    key: 'getLabel',
    value: function getLabel() {
      return this.legend || this.title || this.label || this.key;
    }
  }, {
    key: 'emptyValue',
    value: function emptyValue() {
      return _lodash2.default.isNil(this._options.emptyValue) ? '' : this._options.emptyValue;
    }
  }, {
    key: 'toHtml',
    value: function toHtml(element) {
      return (0, _plugins.toHtml)(element, this);
    }
  }, {
    key: 'getDimensions',
    value: function getDimensions() {
      this._dims = (0, _plugins.getDimensions)(this);
      return this._dims;
    }
  }, {
    key: 'hasComponents',
    value: function hasComponents() {
      var hasColumns = this.columns && Array.isArray(this.columns);
      var hasRows = this.rows && Array.isArray(this.rows);
      var hasComps = this.components && Array.isArray(this.components);

      return hasColumns || hasRows || hasComps;
    }
  }, {
    key: 'updateDimensions',
    value: function updateDimensions() {
      this._width = 1;
      this._height = 1;
    }
  }, {
    key: 'createComponent',
    value: function createComponent(component, data, options) {
      return _3.default.create(component, data, options);
    }
  }, {
    key: 'formatValue',
    value: function formatValue() {
      if (_lodash2.default.isNil(this._value)) {
        return this.emptyValue();
      }
      return this._value.toString();
    }
  }, {
    key: 'isLayoutComponent',
    value: function isLayoutComponent() {
      return false;
    }
  }]);

  return BaseComponent;
}();

exports.default = BaseComponent;
module.exports = exports['default'];

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _lodash = __webpack_require__(0);

var _lodash2 = _interopRequireDefault(_lodash);

var _base = __webpack_require__(2);

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TextFieldComponent = function (_BaseComponent) {
  _inherits(TextFieldComponent, _BaseComponent);

  function TextFieldComponent(component, data, options) {
    _classCallCheck(this, TextFieldComponent);

    return _possibleConstructorReturn(this, (TextFieldComponent.__proto__ || Object.getPrototypeOf(TextFieldComponent)).call(this, component, data, options));
  }

  _createClass(TextFieldComponent, [{
    key: 'formatValue',
    value: function formatValue() {
      if (_lodash2.default.isEmpty(this._value)) {
        return this.emptyValue();
      }
      return _lodash2.default.isString(this._value) ? this._value : this._value.toString();
    }
  }]);

  return TextFieldComponent;
}(_base2.default);

exports.default = TextFieldComponent;
module.exports = exports['default'];

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _lodash = __webpack_require__(0);

var _lodash2 = _interopRequireDefault(_lodash);

var _base = __webpack_require__(2);

var _base2 = _interopRequireDefault(_base);

var _plugins = __webpack_require__(38);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ContainerComponent = function (_BaseComponent) {
  _inherits(ContainerComponent, _BaseComponent);

  function ContainerComponent(component, data, options) {
    _classCallCheck(this, ContainerComponent);

    var _this = _possibleConstructorReturn(this, (ContainerComponent.__proto__ || Object.getPrototypeOf(ContainerComponent)).call(this, component, data, options));

    if (_this.components && _lodash2.default.isArray(_this.components)) {
      var components = [];

      _lodash2.default.forEach(_this.components, function (c) {
        components.push(_this.createComponent(c, data, options));
      });
      _this.components = components;
    }
    return _this;
  }

  _createClass(ContainerComponent, [{
    key: 'toHtml',
    value: function toHtml(element) {
      return (0, _plugins.toHtml)(element, this);
    }
  }]);

  return ContainerComponent;
}(_base2.default);

exports.default = ContainerComponent;
module.exports = exports['default'];

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _textfield = __webpack_require__(3);

var _textfield2 = _interopRequireDefault(_textfield);

var _textarea = __webpack_require__(15);

var _textarea2 = _interopRequireDefault(_textarea);

var _email = __webpack_require__(16);

var _email2 = _interopRequireDefault(_email);

var _password = __webpack_require__(17);

var _password2 = _interopRequireDefault(_password);

var _phonenumber = __webpack_require__(18);

var _phonenumber2 = _interopRequireDefault(_phonenumber);

var _number = __webpack_require__(6);

var _number2 = _interopRequireDefault(_number);

var _currency = __webpack_require__(19);

var _currency2 = _interopRequireDefault(_currency);

var _datetime = __webpack_require__(20);

var _datetime2 = _interopRequireDefault(_datetime);

var _day = __webpack_require__(21);

var _day2 = _interopRequireDefault(_day);

var _time = __webpack_require__(22);

var _time2 = _interopRequireDefault(_time);

var _address = __webpack_require__(23);

var _address2 = _interopRequireDefault(_address);

var _checkbox = __webpack_require__(24);

var _checkbox2 = _interopRequireDefault(_checkbox);

var _radio = __webpack_require__(25);

var _radio2 = _interopRequireDefault(_radio);

var _selectboxes = __webpack_require__(26);

var _selectboxes2 = _interopRequireDefault(_selectboxes);

var _select = __webpack_require__(7);

var _select2 = _interopRequireDefault(_select);

var _resource = __webpack_require__(31);

var _resource2 = _interopRequireDefault(_resource);

var _survey = __webpack_require__(32);

var _survey2 = _interopRequireDefault(_survey);

var _file = __webpack_require__(8);

var _file2 = _interopRequireDefault(_file);

var _signature = __webpack_require__(37);

var _signature2 = _interopRequireDefault(_signature);

var _container = __webpack_require__(4);

var _container2 = _interopRequireDefault(_container);

var _datagrid = __webpack_require__(40);

var _datagrid2 = _interopRequireDefault(_datagrid);

var _editgrid = __webpack_require__(44);

var _editgrid2 = _interopRequireDefault(_editgrid);

var _form = __webpack_require__(45);

var _form2 = _interopRequireDefault(_form);

var _columns = __webpack_require__(49);

var _columns2 = _interopRequireDefault(_columns);

var _panel = __webpack_require__(9);

var _panel2 = _interopRequireDefault(_panel);

var _fieldset = __webpack_require__(53);

var _fieldset2 = _interopRequireDefault(_fieldset);

var _unknown = __webpack_require__(54);

var _unknown2 = _interopRequireDefault(_unknown);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FormioComponent = {
  textfield: _textfield2.default,
  textarea: _textarea2.default,
  email: _email2.default,
  password: _password2.default,
  phoneNumber: _phonenumber2.default,
  number: _number2.default,
  currency: _currency2.default,
  datetime: _datetime2.default,
  day: _day2.default,
  time: _time2.default,
  address: _address2.default,
  checkbox: _checkbox2.default,
  radio: _radio2.default,
  selectboxes: _selectboxes2.default,
  select: _select2.default,
  resource: _resource2.default,
  survey: _survey2.default,
  file: _file2.default,
  signature: _signature2.default,
  container: _container2.default,
  datagrid: _datagrid2.default,
  editgrid: _editgrid2.default,
  columns: _columns2.default,
  panel: _panel2.default,
  fieldset: _fieldset2.default,
  unknown: _unknown2.default,
  form: _form2.default,
  create: function create(component, data, options) {
    var c = null;

    if (!component) {
      return null;
    } else if (FormioComponent.hasOwnProperty(component.type)) {
      c = new FormioComponent[component.type](component, data, options);
    } else {
      c = new _unknown2.default(component, data, options);
    }
    return c;
  }
};

exports.default = FormioComponent;
module.exports = exports['default'];

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _lodash = __webpack_require__(0);

var _lodash2 = _interopRequireDefault(_lodash);

var _base = __webpack_require__(2);

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NumberComponent = function (_BaseComponent) {
  _inherits(NumberComponent, _BaseComponent);

  function NumberComponent(component, data, options) {
    _classCallCheck(this, NumberComponent);

    return _possibleConstructorReturn(this, (NumberComponent.__proto__ || Object.getPrototypeOf(NumberComponent)).call(this, component, data, options));
  }

  _createClass(NumberComponent, [{
    key: 'formatValue',
    value: function formatValue() {
      if (_lodash2.default.isNil(this._value)) {
        return this.emptyValue();
      }
      return this._value.toLocaleString();
    }
  }]);

  return NumberComponent;
}(_base2.default);

exports.default = NumberComponent;
module.exports = exports['default'];

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _lodash = __webpack_require__(0);

var _lodash2 = _interopRequireDefault(_lodash);

var _utils = __webpack_require__(1);

var _utils2 = _interopRequireDefault(_utils);

var _base = __webpack_require__(2);

var _base2 = _interopRequireDefault(_base);

var _plugins = __webpack_require__(29);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SelectComponent = function (_BaseComponent) {
  _inherits(SelectComponent, _BaseComponent);

  function SelectComponent(component, data, options) {
    _classCallCheck(this, SelectComponent);

    var _this = _possibleConstructorReturn(this, (SelectComponent.__proto__ || Object.getPrototypeOf(SelectComponent)).call(this, component, data, options));

    if (!_this.multiple) {
      _this._value = [_this._value];
    }
    return _this;
  }

  _createClass(SelectComponent, [{
    key: 'toHtml',
    value: function toHtml(element) {
      return (0, _plugins.toHtml)(element, this);
    }
  }, {
    key: 'formatValues',
    value: function formatValues() {
      var _this2 = this;

      if (_lodash2.default.isNil(this._value)) {
        return this.emptyValue();
      }
      var values = [];

      _lodash2.default.forEach(this._value, function (value) {
        values.push(_this2.formatValue(value));
      });
      return values;
    }
  }, {
    key: 'formatValue',
    value: function formatValue(value) {
      if (_lodash2.default.isNil(value)) {
        return this.emptyValue();
      }
      switch (this.dataSrc) {
        case 'url':
          return value;
        case 'custom':
        case 'resource':
          return _lodash2.default.isPlainObject(value) ? _utils2.default.interpolate(this.template, { item: value }) : value;
        case 'values':
        case 'json':
          var valueProperty = this.valueProperty || 'value';
          var item = _lodash2.default.find(this.data[this.dataSrc], function (o) {
            return o[valueProperty] === value;
          });

          return _lodash2.default.isPlainObject(item) ? _utils2.default.interpolate(this.template, { item: item }) : value;
        default:
          return value;
      }
    }
  }]);

  return SelectComponent;
}(_base2.default);

exports.default = SelectComponent;
module.exports = exports['default'];

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _base = __webpack_require__(2);

var _base2 = _interopRequireDefault(_base);

var _plugins = __webpack_require__(35);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FileComponent = function (_BaseComponent) {
  _inherits(FileComponent, _BaseComponent);

  function FileComponent(component, data, options) {
    _classCallCheck(this, FileComponent);

    return _possibleConstructorReturn(this, (FileComponent.__proto__ || Object.getPrototypeOf(FileComponent)).call(this, component, data, options));
  }

  _createClass(FileComponent, [{
    key: 'toHtml',
    value: function toHtml(element) {
      return (0, _plugins.toHtml)(element, this);
    }
  }]);

  return FileComponent;
}(_base2.default);

exports.default = FileComponent;
module.exports = exports['default'];

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _container = __webpack_require__(4);

var _container2 = _interopRequireDefault(_container);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PanelComponent = function (_ContainerComponent) {
  _inherits(PanelComponent, _ContainerComponent);

  function PanelComponent(component, data, options) {
    _classCallCheck(this, PanelComponent);

    return _possibleConstructorReturn(this, (PanelComponent.__proto__ || Object.getPrototypeOf(PanelComponent)).call(this, component, data, options));
  }

  return PanelComponent;
}(_container2.default);

exports.default = PanelComponent;
module.exports = exports['default'];

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FormioExport = undefined;

var _formioExport = __webpack_require__(11);

var _formioExport2 = _interopRequireDefault(_formioExport);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.FormioExport = _formioExport2.default;
exports.default = _formioExport2.default;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

// Import export plugins


var _lodash = __webpack_require__(0);

var _lodash2 = _interopRequireDefault(_lodash);

var _utils = __webpack_require__(1);

var _utils2 = _interopRequireDefault(_utils);

var _formio = __webpack_require__(5);

var _formio2 = _interopRequireDefault(_formio);

var _plugins = __webpack_require__(55);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Class for exporting formio components into different formats
 *
 * @class FormioExport
 */
var FormioExport = function () {

  /**
   * Creates an instance of FormioExport.
   * @param {any} component The formio component
   * @param {any} data The formio component data
   * @param {any} [options={}] Formio optional parameters
   * @memberof FormioExport
   */
  function FormioExport(component, data) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    _classCallCheck(this, FormioExport);

    if (!(this instanceof FormioExport)) {
      return new FormioExport(component, data);
    }

    this.component = null;
    this.data = {};
    this.options = {};

    if (options.hasOwnProperty('formio')) {
      this.options = _lodash2.default.cloneDeep(options.formio);
    }

    if (options.hasOwnProperty('component')) {
      this.component = options.component;
    } else if (component) {
      this.component = component;
    }

    if (options.hasOwnProperty('data')) {
      this.data = options.data;
    } else if (!_lodash2.default.isNil(data)) {
      this.data = data;
    }

    if (_utils2.default.isFormioSubmission(this.data)) {
      this.options.submission = {
        id: this.data._id,
        owner: this.data.owner,
        modified: this.data.modified
      };
      this.data = this.data.data;
    }

    if (this.component) {
      if (_utils2.default.isFormioForm(this.component) || _utils2.default.isFormioWizard(this.component)) {
        this.component.type = 'form';
        this.component.display = 'form';
      }
      this.component = _formio2.default.create(component || this.component, this.data, this.options);
    } else if (!this.component) {
      console.warn(this.constructor.name, 'no component defined');
    }
  }

  /**
   * Renders the formio component to HTML
   *
   * @returns {Promise} The promise containing the HTML render of the formio component
   * @memberof FormioExport
   */


  _createClass(FormioExport, [{
    key: 'toHtml',
    value: function toHtml() {
      var _this = this;

      return new Promise(function (resolve, reject) {
        try {
          (0, _plugins.toHtml)(_this.component).then(function (html) {
            return resolve(html);
          });
        } catch (error) {
          reject(error);
        }
      });
    }

    /**
     * Exports the formio component to a jsPDF object
     *
     * @param {any} [config={}] The Html2PDf configuration
     * @returns {Promise} The promise containing the jsPDF object
     * @memberof FormioExport
     */

  }, {
    key: 'toPdf',
    value: function toPdf() {
      var _this2 = this;

      var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      return new Promise(function (resolve, reject) {
        try {
          _this2.toHtml().then(function (source) {
            (0, _plugins.toPdf)(Object.assign(config, { source: source })).then(function (pdf) {
              return resolve(pdf);
            });
          });
        } catch (error) {
          reject(error);
        }
      });
    }

    /**
     * Exports the formio component to a xlsx object
     *
     * @param {any} [config={}] The xlsx configuration
     * @returns {Promise} The promise containing the xlsx object
     * @memberof FormioExport
     */

  }, {
    key: 'toXlsx',
    value: function toXlsx() {
      var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      return new Promise(function (resolve, reject) {
        try {
          (0, _plugins.toXlsx)(config).then(function (xlsx) {
            return resolve(xlsx);
          });
        } catch (error) {
          reject(error);
        }
      });
    }

    /**
     * Renders the formio component to HTML
     *
     * @param {any} options The FormioExport options
     * @returns {Promise} The promise containing the HTML render of the formio component
     * @memberof FormioExport
     */

  }], [{
    key: 'toHtml',
    value: function toHtml(options) {
      return new Promise(function (resolve, reject) {
        try {
          options = _utils2.default.verifyProperties(options, {
            component: {
              type: Object,
              required: true
            },
            formio: {
              type: Object
            }
          });
          new FormioExport(options.component, options.data, options.formio).toHtml().then(function (html) {
            resolve(html);
          });
        } catch (error) {
          console.error(error);
          reject(error);
        }
      });
    }

    /**
     * Exports the formio component to a jsPDF object
     *
     * @param {any} options The FormioExport configuration
     * @returns {Promise} The promise containing the jsPDF object
     * @memberof FormioExport
     */

  }, {
    key: 'toPdf',
    value: function toPdf(options) {
      return new Promise(function (resolve, reject) {
        try {
          options = _utils2.default.verifyProperties(options, {
            component: {
              type: Object,
              required: true
            },
            formio: {
              type: Object
            },
            config: {
              type: Object,
              default: {
                filename: 'export-' + Math.random().toString(36).substring(7) + '.pdf'
              }
            }
          });
          new FormioExport(options.component, options.data, options.formio).toPdf(options.config).then(function (pdf) {
            resolve(pdf);
          });
        } catch (error) {
          console.error(error);
          reject(error);
        }
      });
    }

    /**
     * Exports the formio component to a xlsx object
     *
     * @param {any} options The FormioExport configuration
     * @returns {Promise} The promise containing the xlsx object
     * @memberof FormioExport
     */

  }, {
    key: 'toXlsx',
    value: function toXlsx(options) {
      return new Promise(function (resolve, reject) {
        try {
          options = _utils2.default.verifyProperties(options, {
            component: {
              type: Object,
              required: true
            },
            formio: {
              type: Object
            },
            config: {
              type: Object
            }
          });
          new FormioExport(options.component, options.data, options.formio).toXlsx(options.config).then(function (xlsx) {
            resolve(xlsx);
          });
        } catch (error) {
          console.error(error);
          reject(error);
        }
      });
    }
  }]);

  return FormioExport;
}();

;

exports.default = FormioExport;
module.exports = exports['default'];

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDimensions = exports.toHtml = undefined;

var _html = __webpack_require__(13);

var _html2 = _interopRequireDefault(_html);

var _dims = __webpack_require__(14);

var _dims2 = _interopRequireDefault(_dims);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.toHtml = _html2.default;
exports.getDimensions = _dims2.default;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lodash = __webpack_require__(0);

var _lodash2 = _interopRequireDefault(_lodash);

var _utils = __webpack_require__(1);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (element, component) {
  if (component && component.input) {
    if (component.key == 'addComment' && (_lodash2.default.isNil(component._value) || component._value === '')) {
      return null;
    }

    var componentElement = '';
    if (component.key === 'comments') {
      if (_lodash2.default.isNil(component._value) || component._value === '') return null;

      componentElement = _utils2.default.createElement('div', {
        class: 'formio-component panel-component card',
        id: Math.random().toString(36).substring(7)
      });
      var labelElement = _utils2.default.createElement('div', {
        class: 'component-label card-header'
      }, component.label);
      var valueElement = _utils2.default.createElement('div', {
        class: 'component-value pl-2 card-body'
      });
      valueElement.innerHTML = component._value;
      componentElement.appendChild(labelElement);
      componentElement.appendChild(valueElement);
    } else {
      componentElement = _utils2.default.createElement('div', {
        class: 'formio-component ' + component.type + '-component',
        id: Math.random().toString(36).substring(7)
      });
      var _labelElement = _utils2.default.createElement('div', {
        class: 'col component-label'
      }, component.label);
      var _valueElement = _utils2.default.createElement('div', {
        class: 'col component-value'
      }, component.formatValue());

      if (!component.hideLabel && (!component.inDataGrid || component.dataGridLabel)) {
        _labelElement.className += component._options.equalCols ? '' : ' col-sm-3';
        _valueElement.className += component._options.equalCols ? '' : ' col-sm-9';
        componentElement.appendChild(_labelElement);
      }
      componentElement.appendChild(_valueElement);
    }
    if (_lodash2.default.isElement(element)) {
      element.appendChild(componentElement);
    }
    return componentElement;
  };
  return null;
};

module.exports = exports['default'];

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (component) {
  var dims = {
    width: component._baseWidth,
    height: component._baseHeight
  };

  if (component.label) {

    switch (component.labelPosition) {
      case 'top':
      case 'bottom':
        dims.height++;
        break;
      default:
        dims.width++;
    }
  }

  return dims;
};

module.exports = exports['default'];

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _textfield = __webpack_require__(3);

var _textfield2 = _interopRequireDefault(_textfield);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TextAreaComponent = function (_TextFieldComponent) {
  _inherits(TextAreaComponent, _TextFieldComponent);

  function TextAreaComponent(component, data, options) {
    _classCallCheck(this, TextAreaComponent);

    return _possibleConstructorReturn(this, (TextAreaComponent.__proto__ || Object.getPrototypeOf(TextAreaComponent)).call(this, component, data, options));
  }

  return TextAreaComponent;
}(_textfield2.default);

exports.default = TextAreaComponent;
module.exports = exports['default'];

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _textfield = __webpack_require__(3);

var _textfield2 = _interopRequireDefault(_textfield);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EmailComponent = function (_TextFieldComponent) {
  _inherits(EmailComponent, _TextFieldComponent);

  function EmailComponent(component, data, options) {
    _classCallCheck(this, EmailComponent);

    return _possibleConstructorReturn(this, (EmailComponent.__proto__ || Object.getPrototypeOf(EmailComponent)).call(this, component, data, options));
  }

  return EmailComponent;
}(_textfield2.default);

exports.default = EmailComponent;
module.exports = exports['default'];

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _textfield = __webpack_require__(3);

var _textfield2 = _interopRequireDefault(_textfield);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PasswordComponent = function (_TextFieldComponent) {
  _inherits(PasswordComponent, _TextFieldComponent);

  function PasswordComponent(component, data, options) {
    _classCallCheck(this, PasswordComponent);

    return _possibleConstructorReturn(this, (PasswordComponent.__proto__ || Object.getPrototypeOf(PasswordComponent)).call(this, component, data, options));
  }

  return PasswordComponent;
}(_textfield2.default);

exports.default = PasswordComponent;
module.exports = exports['default'];

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _textfield = __webpack_require__(3);

var _textfield2 = _interopRequireDefault(_textfield);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PhoneNumberComponent = function (_TextFieldComponent) {
  _inherits(PhoneNumberComponent, _TextFieldComponent);

  function PhoneNumberComponent(component, data, options) {
    _classCallCheck(this, PhoneNumberComponent);

    return _possibleConstructorReturn(this, (PhoneNumberComponent.__proto__ || Object.getPrototypeOf(PhoneNumberComponent)).call(this, component, data, options));
  }

  return PhoneNumberComponent;
}(_textfield2.default);

exports.default = PhoneNumberComponent;
module.exports = exports['default'];

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _number = __webpack_require__(6);

var _number2 = _interopRequireDefault(_number);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CurrencyComponent = function (_NumberComponent) {
  _inherits(CurrencyComponent, _NumberComponent);

  function CurrencyComponent(component, data) {
    _classCallCheck(this, CurrencyComponent);

    return _possibleConstructorReturn(this, (CurrencyComponent.__proto__ || Object.getPrototypeOf(CurrencyComponent)).call(this, component, data));
  }

  return CurrencyComponent;
}(_number2.default);

exports.default = CurrencyComponent;
module.exports = exports['default'];

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _lodash = __webpack_require__(0);

var _lodash2 = _interopRequireDefault(_lodash);

var _base = __webpack_require__(2);

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DateTimeComponent = function (_BaseComponent) {
  _inherits(DateTimeComponent, _BaseComponent);

  function DateTimeComponent(component, data, options) {
    _classCallCheck(this, DateTimeComponent);

    return _possibleConstructorReturn(this, (DateTimeComponent.__proto__ || Object.getPrototypeOf(DateTimeComponent)).call(this, component, data, options));
  }

  _createClass(DateTimeComponent, [{
    key: 'formatValue',
    value: function formatValue() {
      if (_lodash2.default.isNil(this._value)) {
        return this.emptyValue();
      }
      return _lodash2.default.isString(this._value) ? this._value.replace('T', ' ').split('.')[0] + ' UTC' : this._value;
    }
  }]);

  return DateTimeComponent;
}(_base2.default);

exports.default = DateTimeComponent;
module.exports = exports['default'];

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _lodash = __webpack_require__(0);

var _lodash2 = _interopRequireDefault(_lodash);

var _base = __webpack_require__(2);

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DayComponent = function (_BaseComponent) {
  _inherits(DayComponent, _BaseComponent);

  function DayComponent(component, data, options) {
    _classCallCheck(this, DayComponent);

    return _possibleConstructorReturn(this, (DayComponent.__proto__ || Object.getPrototypeOf(DayComponent)).call(this, component, data, options));
  }

  _createClass(DayComponent, [{
    key: 'formatValue',
    value: function formatValue() {
      if (_lodash2.default.isNil(this._value)) {
        return this.emptyValue();
      }
      if (_lodash2.default.isString(this._value)) {
        var parts = this._value.split('/');

        if (this.dayFirst) {
          return [parts[2], parts[1], parts[0]].join('-');
        }
        return [parts[2], parts[0], parts[1]].join('-');
      }
      return this._value;
    }
  }]);

  return DayComponent;
}(_base2.default);

exports.default = DayComponent;
module.exports = exports['default'];

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _textfield = __webpack_require__(3);

var _textfield2 = _interopRequireDefault(_textfield);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TimeComponent = function (_TextFieldComponent) {
  _inherits(TimeComponent, _TextFieldComponent);

  function TimeComponent(component, data, options) {
    _classCallCheck(this, TimeComponent);

    return _possibleConstructorReturn(this, (TimeComponent.__proto__ || Object.getPrototypeOf(TimeComponent)).call(this, component, data, options));
  }

  return TimeComponent;
}(_textfield2.default);

exports.default = TimeComponent;
module.exports = exports['default'];

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _lodash = __webpack_require__(0);

var _lodash2 = _interopRequireDefault(_lodash);

var _base = __webpack_require__(2);

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AddressComponent = function (_BaseComponent) {
  _inherits(AddressComponent, _BaseComponent);

  function AddressComponent(component, data, options) {
    _classCallCheck(this, AddressComponent);

    return _possibleConstructorReturn(this, (AddressComponent.__proto__ || Object.getPrototypeOf(AddressComponent)).call(this, component, data, options));
  }

  _createClass(AddressComponent, [{
    key: 'formatValue',
    value: function formatValue() {
      if (_lodash2.default.isNil(this._value)) {
        return this.emptyValue();
      }
      return _lodash2.default.isObject(this._value) ? this._value.formatted_address : this._value;
    }
  }]);

  return AddressComponent;
}(_base2.default);

exports.default = AddressComponent;
module.exports = exports['default'];

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _base = __webpack_require__(2);

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CheckBoxComponent = function (_BaseComponent) {
  _inherits(CheckBoxComponent, _BaseComponent);

  function CheckBoxComponent(component, data, options) {
    _classCallCheck(this, CheckBoxComponent);

    return _possibleConstructorReturn(this, (CheckBoxComponent.__proto__ || Object.getPrototypeOf(CheckBoxComponent)).call(this, component, data, options));
  }

  _createClass(CheckBoxComponent, [{
    key: 'formatValue',
    value: function formatValue() {
      return this._value ? 'Yes' : 'No';
    }
  }]);

  return CheckBoxComponent;
}(_base2.default);

exports.default = CheckBoxComponent;
module.exports = exports['default'];

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _lodash = __webpack_require__(0);

var _lodash2 = _interopRequireDefault(_lodash);

var _base = __webpack_require__(2);

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RadioComponent = function (_BaseComponent) {
  _inherits(RadioComponent, _BaseComponent);

  function RadioComponent(component, data, options) {
    _classCallCheck(this, RadioComponent);

    return _possibleConstructorReturn(this, (RadioComponent.__proto__ || Object.getPrototypeOf(RadioComponent)).call(this, component, data, options));
  }

  _createClass(RadioComponent, [{
    key: 'formatValue',
    value: function formatValue() {
      var _this2 = this;

      if (_lodash2.default.isNil(this._value)) {
        return this.emptyValue();
      }
      var item = _lodash2.default.find(this.values, function (o) {
        return o.value === _this2._value;
      });

      return item ? item.label : this._value;
    }
  }]);

  return RadioComponent;
}(_base2.default);

exports.default = RadioComponent;
module.exports = exports['default'];

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _lodash = __webpack_require__(0);

var _lodash2 = _interopRequireDefault(_lodash);

var _base = __webpack_require__(2);

var _base2 = _interopRequireDefault(_base);

var _plugins = __webpack_require__(27);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SelectBoxesComponent = function (_BaseComponent) {
  _inherits(SelectBoxesComponent, _BaseComponent);

  function SelectBoxesComponent(component, data, options) {
    _classCallCheck(this, SelectBoxesComponent);

    return _possibleConstructorReturn(this, (SelectBoxesComponent.__proto__ || Object.getPrototypeOf(SelectBoxesComponent)).call(this, component, data, options));
  }

  _createClass(SelectBoxesComponent, [{
    key: 'toHtml',
    value: function toHtml(element) {
      return (0, _plugins.toHtml)(element, this);
    }
  }, {
    key: 'formatValue',
    value: function formatValue(value) {
      if (_lodash2.default.isNil(value)) {
        return _base2.default.emptyValue;
      }
      var item = _lodash2.default.find(this.values, function (o) {
        return o.value === value;
      });

      return item ? item.label : value;
    }
  }, {
    key: 'formatValues',
    value: function formatValues() {
      var _this2 = this;

      if (_lodash2.default.isNil(this._value)) {
        return [];
      }
      var values = [];

      _lodash2.default.forEach(this._value, function (selected, value) {
        if (selected) {
          values.push(_this2.formatValue(value));
        }
      });
      return values;
    }
  }]);

  return SelectBoxesComponent;
}(_base2.default);

exports.default = SelectBoxesComponent;
module.exports = exports['default'];

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toHtml = undefined;

var _html = __webpack_require__(28);

var _html2 = _interopRequireDefault(_html);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.toHtml = _html2.default;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lodash = __webpack_require__(0);

var _lodash2 = _interopRequireDefault(_lodash);

var _utils = __webpack_require__(1);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (element, component) {
  if (component && component.input) {
    var componentElement = _utils2.default.createElement('div', {
      class: 'formio-component ' + component.type + '-component',
      id: Math.random().toString(36).substring(7)
    });

    var labelElement = _utils2.default.createElement('div', { class: 'col component-label' }, component.label);
    var valueElement = _utils2.default.createElement('div', { class: 'col component-value' });

    _lodash2.default.forEach(component.formatValues(), function (value) {
      var selectionElement = _utils2.default.createElement('p', { class: 'component-item' });

      selectionElement.innerHTML = value;
      valueElement.appendChild(selectionElement);
    });

    if (!component.hideLabel && (!component.inDataGrid || component.dataGridLabel)) {
      labelElement.className += ' col-sm-3';
      valueElement.className += ' col-sm-9';
      componentElement.appendChild(labelElement);
    }

    componentElement.appendChild(valueElement);
    if (_lodash2.default.isElement(element)) {
      element.appendChild(componentElement);
    }
    return componentElement;
  }
  return null;
};

module.exports = exports['default'];

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toHtml = undefined;

var _html = __webpack_require__(30);

var _html2 = _interopRequireDefault(_html);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.toHtml = _html2.default;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lodash = __webpack_require__(0);

var _lodash2 = _interopRequireDefault(_lodash);

var _utils = __webpack_require__(1);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (element, component) {
  if (component && component.input) {
    var componentElement = _utils2.default.createElement('div', {
      class: 'formio-component ' + component.type + '-component',
      id: Math.random().toString(36).substring(7)
    });

    var labelElement = _utils2.default.createElement('div', { class: 'col component-label' }, component.label);
    var valueElement = _utils2.default.createElement('div', { class: 'col component-value' });
    var values = component.formatValues();

    _lodash2.default.forEach(values, function (value) {
      var selectionElement = _utils2.default.createElement('div', { class: 'component-item', innerHTML: value });

      valueElement.appendChild(selectionElement);
    });

    if (!component.hideLabel && (!component.inDataGrid || component.dataGridLabel)) {
      labelElement.className += ' col-sm-3';
      valueElement.className += ' col-sm-9';
      componentElement.appendChild(labelElement);
    }

    componentElement.appendChild(valueElement);
    if (_lodash2.default.isElement(element)) {
      element.appendChild(componentElement);
    }
    return componentElement;
  }
  return null;
};

module.exports = exports['default'];

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _lodash = __webpack_require__(0);

var _lodash2 = _interopRequireDefault(_lodash);

var _utils = __webpack_require__(1);

var _utils2 = _interopRequireDefault(_utils);

var _select = __webpack_require__(7);

var _select2 = _interopRequireDefault(_select);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ResourceComponent = function (_SelectComponent) {
  _inherits(ResourceComponent, _SelectComponent);

  function ResourceComponent(component, data, options) {
    _classCallCheck(this, ResourceComponent);

    return _possibleConstructorReturn(this, (ResourceComponent.__proto__ || Object.getPrototypeOf(ResourceComponent)).call(this, component, data, options));
  }

  _createClass(ResourceComponent, [{
    key: 'formatValues',
    value: function formatValues() {
      var _this2 = this;

      if (_lodash2.default.isNil(this._value)) {
        return this.emptyValue();
      }
      var values = [];

      _lodash2.default.forEach(this._value, function (value) {
        values.push(_this2.formatValue(value));
      });
      return values;
    }
  }, {
    key: 'formatValue',
    value: function formatValue(value) {
      if (_lodash2.default.isNil(value)) {
        return this.emptyValue();
      }
      if (_lodash2.default.isPlainObject(value)) {
        return _utils2.default.interpolate(this.template, { item: value });
      }
      return value;
    }
  }]);

  return ResourceComponent;
}(_select2.default);

exports.default = ResourceComponent;
module.exports = exports['default'];

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _lodash = __webpack_require__(0);

var _lodash2 = _interopRequireDefault(_lodash);

var _base = __webpack_require__(2);

var _base2 = _interopRequireDefault(_base);

var _plugins = __webpack_require__(33);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SurveyComponent = function (_BaseComponent) {
  _inherits(SurveyComponent, _BaseComponent);

  function SurveyComponent(component, data, options) {
    _classCallCheck(this, SurveyComponent);

    return _possibleConstructorReturn(this, (SurveyComponent.__proto__ || Object.getPrototypeOf(SurveyComponent)).call(this, component, data, options));
  }

  _createClass(SurveyComponent, [{
    key: 'toHtml',
    value: function toHtml(element) {
      return (0, _plugins.toHtml)(element, this);
    }
  }, {
    key: 'formatValue',
    value: function formatValue(option, question) {
      if (_lodash2.default.isNil(option) || _lodash2.default.isNil(question)) {
        return this.emptyValue();
      }
      var value = {};

      _lodash2.default.forEach(this.questions, function (item) {
        if (item.value === question) {
          value.question = item.label;
        }
      });
      _lodash2.default.forEach(this.values, function (item) {
        if (item.value === option) {
          value.option = item.label;
        }
      });
      return value;
    }
  }, {
    key: 'formatValues',
    value: function formatValues() {
      var _this2 = this;

      if (_lodash2.default.isNil(this._value)) {
        return this.emptyValue();
      }
      var values = [];

      _lodash2.default.forEach(this._value, function (option, question) {
        values.push(_this2.formatValue(option, question));
      });
      return values;
    }
  }]);

  return SurveyComponent;
}(_base2.default);

exports.default = SurveyComponent;
module.exports = exports['default'];

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toHtml = undefined;

var _html = __webpack_require__(34);

var _html2 = _interopRequireDefault(_html);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.toHtml = _html2.default;

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lodash = __webpack_require__(0);

var _lodash2 = _interopRequireDefault(_lodash);

var _utils = __webpack_require__(1);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (element, component) {
  if (component && component.input) {
    var componentElement = _utils2.default.createElement('div', {
      class: 'formio-component ' + component.type + '-component card',
      id: Math.random().toString(36).substring(7)
    });
    var labelElement = _utils2.default.createElement('div', {
      class: 'component-label card-header'
    }, component.label);
    var valueElement = _utils2.default.createElement('div', {
      class: 'component-value card-body'
    });

    var values = component.formatValues();

    _lodash2.default.forEach(values, function (item) {
      var questionElement = _utils2.default.createElement('div', { class: 'row survey-question' }, _utils2.default.createElement('div', { class: 'col-sm-9 text-bold' }, item.question), _utils2.default.createElement('div', { class: 'col-sm-3' }, item.option));

      valueElement.appendChild(questionElement);
    });

    if (!component.hideLabel && (!component.inDataGrid || component.dataGridLabel)) {
      componentElement.appendChild(labelElement);
    }

    componentElement.appendChild(valueElement);
    if (_lodash2.default.isElement(element)) {
      element.appendChild(componentElement);
    }
    return componentElement;
  }
  return null;
};

module.exports = exports['default'];

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toHtml = undefined;

var _html = __webpack_require__(36);

var _html2 = _interopRequireDefault(_html);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.toHtml = _html2.default;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lodash = __webpack_require__(0);

var _lodash2 = _interopRequireDefault(_lodash);

var _utils = __webpack_require__(1);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (element, component) {
  if (component && component.input) {
    var componentElement = _utils2.default.createElement('div', {
      class: 'formio-component ' + component.type + '-component',
      id: Math.random().toString(36).substring(7)
    });

    var labelElement = _utils2.default.createElement('div', {
      class: 'col col-sm-3 component-label'
    }, component.label);
    var valueElement = _utils2.default.createElement('div', {
      class: 'col col-sm-9 component-value'
    });

    _lodash2.default.forEach(component._value, function (file) {
      if (_lodash2.default.isObject(file)) {
        if (file.type.indexOf('image/') === 0) {
          valueElement.appendChild(_utils2.default.createElement('img', { src: file.url, class: 'img-responsive' }));
        } else {
          valueElement.innerHTML = file.name + ' (' + file.size / 1024 + ' KB)';
        }
      }
    });

    componentElement.appendChild(labelElement);
    componentElement.appendChild(valueElement);

    if (_lodash2.default.isElement(element)) {
      element.appendChild(componentElement);
    }
    return componentElement;
  }
  return null;
};

module.exports = exports['default'];

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _file = __webpack_require__(8);

var _file2 = _interopRequireDefault(_file);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SignatureComponent = function (_FileComponent) {
  _inherits(SignatureComponent, _FileComponent);

  function SignatureComponent(component, data, options) {
    _classCallCheck(this, SignatureComponent);

    var _this = _possibleConstructorReturn(this, (SignatureComponent.__proto__ || Object.getPrototypeOf(SignatureComponent)).call(this, component, data, options));

    if (_this._value) {
      _this._value = [{
        storage: 'base64',
        type: 'image/png',
        url: _this._value
      }];
    }
    return _this;
  }

  return SignatureComponent;
}(_file2.default);

exports.default = SignatureComponent;
module.exports = exports['default'];

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toHtml = undefined;

var _html = __webpack_require__(39);

var _html2 = _interopRequireDefault(_html);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.toHtml = _html2.default;

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lodash = __webpack_require__(0);

var _lodash2 = _interopRequireDefault(_lodash);

var _utils = __webpack_require__(1);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (element, component) {
  if (component && component.components) {
    var componentElement = _utils2.default.createElement('div', {
      class: 'formio-component ' + component.type + '-component card',
      id: Math.random().toString(36).substring(7)
    });
    var labelElement = _utils2.default.createElement('div', {
      class: 'component-label card-header'
    }, component.getLabel());
    var valueElement = _utils2.default.createElement('div', {
      class: 'component-value card-body'
    });

    if (!component.inDataGrid || component.dataGridLabel) {
      componentElement.appendChild(labelElement);
    }

    _lodash2.default.forEach(component.components, function (c) {
      if (c) {
        if (component.inDataGrid) {
          c._options.equalCols = true;
        }
        c.toHtml(valueElement);
      }
    });

    componentElement.appendChild(valueElement);

    if (_lodash2.default.isElement(element)) {
      element.appendChild(componentElement);
    }
    return componentElement;
  }
  return null;
};

module.exports = exports['default'];

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _lodash = __webpack_require__(0);

var _lodash2 = _interopRequireDefault(_lodash);

var _base = __webpack_require__(2);

var _base2 = _interopRequireDefault(_base);

var _plugins = __webpack_require__(41);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DataGridComponent = function (_BaseComponent) {
  _inherits(DataGridComponent, _BaseComponent);

  function DataGridComponent(component, data, options) {
    _classCallCheck(this, DataGridComponent);

    var _this = _possibleConstructorReturn(this, (DataGridComponent.__proto__ || Object.getPrototypeOf(DataGridComponent)).call(this, component, data, options));

    _this.numCols = Array.isArray(_this.components) ? _this.components.length : 0;
    _this.numRows = Array.isArray(_this._value) ? _this._value.length : 0;
    _this.rows = [];

    if (_lodash2.default.isArray(_this._value)) {
      _lodash2.default.forEach(_this._value, function (value) {
        var row = [];

        _lodash2.default.forEach(_this.components, function (c) {
          row.push(_this.createComponent(c, value[c.key], options));
        });
        _this.rows.push(row);
      });
    }
    return _this;
  }

  _createClass(DataGridComponent, [{
    key: 'getDimensions',
    value: function getDimensions() {
      return (0, _plugins.getDimensions)(this);
    }
  }, {
    key: 'toHtml',
    value: function toHtml(element) {
      return (0, _plugins.toHtml)(element, this);
    }
  }]);

  return DataGridComponent;
}(_base2.default);

exports.default = DataGridComponent;
module.exports = exports['default'];

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDimensions = exports.toHtml = undefined;

var _html = __webpack_require__(42);

var _html2 = _interopRequireDefault(_html);

var _dims = __webpack_require__(43);

var _dims2 = _interopRequireDefault(_dims);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.toHtml = _html2.default;
exports.getDimensions = _dims2.default;

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lodash = __webpack_require__(0);

var _lodash2 = _interopRequireDefault(_lodash);

var _utils = __webpack_require__(1);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (element, component) {
  if (component && component.components) {
    var componentElement = _utils2.default.createElement('div', {
      class: 'formio-component grid-component ' + component.type + '-component card',
      id: Math.random().toString(36).substring(7)
    });
    var labelElement = _utils2.default.createElement('div', {
      class: 'component-label card-header'
    }, component.getLabel());
    var valueElement = _utils2.default.createElement('div', {
      class: 'component-value card-body'
    });

    var transpose = component.numRows < component.numCols;

    if (!transpose) {
      var headerElement = _utils2.default.createElement('div', { class: 'row grid-row grid-header' });

      _lodash2.default.forEach(component.rows[0], function (c) {
        if (c) {
          headerElement.appendChild(_utils2.default.createElement('div', { class: 'col grid-cell' }, c.getLabel()));
        }
      });
      valueElement.appendChild(headerElement);

      _lodash2.default.forEach(component.rows, function (row) {
        var rowElement = _utils2.default.createElement('div', { class: 'row grid-row' });

        _lodash2.default.forEach(row, function (col) {
          if (col) {
            var colElement = _utils2.default.createElement('div', { class: 'col grid-cell' });

            col.toHtml(colElement);
            rowElement.appendChild(colElement);
          }
        });
        valueElement.appendChild(rowElement);
      });
    } else {
      valueElement.className += ' grid-transpose';
      _lodash2.default.forEach(component.components, function (row, i) {
        var rowElement = _utils2.default.createElement('div', {
          class: 'row grid-row'
        }, _utils2.default.createElement('div', {
          class: 'col col-sm-3 grid-cell text-bold'
        }, row.legend || row.title || row.label));

        _lodash2.default.forEach(component.rows, function (col) {
          var colElement = _utils2.default.createElement('div', { class: 'col grid-cell' });

          col[i].toHtml(colElement);
          rowElement.appendChild(colElement);
        });
        valueElement.appendChild(rowElement);
      });
    }

    if (!component.hideLabel && (!component.inDataGrid || component.dataGridLabel)) {
      componentElement.appendChild(labelElement);
    }
    componentElement.appendChild(valueElement);

    if (_lodash2.default.isElement(element)) {
      element.appendChild(componentElement);
    }
    return componentElement;
  }
  return null;
};

module.exports = exports['default'];

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lodash = __webpack_require__(0);

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (component) {
  var dims = {
    width: component._baseWidth,
    height: component._baseHeight
  };

  var maxWidth = 0;

  _lodash2.default.forEach(component.components, function (c) {
    if (c) {
      // console.log(c);
      var d = c.getDimensions();

      dims.width += d.width;
    }
  });
  dims.width += maxWidth;
  return dims;
};

module.exports = exports['default'];

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _base = __webpack_require__(2);

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EditGridComponent = function (_BaseComponent) {
  _inherits(EditGridComponent, _BaseComponent);

  function EditGridComponent(component, data, options) {
    _classCallCheck(this, EditGridComponent);

    var _this = _possibleConstructorReturn(this, (EditGridComponent.__proto__ || Object.getPrototypeOf(EditGridComponent)).call(this, component, data, options));

    console.log(_this);
    return _this;
  }

  return EditGridComponent;
}(_base2.default);

exports.default = EditGridComponent;
module.exports = exports['default'];

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _container = __webpack_require__(4);

var _container2 = _interopRequireDefault(_container);

var _plugins = __webpack_require__(46);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FormComponent = function (_ContainerComponent) {
  _inherits(FormComponent, _ContainerComponent);

  function FormComponent(component, data) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    _classCallCheck(this, FormComponent);

    return _possibleConstructorReturn(this, (FormComponent.__proto__ || Object.getPrototypeOf(FormComponent)).call(this, component, data, options));
  }

  _createClass(FormComponent, [{
    key: 'getDimensions',
    value: function getDimensions() {
      return (0, _plugins.getDimensions)(this);
    }
  }, {
    key: 'toHtml',
    value: function toHtml(element) {
      return (0, _plugins.toHtml)(element, this);
    }
  }]);

  return FormComponent;
}(_container2.default);

exports.default = FormComponent;
module.exports = exports['default'];

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDimensions = exports.toHtml = undefined;

var _html = __webpack_require__(47);

var _html2 = _interopRequireDefault(_html);

var _dims = __webpack_require__(48);

var _dims2 = _interopRequireDefault(_dims);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.toHtml = _html2.default;
exports.getDimensions = _dims2.default;

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lodash = __webpack_require__(0);

var _lodash2 = _interopRequireDefault(_lodash);

var _utils = __webpack_require__(1);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (element, component) {
  if (component && component.components) {
    var componentElement = _utils2.default.createElement('div', {
      class: 'formio-component ' + component.type + '-component',
      id: Math.random().toString(36).substring(7)
    });

    componentElement.appendChild(_utils2.default.createElement('h1', { class: 'form-title' }, component.title));

    if (component._options.submission) {

      if (component._options.submission.hasOwnProperty('id')) {
        var boldElement = _utils2.default.createElement('b', {}, 'SA submission ID: ');
        componentElement.appendChild(_utils2.default.createElement('div', { class: 'row' }, _utils2.default.createElement('div', { class: 'col text-center' }, boldElement, '' + component._options.submission.id)));
      }
    }

    componentElement.appendChild(_utils2.default.createElement('br'));

    _lodash2.default.forEach(component.components, function (c) {
      if (c) {
        c.toHtml(componentElement);
      }
    });

    if (_lodash2.default.isElement(element)) {
      element.appendChild(componentElement);
    }
    return componentElement;
  }
  return null;
};

module.exports = exports['default'];

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lodash = __webpack_require__(0);

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (component) {
  var dims = {
    width: component._baseWidth,
    height: component._baseHeight
  };

  var maxWidth = 0;

  _lodash2.default.forEach(component.components, function (c) {
    if (c) {
      var d = c.getDimensions();

      if (maxWidth < d.width) {
        maxWidth = d.width;
      }
      dims.height += d.height;
    }
  });

  dims.width += maxWidth;
  return dims;
};

module.exports = exports['default'];

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _lodash = __webpack_require__(0);

var _lodash2 = _interopRequireDefault(_lodash);

var _base = __webpack_require__(2);

var _base2 = _interopRequireDefault(_base);

var _plugins = __webpack_require__(50);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ColumnsComponent = function (_BaseComponent) {
  _inherits(ColumnsComponent, _BaseComponent);

  function ColumnsComponent(component, data, options) {
    _classCallCheck(this, ColumnsComponent);

    var _this = _possibleConstructorReturn(this, (ColumnsComponent.__proto__ || Object.getPrototypeOf(ColumnsComponent)).call(this, component, data, options));

    if (_this.columns && _lodash2.default.isArray(_this.columns)) {
      _lodash2.default.forEach(_this.columns, function (column) {
        var components = [];

        _lodash2.default.forEach(column.components, function (c) {
          components.push(_this.createComponent(c, data));
        });
        column.components = components;
      });
    }
    return _this;
  }

  _createClass(ColumnsComponent, [{
    key: 'getDimensions',
    value: function getDimensions() {
      this._dims = (0, _plugins.getDimensions)(this);
      return this._dims;
    }
  }, {
    key: 'toHtml',
    value: function toHtml(element) {
      return (0, _plugins.toHtml)(element, this);
    }
  }]);

  return ColumnsComponent;
}(_base2.default);

exports.default = ColumnsComponent;
module.exports = exports['default'];

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDimensions = exports.toHtml = undefined;

var _html = __webpack_require__(51);

var _html2 = _interopRequireDefault(_html);

var _dims = __webpack_require__(52);

var _dims2 = _interopRequireDefault(_dims);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.toHtml = _html2.default;
exports.getDimensions = _dims2.default;

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lodash = __webpack_require__(0);

var _lodash2 = _interopRequireDefault(_lodash);

var _utils = __webpack_require__(1);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (element, component) {
  if (component && component.columns) {

    var componentElement = _utils2.default.createElement('div', {
      class: 'formio-component ' + component.type + '-component',
      id: Math.random().toString(36).substring(7)
    });

    componentElement.className += component._options.ignoreLayout ? ' no-layout' : '';

    _lodash2.default.forEach(component.columns, function (column) {
      var className = 'col col-sm-' + column.width;

      if (column.offset) {
        className += ' col-sm-offset-' + column.offset;
      }

      if (column.push) {
        className += ' col-sm-push-' + column.push;
      }

      if (column.pull) {
        className += ' col-sm-pull-' + column.pull;
      }

      var columnComponent = _utils2.default.createElement('div', { class: className });

      _lodash2.default.forEach(column.components, function (comp) {
        comp.toHtml(component._ignoreLayout ? componentElement : columnComponent);
      });
      if (!component._ignoreLayout) {
        componentElement.appendChild(columnComponent);
      }
    });

    if (_lodash2.default.isElement(element)) {
      element.appendChild(componentElement);
    }
    return componentElement;
  }
  return null;
};

module.exports = exports['default'];

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (component) {
  var dims = {
    width: component._baseWidth,
    height: component._baseHeight
  };

  for (var i = 0; i < component.columns.length; i++) {

    var components = component.columns[i].components;
    var width = 0;
    var height = 0;

    for (var j = 0; j < components.length; j++) {
      var d = components[j].getDimensions();

      width += d.width || 0;
      height += d.height || 0;
    }
    dims.width += width;
    dims.height += height;
  }
  return dims;
};

module.exports = exports["default"];

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _panel = __webpack_require__(9);

var _panel2 = _interopRequireDefault(_panel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FieldSetComponent = function (_PanelComponent) {
  _inherits(FieldSetComponent, _PanelComponent);

  function FieldSetComponent(component, data, options) {
    _classCallCheck(this, FieldSetComponent);

    return _possibleConstructorReturn(this, (FieldSetComponent.__proto__ || Object.getPrototypeOf(FieldSetComponent)).call(this, component, data, options));
  }

  return FieldSetComponent;
}(_panel2.default);

exports.default = FieldSetComponent;
module.exports = exports['default'];

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _base = __webpack_require__(2);

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UnknownComponent = function (_BaseComponent) {
  _inherits(UnknownComponent, _BaseComponent);

  function UnknownComponent(component, data, options) {
    _classCallCheck(this, UnknownComponent);

    return _possibleConstructorReturn(this, (UnknownComponent.__proto__ || Object.getPrototypeOf(UnknownComponent)).call(this, component, data, options));
  }

  _createClass(UnknownComponent, [{
    key: 'toHtml',
    value: function toHtml(element) {
      return null;
    }
  }]);

  return UnknownComponent;
}(_base2.default);

exports.default = UnknownComponent;
module.exports = exports['default'];

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toXlsx = exports.toPdf = exports.toHtml = undefined;

var _html = __webpack_require__(56);

var _html2 = _interopRequireDefault(_html);

var _pdf = __webpack_require__(58);

var _pdf2 = _interopRequireDefault(_pdf);

var _xlsx = __webpack_require__(60);

var _xlsx2 = _interopRequireDefault(_xlsx);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.toHtml = _html2.default;
exports.toPdf = _pdf2.default;
exports.toXlsx = _xlsx2.default;

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = __webpack_require__(1);

var _utils2 = _interopRequireDefault(_utils);

var _style = __webpack_require__(57);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (component) {
  return new Promise(function (resolve, reject) {
    try {
      var container = _utils2.default.createElement('div', { id: 'formio__export' }, _style.style);

      component.toHtml(container);
      resolve(container);
    } catch (error) {
      console.error(error);
      reject(error);
    }
  });
};

module.exports = exports['default'];

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.style = undefined;

var _utils = __webpack_require__(1);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint max-len:off */
var style = exports.style = _utils2.default.createElement('style', { type: 'text/css' }, '.card,.col{position:relative}.card,body{background-color:#fff}body{margin:0;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";font-size:.9rem;font-weight:400;line-height:1.5;color:#212529;text-align:left}.card-header,#formio__export .formio-component.grid-component>.component-value .grid-header,.text-bold{font-weight:700}.card-header,.text-center{text-align:center}*,::after,::before{box-sizing:border-box}.row{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;margin-right:-8px;margin-left:-8px}.col{-ms-flex-preferred-size:0;flex-basis:0;-ms-flex-positive:1;flex-grow:1;max-width:100%;width:100%;min-height:1px;padding-right:15px;padding-left:15px}.card{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;min-width:0;word-wrap:break-word;background-clip:border-box;border:none;border-radius:0}.card-header{padding:.75rem 1.25rem;margin-bottom:0;background-color:rgba(0,0,0,.03);border-bottom:1px solid rgba(0,0,0,.125)}.card-body{-ms-flex:1 1 auto;flex:1 1 auto}@media (min-width:576px){.col-sm-3{-ms-flex:0 0 25%;flex:0 0 25%;max-width:25%}.col-sm-9{-ms-flex:0 0 75%;flex:0 0 75%;max-width:75%}}.text-right{text-align:right}.text-left{text-align:left}.form-title,#formio__export .formio-component.signature-component>.component-value{text-align:center}#formio__export{border:1px solid #ddd;font-family:Lato;max-width:790px}#formio__export .formio-component:not(.no-layout){border-top:1px solid #ddd;min-height:32px;display:flex;flex-direction:row}#formio__export>.formio-component:first-child{border-top:none}#formio__export .formio-component.no-layout{flex-direction:column}#formio__export .formio-component.no-layout>.col{padding:0;border-top:1px solid #ddd}#formio__export .formio-component.columns-component>.col>.formio-component,#formio__export .formio-component>.component-value.card-body.grid-transpose>.grid-row:first-child{border-top:none}#formio__export .formio-component:not(.card)>.component-label{border-right:1px solid #ddd;font-weight:700;padding:8px}#formio__export .formio-component.card>.component-label{border-right:none}#formio__export .formio-component>.component-value{padding:8px}#formio__export .formio-component>.component-value>.component-item{display:block}#formio__export .formio-component>.component-value>img{max-width:250px}#formio__export .formio-component:not(.survey-component):not(.grid-component)>.component-value.card-body{padding:0}#formio__export .formio-component>.component-value.card-body.grid-transpose{padding:0 8px}.form-title{text-transform:uppercase}#formio__export .formio-component.form-component{flex-direction:column}#formio__export .formio-component.currency-component>.component-value::before{content:"$"}#formio__export .formio-component.columns-component.no-layout{flex:columns}#formio__export .formio-component.columns-component>.col:not(:last-child)>.formio-component{border-right:1px solid #ddd}#formio__export .formio-component.grid-component>.component-value{padding:8px}#formio__export .formio-component.grid-component>.component-value .grid-row:not(.grid-header){border-top:1px solid #ddd}#formio__export .formio-component.card>.card-body>.formio-component:first-child,#formio__export .formio-component.container-component>.component-value>.formio-component:first-child,#formio__export .formio-component.grid-component>.component-value .grid-row>.grid-cell>.formio-component{border-top:none}#formio__export .formio-component.grid-component>.component-value .grid-row>.grid-cell{padding:0}#formio__export .formio-component.grid-component>.component-value .grid-header>.grid-cell{padding:8px}#formio__export .formio-component.grid-component>.component-value.grid-transpose>.row>.col:first-child{padding:8px;border-right:1px solid #ddd}#formio__export .formio-component.container-component>.component-value{padding:0}#formio__export .formio-component.card,#formio__export .formio-component.grid-component{flex-direction:column}#formio__export .formio-component.grid-component>.card-body,#formio__export .formio-component.survey-component .component-value>.survey-question>*{padding:8px}');

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsHtml2pdf = __webpack_require__(59);

var _jsHtml2pdf2 = _interopRequireDefault(_jsHtml2pdf);

var _utils = __webpack_require__(1);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  return new Promise(function (resolve, reject) {
    try {
      config = _utils2.default.verifyProperties(config, {
        source: {
          type: Element,
          required: true
        },
        download: {
          type: Boolean,
          default: false
        }
      });
      _jsHtml2pdf2.default.getPdf(config).then(function (pdf) {
        return resolve(pdf);
      });
    } catch (error) {
      console.error(error);
      reject(error);
    }
  });
};

module.exports = exports['default'];

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else {}
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ 2:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/root/web/html2pdf/src/index.js'");

/***/ })

/******/ });
});
//# sourceMappingURL=html2pdf.js.map

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  return new Promise(function (resolve, reject) {
    try {
      throw new Error('[FormioExport] method not implemented');
    } catch (error) {
      console.error(error);
      reject(error);
    }
  });
};

module.exports = exports['default'];

/***/ })
/******/ ]);
});
//# sourceMappingURL=delta-formio-export.js.map