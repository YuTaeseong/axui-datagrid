webpackJsonp([1],{

/***/ "./dev/assets/axui-logo.png":
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"6011360050edc75ff1bab262dd600947.png\";\n\n//////////////////\n// WEBPACK FOOTER\n// ./dev/assets/axui-logo.png\n// module id = ./dev/assets/axui-logo.png\n// module chunks = 1\n\n//# sourceURL=webpack:///./dev/assets/axui-logo.png?");

/***/ }),

/***/ "./dev/pages/Introduction.tsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar __importStar = undefined && undefined.__importStar || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) {\n        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];\n    }result[\"default\"] = mod;\n    return result;\n};\nvar __importDefault = undefined && undefined.__importDefault || function (mod) {\n    return mod && mod.__esModule ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar React = __importStar(__webpack_require__(\"./node_modules/react/index.js\"));\nvar semantic_ui_react_1 = __webpack_require__(\"./node_modules/semantic-ui-react/dist/es/index.js\");\nvar axui_logo_png_1 = __importDefault(__webpack_require__(\"./dev/assets/axui-logo.png\"));\nvar features_1 = __webpack_require__(\"./dev/pages/features/index.ts\");\nvar Introduction = function Introduction(props) {\n    return React.createElement(semantic_ui_react_1.Container, null, React.createElement(semantic_ui_react_1.Segment, { textAlign: 'center', basic: true, padded: true }, React.createElement(semantic_ui_react_1.Image, { src: axui_logo_png_1.default, size: \"small\", centered: true }), React.createElement(\"h1\", null, \"axui datagrid\")), React.createElement(semantic_ui_react_1.Segment, { basic: true, padded: true }, React.createElement(\"h1\", null, \"Introduction\"), React.createElement(\"p\", null, \"AXUI datagrid\\uB294 \\uBAA8\\uB358 \\uC6F9 \\uC560\\uD50C\\uB9AC\\uCF00\\uC774\\uC158 \\uAC1C\\uBC1C\\uC744 \\uC704\\uD574 'React + ES6 + TS' \\uCF54\\uB4DC\\uB85C \\uC81C\\uC791\\uB41C 'datagrid UI component' \\uC785\\uB2C8\\uB2E4.\", React.createElement(\"br\", null), \"'datagrid UI component'\\uB294 \\uB370\\uC774\\uD130\\uB97C \\uC2A4\\uD504\\uB808\\uB4DC\\uC2DC\\uD2B8 \\uCC98\\uB7FC \\uBCF4\\uC5EC\\uC8FC\\uB294 UI\\uB97C \\uB9D0\\uD569\\uB2C8\\uB2E4. datagrid\\uC5D0 \\uD544\\uC694\\uD55C \\uAE30\\uB2A5\\uC744 \\uC0AC\\uC6A9\\uC790\\uAC00 \\uC6D0\\uD558\\uB294 \\uB370\\uB85C \\uBAA8\\uB450 \\uB9CC\\uB4E0\\uB2E4\\uBA74 \\uB05D\\uC774 \\uC5C6\\uACA0\\uC9C0\\uB9CC \\uB300\\uC6A9\\uB7C9\\uC758 \\uB370\\uC774\\uD130\\uB97C \\uBE60\\uB978\\uC18D\\uB3C4\\uB85C \\uCD9C\\uB825\\uD558\\uACE0 \\uCEE8\\uD2B8\\uB864 \\uD558\\uB294 \\uAC83\\uACFC \\uC644\\uBCBD\\uD55C 'React + ES6 + TS' \\uAC1C\\uBC1C\\uD658\\uACBD\\uC744 \\uC9C0\\uC6D0\\uD558\\uB294 \\uAC83\\uC744 \\uAC00\\uC7A5 \\uC911\\uC694\\uD55C \\uAC00\\uCE58\\uB85C \\uC0DD\\uAC01\\uD558\\uACE0 \\uB514\\uC790\\uC778 \\uB418\\uC5C8\\uC2B5\\uB2C8\\uB2E4.\")), features_1.features.map(function (f, fi) {\n        return React.createElement(f.Component, { key: fi });\n    }));\n};\nexports.default = Introduction;\n\n//////////////////\n// WEBPACK FOOTER\n// ./dev/pages/Introduction.tsx\n// module id = ./dev/pages/Introduction.tsx\n// module chunks = 1\n\n//# sourceURL=webpack:///./dev/pages/Introduction.tsx?");

