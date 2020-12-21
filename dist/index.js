'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);

var swiper = (function (_ref) {
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

function _objectDestructuringEmpty(obj) {
  if (obj == null) throw new TypeError("Cannot destructure undefined");
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

  return React__default.createElement("img", {
    alt: '',
    className: 'banner',
    style: {
      height: 'auto',
      width: '100%'
    }
  });
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

exports.ChBlockSelector = BlockSelector;
exports.ChMoveBook = chMoveBook;
exports.ChSwiper = swiper;
exports.ChSwiperItem = swiperItem;
