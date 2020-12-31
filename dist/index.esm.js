import React, { useEffect, useState } from 'react';
import { Button, Form, Input, Radio, Popconfirm, Table, Modal } from 'antd';
import axios from 'axios';
import { useForm } from 'antd/lib/form/Form';

var Swiper = (function (_ref) {
  var _ref$direction = _ref.direction,
      _ref$loop = _ref.loop,
      children = _ref.children;
  useEffect(function () {// var mySwiper = new Swiper('.swiper-container', {
    //     direction: direction, // 垂直切换选项
    //     loop: loop, // 循环模式选项
    //     pagination: {
    //       el: '.swiper-pagination', // 如果需要分页器
    //     },
    //   })
  }, []);
  return React.createElement("div", {
    className: 'ch-swiper'
  }, React.createElement("div", {
    className: "swiper-container"
  }, React.createElement("div", {
    className: "swiper-wrapper"
  }, children), React.createElement("div", {
    className: "swiper-pagination"
  })));
});

var swiperItem = (function (_ref) {
  var children = _ref.children;
  return React.createElement("div", {
    className: "swiper-slide"
  }, children);
});

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _objectDestructuringEmpty(obj) {
  if (obj == null) throw new TypeError("Cannot destructure undefined");
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css = "";
styleInject(css);

var chMoveBook = (function (_ref) {
  _objectDestructuringEmpty(_ref);

  return React.createElement("div", null, React.createElement(Button, null, "\u6309\u94AE"), React.createElement("img", {
    alt: '',
    className: 'banner',
    style: {
      height: 'auto',
      width: '100%'
    }
  }));
});

var css$1 = ".block-selector {\n  justify-content: space-between;\n  display: flex;\n  flex-wrap: wrap;\n}\n.block-selector .block {\n  cursor: default;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #333;\n  border-radius: 5px;\n  width: 30%;\n  height: 30px;\n  background-color: #eee;\n  position: relative;\n  box-sizing: border-box;\n  margin-bottom: 15px;\n}\n.block-selector .block-selected {\n  cursor: default;\n  margin-bottom: 15px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #333;\n  border-radius: 5px;\n  width: 30%;\n  height: 30px;\n  background-color: #eee;\n  position: relative;\n  border: 1px solid indigo;\n  box-sizing: border-box;\n}\n.block-selector .block-selected::after {\n  content: '';\n  position: absolute;\n  top: -1px;\n  right: 0;\n  border-color: transparent;\n  border-style: solid;\n}\n.block-selector .block-selected::after {\n  border-radius: 0px 4px 0px 4px;\n  border-width: 10px;\n  border-right-color: indigo;\n  border-top-color: indigo;\n}\n.block-selector .close-warp {\n  position: absolute;\n  top: -6px;\n  right: 4px;\n  z-index: 99;\n}\n.block-selector .close {\n  position: relative;\n  width: 2px;\n  height: 8px;\n  background: #fff;\n  transform: rotate(45deg);\n  display: inline-block;\n}\n.block-selector .close:after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 2px;\n  height: 8px;\n  background: #fff;\n  transform: rotate(270deg);\n}\n";
styleInject(css$1);

function BlockSelector(_ref) {
  var _ref$list = _ref.list,
      list = _ref$list === void 0 ? [] : _ref$list,
      _ref$value = _ref.value,
      value = _ref$value === void 0 ? [] : _ref$value,
      onChange = _ref.onChange,
      _ref$multiple = _ref.multiple,
      multiple = _ref$multiple === void 0 ? false : _ref$multiple;
  return React.createElement("div", {
    className: 'block-selector'
  }, list.map(function (item, index) {
    var selected = value.indexOf(item.id) > -1;
    return React.createElement("div", {
      onClick: function onClick() {
        var i = value.indexOf(item.id);
        var newValue = value.slice();

        if (selected) {
          newValue.splice(i, 1);
        } else {
          if (multiple) {
            newValue.push(item.id);
          } else {
            newValue = [item.id];
          }
        }

        onChange && onChange(newValue);
      },
      key: item.id || '_' + index,
      className: selected ? 'block-selected' : 'block'
    }, item.name || '块状选择器', selected && React.createElement("div", {
      className: 'close-warp'
    }, React.createElement("span", {
      className: "close"
    })));
  }));
}

var setObCache = function setObCache(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
};
var getObCache = function getObCache(key) {
  var _ob = localStorage.getItem(key);

  if (_ob) {
    return JSON.parse(_ob);
  }
};

var RequestConfig = {
  config: {},
  onRequest: null // 请求数据格式化

};
var request = function request(_ref) {
  var url = _ref.url,
      data = _ref.data,
      cache = _ref.cache,
      method = _ref.method;
  return new Promise(function (resolve, reject) {
    var user = getObCache('user') || {};

    if (cache && getObCache(url)) {
      return getObCache(url);
    }

    var config = {
      headers: {
        'Content-Type': 'application/json',
        'Auth': user.token
      },
      method: method || 'post',
      url: url,
      data: data,
      transformRequest: [function (data, headers) {
        // Do whatever you want to transform the data
        if (!data) return data;
        Object.keys(data).forEach(function (key) {
          if (data[key] === undefined || data[key] === null) {
            delete data[key];
          }
        });

        if (RequestConfig.onRequest) {
          return RequestConfig.onRequest(data);
        } else {
          return JSON.stringify(data);
        }
      }]
    };
    Object.assign(config, RequestConfig.config);
    axios(config).then(function (response) {
      // console.log(response.data);
      // console.log(response.status);
      // console.log(response.statusText);
      // console.log(response.headers);
      // console.log(response.config);
      console.log("\u3010REQUEST SUCCESS\u3011 \u8BBF\u95EE\u5730\u5740:".concat(url));
      console.log("\u3010REQUEST SUCCESS\u3011 \u8BF7\u6C42\u53C2\u6570:", data);
      console.log("\u3010REQUEST SUCCESS\u3011 \u8FD4\u56DE\u7ED3\u679C:", response.data);

      if (response.data && response.data.status === 0) {
        setObCache(url, response.data);
      }

      resolve(response.data);
    }).catch(function (error) {
      console.error('ERROR: 请求异常 ！');

      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        console.error('ERROR: 请求失败 ', error);
      } else {
        console.error('ERROR: 请求失败', error);
      }

      reject(error);
    }).finally(function () {// reject('请求超时!')
    });
  });
};
var Ajax = {
  RequestConfig: RequestConfig,
  request: request
};