/***/ }),

/***/ "./dev/pages/features/event.tsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar __importStar = undefined && undefined.__importStar || function (mod) {\n  if (mod && mod.__esModule) return mod;\n  var result = {};\n  if (mod != null) for (var k in mod) {\n    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];\n  }result[\"default\"] = mod;\n  return result;\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar React = __importStar(__webpack_require__(\"./node_modules/react/index.js\"));\nvar semantic_ui_react_1 = __webpack_require__(\"./node_modules/semantic-ui-react/dist/es/index.js\");\nvar components_1 = __webpack_require__(\"./dev/components/index.tsx\");\nvar react_router_dom_1 = __webpack_require__(\"./node_modules/react-router-dom/es/index.js\");\nvar eventCompatibility = function eventCompatibility(props) {\n  return React.createElement(semantic_ui_react_1.Segment, { basic: true, padded: true }, React.createElement(semantic_ui_react_1.Header, { as: \"h2\", dividing: true }, \"Browser event compatibility\"), React.createElement(\"p\", null, \"onBeforeEvent, onAfterEvent props\\uC744 \\uC774\\uC6A9\\uD558\\uBA74 keydown, click\\uB4F1\\uC758 \\uC774\\uBCA4\\uD2B8\\uAC00 \\uBC1C\\uC0DD\\uB420\\uB54C callback\\uC744 \\uBC1B\\uC744 \\uC218 \\uC788\\uC2B5\\uB2C8\\uB2E4.\"), React.createElement(components_1.SourceCodeEditor, null, \"\\n<AXDatagrid\\n  height={this.state.height}\\n  style={{ fontSize: '12px' }}\\n  columns={this.state.columns}\\n  data={this.state.data}\\n  options={this.state.options}\\n  onBeforeEvent={( e, eventName ) => {\\n    this.receiveEvent(eventName);\\n  }}\\n  onAfterEvent={( e, eventName ) => {\\n    this.receiveEvent(eventName);\\n  }}\\n/>\\n      \"), React.createElement(\"p\", null, React.createElement(react_router_dom_1.Link, { to: \"/sample/EventReceive\" }, \"EventReceive \\uC608\\uC81C\\uBCF4\\uAE30\")));\n};\nexports.default = eventCompatibility;\n\n//////////////////\n// WEBPACK FOOTER\n// ./dev/pages/features/event.tsx\n// module id = ./dev/pages/features/event.tsx\n// module chunks = 1\n\n//# sourceURL=webpack:///./dev/pages/features/event.tsx?");

/***/ }),

