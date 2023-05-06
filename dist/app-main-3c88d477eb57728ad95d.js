"use strict";
(self["webpackChunktime_complexity_graph"] = self["webpackChunktime_complexity_graph"] || []).push([["main"],{

/***/ "./src/ts/App.tsx":
/*!************************!*\
  !*** ./src/ts/App.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! grommet */ "./node_modules/grommet/es6/components/Grommet/Grommet.js");
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./theme */ "./src/ts/theme.tsx");
/* harmony import */ var Components_Chart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! Components/Chart */ "./src/ts/components/Chart/index.tsx");





/**
 * The main entry point of the Application.
 * @return {JSX.Element}
 * @function
 */
function App() {
    // When the component mounts ...
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
        console.log('App mounted!');
    }, []);
    // FIXME: temporary data
    const chartData = [
        { iterationCount: 10, timeValue: 1000 },
        { iterationCount: 50, timeValue: 5000 },
        { iterationCount: 100, timeValue: 10000 },
        { iterationCount: 500, timeValue: 50000 },
        { iterationCount: 1000, timeValue: 100000 },
        { iterationCount: 5000, timeValue: 500000 },
        { iterationCount: 10000, timeValue: 1000000 },
        { iterationCount: 50000, timeValue: 5000000 },
        { iterationCount: 100000, timeValue: 10000000 },
    ];
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(grommet__WEBPACK_IMPORTED_MODULE_4__.Grommet, { theme: _theme__WEBPACK_IMPORTED_MODULE_2__["default"], children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Components_Chart__WEBPACK_IMPORTED_MODULE_3__["default"], { chartData: chartData }) }));
}


/***/ }),

/***/ "./src/ts/components/Chart/index.tsx":
/*!*******************************************!*\
  !*** ./src/ts/components/Chart/index.tsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Chart)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! grommet */ "./node_modules/grommet/es6/components/Box/Box.js");
/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! grommet */ "./node_modules/grommet/es6/components/Stack/Stack.js");
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! recharts */ "./node_modules/recharts/es6/chart/LineChart.js");
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! recharts */ "./node_modules/recharts/es6/cartesian/Line.js");
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! recharts */ "./node_modules/recharts/es6/cartesian/CartesianGrid.js");
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! recharts */ "./node_modules/recharts/es6/cartesian/YAxis.js");
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! recharts */ "./node_modules/recharts/es6/cartesian/XAxis.js");




/**
 * Formatter for Ticks of X/Y Axis to return empty string
 * @return {string}
 * @function
 */
const emptyStringFormatter = () => "";
;
/**
 * Creates a recharts Line Chart plotting points of data
 * @return {JSX.Element}
 * @function
 */
function Chart({ chartData, }) {
    // on component mount - calculate coordinates of line chart to position background
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
        const chartEl = document.querySelector('g.recharts-line');
        // const chartBG = document.querySelector('svg#chart-background')
        const chartCoordinates = chartEl?.getBoundingClientRect();
        console.log('::', chartCoordinates);
    }, []);
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(grommet__WEBPACK_IMPORTED_MODULE_2__.Box, { fill: true, align: "center", id: "chart-container", justify: "center", children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(grommet__WEBPACK_IMPORTED_MODULE_3__.Stack, { anchor: 'center', children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", { id: "chart-background", className: 'img', role: 'img', children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("use", { xlinkHref: '#chart-bg' }) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(recharts__WEBPACK_IMPORTED_MODULE_4__.LineChart, { width: 675, height: 380, data: chartData, children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(recharts__WEBPACK_IMPORTED_MODULE_5__.Line, { type: "natural", dataKey: "timeValue", stroke: "#8884d8" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(recharts__WEBPACK_IMPORTED_MODULE_6__.CartesianGrid, { stroke: "#ccc", strokeDasharray: "5 5" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(recharts__WEBPACK_IMPORTED_MODULE_7__.YAxis, { label: { value: 'Execution Time', angle: -90, position: 'Left' }, tickFormatter: emptyStringFormatter }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(recharts__WEBPACK_IMPORTED_MODULE_8__.XAxis, { label: { value: 'Iteration Count', offset: 0, position: 'Bottom' }, tickFormatter: emptyStringFormatter })] })] }) }));
}


/***/ }),

/***/ "./src/ts/index.tsx":
/*!**************************!*\
  !*** ./src/ts/index.tsx ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App */ "./src/ts/App.tsx");



