/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _commands_map_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./commands.map.mjs */ \"./src/commands.map.mjs\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (undefined && undefined.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (g && (g = 0, op[0] && (_ = 0)), _) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\n\r\n// import './commands/help.ts'\r\nvar input = document.querySelector('#input');\r\nvar output = document.querySelector('#text-display');\r\nfunction onCommandEvent() {\r\n    var _a;\r\n    return __awaiter(this, void 0, void 0, function () {\r\n        var parts, command, isValidCommand, o, _b, _c, _d, _e, _f;\r\n        return __generator(this, function (_g) {\r\n            switch (_g.label) {\r\n                case 0:\r\n                    parts = input.value.split(' ');\r\n                    command = (_a = parts.shift()) === null || _a === void 0 ? void 0 : _a.toLowerCase();\r\n                    isValidCommand = Object.keys(_commands_map_mjs__WEBPACK_IMPORTED_MODULE_0__.commandMap).find(function (cmd) { return cmd === command; });\r\n                    // @ts-ignore\r\n                    input.value = '';\r\n                    o = document.createElement('p');\r\n                    _b = o;\r\n                    _c = \"$ \".concat;\r\n                    if (!isValidCommand) return [3 /*break*/, 2];\r\n                    _f = (_e = \"\".concat(command, \" \").concat(parts.join(' '), \"\\n\")).concat;\r\n                    return [4 /*yield*/, _commands_map_mjs__WEBPACK_IMPORTED_MODULE_0__.commandMap[command].execute()];\r\n                case 1:\r\n                    _d = _f.apply(_e, [(_g.sent()) || 'An error occured']);\r\n                    return [3 /*break*/, 3];\r\n                case 2:\r\n                    _d = \"\".concat(command, \" is not a valid command, use 'help' to view a list of available commands.\");\r\n                    _g.label = 3;\r\n                case 3:\r\n                    _b.innerText = _c.apply(\"$ \", [_d]);\r\n                    output === null || output === void 0 ? void 0 : output.prepend(o);\r\n                    output === null || output === void 0 ? void 0 : output.scrollBy({ top: window.innerHeight, behavior: 'smooth' });\r\n                    return [2 /*return*/];\r\n            }\r\n        });\r\n    });\r\n}\r\nwindow.addEventListener(\"keydown\", function (e) {\r\n    var _a, _b;\r\n    // @ts-ignore\r\n    if (e.key === 'Enter' && ((_a = input.value) === null || _a === void 0 ? void 0 : _a.length) > 0) {\r\n        onCommandEvent();\r\n    }\r\n    else if (!document.activeElement || ((_b = document.activeElement) === null || _b === void 0 ? void 0 : _b.id) !== 'input') {\r\n        // @ts-ignore\r\n        input.focus();\r\n    }\r\n});\r\n// @ts-ignore\r\nwindow.onload = function () { return input === null || input === void 0 ? void 0 : input.focus(); };\r\nconsole.log(_commands_map_mjs__WEBPACK_IMPORTED_MODULE_0__.commandMap);\r\n\n\n//# sourceURL=webpack://namelesskingdom/./src/index.ts?");

/***/ }),

/***/ "./src/commands.map.mjs":
/*!******************************!*\
  !*** ./src/commands.map.mjs ***!
  \******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"commandMap\": () => (/* binding */ commandMap)\n/* harmony export */ });\nconst commandMap = {\n\thelp: {\n\t\targs: null,\n\t\texecute: function help() {\r\n    // Just a test case for the moment\r\n    var output = \"Hello World\";\r\n    return output;\r\n}\n\t},\n};\n\n//# sourceURL=webpack://namelesskingdom/./src/commands.map.mjs?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;