/***/ "./dev/pages/features/expressing-large-amount-data.tsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar __importStar = undefined && undefined.__importStar || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) {\n        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];\n    }result[\"default\"] = mod;\n    return result;\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar React = __importStar(__webpack_require__(\"./node_modules/react/index.js\"));\nvar semantic_ui_react_1 = __webpack_require__(\"./node_modules/semantic-ui-react/dist/es/index.js\");\nvar react_router_dom_1 = __webpack_require__(\"./node_modules/react-router-dom/es/index.js\");\nvar expressingLargeAmountData = function expressingLargeAmountData(props) {\n    return React.createElement(semantic_ui_react_1.Segment, { basic: true, padded: true }, React.createElement(semantic_ui_react_1.Header, { as: \"h2\", dividing: true }, \"Expressing large amounts of data\"), React.createElement(\"p\", null, \"AXUI datagrid\\uB294 \\uB300\\uC6A9\\uB7C9\\uC758 \\uB370\\uC774\\uD130\\uB97C \\uCC98\\uB9AC \\uD560\\uC218 \\uC788\\uB3C4\\uB85D datagrid\\uC5D0 \\uBCF4\\uC5EC\\uC9C0\\uB294 \\uC601\\uC5ED\\uB9CC \\uCD9C\\uB825\\uD558\\uB294 \\uAC00\\uC0C1\\uC2A4\\uD06C\\uB864 \\uAE30\\uB2A5\\uC744 \\uC9C0\\uC6D0\\uD569\\uB2C8\\uB2E4. \\uB610\\uD55C \\uD589\\uBFD0\\uB9CC\\uC544\\uB2C8\\uB77C \\uC5F4\\uC5D0 \\uB300\\uD574\\uC11C\\uB3C4 \\uBCF4\\uC5EC\\uC9C0\\uB294 \\uC601\\uC5ED\\uB9CC \\uCD9C\\uB825\\uB418\\uBBC0\\uB85C \\uCD5C\\uC18C\\uD55C\\uC758 DOM\\uC5D8\\uB9AC\\uBA3C\\uD2B8\\uB9CC \\uBE0C\\uB77C\\uC6B0\\uC800\\uC5D0 \\uCD9C\\uB825\\uB429\\uB2C8\\uB2E4.\"), React.createElement(\"p\", null, React.createElement(react_router_dom_1.Link, { to: \"/sample/LargeData\" }, \"\\uB300\\uC6A9\\uB7C9 \\uB370\\uC774\\uD130 \\uC608\\uC81C\\uBCF4\\uAE30\")));\n};\nexports.default = expressingLargeAmountData;\n\n//////////////////\n// WEBPACK FOOTER\n// ./dev/pages/features/expressing-large-amount-data.tsx\n// module id = ./dev/pages/features/expressing-large-amount-data.tsx\n// module chunks = 1\n\n//# sourceURL=webpack:///./dev/pages/features/expressing-large-amount-data.tsx?");

/***/ }),

/***/ "./dev/pages/features/formatting-data.tsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar __importStar = undefined && undefined.__importStar || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) {\n        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];\n    }result[\"default\"] = mod;\n    return result;\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar React = __importStar(__webpack_require__(\"./node_modules/react/index.js\"));\nvar semantic_ui_react_1 = __webpack_require__(\"./node_modules/semantic-ui-react/dist/es/index.js\");\nvar components_1 = __webpack_require__(\"./dev/components/index.tsx\");\nvar react_router_dom_1 = __webpack_require__(\"./node_modules/react-router-dom/es/index.js\");\nvar formattingData = function formattingData(props) {\n    return React.createElement(semantic_ui_react_1.Segment, { basic: true, padded: true }, React.createElement(semantic_ui_react_1.Header, { as: 'h2', dividing: true }, \"Formatting of data\"), React.createElement(\"p\", null, \"\\uB0B4\\uC7A5\\uB41C 'date', 'money' formatter \\uC678\\uC5D0\\uB3C4 datagrid\\uC758 static \\uD568\\uC218\\uC778 setFormatter \\uD568\\uC218\\uB97C \\uC774\\uC6A9\\uD558\\uC5EC \\uC0AC\\uC6A9\\uC790 formatter\\uB97C \\uB9CC\\uB4E4 \\uC218 \\uC788\\uC2B5\\uB2C8\\uB2E4.\"), React.createElement(components_1.SourceCodeEditor, null, \"\\nAXDatagrid.setFormatter({\\n  MY_FORMATTER: function (data) {\\n    return 'MY_FORMATTER';\\n  }\\n});\\n\\ncolumns: [\\n  { key: 'id', width: 60, label: 'ID', align: 'center' },\\n  { key: 'title', width: 200, label: 'Title', formatter: 'MY_FORMATTER'},\\n  { key: 'writer', label: 'Writer', align: 'center'},\\n  { key: 'date', label: 'Date', align: 'center', formatter: 'date'},\\n  { key: 'money', label: 'Money', align: 'right', formatter: 'money'}\\n]\\n\"), React.createElement(\"p\", null, React.createElement(react_router_dom_1.Link, { to: '/sample/Formatter' }, \"Formatter \\uC608\\uC81C\\uBCF4\\uAE30\")));\n};\nexports.default = formattingData;\n\n//////////////////\n// WEBPACK FOOTER\n// ./dev/pages/features/formatting-data.tsx\n// module id = ./dev/pages/features/formatting-data.tsx\n// module chunks = 1\n\n//# sourceURL=webpack:///./dev/pages/features/formatting-data.tsx?");