const appElement = document.querySelector('main#app');
if (!appElement) {
    throw new Error("Cannot Find Application Main Dom Element");
}
const domRoot = react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot(appElement);
domRoot.render((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_App__WEBPACK_IMPORTED_MODULE_2__["default"], {}));


/***/ }),

/***/ "./src/ts/theme.tsx":
/*!**************************!*\
  !*** ./src/ts/theme.tsx ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const commonBrandColors = {
    successColor: '#00d624',
    errorColor: '#bd2c00',
    warningColor: '#c9510c',
    infoColor: '#63c0df',
};
const purples = {
    purple: '#620CE3',
    purpleHover: '#6936CF',
    purpleDarker: '#3C138F',
    purpleDisabled: '#272727',
};
const yellows = {
    yellow: '#FCAE00',
    yellowHover: '#FBB926',
    yellowDarker: '#F5A623',
    yellowDisabled: '#FBF0B3',
};
const greys = {
    trueBlack: '#000000',
    offBlack: '#222222',
    darkGrey: '#333333',
    mediumGrey: '#666666',
    lightGrey: '#999999',
    offWhite: '#f5f5f5',
    trueWhite: '#ffffff',
};
const greens = {
    green: '#2ACA4B',
    greenHover: '#199E33',
    greenDarker: '#006607',
    greenDisabled: '#94E4A5',
};
const mints = {
    mint: '#159F84',
    mintHover: '#0B856D',
    mintDarker: '#045943',
    mintDisabled: '#8ACFC1',
};
const blues = {
    blue: '#007FFF',
    blueHover: '#0066CC',
    blueDarker: '#003E83',
    blueDisabled: '#7FBFFF',
};
const reds = {
    red: '#D8524E',
    redHover: '#B33C38',
    redDarker: '#A52724',
    redDisabled: '#EBA8A6',
};
const colors = {
    ...commonBrandColors,
    ...purples,
    ...yellows,
    ...greys,
    ...greens,
    ...mints,
    ...blues,
    ...reds,
};
const applicationTheme = {
    global: {
        '*': {
            boxSizing: 'border-box',
            margin: 0,
            padding: 0,
        },
        colors: { ...colors },
        font: {
            family: 'Source Code Pro',
            height: '1.5rem',
            size: '1rem',
            weight: 400,
        },
    },
    button: {
        active: {
            color: colors.trueWhite,
            border: {
                radius: '0.5rem',
                width: '1px',
            },
        },
        border: {
            radius: '0.5rem',
            width: '1px',
        },
        hover: {
            boxShadow: 'none',
            border: {
                radius: '0.5rem',
                width: '1px',
            },
        },
        transition: {
            properties: ['box-shadow'],
        },
    },
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (applicationTheme);


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./node_modules/webpack-dev-server/client/index.js?protocol=ws%3A&hostname=0.0.0.0&port=8888&pathname=%2Fws&logging=info&overlay=true&reconnect=10&hot=true&live-reload=true"), __webpack_exec__("./node_modules/webpack/hot/dev-server.js"), __webpack_exec__("./src/ts/index.tsx"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLW1haW4tM2M4OGQ0NzdlYjU3NzI4YWQ5NWQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBa0M7QUFDQTtBQUVLO0FBRUg7QUFHcEM7Ozs7R0FJRztBQUNZLFNBQVMsR0FBRztJQUV6QixnQ0FBZ0M7SUFDaEMsZ0RBQVMsQ0FBQyxHQUFHLEVBQUU7UUFDYixPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQzlCLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUdQLHdCQUF3QjtJQUN4QixNQUFNLFNBQVMsR0FBZ0I7UUFDN0IsRUFBRSxjQUFjLEVBQUUsRUFBRSxFQUFNLFNBQVMsRUFBRSxJQUFJLEVBQUU7UUFDM0MsRUFBRSxjQUFjLEVBQUUsRUFBRSxFQUFNLFNBQVMsRUFBRSxJQUFJLEVBQUU7UUFDM0MsRUFBRSxjQUFjLEVBQUUsR0FBRyxFQUFLLFNBQVMsRUFBRSxLQUFLLEVBQUU7UUFDNUMsRUFBRSxjQUFjLEVBQUUsR0FBRyxFQUFLLFNBQVMsRUFBRSxLQUFLLEVBQUU7UUFDNUMsRUFBRSxjQUFjLEVBQUUsSUFBSSxFQUFJLFNBQVMsRUFBRSxNQUFNLEVBQUU7UUFDN0MsRUFBRSxjQUFjLEVBQUUsSUFBSSxFQUFJLFNBQVMsRUFBRSxNQUFNLEVBQUU7UUFDN0MsRUFBRSxjQUFjLEVBQUUsS0FBSyxFQUFHLFNBQVMsRUFBRSxPQUFPLEVBQUU7UUFDOUMsRUFBRSxjQUFjLEVBQUUsS0FBSyxFQUFHLFNBQVMsRUFBRSxPQUFPLEVBQUU7UUFDOUMsRUFBRSxjQUFjLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUU7S0FDaEQsQ0FBQztJQUVGLE9BQU8sQ0FDTCx1REFBQyw0Q0FBTyxJQUFDLEtBQUssRUFBRSw4Q0FBZ0IsWUFDOUIsdURBQUMsd0RBQUssSUFBQyxTQUFTLEVBQUUsU0FBUyxHQUFJLEdBQ3ZCLENBQ1gsQ0FBQztBQUNKLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkNp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LEVBQUU7WUFDSixNQUFNLEVBQUUsaUJBQWlCO1lBQ3pCLE1BQU0sRUFBRSxRQUFRO1lBQ2hCLElBQUksRUFBRSxNQUFNO1lBQ1osTUFBTSxFQUFFLEdBQUc7U0FDWjtLQUNGO0lBQ0QsTUFBTSxFQUFFO1FBQ04sTUFBTSxFQUFFO1lBQ04sS0FBSyxFQUFFLE1BQU0sQ0FBQyxTQUFTO1lBQ3ZCLE1BQU0sRUFBRTtnQkFDTixNQUFNLEVBQUUsUUFBUTtnQkFDaEIsS0FBSyxFQUFFLEtBQUs7YUFDYjtTQUNGO1FBQ0QsTUFBTSxFQUFFO1lBQ04sTUFBTSxFQUFFLFFBQVE7WUFDaEIsS0FBSyxFQUFFLEtBQUs7U0FDYjtRQUNELEtBQUssRUFBRTtZQUNMLFNBQVMsRUFBRSxNQUFNO1lBQ2pCLE1BQU0sRUFBRTtnQkFDTixNQUFNLEVBQUUsUUFBUTtnQkFDaEIsS0FBSyxFQUFFLEtBQUs7YUFDYjtTQUNGO1FBQ0QsVUFBVSxFQUFFO1lBQ1YsVUFBVSxFQUFFLENBQUMsWUFBWSxDQUFDO1NBQzNCO0tBQ0Y7Q0FDRixDQUFDO0FBRUYsaUVBQWUsZ0JBQWdCLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90aW1lLWNvbXBsZXhpdHktZ3JhcGgvLi9zcmMvdHMvQXBwLnRzeCIsIndlYnBhY2s6Ly90aW1lLWNvbXBsZXhpdHktZ3JhcGgvLi9zcmMvdHMvY29tcG9uZW50cy9DaGFydC9pbmRleC50c3giLCJ3ZWJwYWNrOi8vdGltZS1jb21wbGV4aXR5LWdyYXBoLy4vc3JjL3RzL2luZGV4LnRzeCIsIndlYnBhY2s6Ly90aW1lLWNvbXBsZXhpdHktZ3JhcGgvLi9zcmMvdHMvdGhlbWUudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEdyb21tZXQgfSBmcm9tICdncm9tbWV0JztcblxuaW1wb3J0IGFwcGxpY2F0aW9uVGhlbWUgZnJvbSAnLi90aGVtZSc7XG5cbmltcG9ydCBDaGFydCBmcm9tICdDb21wb25lbnRzL0NoYXJ0J1xuaW1wb3J0IHsgQ2hhcnROb2RlIH0gZnJvbSAnVHlwZXMvYXBwJztcblxuLyoqXG4gKiBUaGUgbWFpbiBlbnRyeSBwb2ludCBvZiB0aGUgQXBwbGljYXRpb24uXG4gKiBAcmV0dXJuIHtKU1guRWxlbWVudH1cbiAqIEBmdW5jdGlvblxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoKTogSlNYLkVsZW1lbnQge1xuXG4gIC8vIFdoZW4gdGhlIGNvbXBvbmVudCBtb3VudHMgLi4uXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ0FwcCBtb3VudGVkIScpO1xuICB9LCBbXSk7XG5cblxuICAvLyBGSVhNRTogdGVtcG9yYXJ5IGRhdGFcbiAgY29uc3QgY2hhcnREYXRhOiBDaGFydE5vZGVbXSA9IFtcbiAgICB7IGl0ZXJhdGlvbkNvdW50OiAxMCwgICAgIHRpbWVWYWx1ZTogMTAwMCB9LFxuICAgIHsgaXRlcmF0aW9uQ291bnQ6IDUwLCAgICAgdGltZVZhbHVlOiA1MDAwIH0sXG4gICAgeyBpdGVyYXRpb25Db3VudDogMTAwLCAgICB0aW1lVmFsdWU6IDEwMDAwIH0sXG4gICAgeyBpdGVyYXRpb25Db3VudDogNTAwLCAgICB0aW1lVmFsdWU6IDUwMDAwIH0sXG4gICAgeyBpdGVyYXRpb25Db3VudDogMTAwMCwgICB0aW1lVmFsdWU6IDEwMDAwMCB9LFxuICAgIHsgaXRlcmF0aW9uQ291bnQ6IDUwMDAsICAgdGltZVZhbHVlOiA1MDAwMDAgfSxcbiAgICB7IGl0ZXJhdGlvbkNvdW50OiAxMDAwMCwgIHRpbWVWYWx1ZTogMTAwMDAwMCB9LFxuICAgIHsgaXRlcmF0aW9uQ291bnQ6IDUwMDAwLCAgdGltZVZhbHVlOiA1MDAwMDAwIH0sXG4gICAgeyBpdGVyYXRpb25Db3VudDogMTAwMDAwLCB0aW1lVmFsdWU6IDEwMDAwMDAwIH0sXG4gIF07XG5cbiAgcmV0dXJuIChcbiAgICA8R3JvbW1ldCB0aGVtZT17YXBwbGljYXRpb25UaGVtZX0+XG4gICAgICA8Q2hhcnQgY2hhcnREYXRhPXtjaGFydERhdGF9IC8+XG4gICAgPC9Hcm9tbWV0PlxuICApO1xufVxuIiwiaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQm94LCBTdGFjayB9IGZyb20gJ2dyb21tZXQnO1xuaW1wb3J0IHtcbiAgTGluZUNoYXJ0LFxuICBMaW5lLFxuICBDYXJ0ZXNpYW5HcmlkLFxuICBYQXhpcyxcbiAgWUF4aXNcbn0gZnJvbSAncmVjaGFydHMnO1xuXG5pbXBvcnQgeyBDaGFydE5vZGUgfSBmcm9tICdUeXBlcy9hcHAnO1xuXG4vKipcbiAqIEZvcm1hdHRlciBmb3IgVGlja3Mgb2YgWC9ZIEF4aXMgdG8gcmV0dXJuIGVtcHR5IHN0cmluZ1xuICogQHJldHVybiB7c3RyaW5nfVxuICogQGZ1bmN0aW9uXG4gKi9cbmNvbnN0IGVtcHR5U3RyaW5nRm9ybWF0dGVyID0gKCkgPT4gXCJcIjtcblxuZXhwb3J0IGludGVyZmFjZSBDaGFydFByb3BzIHtcbiAgY2hhcnREYXRhOiBDaGFydE5vZGVbXTtcbn07XG5cbi8qKlxuICogQ3JlYXRlcyBhIHJlY2hhcnRzIExpbmUgQ2hhcnQgcGxvdHRpbmcgcG9pbnRzIG9mIGRhdGFcbiAqIEByZXR1cm4ge0pTWC5FbGVtZW50fVxuICogQGZ1bmN0aW9uXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENoYXJ0KHtcbiAgY2hhcnREYXRhLFxufTogQ2hhcnRQcm9wcyk6IEpTWC5FbGVtZW50IHtcbiAgLy8gb24gY29tcG9uZW50IG1vdW50IC0gY2FsY3VsYXRlIGNvb3JkaW5hdGVzIG9mIGxpbmUgY2hhcnQgdG8gcG9zaXRpb24gYmFja2dyb3VuZFxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGNoYXJ0RWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdnLnJlY2hhcnRzLWxpbmUnKTtcbiAgICAvLyBjb25zdCBjaGFydEJHID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcignc3ZnI2NoYXJ0LWJhY2tncm91bmQnKVxuICAgIGNvbnN0IGNoYXJ0Q29vcmRpbmF0ZXMgPSBjaGFydEVsPy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBjb25zb2xlLmxvZygnOjonLCBjaGFydENvb3JkaW5hdGVzKVxuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8Qm94XG4gICAgICBmaWxsXG4gICAgICBhbGlnbj1cImNlbnRlclwiXG4gICAgICBpZD1cImNoYXJ0LWNvbnRhaW5lclwiXG4gICAgICBqdXN0aWZ5PVwiY2VudGVyXCJcbiAgICA+XG4gICAgICA8U3RhY2sgYW5jaG9yPSdjZW50ZXInPlxuICAgICAgICA8c3ZnIGlkPVwiY2hhcnQtYmFja2dyb3VuZFwiIGNsYXNzTmFtZT0naW1nJyByb2xlPSdpbWcnPlxuICAgICAgICAgIDx1c2UgeGxpbmtIcmVmPScjY2hhcnQtYmcnPjwvdXNlPlxuICAgICAgICA8L3N2Zz5cbiAgICAgICAgPExpbmVDaGFydCB3aWR0aD17Njc1fSBoZWlnaHQ9ezM4MH0gZGF0YT17Y2hhcnREYXRhfT5cbiAgICAgICAgICA8TGluZSB0eXBlPVwibmF0dXJhbFwiIGRhdGFLZXk9XCJ0aW1lVmFsdWVcIiBzdHJva2U9XCIjODg4NGQ4XCIgLz5cbiAgICAgICAgICA8Q2FydGVzaWFuR3JpZCBzdHJva2U9XCIjY2NjXCIgc3Ryb2tlRGFzaGFycmF5PVwiNSA1XCIgLz5cbiAgICAgICAgICA8WUF4aXMgbGFiZWw9e3sgdmFsdWU6ICdFeGVjdXRpb24gVGltZScsIGFuZ2xlOiAtOTAsIHBvc2l0aW9uOiAnTGVmdCcgfX0gdGlja0Zvcm1hdHRlcj17ZW1wdHlTdHJpbmdGb3JtYXR0ZXJ9IC8+XG4gICAgICAgICAgPFhBeGlzIGxhYmVsPXt7IHZhbHVlOiAnSXRlcmF0aW9uIENvdW50Jywgb2Zmc2V0OiAwLCBwb3NpdGlvbjogJ0JvdHRvbScgfX0gdGlja0Zvcm1hdHRlcj17ZW1wdHlTdHJpbmdGb3JtYXR0ZXJ9IC8+XG4gICAgICAgIDwvTGluZUNoYXJ0PlxuICAgICAgPC9TdGFjaz5cbiAgICA8L0JveD5cbiAgKTtcbn1cbiIsImltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20vY2xpZW50JztcblxuaW1wb3J0IEFwcCBmcm9tICcuL0FwcCc7XG5cbmNvbnN0IGFwcEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluI2FwcCcpO1xuXG5pZiAoIWFwcEVsZW1lbnQpIHtcbiAgdGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IEZpbmQgQXBwbGljYXRpb24gTWFpbiBEb20gRWxlbWVudFwiKTtcbn1cblxuY29uc3QgZG9tUm9vdCA9IFJlYWN0RE9NLmNyZWF0ZVJvb3QoYXBwRWxlbWVudCk7XG5cbmRvbVJvb3QucmVuZGVyKDxBcHAgLz4pO1xuIiwiY29uc3QgY29tbW9uQnJhbmRDb2xvcnMgPSB7XG4gIHN1Y2Nlc3NDb2xvcjogJyMwMGQ2MjQnLFxuICBlcnJvckNvbG9yOiAnI2JkMmMwMCcsXG4gIHdhcm5pbmdDb2xvcjogJyNjOTUxMGMnLFxuICBpbmZvQ29sb3I6ICcjNjNjMGRmJyxcbn07XG5cbmNvbnN0IHB1cnBsZXMgPSB7XG4gIHB1cnBsZTogJyM2MjBDRTMnLFxuICBwdXJwbGVIb3ZlcjogJyM2OTM2Q0YnLFxuICBwdXJwbGVEYXJrZXI6ICcjM0MxMzhGJyxcbiAgcHVycGxlRGlzYWJsZWQ6ICcjMjcyNzI3Jyxcbn07XG5cbmNvbnN0IHllbGxvd3MgPSB7XG4gIHllbGxvdzogJyNGQ0FFMDAnLFxuICB5ZWxsb3dIb3ZlcjogJyNGQkI5MjYnLFxuICB5ZWxsb3dEYXJrZXI6ICcjRjVBNjIzJyxcbiAgeWVsbG93RGlzYWJsZWQ6ICcjRkJGMEIzJyxcbn07XG5cbmNvbnN0IGdyZXlzID0ge1xuICB0cnVlQmxhY2s6ICcjMDAwMDAwJyxcbiAgb2ZmQmxhY2s6ICcjMjIyMjIyJyxcbiAgZGFya0dyZXk6ICcjMzMzMzMzJyxcbiAgbWVkaXVtR3JleTogJyM2NjY2NjYnLFxuICBsaWdodEdyZXk6ICcjOTk5OTk5JyxcbiAgb2ZmV2hpdGU6ICcjZjVmNWY1JyxcbiAgdHJ1ZVdoaXRlOiAnI2ZmZmZmZicsXG59O1xuXG5jb25zdCBncmVlbnMgPSB7XG4gIGdyZWVuOiAnIzJBQ0E0QicsXG4gIGdyZWVuSG92ZXI6ICcjMTk5RTMzJyxcbiAgZ3JlZW5EYXJrZXI6ICcjMDA2NjA3JyxcbiAgZ3JlZW5EaXNhYmxlZDogJyM5NEU0QTUnLFxufTtcblxuY29uc3QgbWludHMgPSB7XG4gIG1pbnQ6ICcjMTU5Rjg0JyxcbiAgbWludEhvdmVyOiAnIzBCODU2RCcsXG4gIG1pbnREYXJrZXI6ICcjMDQ1OTQzJyxcbiAgbWludERpc2FibGVkOiAnIzhBQ0ZDMScsXG59O1xuXG5jb25zdCBibHVlcyA9IHtcbiAgYmx1ZTogJyMwMDdGRkYnLFxuICBibHVlSG92ZXI6ICcjMDA2NkNDJyxcbiAgYmx1ZURhcmtlcjogJyMwMDNFODMnLFxuICBibHVlRGlzYWJsZWQ6ICcjN0ZCRkZGJyxcbn07XG5cbmNvbnN0IHJlZHMgPSB7XG4gIHJlZDogJyNEODUyNEUnLFxuICByZWRIb3ZlcjogJyNCMzNDMzgnLFxuICByZWREYXJrZXI6ICcjQTUyNzI0JyxcbiAgcmVkRGlzYWJsZWQ6ICcjRUJBOEE2Jyxcbn07XG5cbmNvbnN0IGNvbG9ycyA9IHtcbiAgLi4uY29tbW9uQnJhbmRDb2xvcnMsXG4gIC4uLnB1cnBsZXMsXG4gIC4uLnllbGxvd3MsXG4gIC4uLmdyZXlzLFxuICAuLi5ncmVlbnMsXG4gIC4uLm1pbnRzLFxuICAuLi5ibHVlcyxcbiAgLi4ucmVkcyxcbn07XG5cbmNvbnN0IGFwcGxpY2F0aW9uVGhlbWUgPSB7XG4gIGdsb2JhbDoge1xuICAgICcqJzoge1xuICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICBtYXJnaW46IDAsXG4gICAgICBwYWRkaW5nOiAwLFxuICAgIH0sXG4gICAgY29sb3JzOiB7IC4uLmNvbG9ycyB9LFxuICAgIGZvbnQ6IHtcbiAgICAgIGZhbWlseTogJ1NvdXJjZSBDb2RlIFBybycsXG4gICAgICBoZWlnaHQ6ICcxLjVyZW0nLFxuICAgICAgc2l6ZTogJzFyZW0nLFxuICAgICAgd2VpZ2h0OiA0MDAsXG4gICAgfSxcbiAgfSxcbiAgYnV0dG9uOiB7XG4gICAgYWN0aXZlOiB7XG4gICAgICBjb2xvcjogY29sb3JzLnRydWVXaGl0ZSxcbiAgICAgIGJvcmRlcjoge1xuICAgICAgICByYWRpdXM6ICcwLjVyZW0nLFxuICAgICAgICB3aWR0aDogJzFweCcsXG4gICAgICB9LFxuICAgIH0sXG4gICAgYm9yZGVyOiB7XG4gICAgICByYWRpdXM6ICcwLjVyZW0nLFxuICAgICAgd2lkdGg6ICcxcHgnLFxuICAgIH0sXG4gICAgaG92ZXI6IHtcbiAgICAgIGJveFNoYWRvdzogJ25vbmUnLFxuICAgICAgYm9yZGVyOiB7XG4gICAgICAgIHJhZGl1czogJzAuNXJlbScsXG4gICAgICAgIHdpZHRoOiAnMXB4JyxcbiAgICAgIH0sXG4gICAgfSxcbiAgICB0cmFuc2l0aW9uOiB7XG4gICAgICBwcm9wZXJ0aWVzOiBbJ2JveC1zaGFkb3cnXSxcbiAgICB9LFxuICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgYXBwbGljYXRpb25UaGVtZTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==