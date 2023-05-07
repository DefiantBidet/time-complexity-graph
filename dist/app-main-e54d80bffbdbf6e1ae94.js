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
        { runCount: 10, timeValue: 1000 },
        { runCount: 50, timeValue: 5000 },
        { runCount: 100, timeValue: 10000 },
        { runCount: 500, timeValue: 50000 },
        { runCount: 1000, timeValue: 100000 },
        { runCount: 5000, timeValue: 500000 },
        { runCount: 10000, timeValue: 1000000 },
        { runCount: 50000, timeValue: 5000000 },
        { runCount: 100000, timeValue: 10000000 },
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
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! recharts */ "./node_modules/recharts/es6/chart/LineChart.js");
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! recharts */ "./node_modules/recharts/es6/cartesian/Line.js");
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! recharts */ "./node_modules/recharts/es6/cartesian/CartesianGrid.js");
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! recharts */ "./node_modules/recharts/es6/cartesian/YAxis.js");
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! recharts */ "./node_modules/recharts/es6/cartesian/XAxis.js");




/**
 * Formatter for Ticks of X/Y Axis to return empty string
 * @return {string}
 * @function
 */
const emptyStringFormatter = () => "";
/**
 * CSS style string formatter
 * @return {string}
 * @function
 */
const cssStyleFormatter = (value) => `${value}px`;
;
/**
 * Creates a recharts Line Chart plotting points of data
 * @return {JSX.Element}
 * @function
 */