/***/ }),

/***/ "./dev/pages/features/frozen-column-row.tsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar __importStar = undefined && undefined.__importStar || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) {\n        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];\n    }result[\"default\"] = mod;\n    return result;\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar React = __importStar(__webpack_require__(\"./node_modules/react/index.js\"));\nvar semantic_ui_react_1 = __webpack_require__(\"./node_modules/semantic-ui-react/dist/es/index.js\");\nvar react_router_dom_1 = __webpack_require__(\"./node_modules/react-router-dom/es/index.js\");\nvar frozenColumnRow = function frozenColumnRow(props) {\n    return React.createElement(semantic_ui_react_1.Segment, { basic: true, padded: true }, React.createElement(semantic_ui_react_1.Header, { as: 'h2', dividing: true }, \"Frozen column and row\"), React.createElement(\"p\", null, \"options.frozenColumnIndex, options.frozenRowIndex\\uB97C \\uC815\\uD558\\uBA74 \\uADF8\\uB9AC\\uB4DC\\uC5D0 \\uD2C0\\uACE0\\uC815\\uC601\\uC5ED\\uC744 \\uC124\\uC815 \\uD560 \\uC218 \\uC788\\uC2B5\\uB2C8\\uB2E4.\"), React.createElement(\"p\", null, React.createElement(react_router_dom_1.Link, { to: '/sample/FrozenColumnRow' }, \"FrozenColumnRow \\uC608\\uC81C\\uBCF4\\uAE30\")));\n};\nexports.default = frozenColumnRow;\n\n//////////////////\n// WEBPACK FOOTER\n// ./dev/pages/features/frozen-column-row.tsx\n// module id = ./dev/pages/features/frozen-column-row.tsx\n// module chunks = 1\n\n//# sourceURL=webpack:///./dev/pages/features/frozen-column-row.tsx?");

/***/ }),

/***/ "./dev/pages/features/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar __importDefault = undefined && undefined.__importDefault || function (mod) {\n    return mod && mod.__esModule ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar support_react_es6_ts_1 = __importDefault(__webpack_require__(\"./dev/pages/features/support-react-es6-ts.tsx\"));\nvar expressing_large_amount_data_1 = __importDefault(__webpack_require__(\"./dev/pages/features/expressing-large-amount-data.tsx\"));\nvar formatting_data_1 = __importDefault(__webpack_require__(\"./dev/pages/features/formatting-data.tsx\"));\nvar frozen_column_row_1 = __importDefault(__webpack_require__(\"./dev/pages/features/frozen-column-row.tsx\"));\nvar multi_column_header_1 = __importDefault(__webpack_require__(\"./dev/pages/features/multi-column-header.tsx\"));\nvar inline_edit_1 = __importDefault(__webpack_require__(\"./dev/pages/features/inline-edit.tsx\"));\nvar event_1 = __importDefault(__webpack_require__(\"./dev/pages/features/event.tsx\"));\nvar features = [{ title: 'Support React + ES6 + TS', Component: support_react_es6_ts_1.default }, { title: 'Expressing large amounts of data', Component: expressing_large_amount_data_1.default }, { title: 'Formatting of data', Component: formatting_data_1.default }, { title: 'Frozen column and row', Component: frozen_column_row_1.default }, { title: 'Multi column header', Component: multi_column_header_1.default }, { title: 'Inline edit', Component: inline_edit_1.default }, { title: 'Browser event compatibility', Component: event_1.default }];\nexports.features = features;\n\n//////////////////\n// WEBPACK FOOTER\n// ./dev/pages/features/index.ts\n// module id = ./dev/pages/features/index.ts\n// module chunks = 1\n\n//# sourceURL=webpack:///./dev/pages/features/index.ts?");

/***/ }),

