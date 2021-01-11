// @ts-nocheck
import React from 'react';
import { ApplyPluginsType } from 'D:/project/chr-component/node_modules/@umijs/runtime';
import * as umiExports from './umiExports';
import { plugin } from './plugin';

export function getRoutes() {
  const routes = [
  {
    "path": "/~demos/:uuid",
    "layout": false,
    "wrappers": [require('D:/project/chr-component/node_modules/@umijs/preset-dumi/lib/theme/layout').default],
    "component": (props) => {
      const React = require('react');
      const renderArgs = require('../../../node_modules/@umijs/preset-dumi/lib/plugins/features/demo/getDemoRenderArgs').default(props);

      switch (renderArgs.length) {
        case 1:
          // render demo directly
          return renderArgs[0];

        case 2:
          // render demo with previewer
          return React.createElement(
            require('dumi-theme-default/src/builtins/Previewer.tsx').default,
            renderArgs[0],
            renderArgs[1],
          );

        default:
          return `Demo ${uuid} not found :(`;
      }
    }
  },
  {
    "path": "/_demos/:uuid",
    "redirect": "/~demos/:uuid"
  },
  {
    "__dumiRoot": true,
    "layout": false,
    "path": "/",
    "wrappers": [require('D:/project/chr-component/node_modules/@umijs/preset-dumi/lib/theme/layout').default, require('D:/project/chr-component/node_modules/dumi-theme-default/src/layout.tsx').default],
    "routes": [
      {
        "path": "/",
        "component": require('D:/project/chr-component/README.md').default,
        "exact": true,
        "meta": {
          "locale": "en-US",
          "title": "chr-component",
          "order": null
        },
        "title": "chr-component"
      },
      {
        "path": "/component/ch-block-selector",
        "component": require('D:/project/chr-component/src/component/ChBlockSelector/index.md').default,
        "exact": true,
        "meta": {
          "0": "t",
          "1": "i",
          "2": "t",
          "3": "l",
          "4": "e",
          "5": ":",
          "6": "B",
          "7": "l",
          "8": "o",
          "9": "c",
          "10": "k",
          "11": "S",
          "12": "e",
          "13": "l",
          "14": "e",
          "15": "c",
          "16": "t",
          "17": "o",
          "18": "r",
          "19": "(",
          "20": "块",
          "21": "状",
          "22": "选",
          "23": "择",
          "24": "器",
          "25": ")",
          "filePath": "src/component/ChBlockSelector/index.md",
          "updatedTime": 1610093051000,
          "slugs": [
            {
              "depth": 2,
              "value": "MoveBook",
              "heading": "movebook"
            }
          ],
          "title": "MoveBook",
          "group": {
            "path": "/component",
            "title": "Component"
          }
        },
        "title": "MoveBook"
      },
      {
        "path": "/component/ch-dropdown",
        "component": require('D:/project/chr-component/src/component/ChDropdown/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/component/ChDropdown/index.md",
          "updatedTime": 1610093051000,
          "componentName": "ChDropdown",
          "title": "Dropdown(下拉按钮动画版本)",
          "slugs": [
            {
              "depth": 2,
              "value": "Dropdown",
              "heading": "dropdown"
            }
          ],
          "group": {
            "path": "/component",
            "title": "Component"
          }
        },
        "title": "Dropdown(下拉按钮动画版本)"
      },
      {
        "path": "/component/ch-form",
        "component": require('D:/project/chr-component/src/component/ChForm/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/component/ChForm/index.md",
          "updatedTime": 1610093051000,
          "componentName": "ChForm",
          "title": "Form(表单渲染处理组件)",
          "slugs": [
            {
              "depth": 2,
              "value": "Form",
              "heading": "form"
            }
          ],
          "group": {
            "path": "/component",
            "title": "Component"
          }
        },
        "title": "Form(表单渲染处理组件)"
      },
      {
        "path": "/component/ch-guitar-tool",
        "component": require('D:/project/chr-component/src/component/ChGuitarTool/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/component/ChGuitarTool/index.md",
          "updatedTime": 1610156674000,
          "componentName": "ChGuitarTool",
          "title": "ChGuitarTool",
          "slugs": [
            {
              "depth": 2,
              "value": "ChGuitarTool",
              "heading": "chguitartool"
            }
          ],
          "group": {
            "path": "/component",
            "title": "Component"
          }
        },
        "title": "ChGuitarTool"
      },
      {
        "path": "/component/ch-layout",
        "component": require('D:/project/chr-component/src/component/ChLayout/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/component/ChLayout/index.md",
          "updatedTime": 1610093051000,
          "componentName": "ChLayout",
          "title": "Layout(管理后台组件)",
          "slugs": [
            {
              "depth": 2,
              "value": "Layout",
              "heading": "layout"
            }
          ],
          "group": {
            "path": "/component",
            "title": "Component"
          }
        },
        "title": "Layout(管理后台组件)"
      },
      {
        "path": "/component/ch-move-book",
        "component": require('D:/project/chr-component/src/component/ChMoveBook/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/component/ChMoveBook/index.md",
          "updatedTime": 1610093051000,
          "title": "MoveBook(流动书本动画)",
          "slugs": [
            {
              "depth": 2,
              "value": "MoveBook",
              "heading": "movebook"
            }
          ],
          "group": {
            "path": "/component",
            "title": "Component"
          }
        },
        "title": "MoveBook(流动书本动画)"
      },
      {
        "path": "/component/ch-sortor",
        "component": require('D:/project/chr-component/src/component/ChSortor/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/component/ChSortor/index.md",
          "updatedTime": 1610093051000,
          "componentName": "ChSortor",
          "title": "Sortor(箭头排序器)",
          "slugs": [
            {
              "depth": 2,
              "value": "Sortor(箭头排序器)",
              "heading": "sortor箭头排序器"
            }
          ],
          "group": {
            "path": "/component",
            "title": "Component"
          }
        },
        "title": "Sortor(箭头排序器)"
      },
      {
        "path": "/component/ch-table-panel",
        "component": require('D:/project/chr-component/src/component/ChTablePanel/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/component/ChTablePanel/index.md",
          "updatedTime": 1610261183000,
          "componentName": "ChTablePanel",
          "title": "TablePanel(常规表格组件)",
          "slugs": [
            {
              "depth": 2,
              "value": "TablePanel",
              "heading": "tablepanel"
            }
          ],
          "group": {
            "path": "/component",
            "title": "Component"
          }
        },
        "title": "TablePanel(常规表格组件)"
      },
      {
        "path": "/component/format",
        "component": require('D:/project/chr-component/src/component/Format/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/component/Format/index.md",
          "updatedTime": 1610093051000,
          "title": "数据转换组件",
          "slugs": [
            {
              "depth": 2,
              "value": "数据转换组件",
              "heading": "数据转换组件"
            }
          ],
          "group": {
            "path": "/component",
            "title": "Component"
          }
        },
        "title": "数据转换组件"
      },
      {
        "path": "/component/format/price-split",
        "component": require('D:/project/chr-component/src/component/Format/PriceSplit/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/component/Format/PriceSplit/index.md",
          "updatedTime": 1610093051000,
          "componentName": "PriceSplit",
          "title": "PriceSplit(金额小数点转换器)",
          "slugs": [
            {
              "depth": 2,
              "value": "PriceSplit",
              "heading": "pricesplit"
            }
          ],
          "group": {
            "path": "/component/format",
            "title": "Component/format"
          }
        },
        "title": "PriceSplit(金额小数点转换器)"
      },
      {
        "path": "/component",
        "meta": {},
        "exact": true,
        "redirect": "/component/ch-block-selector"
      }
    ],
    "title": "影遇组件库",
    "component": (props) => props.children
  }
];

  // allow user to extend routes
  plugin.applyPlugins({
    key: 'patchRoutes',
    type: ApplyPluginsType.event,
    args: { routes },
  });

  return routes;
}
