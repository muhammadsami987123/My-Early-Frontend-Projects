"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/space-separated-tokens";
exports.ids = ["vendor-chunks/space-separated-tokens"];
exports.modules = {

/***/ "(ssr)/../node_modules/space-separated-tokens/index.js":
/*!*******************************************************!*\
  !*** ../node_modules/space-separated-tokens/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nexports.parse = parse;\nexports.stringify = stringify;\nvar empty = \"\";\nvar space = \" \";\nvar whiteSpace = /[ \\t\\n\\r\\f]+/g;\nfunction parse(value) {\n    var input = String(value || empty).trim();\n    return input === empty ? [] : input.split(whiteSpace);\n}\nfunction stringify(values) {\n    return values.join(space).trim();\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi4vbm9kZV9tb2R1bGVzL3NwYWNlLXNlcGFyYXRlZC10b2tlbnMvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFFQUEsYUFBYSxHQUFHQztBQUNoQkQsaUJBQWlCLEdBQUdFO0FBRXBCLElBQUlDLFFBQVE7QUFDWixJQUFJQyxRQUFRO0FBQ1osSUFBSUMsYUFBYTtBQUVqQixTQUFTSixNQUFNSyxLQUFLO0lBQ2xCLElBQUlDLFFBQVFDLE9BQU9GLFNBQVNILE9BQU9NLElBQUk7SUFDdkMsT0FBT0YsVUFBVUosUUFBUSxFQUFFLEdBQUdJLE1BQU1HLEtBQUssQ0FBQ0w7QUFDNUM7QUFFQSxTQUFTSCxVQUFVUyxNQUFNO0lBQ3ZCLE9BQU9BLE9BQU9DLElBQUksQ0FBQ1IsT0FBT0ssSUFBSTtBQUNoQyIsInNvdXJjZXMiOlsid2VicGFjazovL2dlbWluaS1jaGF0Ym90LWZyb250ZW5kLy4uL25vZGVfbW9kdWxlcy9zcGFjZS1zZXBhcmF0ZWQtdG9rZW5zL2luZGV4LmpzP2Q1NGIiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXG5cbmV4cG9ydHMucGFyc2UgPSBwYXJzZVxuZXhwb3J0cy5zdHJpbmdpZnkgPSBzdHJpbmdpZnlcblxudmFyIGVtcHR5ID0gJydcbnZhciBzcGFjZSA9ICcgJ1xudmFyIHdoaXRlU3BhY2UgPSAvWyBcXHRcXG5cXHJcXGZdKy9nXG5cbmZ1bmN0aW9uIHBhcnNlKHZhbHVlKSB7XG4gIHZhciBpbnB1dCA9IFN0cmluZyh2YWx1ZSB8fCBlbXB0eSkudHJpbSgpXG4gIHJldHVybiBpbnB1dCA9PT0gZW1wdHkgPyBbXSA6IGlucHV0LnNwbGl0KHdoaXRlU3BhY2UpXG59XG5cbmZ1bmN0aW9uIHN0cmluZ2lmeSh2YWx1ZXMpIHtcbiAgcmV0dXJuIHZhbHVlcy5qb2luKHNwYWNlKS50cmltKClcbn1cbiJdLCJuYW1lcyI6WyJleHBvcnRzIiwicGFyc2UiLCJzdHJpbmdpZnkiLCJlbXB0eSIsInNwYWNlIiwid2hpdGVTcGFjZSIsInZhbHVlIiwiaW5wdXQiLCJTdHJpbmciLCJ0cmltIiwic3BsaXQiLCJ2YWx1ZXMiLCJqb2luIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/../node_modules/space-separated-tokens/index.js\n");

/***/ })

};
;