/***/ "./dev/pages/features/inline-edit.tsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar __importStar = undefined && undefined.__importStar || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) {\n        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];\n    }result[\"default\"] = mod;\n    return result;\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar React = __importStar(__webpack_require__(\"./node_modules/react/index.js\"));\nvar semantic_ui_react_1 = __webpack_require__(\"./node_modules/semantic-ui-react/dist/es/index.js\");\nvar components_1 = __webpack_require__(\"./dev/components/index.tsx\");\nvar react_router_dom_1 = __webpack_require__(\"./node_modules/react-router-dom/es/index.js\");\nvar inlineEdit = function inlineEdit(props) {\n    return React.createElement(semantic_ui_react_1.Segment, { basic: true, padded: true }, React.createElement(semantic_ui_react_1.Header, { as: 'h2', dividing: true }, \"Inline edit\"), React.createElement(\"p\", null, \"column\\uC5D0 editor\\uB97C \\uC120\\uC5B8\\uD574\\uC8FC\\uBA74 inline edit\\uAE30\\uB2A5\\uC744 \\uC0AC\\uC6A9\\uD560 \\uC218 \\uC788\\uC2B5\\uB2C8\\uB2E4.\"), React.createElement(components_1.SourceCodeEditor, null, \"\\n{ key: 'title', width: 200, label: 'Title', editor: { type: 'text' } }\\n      \"), React.createElement(\"p\", null, React.createElement(react_router_dom_1.Link, { to: '/sample/InlineEdit' }, \"InlineEdit \\uC608\\uC81C\\uBCF4\\uAE30\")));\n};\nexports.default = inlineEdit;\n\n//////////////////\n// WEBPACK FOOTER\n// ./dev/pages/features/inline-edit.tsx\n// module id = ./dev/pages/features/inline-edit.tsx\n// module chunks = 1\n\n//# sourceURL=webpack:///./dev/pages/features/inline-edit.tsx?");

/***/ }),

/***/ "./dev/pages/features/multi-column-header.tsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar __importStar = undefined && undefined.__importStar || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) {\n        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];\n    }result[\"default\"] = mod;\n    return result;\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar React = __importStar(__webpack_require__(\"./node_modules/react/index.js\"));\nvar semantic_ui_react_1 = __webpack_require__(\"./node_modules/semantic-ui-react/dist/es/index.js\");\nvar components_1 = __webpack_require__(\"./dev/components/index.tsx\");\nvar react_router_dom_1 = __webpack_require__(\"./node_modules/react-router-dom/es/index.js\");\nvar multiColumnHeader = function multiColumnHeader(props) {\n    return React.createElement(semantic_ui_react_1.Segment, { basic: true, padded: true }, React.createElement(semantic_ui_react_1.Header, { as: 'h2', dividing: true }, \"Multi column header\"), React.createElement(\"p\", null, \"column\\uC544\\uB798\\uC5D0 columns\\uAC00 \\uC788\\uC73C\\uBA74 datagrid\\uAC00 \\uC54C\\uC544\\uC11C \\uCC98\\uB9AC\\uD574 \\uC90D\\uB2C8\\uB2E4.\"), React.createElement(components_1.SourceCodeEditor, null, \"\\ncolumns: [\\n  { key: 'id', width: 60, label: 'ID' },\\n  { key: 'title', width: 200, label: 'Title' },\\n  {\\n    label: 'Group', columns: [\\n    { key: 'writer', label: 'Writer' },\\n    { key: 'date', label: 'Date', formatter: 'date' }\\n  ]\\n  },\\n  { key: 'money', label: 'Money', formatter: 'money' }\\n]\\n\"), React.createElement(\"p\", null, React.createElement(react_router_dom_1.Link, { to: '/sample/MultiColumnHeader' }, \"MultiColumnHeader \\uC608\\uC81C\\uBCF4\\uAE30\")));\n};\nexports.default = multiColumnHeader;\n\n//////////////////\n// WEBPACK FOOTER\n// ./dev/pages/features/multi-column-header.tsx\n// module id = ./dev/pages/features/multi-column-header.tsx\n// module chunks = 1\n\n//# sourceURL=webpack:///./dev/pages/features/multi-column-header.tsx?");