function Chart({ chartData, }) {
    const svgWrapperRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    // on component mount - calculate coordinates of line chart to position background
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
        const svgWrapper = svgWrapperRef.current;
        if (svgWrapper) {
            // svgWrapperRef present - position background svg
            const chartEl = document.querySelector('g.recharts-line');
            const chartCoordinates = chartEl?.getBoundingClientRect();
            svgWrapper.style.left = cssStyleFormatter(chartCoordinates?.x ?? 0);
            svgWrapper.style.top = cssStyleFormatter(chartCoordinates?.y ?? 0);
            svgWrapper.style.height = cssStyleFormatter(chartCoordinates?.height ?? 0);
            svgWrapper.style.width = cssStyleFormatter(chartCoordinates?.width ?? 0);
        }
    }, []);
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(grommet__WEBPACK_IMPORTED_MODULE_2__.Box, { fill: true, align: "center", id: "chart-container", justify: "center", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(grommet__WEBPACK_IMPORTED_MODULE_2__.Box, { ref: svgWrapperRef, id: "chart-background-gradient", style: {
                    position: 'absolute',
                }, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", { className: 'chart-bg', role: 'img', children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("use", { xlinkHref: '#chart-bg' }) }) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(recharts__WEBPACK_IMPORTED_MODULE_3__.LineChart, { width: 675, height: 380, data: chartData, children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(recharts__WEBPACK_IMPORTED_MODULE_4__.Line, { type: "natural", dataKey: "timeValue", stroke: "#8884d8" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(recharts__WEBPACK_IMPORTED_MODULE_5__.CartesianGrid, { stroke: "#ccc", strokeDasharray: "5 5" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(recharts__WEBPACK_IMPORTED_MODULE_6__.YAxis, { label: { value: 'Execution Time', angle: -90, position: 'Left' }, tickFormatter: emptyStringFormatter }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(recharts__WEBPACK_IMPORTED_MODULE_7__.XAxis, { label: { value: 'Run Count', offset: 0, position: 'Bottom' }, tickFormatter: emptyStringFormatter })] })] }));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEVBQUUsS0FBSzthQUNiO1NBQ0Y7UUFDRCxVQUFVLEVBQUU7WUFDVixVQUFVLEVBQUUsQ0FBQyxZQUFZLENBQUM7U0FDM0I7S0FDRjtDQUNGLENBQUM7QUFFRixpRUFBZSxnQkFBZ0IsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RpbWUtY29tcGxleGl0eS1ncmFwaC8uL3NyYy90cy9BcHAudHN4Iiwid2VicGFjazovL3RpbWUtY29tcGxleGl0eS1ncmFwaC8uL3NyYy90cy9jb21wb25lbnRzL0NoYXJ0L2luZGV4LnRzeCIsIndlYnBhY2s6Ly90aW1lLWNvbXBsZXhpdHktZ3JhcGgvLi9zcmMvdHMvaW5kZXgudHN4Iiwid2VicGFjazovL3RpbWUtY29tcGxleGl0eS1ncmFwaC8uL3NyYy90cy90aGVtZS50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgR3JvbW1ldCB9IGZyb20gJ2dyb21tZXQnO1xuXG5pbXBvcnQgYXBwbGljYXRpb25UaGVtZSBmcm9tICcuL3RoZW1lJztcblxuaW1wb3J0IENoYXJ0IGZyb20gJ0NvbXBvbmVudHMvQ2hhcnQnXG5pbXBvcnQgeyBDaGFydE5vZGUgfSBmcm9tICdUeXBlcy9hcHAnO1xuXG4vKipcbiAqIFRoZSBtYWluIGVudHJ5IHBvaW50IG9mIHRoZSBBcHBsaWNhdGlvbi5cbiAqIEByZXR1cm4ge0pTWC5FbGVtZW50fVxuICogQGZ1bmN0aW9uXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCgpOiBKU1guRWxlbWVudCB7XG5cbiAgLy8gV2hlbiB0aGUgY29tcG9uZW50IG1vdW50cyAuLi5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zb2xlLmxvZygnQXBwIG1vdW50ZWQhJyk7XG4gIH0sIFtdKTtcblxuXG4gIC8vIEZJWE1FOiB0ZW1wb3JhcnkgZGF0YVxuICBjb25zdCBjaGFydERhdGE6IENoYXJ0Tm9kZVtdID0gW1xuICAgIHsgcnVuQ291bnQ6IDEwLCAgICAgdGltZVZhbHVlOiAxMDAwIH0sXG4gICAgeyBydW5Db3VudDogNTAsICAgICB0aW1lVmFsdWU6IDUwMDAgfSxcbiAgICB7IHJ1bkNvdW50OiAxMDAsICAgIHRpbWVWYWx1ZTogMTAwMDAgfSxcbiAgICB7IHJ1bkNvdW50OiA1MDAsICAgIHRpbWVWYWx1ZTogNTAwMDAgfSxcbiAgICB7IHJ1bkNvdW50OiAxMDAwLCAgIHRpbWVWYWx1ZTogMTAwMDAwIH0sXG4gICAgeyBydW5Db3VudDogNTAwMCwgICB0aW1lVmFsdWU6IDUwMDAwMCB9LFxuICAgIHsgcnVuQ291bnQ6IDEwMDAwLCAgdGltZVZhbHVlOiAxMDAwMDAwIH0sXG4gICAgeyBydW5Db3VudDogNTAwMDAsICB0aW1lVmFsdWU6IDUwMDAwMDAgfSxcbiAgICB7IHJ1bkNvdW50OiAxMDAwMDAsIHRpbWVWYWx1ZTogMTAwMDAwMDAgfSxcbiAgXTtcblxuICByZXR1cm4gKFxuICAgIDxHcm9tbWV0IHRoZW1lPXthcHBsaWNhdGlvblRoZW1lfT5cbiAgICAgIDxDaGFydCBjaGFydERhdGE9e2NoYXJ0RGF0YX0gLz5cbiAgICA8L0dyb21tZXQ+XG4gICk7XG59XG4iLCJpbXBvcnQgeyB1c2VSZWYsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEJveCB9IGZyb20gJ2dyb21tZXQnO1xuaW1wb3J0IHtcbiAgTGluZUNoYXJ0LFxuICBMaW5lLFxuICBDYXJ0ZXNpYW5HcmlkLFxuICBYQXhpcyxcbiAgWUF4aXNcbn0gZnJvbSAncmVjaGFydHMnO1xuXG5pbXBvcnQgeyBDaGFydE5vZGUgfSBmcm9tICdUeXBlcy9hcHAnO1xuXG4vKipcbiAqIEZvcm1hdHRlciBmb3IgVGlja3Mgb2YgWC9ZIEF4aXMgdG8gcmV0dXJuIGVtcHR5IHN0cmluZ1xuICogQHJldHVybiB7c3RyaW5nfVxuICogQGZ1bmN0aW9uXG4gKi9cbmNvbnN0IGVtcHR5U3RyaW5nRm9ybWF0dGVyID0gKCkgPT4gXCJcIjtcblxuLyoqXG4gKiBDU1Mgc3R5bGUgc3RyaW5nIGZvcm1hdHRlclxuICogQHJldHVybiB7c3RyaW5nfVxuICogQGZ1bmN0aW9uXG4gKi9cbmNvbnN0IGNzc1N0eWxlRm9ybWF0dGVyID0gKHZhbHVlOiBudW1iZXIpID0+IGAke3ZhbHVlfXB4YDtcblxuZXhwb3J0IGludGVyZmFjZSBDaGFydFByb3BzIHtcbiAgY2hhcnREYXRhOiBDaGFydE5vZGVbXTtcbn07XG5cbi8qKlxuICogQ3JlYXRlcyBhIHJlY2hhcnRzIExpbmUgQ2hhcnQgcGxvdHRpbmcgcG9pbnRzIG9mIGRhdGFcbiAqIEByZXR1cm4ge0pTWC5FbGVtZW50fVxuICogQGZ1bmN0aW9uXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENoYXJ0KHtcbiAgY2hhcnREYXRhLFxufTogQ2hhcnRQcm9wcyk6IEpTWC5FbGVtZW50IHtcbiAgY29uc3Qgc3ZnV3JhcHBlclJlZiA9IHVzZVJlZjxIVE1MRGl2RWxlbWVudD4obnVsbCk7XG5cbiAgLy8gb24gY29tcG9uZW50IG1vdW50IC0gY2FsY3VsYXRlIGNvb3JkaW5hdGVzIG9mIGxpbmUgY2hhcnQgdG8gcG9zaXRpb24gYmFja2dyb3VuZFxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHN2Z1dyYXBwZXIgPSBzdmdXcmFwcGVyUmVmLmN1cnJlbnQ7XG4gICAgaWYgKHN2Z1dyYXBwZXIpIHtcbiAgICAgIC8vIHN2Z1dyYXBwZXJSZWYgcHJlc2VudCAtIHBvc2l0aW9uIGJhY2tncm91bmQgc3ZnXG4gICAgICBjb25zdCBjaGFydEVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZy5yZWNoYXJ0cy1saW5lJyk7XG4gICAgICBjb25zdCBjaGFydENvb3JkaW5hdGVzID0gY2hhcnRFbD8uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICAgIHN2Z1dyYXBwZXIuc3R5bGUubGVmdCA9IGNzc1N0eWxlRm9ybWF0dGVyKGNoYXJ0Q29vcmRpbmF0ZXM/LnggPz8gMCk7XG4gICAgICBzdmdXcmFwcGVyLnN0eWxlLnRvcCA9IGNzc1N0eWxlRm9ybWF0dGVyKGNoYXJ0Q29vcmRpbmF0ZXM/LnkgPz8gMCk7XG4gICAgICBzdmdXcmFwcGVyLnN0eWxlLmhlaWdodCA9IGNzc1N0eWxlRm9ybWF0dGVyKGNoYXJ0Q29vcmRpbmF0ZXM/LmhlaWdodCA/PyAwKTtcbiAgICAgIHN2Z1dyYXBwZXIuc3R5bGUud2lkdGggPSBjc3NTdHlsZUZvcm1hdHRlcihjaGFydENvb3JkaW5hdGVzPy53aWR0aCA/PyAwKTtcbiAgICB9XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxCb3hcbiAgICAgIGZpbGxcbiAgICAgIGFsaWduPVwiY2VudGVyXCJcbiAgICAgIGlkPVwiY2hhcnQtY29udGFpbmVyXCJcbiAgICAgIGp1c3RpZnk9XCJjZW50ZXJcIlxuICAgID5cbiAgICAgIDxCb3hcbiAgICAgICAgcmVmPXtzdmdXcmFwcGVyUmVmfVxuICAgICAgICBpZD1cImNoYXJ0LWJhY2tncm91bmQtZ3JhZGllbnRcIlxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8c3ZnIGNsYXNzTmFtZT0nY2hhcnQtYmcnIHJvbGU9J2ltZyc+XG4gICAgICAgICAgPHVzZSB4bGlua0hyZWY9JyNjaGFydC1iZyc+PC91c2U+XG4gICAgICAgIDwvc3ZnPlxuICAgICAgPC9Cb3g+XG4gICAgICA8TGluZUNoYXJ0IHdpZHRoPXs2NzV9IGhlaWdodD17MzgwfSBkYXRhPXtjaGFydERhdGF9PlxuICAgICAgICA8TGluZSB0eXBlPVwibmF0dXJhbFwiIGRhdGFLZXk9XCJ0aW1lVmFsdWVcIiBzdHJva2U9XCIjODg4NGQ4XCIgLz5cbiAgICAgICAgPENhcnRlc2lhbkdyaWQgc3Ryb2tlPVwiI2NjY1wiIHN0cm9rZURhc2hhcnJheT1cIjUgNVwiIC8+XG4gICAgICAgIDxZQXhpcyBsYWJlbD17eyB2YWx1ZTogJ0V4ZWN1dGlvbiBUaW1lJywgYW5nbGU6IC05MCwgcG9zaXRpb246ICdMZWZ0JyB9fSB0aWNrRm9ybWF0dGVyPXtlbXB0eVN0cmluZ0Zvcm1hdHRlcn0gLz5cbiAgICAgICAgPFhBeGlzIGxhYmVsPXt7IHZhbHVlOiAnUnVuIENvdW50Jywgb2Zmc2V0OiAwLCBwb3NpdGlvbjogJ0JvdHRvbScgfX0gdGlja0Zvcm1hdHRlcj17ZW1wdHlTdHJpbmdGb3JtYXR0ZXJ9IC8+XG4gICAgICA8L0xpbmVDaGFydD5cbiAgICA8L0JveD5cbiAgKTtcbn1cbiIsImltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20vY2xpZW50JztcblxuaW1wb3J0IEFwcCBmcm9tICcuL0FwcCc7XG5cbmNvbnN0IGFwcEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluI2FwcCcpO1xuXG5pZiAoIWFwcEVsZW1lbnQpIHtcbiAgdGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IEZpbmQgQXBwbGljYXRpb24gTWFpbiBEb20gRWxlbWVudFwiKTtcbn1cblxuY29uc3QgZG9tUm9vdCA9IFJlYWN0RE9NLmNyZWF0ZVJvb3QoYXBwRWxlbWVudCk7XG5cbmRvbVJvb3QucmVuZGVyKDxBcHAgLz4pO1xuIiwiY29uc3QgY29tbW9uQnJhbmRDb2xvcnMgPSB7XG4gIHN1Y2Nlc3NDb2xvcjogJyMwMGQ2MjQnLFxuICBlcnJvckNvbG9yOiAnI2JkMmMwMCcsXG4gIHdhcm5pbmdDb2xvcjogJyNjOTUxMGMnLFxuICBpbmZvQ29sb3I6ICcjNjNjMGRmJyxcbn07XG5cbmNvbnN0IHB1cnBsZXMgPSB7XG4gIHB1cnBsZTogJyM2MjBDRTMnLFxuICBwdXJwbGVIb3ZlcjogJyM2OTM2Q0YnLFxuICBwdXJwbGVEYXJrZXI6ICcjM0MxMzhGJyxcbiAgcHVycGxlRGlzYWJsZWQ6ICcjMjcyNzI3Jyxcbn07XG5cbmNvbnN0IHllbGxvd3MgPSB7XG4gIHllbGxvdzogJyNGQ0FFMDAnLFxuICB5ZWxsb3dIb3ZlcjogJyNGQkI5MjYnLFxuICB5ZWxsb3dEYXJrZXI6ICcjRjVBNjIzJyxcbiAgeWVsbG93RGlzYWJsZWQ6ICcjRkJGMEIzJyxcbn07XG5cbmNvbnN0IGdyZXlzID0ge1xuICB0cnVlQmxhY2s6ICcjMDAwMDAwJyxcbiAgb2ZmQmxhY2s6ICcjMjIyMjIyJyxcbiAgZGFya0dyZXk6ICcjMzMzMzMzJyxcbiAgbWVkaXVtR3JleTogJyM2NjY2NjYnLFxuICBsaWdodEdyZXk6ICcjOTk5OTk5JyxcbiAgb2ZmV2hpdGU6ICcjZjVmNWY1JyxcbiAgdHJ1ZVdoaXRlOiAnI2ZmZmZmZicsXG59O1xuXG5jb25zdCBncmVlbnMgPSB7XG4gIGdyZWVuOiAnIzJBQ0E0QicsXG4gIGdyZWVuSG92ZXI6ICcjMTk5RTMzJyxcbiAgZ3JlZW5EYXJrZXI6ICcjMDA2NjA3JyxcbiAgZ3JlZW5EaXNhYmxlZDogJyM5NEU0QTUnLFxufTtcblxuY29uc3QgbWludHMgPSB7XG4gIG1pbnQ6ICcjMTU5Rjg0JyxcbiAgbWludEhvdmVyOiAnIzBCODU2RCcsXG4gIG1pbnREYXJrZXI6ICcjMDQ1OTQzJyxcbiAgbWludERpc2FibGVkOiAnIzhBQ0ZDMScsXG59O1xuXG5jb25zdCBibHVlcyA9IHtcbiAgYmx1ZTogJyMwMDdGRkYnLFxuICBibHVlSG92ZXI6ICcjMDA2NkNDJyxcbiAgYmx1ZURhcmtlcjogJyMwMDNFODMnLFxuICBibHVlRGlzYWJsZWQ6ICcjN0ZCRkZGJyxcbn07XG5cbmNvbnN0IHJlZHMgPSB7XG4gIHJlZDogJyNEODUyNEUnLFxuICByZWRIb3ZlcjogJyNCMzNDMzgnLFxuICByZWREYXJrZXI6ICcjQTUyNzI0JyxcbiAgcmVkRGlzYWJsZWQ6ICcjRUJBOEE2Jyxcbn07XG5cbmNvbnN0IGNvbG9ycyA9IHtcbiAgLi4uY29tbW9uQnJhbmRDb2xvcnMsXG4gIC4uLnB1cnBsZXMsXG4gIC4uLnllbGxvd3MsXG4gIC4uLmdyZXlzLFxuICAuLi5ncmVlbnMsXG4gIC4uLm1pbnRzLFxuICAuLi5ibHVlcyxcbiAgLi4ucmVkcyxcbn07XG5cbmNvbnN0IGFwcGxpY2F0aW9uVGhlbWUgPSB7XG4gIGdsb2JhbDoge1xuICAgICcqJzoge1xuICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICBtYXJnaW46IDAsXG4gICAgICBwYWRkaW5nOiAwLFxuICAgIH0sXG4gICAgY29sb3JzOiB7IC4uLmNvbG9ycyB9LFxuICAgIGZvbnQ6IHtcbiAgICAgIGZhbWlseTogJ1NvdXJjZSBDb2RlIFBybycsXG4gICAgICBoZWlnaHQ6ICcxLjVyZW0nLFxuICAgICAgc2l6ZTogJzFyZW0nLFxuICAgICAgd2VpZ2h0OiA0MDAsXG4gICAgfSxcbiAgfSxcbiAgYnV0dG9uOiB7XG4gICAgYWN0aXZlOiB7XG4gICAgICBjb2xvcjogY29sb3JzLnRydWVXaGl0ZSxcbiAgICAgIGJvcmRlcjoge1xuICAgICAgICByYWRpdXM6ICcwLjVyZW0nLFxuICAgICAgICB3aWR0aDogJzFweCcsXG4gICAgICB9LFxuICAgIH0sXG4gICAgYm9yZGVyOiB7XG4gICAgICByYWRpdXM6ICcwLjVyZW0nLFxuICAgICAgd2lkdGg6ICcxcHgnLFxuICAgIH0sXG4gICAgaG92ZXI6IHtcbiAgICAgIGJveFNoYWRvdzogJ25vbmUnLFxuICAgICAgYm9yZGVyOiB7XG4gICAgICAgIHJhZGl1czogJzAuNXJlbScsXG4gICAgICAgIHdpZHRoOiAnMXB4JyxcbiAgICAgIH0sXG4gICAgfSxcbiAgICB0cmFuc2l0aW9uOiB7XG4gICAgICBwcm9wZXJ0aWVzOiBbJ2JveC1zaGFkb3cnXSxcbiAgICB9LFxuICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgYXBwbGljYXRpb25UaGVtZTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==