var ChUtils = _objectSpread2({}, Ajax);

var css$2 = "";
styleInject(css$2);

var ChForm = (function (_ref) {
  var formData = _ref.formData,
      onFinish = _ref.onFinish,
      form = _ref.form;
  var layout = {
    labelCol: {
      span: 24
    },
    wrapperCol: {
      span: 24
    }
  };

  var renderFormItem = function renderFormItem(item) {
    var dom;
    console.log('debug: item.type', item.type);

    switch (item.type) {
      case 'input':
        dom = React.createElement(Input, null);
        break;

      case 'radio-group':
        dom = React.createElement(Radio.Group, {
          options: item.options,
          optionType: "button",
          buttonStyle: "solid"
        });
        break;

      default:
        dom = React.createElement(Input, null);
    }

    return dom;
  };

  return React.createElement("div", null, React.createElement(Form, Object.assign({
    form: form
  }, layout, {
    onFinish: onFinish
  }), formData && formData.map(function (item) {
    return React.createElement(Form.Item, {
      key: "formData_".concat(item.name),
      label: item.label,
      name: item.name,
      rules: item.rules,
      initialValue: item.initialValue
    }, renderFormItem(item));
  })));
});

var css$3 = "";
styleInject(css$3);

var index = (function (_ref) {
  var columns = _ref.columns,
      url = _ref.url,
      urlAdd = _ref.urlAdd,
      urlDelete = _ref.urlDelete,
      urlUpdate = _ref.urlUpdate,
      formData = _ref.formData,
      expandable = _ref.expandable,
      query = _ref.query,
      onAddBefore = _ref.onAddBefore;

  var _useForm = useForm(),
      _useForm2 = _slicedToArray(_useForm, 1),
      form = _useForm2[0];

  var _useState = useState([]),
      _useState2 = _slicedToArray(_useState, 2),
      list = _useState2[0],
      setList = _useState2[1];

  var _useState3 = useState(),
      _useState4 = _slicedToArray(_useState3, 2),
      editor = _useState4[0],
      setEditor = _useState4[1];

  var _useState5 = useState(false),
      _useState6 = _slicedToArray(_useState5, 2),
      showEditModal = _useState6[0],
      setShowEditModal = _useState6[1];

  useEffect(function () {
    doFetchList();
  }, []);

  var doFetchList = function doFetchList() {
    ChUtils.request({
      url: url,
      data: query
    }).then(function (res) {
      if (res && res.status == 0 && res.list) {
        setList(res.list);
      }
    });
  };

  var doDeleteItem = function doDeleteItem(id) {
    ChUtils.request({
      url: urlDelete,
      data: {
        id: id
      }
    }).then(function (res) {
      if (res && res.status == 0) {
        doFetchList();
      }
    });
  };

  var doAddItem = function doAddItem(item) {
    if (!onAddBefore) ; else {
      onAddBefore(item);
    }

    ChUtils.request({
      url: urlAdd,
      data: item
    }).then(function (res) {
      if (res && res.status == 0) {
        doFetchList();
        setShowEditModal(false);
        setEditor(null);
      }
    });
  };

  var doEditItem = function doEditItem(item) {
    item.id = editor.id;
    ChUtils.request({
      url: urlUpdate,
      data: item
    }).then(function (res) {
      if (res && res.status == 0) {
        doFetchList();
        setShowEditModal(false);
        setEditor(null);
      }
    });
  };

  var _columns = columns.concat([{
    title: '',
    dataIndex: 'option',
    key: 'option',
    render: function render(_, item) {
      return React.createElement("div", null, React.createElement(Popconfirm, {
        title: "\u60A8\u786E\u5B9A\u5220\u9664\u6B64\u9879?",
        onConfirm: function onConfirm() {
          doDeleteItem(item.id);
        },
        okText: "Yes",
        cancelText: "No"
      }, React.createElement(Button, {
        type: 'link'
      }, "\u5220\u9664")), React.createElement(Button, {
        onClick: function onClick() {
          setEditor(item);
          form.setFieldsValue(item);
          setShowEditModal(true); //   setShowGradeModal(true)
        },
        type: 'link'
      }, "\u7F16\u8F91"));
    }
  }]);

  return React.createElement("div", {
    className: 'ch-tablePanel'
  }, React.createElement(Button, {
    style: {
      marginBottom: '10px'
    },
    onClick: function onClick() {
      setEditor({});
      setShowEditModal(true);
    },
    type: 'primary'
  }, "\u6DFB\u52A0"), React.createElement(Table, {
    rowKey: 'id',
    dataSource: list,
    columns: _columns,
    expandable: expandable
  }), React.createElement(Modal, {
    title: "\u7F16\u8F91",
    okText: "\u786E\u5B9A",
    cancelText: "\u53D6\u6D88",
    visible: showEditModal,
    onOk: function onOk() {
      form.validateFields().then(function (values) {
        if (!editor.id) {
          doAddItem(values);
        } else {
          doEditItem(values);
        }
      });
    },
    onCancel: function onCancel() {
      return setShowEditModal(false);
    }
  }, React.createElement(ChForm, {
    form: form,
    formData: formData,
    onFinish: function onFinish(values) {}
  })));
});

export { BlockSelector as ChBlockSelector, ChForm, chMoveBook as ChMoveBook, Swiper as ChSwiper, swiperItem as ChSwiperItem, index as ChTablePanel, ChUtils };