/***/ }),

/***/ "./dev/pages/features/support-react-es6-ts.tsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar __importStar = undefined && undefined.__importStar || function (mod) {\n  if (mod && mod.__esModule) return mod;\n  var result = {};\n  if (mod != null) for (var k in mod) {\n    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];\n  }result[\"default\"] = mod;\n  return result;\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar React = __importStar(__webpack_require__(\"./node_modules/react/index.js\"));\nvar semantic_ui_react_1 = __webpack_require__(\"./node_modules/semantic-ui-react/dist/es/index.js\");\nvar SourceCodeEditor_1 = __webpack_require__(\"./dev/components/SourceCodeEditor.tsx\");\nvar supportReactEs6Ts = function supportReactEs6Ts(props) {\n  return React.createElement(semantic_ui_react_1.Segment, { basic: true, padded: true }, React.createElement(semantic_ui_react_1.Header, { as: 'h2', dividing: true }, \"Support React + ES6 + TS\"), React.createElement(\"p\", null, \"AXUI datagrid\\uB294 React.js \\uD504\\uB808\\uC784\\uC6CC\\uD06C\\uB97C \\uC774\\uC6A9\\uD558\\uC5EC \\uAC1C\\uBC1C\\uB418\\uC5C8\\uC2B5\\uB2C8\\uB2E4, \\uBE60\\uB974\\uAC8C \\uBCC0\\uD654\\uD558\\uB294 \\uC6F9 \\uAC1C\\uBC1C\\uD658\\uACBD \\uBCC0\\uD654\\uC5D0 \\uB9DE\\uCD94\\uC5B4 \\uB0B4\\uBD80 \\uCF54\\uB4DC\\uB294 ES6\\uC640 TS\\uB85C \\uC81C\\uC791\\uB418\\uC5C8\\uACE0 'babelJS' \\uB97C \\uC774\\uC6A9\\uD558\\uC5EC \\uCEF4\\uD30C\\uC77C \\uD569\\uB2C8\\uB2E4. \\uB9CC\\uC57D\\uC5D0 \\uC5EC\\uB7EC\\uBD84\\uC774 \\uC5EC\\uB7EC\\uBD84\\uC758 \\uD504\\uB85C\\uC81D\\uD2B8\\uC5D0\\uC11C \\uC644\\uBCBD\\uD55C\\uAC8C ES6 + TS \\uD639\\uC740 ES6 \\uCF54\\uB4DC\\uB97C \\uC0AC\\uC6A9\\uD558\\uACE0 \\uC2F6\\uB2E4\\uBA74 AXUI datagrid\\uB294 \\uCD5C\\uACE0\\uC758 \\uC120\\uD0DD\\uC774 \\uB418\\uC2E4 \\uAC81\\uB2C8\\uB2E4.\"), React.createElement(\"h4\", null, \"Example\"), React.createElement(SourceCodeEditor_1.SourceCodeEditor, null, \"\\n// grid.d.ts\\ninterface iAXDatagridProps {\\n  height: string;\\n  style: any;\\n  columns: any;\\n  data: any;\\n  options: any;\\n}\\n\\ninterface iSelection {\\n  x?: number;\\n  y?: number;\\n}\\n\\ninterface iColumns {\\n  key?: string;\\n  width?: number;\\n  label?: string;\\n  align?: string;\\n  formatter?: Function | string;\\n  columns?: iColumns[];\\n}\\n\\n// GridRoot.tsx\\nimport * as React from 'react';\\n\\nexport class GridRoot extends React.Component<iGridRootProps, iGridRootState> {\\n    // .....\\n}\\n\"));\n};\nexports.default = supportReactEs6Ts;\n\n//////////////////\n// WEBPACK FOOTER\n// ./dev/pages/features/support-react-es6-ts.tsx\n// module id = ./dev/pages/features/support-react-es6-ts.tsx\n// module chunks = 1\n\n//# sourceURL=webpack:///./dev/pages/features/support-react-es6-ts.tsx?");

/***/ })

});