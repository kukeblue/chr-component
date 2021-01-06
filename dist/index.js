'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var antd = require('antd');
var axios = _interopDefault(require('axios'));
var Form = require('antd/lib/form/Form');

var Swiper = (function (_ref) {
  var _ref$direction = _ref.direction,
      _ref$loop = _ref.loop,
      children = _ref.children;
  React.useEffect(function () {// var mySwiper = new Swiper('.swiper-container', {
    //     direction: direction, // 垂直切换选项
    //     loop: loop, // 循环模式选项
    //     pagination: {
    //       el: '.swiper-pagination', // 如果需要分页器
    //     },
    //   })
  }, []);
  return React__default.createElement("div", {
    className: 'ch-swiper'
  }, React__default.createElement("div", {
    className: "swiper-container"
  }, React__default.createElement("div", {
    className: "swiper-wrapper"
  }, children), React__default.createElement("div", {
    className: "swiper-pagination"
  })));
});

var swiperItem = (function (_ref) {
  var children = _ref.children;
  return React__default.createElement("div", {
    className: "swiper-slide"
  }, children);
});

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
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

  return React__default.createElement("div", null, React__default.createElement(antd.Button, null, "\u6309\u94AE"), React__default.createElement("img", {
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
  return React__default.createElement("div", {
    className: 'block-selector'
  }, list.map(function (item, index) {
    var selected = value.indexOf(item.id) > -1;
    return React__default.createElement("div", {
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
    }, item.name || '块状选择器', selected && React__default.createElement("div", {
      className: 'close-warp'
    }, React__default.createElement("span", {
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
  onRequest: undefined // 请求数据格式化

};
var request = function request(requestPrams) {
  var url = requestPrams.url,
      data = requestPrams.data,
      cache = requestPrams.cache,
      method = requestPrams.method;
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
      transformRequest: [function (data) {
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
    console.log("\u3010REQUEST SUCCESS\u3011 \u8BBF\u95EE\u5730\u5740:".concat(url));
    console.log("\u3010REQUEST SUCCESS\u3011 \u8BF7\u6C42\u53C2\u6570:", config.data);
    axios(config).then(function (response) {
      // console.log(response.data);
      // console.log(response.status);
      // console.log(response.statusText);
      // console.log(response.headers);
      // console.log(response.config);
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

function usePage(props) {
  var url = props.url,
      pageSize = props.pageSize,
      query = props.query,
      onReloadAfter = props.onReloadAfter;

  var _useState = React.useState('more'),
      _useState2 = _slicedToArray(_useState, 2),
      status = _useState2[0],
      setStatus = _useState2[1];

  var _useState3 = React.useState(0),
      _useState4 = _slicedToArray(_useState3, 2),
      total = _useState4[0],
      setTotal = _useState4[1];

  var _useState5 = React.useState([]),
      _useState6 = _slicedToArray(_useState5, 2),
      list = _useState6[0],
      setList = _useState6[1];

  var ref = React.useRef({
    pageNo: 1
  });
  React.useEffect(function () {
    reload();
  }, []);

  var reload = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(pageNo) {
      var pz, resp, newList;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              setStatus('loading');
              if (!pageNo) pageNo = 1;
              ref.current.pageNo = pageNo;
              pz = pageSize || 10;
              _context.next = 6;
              return Ajax.request({
                url: url,
                data: {
                  query: query,
                  pageNo: pageNo,
                  pageSize: pz
                }
              });

            case 6:
              resp = _context.sent;
              console.log('分页PAGE获取成功', resp);

              if (resp.status === 0) {
                setTotal(resp.page.total);

                if (pageNo === 1) {
                  newList = resp.page.list;
                } else {
                  newList = [].concat(list, resp.page.list.filter(function (x) {
                    return list.find(function (y) {
                      return y.id === x.id;
                    }) ? false : true;
                  }));
                }

                setList(newList);
                ref.current.pageNo = pageNo + 1;

                if (resp.page.pages < pz) {
                  setStatus('noMore');
                } else {
                  setStatus("more");
                }
              } else {
                setStatus("noMore");
              }

              onReloadAfter && onReloadAfter(resp);

            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function reload(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  var loadMore = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (!(status === 'noMore')) {
                _context2.next = 2;
                break;
              }

              return _context2.abrupt("return");

            case 2:
              _context2.next = 4;
              return reload(ref.current.pageNo);

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function loadMore() {
      return _ref2.apply(this, arguments);
    };
  }();

  return {
    list: list,
    setList: setList,
    status: status,
    setStatus: setStatus,
    reload: reload,
    loadMore: loadMore,
    total: total
  };
}
function useOptionFormListHook(_ref3) {
  var url = _ref3.url;

  var _useState7 = React.useState([]),
      _useState8 = _slicedToArray(_useState7, 2),
      list = _useState8[0],
      setList = _useState8[1];

  var _useState9 = React.useState([]),
      _useState10 = _slicedToArray(_useState9, 2),
      options = _useState10[0],
      setOptions = _useState10[1];

  React.useEffect(function () {
    Ajax.request({
      url: url,
      data: {}
    }).then(function (res) {
      if (res.status == 0 && res.list) {
        var newOptions = [];
        res.list.forEach(function (item) {
          options.push({
            label: item.name,
            value: item.id
          });
        });
        setList(res.list);
        setOptions(newOptions);
      }
    });
  }, []);
  return {
    list: list,
    options: options
  };
}
var chHooks = {
  usePage: usePage,
  useOptionFormListHook: useOptionFormListHook
};

var ChUtils = {
  chHooks: chHooks,
  Ajax: Ajax
};

var css$2 = "";
styleInject(css$2);

var Option = antd.Select.Option;

(function (FormItemType) {
  FormItemType["input"] = "input";
  FormItemType["radioGroup"] = "radio-group";
  FormItemType["select"] = "select";
  FormItemType["upload"] = "upload";
})(exports.FormItemType || (exports.FormItemType = {}));

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
  }; // @type JSX Function | @dec 渲染单个formItem

  var renderFormItem = function renderFormItem(item) {
    var _item$options;

    var dom;
    console.log('debug: item.type', item.type);

    switch (item.type) {
      case 'input':
        dom = React__default.createElement(antd.Input, null);
        break;

      case 'radio-group':
        dom = React__default.createElement(antd.Radio.Group, {
          options: item.options,
          optionType: "button",
          buttonStyle: "solid"
        });
        break;

      case 'select':
        dom = React__default.createElement(antd.Select, null, (_item$options = item.options) === null || _item$options === void 0 ? void 0 : _item$options.map(function (item) {
          return React__default.createElement(Option, {
            key: item.value,
            value: item.value
          }, item.label);
        }));
        break;

      case 'upload':
        dom = React__default.createElement(antd.Upload, {
          name: "file",
          action: item.uploadUrl ? item.uploadUrl : "/fileUpload",
          listType: "picture"
        }, React__default.createElement(antd.Button, null, "Click to upload"));
        break;

      default:
        dom = React__default.createElement(antd.Input, null);
    }

    return dom;
  };

  var buildFormItemProps = function buildFormItemProps(item) {
    item.key = "formData_".concat(item.name);

    if (item.type == 'upload') {
      item.valuePropName = "fileList";

      item.getValueFromEvent = function (e) {
        console.log('Upload event:', e);

        if (Array.isArray(e)) {
          return e;
        }

        return e && e.fileList;
      };
    }

    return item;
  };

  return React__default.createElement("div", null, React__default.createElement(antd.Form, Object.assign({
    preserve: false,
    form: form
  }, layout, {
    onFinish: onFinish
  }), formData && formData.map(function (item) {
    var formItemProps = buildFormItemProps(item);
    return React__default.createElement(antd.Form.Item, Object.assign({}, formItemProps), renderFormItem(item));
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

  var _ChUtils$chHooks$useP = ChUtils.chHooks.usePage({
    url: url,
    pageSize: 10,
    query: {}
  }),
      list = _ChUtils$chHooks$useP.list,
      reload = _ChUtils$chHooks$useP.reload,
      total = _ChUtils$chHooks$useP.total;

  var _useForm = Form.useForm(),
      _useForm2 = _slicedToArray(_useForm, 1),
      form = _useForm2[0];

  var _useState = React.useState(),
      _useState2 = _slicedToArray(_useState, 2),
      editor = _useState2[0],
      setEditor = _useState2[1];

  var _useState3 = React.useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      showEditModal = _useState4[0],
      setShowEditModal = _useState4[1];

  var doDeleteItem = function doDeleteItem(id) {
    ChUtils.Ajax.request({
      url: urlDelete,
      data: {
        id: id
      }
    }).then(function (res) {
      if (res && res.status == 0) {
        reload();
      }
    });
  };

  var doAddItem = function doAddItem(item) {
    if (!onAddBefore) ; else {
      onAddBefore(item);
    }

    ChUtils.Ajax.request({
      url: urlAdd,
      data: item
    }).then(function (res) {
      if (res && res.status == 0) {
        reload();
        setShowEditModal(false);
        setEditor(null);
      }
    });
  };

  var doEditItem = function doEditItem(item) {
    item.id = editor.id;
    ChUtils.Ajax.request({
      url: urlUpdate,
      data: item
    }).then(function (res) {
      if (res && res.status == 0) {
        reload();
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
      return React__default.createElement("div", null, React__default.createElement(antd.Popconfirm, {
        title: "\u60A8\u786E\u5B9A\u5220\u9664\u6B64\u9879?",
        onConfirm: function onConfirm() {
          doDeleteItem(item.id);
        },
        okText: "Yes",
        cancelText: "No"
      }, React__default.createElement(antd.Button, {
        type: 'link'
      }, "\u5220\u9664")), React__default.createElement(antd.Button, {
        onClick: function onClick() {
          setEditor(item);
          form.setFieldsValue(item);
          setShowEditModal(true); //   setShowGradeModal(true)
        },
        type: 'link'
      }, "\u7F16\u8F91"));
    }
  }]);

  return React__default.createElement("div", {
    className: 'ch-tablePanel'
  }, React__default.createElement(antd.Button, {
    style: {
      marginBottom: '10px'
    },
    onClick: function onClick() {
      setEditor({});
      setShowEditModal(true);
    },
    type: 'primary'
  }, "\u6DFB\u52A0"), React__default.createElement(antd.Table, {
    rowKey: 'id',
    dataSource: list,
    columns: _columns,
    expandable: expandable,
    pagination: {
      total: total,
      defaultCurrent: 1,
      pageSize: 10,
      onChange: function onChange(page, pageSize) {
        reload(page);
      }
    }
  }), React__default.createElement(antd.Modal, {
    title: editor && editor.id ? "编辑" : "新增",
    destroyOnClose: true,
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
  }, React__default.createElement(ChForm, {
    form: form,
    formData: formData,
    onFinish: function onFinish(values) {}
  })));
});

var css$4 = ".ch-layout .ch-layoutSider {\n  background-color: #1C3039;\n}\n.ch-layout .ch-layoutSider .ch-layoutSider-avatar {\n  width: 80px;\n  height: 80px;\n  background-color: #ff6a00;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 30px;\n  color: #fff;\n}\n.ch-layout .ch-layoutSider .ch-layoutSider-item {\n  cursor: pointer;\n  color: #fff;\n  width: 80px;\n  height: 110px;\n  border-bottom: 1px solid #fff;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n.ch-layout .ch-layoutSider .ch-layoutSider-item_selected {\n  cursor: pointer;\n  color: #fff;\n  width: 80px;\n  height: 110px;\n  border-bottom: 1px solid #fff;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  color: #ff6a00;\n}\n.ch-layout .ch-layoutSider .ch-layoutSider-item:hover {\n  color: #ff6a00;\n}\n.ch-layout .ch-layoutHeader {\n  height: 80px;\n  background-color: #fff;\n  display: flex;\n  align-items: center;\n}\n";
styleInject(css$4);

var Header = antd.Layout.Header,
    Footer = antd.Layout.Footer,
    Sider = antd.Layout.Sider,
    Content = antd.Layout.Content;
var index$1 = (function (props) {
  return React__default.createElement(React__default.Fragment, null, React__default.createElement(antd.Layout, {
    className: 'ch-layout'
  }, React__default.createElement(Sider, {
    width: '80',
    className: 'ch-layoutSider',
    theme: "light"
  }, React__default.createElement("div", {
    className: 'ch-layoutSider-avatar'
  }, props.adminIcon || 'CH'), React__default.createElement("div", null, props.sider.siderItems && props.sider.siderItems.map(function (item, index) {
    return React__default.createElement("div", {
      onClick: function onClick() {
        return item.click();
      },
      key: item.text,
      className: props.sider.currentItem == index + 1 ? 'ch-layoutSider-item_selected' : 'ch-layoutSider-item'
    }, React__default.createElement("span", null, item.icon), React__default.createElement("div", null, item.text));
  }))), React__default.createElement(antd.Layout, null, React__default.createElement(Header, {
    className: 'ch-layoutHeader'
  }, props.header), React__default.createElement(Content, null, props.children))));
});

exports.ChBlockSelector = BlockSelector;
exports.ChForm = ChForm;
exports.ChLayout = index$1;
exports.ChMoveBook = chMoveBook;
exports.ChSwiper = Swiper;
exports.ChSwiperItem = swiperItem;
exports.ChTablePanel = index;
exports.ChUtils = ChUtils;
