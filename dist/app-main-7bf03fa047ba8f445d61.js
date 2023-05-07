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
                }, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", { className: 'chart-bg', role: 'img', children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("use", { xlinkHref: '#chart-bg' }) }) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(recharts__WEBPACK_IMPORTED_MODULE_3__.LineChart, { width: 675, height: 380, data: chartData, children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(recharts__WEBPACK_IMPORTED_MODULE_4__.Line, { type: "natural", dataKey: "timeValue", stroke: "#8884d8" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(recharts__WEBPACK_IMPORTED_MODULE_5__.CartesianGrid, { stroke: "#ccc", strokeDasharray: "5 5" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(recharts__WEBPACK_IMPORTED_MODULE_6__.YAxis, { label: { value: 'Execution Time', angle: -90, position: 'Left' }, tickFormatter: emptyStringFormatter }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(recharts__WEBPACK_IMPORTED_MODULE_7__.XAxis, { label: { value: 'Iteration Count', offset: 0, position: 'Bottom' }, tickFormatter: emptyStringFormatter })] })] }));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUssRUFBRSxLQUFLO2FBQ2I7U0FDRjtRQUNELFVBQVUsRUFBRTtZQUNWLFVBQVUsRUFBRSxDQUFDLFlBQVksQ0FBQztTQUMzQjtLQUNGO0NBQ0YsQ0FBQztBQUVGLGlFQUFlLGdCQUFnQixFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGltZS1jb21wbGV4aXR5LWdyYXBoLy4vc3JjL3RzL0FwcC50c3giLCJ3ZWJwYWNrOi8vdGltZS1jb21wbGV4aXR5LWdyYXBoLy4vc3JjL3RzL2NvbXBvbmVudHMvQ2hhcnQvaW5kZXgudHN4Iiwid2VicGFjazovL3RpbWUtY29tcGxleGl0eS1ncmFwaC8uL3NyYy90cy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vdGltZS1jb21wbGV4aXR5LWdyYXBoLy4vc3JjL3RzL3RoZW1lLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBHcm9tbWV0IH0gZnJvbSAnZ3JvbW1ldCc7XG5cbmltcG9ydCBhcHBsaWNhdGlvblRoZW1lIGZyb20gJy4vdGhlbWUnO1xuXG5pbXBvcnQgQ2hhcnQgZnJvbSAnQ29tcG9uZW50cy9DaGFydCdcbmltcG9ydCB7IENoYXJ0Tm9kZSB9IGZyb20gJ1R5cGVzL2FwcCc7XG5cbi8qKlxuICogVGhlIG1haW4gZW50cnkgcG9pbnQgb2YgdGhlIEFwcGxpY2F0aW9uLlxuICogQHJldHVybiB7SlNYLkVsZW1lbnR9XG4gKiBAZnVuY3Rpb25cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKCk6IEpTWC5FbGVtZW50IHtcblxuICAvLyBXaGVuIHRoZSBjb21wb25lbnQgbW91bnRzIC4uLlxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdBcHAgbW91bnRlZCEnKTtcbiAgfSwgW10pO1xuXG5cbiAgLy8gRklYTUU6IHRlbXBvcmFyeSBkYXRhXG4gIGNvbnN0IGNoYXJ0RGF0YTogQ2hhcnROb2RlW10gPSBbXG4gICAgeyBydW5Db3VudDogMTAsICAgICB0aW1lVmFsdWU6IDEwMDAgfSxcbiAgICB7IHJ1bkNvdW50OiA1MCwgICAgIHRpbWVWYWx1ZTogNTAwMCB9LFxuICAgIHsgcnVuQ291bnQ6IDEwMCwgICAgdGltZVZhbHVlOiAxMDAwMCB9LFxuICAgIHsgcnVuQ291bnQ6IDUwMCwgICAgdGltZVZhbHVlOiA1MDAwMCB9LFxuICAgIHsgcnVuQ291bnQ6IDEwMDAsICAgdGltZVZhbHVlOiAxMDAwMDAgfSxcbiAgICB7IHJ1bkNvdW50OiA1MDAwLCAgIHRpbWVWYWx1ZTogNTAwMDAwIH0sXG4gICAgeyBydW5Db3VudDogMTAwMDAsICB0aW1lVmFsdWU6IDEwMDAwMDAgfSxcbiAgICB7IHJ1bkNvdW50OiA1MDAwMCwgIHRpbWVWYWx1ZTogNTAwMDAwMCB9LFxuICAgIHsgcnVuQ291bnQ6IDEwMDAwMCwgdGltZVZhbHVlOiAxMDAwMDAwMCB9LFxuICBdO1xuXG4gIHJldHVybiAoXG4gICAgPEdyb21tZXQgdGhlbWU9e2FwcGxpY2F0aW9uVGhlbWV9PlxuICAgICAgPENoYXJ0IGNoYXJ0RGF0YT17Y2hhcnREYXRhfSAvPlxuICAgIDwvR3JvbW1ldD5cbiAgKTtcbn1cbiIsImltcG9ydCB7IHVzZVJlZiwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQm94IH0gZnJvbSAnZ3JvbW1ldCc7XG5pbXBvcnQge1xuICBMaW5lQ2hhcnQsXG4gIExpbmUsXG4gIENhcnRlc2lhbkdyaWQsXG4gIFhBeGlzLFxuICBZQXhpc1xufSBmcm9tICdyZWNoYXJ0cyc7XG5cbmltcG9ydCB7IENoYXJ0Tm9kZSB9IGZyb20gJ1R5cGVzL2FwcCc7XG5cbi8qKlxuICogRm9ybWF0dGVyIGZvciBUaWNrcyBvZiBYL1kgQXhpcyB0byByZXR1cm4gZW1wdHkgc3RyaW5nXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKiBAZnVuY3Rpb25cbiAqL1xuY29uc3QgZW1wdHlTdHJpbmdGb3JtYXR0ZXIgPSAoKSA9PiBcIlwiO1xuXG4vKipcbiAqIENTUyBzdHlsZSBzdHJpbmcgZm9ybWF0dGVyXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKiBAZnVuY3Rpb25cbiAqL1xuY29uc3QgY3NzU3R5bGVGb3JtYXR0ZXIgPSAodmFsdWU6IG51bWJlcikgPT4gYCR7dmFsdWV9cHhgO1xuXG5leHBvcnQgaW50ZXJmYWNlIENoYXJ0UHJvcHMge1xuICBjaGFydERhdGE6IENoYXJ0Tm9kZVtdO1xufTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgcmVjaGFydHMgTGluZSBDaGFydCBwbG90dGluZyBwb2ludHMgb2YgZGF0YVxuICogQHJldHVybiB7SlNYLkVsZW1lbnR9XG4gKiBAZnVuY3Rpb25cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2hhcnQoe1xuICBjaGFydERhdGEsXG59OiBDaGFydFByb3BzKTogSlNYLkVsZW1lbnQge1xuICBjb25zdCBzdmdXcmFwcGVyUmVmID0gdXNlUmVmPEhUTUxEaXZFbGVtZW50PihudWxsKTtcblxuICAvLyBvbiBjb21wb25lbnQgbW91bnQgLSBjYWxjdWxhdGUgY29vcmRpbmF0ZXMgb2YgbGluZSBjaGFydCB0byBwb3NpdGlvbiBiYWNrZ3JvdW5kXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3Qgc3ZnV3JhcHBlciA9IHN2Z1dyYXBwZXJSZWYuY3VycmVudDtcbiAgICBpZiAoc3ZnV3JhcHBlcikge1xuICAgICAgLy8gc3ZnV3JhcHBlclJlZiBwcmVzZW50IC0gcG9zaXRpb24gYmFja2dyb3VuZCBzdmdcbiAgICAgIGNvbnN0IGNoYXJ0RWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdnLnJlY2hhcnRzLWxpbmUnKTtcbiAgICAgIGNvbnN0IGNoYXJ0Q29vcmRpbmF0ZXMgPSBjaGFydEVsPy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAgICAgc3ZnV3JhcHBlci5zdHlsZS5sZWZ0ID0gY3NzU3R5bGVGb3JtYXR0ZXIoY2hhcnRDb29yZGluYXRlcz8ueCA/PyAwKTtcbiAgICAgIHN2Z1dyYXBwZXIuc3R5bGUudG9wID0gY3NzU3R5bGVGb3JtYXR0ZXIoY2hhcnRDb29yZGluYXRlcz8ueSA/PyAwKTtcbiAgICAgIHN2Z1dyYXBwZXIuc3R5bGUuaGVpZ2h0ID0gY3NzU3R5bGVGb3JtYXR0ZXIoY2hhcnRDb29yZGluYXRlcz8uaGVpZ2h0ID8/IDApO1xuICAgICAgc3ZnV3JhcHBlci5zdHlsZS53aWR0aCA9IGNzc1N0eWxlRm9ybWF0dGVyKGNoYXJ0Q29vcmRpbmF0ZXM/LndpZHRoID8/IDApO1xuICAgIH1cbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPEJveFxuICAgICAgZmlsbFxuICAgICAgYWxpZ249XCJjZW50ZXJcIlxuICAgICAgaWQ9XCJjaGFydC1jb250YWluZXJcIlxuICAgICAganVzdGlmeT1cImNlbnRlclwiXG4gICAgPlxuICAgICAgPEJveFxuICAgICAgICByZWY9e3N2Z1dyYXBwZXJSZWZ9XG4gICAgICAgIGlkPVwiY2hhcnQtYmFja2dyb3VuZC1ncmFkaWVudFwiXG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxzdmcgY2xhc3NOYW1lPSdjaGFydC1iZycgcm9sZT0naW1nJz5cbiAgICAgICAgICA8dXNlIHhsaW5rSHJlZj0nI2NoYXJ0LWJnJz48L3VzZT5cbiAgICAgICAgPC9zdmc+XG4gICAgICA8L0JveD5cbiAgICAgIDxMaW5lQ2hhcnQgd2lkdGg9ezY3NX0gaGVpZ2h0PXszODB9IGRhdGE9e2NoYXJ0RGF0YX0+XG4gICAgICAgIDxMaW5lIHR5cGU9XCJuYXR1cmFsXCIgZGF0YUtleT1cInRpbWVWYWx1ZVwiIHN0cm9rZT1cIiM4ODg0ZDhcIiAvPlxuICAgICAgICA8Q2FydGVzaWFuR3JpZCBzdHJva2U9XCIjY2NjXCIgc3Ryb2tlRGFzaGFycmF5PVwiNSA1XCIgLz5cbiAgICAgICAgPFlBeGlzIGxhYmVsPXt7IHZhbHVlOiAnRXhlY3V0aW9uIFRpbWUnLCBhbmdsZTogLTkwLCBwb3NpdGlvbjogJ0xlZnQnIH19IHRpY2tGb3JtYXR0ZXI9e2VtcHR5U3RyaW5nRm9ybWF0dGVyfSAvPlxuICAgICAgICA8WEF4aXMgbGFiZWw9e3sgdmFsdWU6ICdJdGVyYXRpb24gQ291bnQnLCBvZmZzZXQ6IDAsIHBvc2l0aW9uOiAnQm90dG9tJyB9fSB0aWNrRm9ybWF0dGVyPXtlbXB0eVN0cmluZ0Zvcm1hdHRlcn0gLz5cbiAgICAgIDwvTGluZUNoYXJ0PlxuICAgIDwvQm94PlxuICApO1xufVxuIiwiaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbS9jbGllbnQnO1xuXG5pbXBvcnQgQXBwIGZyb20gJy4vQXBwJztcblxuY29uc3QgYXBwRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4jYXBwJyk7XG5cbmlmICghYXBwRWxlbWVudCkge1xuICB0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgRmluZCBBcHBsaWNhdGlvbiBNYWluIERvbSBFbGVtZW50XCIpO1xufVxuXG5jb25zdCBkb21Sb290ID0gUmVhY3RET00uY3JlYXRlUm9vdChhcHBFbGVtZW50KTtcblxuZG9tUm9vdC5yZW5kZXIoPEFwcCAvPik7XG4iLCJjb25zdCBjb21tb25CcmFuZENvbG9ycyA9IHtcbiAgc3VjY2Vzc0NvbG9yOiAnIzAwZDYyNCcsXG4gIGVycm9yQ29sb3I6ICcjYmQyYzAwJyxcbiAgd2FybmluZ0NvbG9yOiAnI2M5NTEwYycsXG4gIGluZm9Db2xvcjogJyM2M2MwZGYnLFxufTtcblxuY29uc3QgcHVycGxlcyA9IHtcbiAgcHVycGxlOiAnIzYyMENFMycsXG4gIHB1cnBsZUhvdmVyOiAnIzY5MzZDRicsXG4gIHB1cnBsZURhcmtlcjogJyMzQzEzOEYnLFxuICBwdXJwbGVEaXNhYmxlZDogJyMyNzI3MjcnLFxufTtcblxuY29uc3QgeWVsbG93cyA9IHtcbiAgeWVsbG93OiAnI0ZDQUUwMCcsXG4gIHllbGxvd0hvdmVyOiAnI0ZCQjkyNicsXG4gIHllbGxvd0RhcmtlcjogJyNGNUE2MjMnLFxuICB5ZWxsb3dEaXNhYmxlZDogJyNGQkYwQjMnLFxufTtcblxuY29uc3QgZ3JleXMgPSB7XG4gIHRydWVCbGFjazogJyMwMDAwMDAnLFxuICBvZmZCbGFjazogJyMyMjIyMjInLFxuICBkYXJrR3JleTogJyMzMzMzMzMnLFxuICBtZWRpdW1HcmV5OiAnIzY2NjY2NicsXG4gIGxpZ2h0R3JleTogJyM5OTk5OTknLFxuICBvZmZXaGl0ZTogJyNmNWY1ZjUnLFxuICB0cnVlV2hpdGU6ICcjZmZmZmZmJyxcbn07XG5cbmNvbnN0IGdyZWVucyA9IHtcbiAgZ3JlZW46ICcjMkFDQTRCJyxcbiAgZ3JlZW5Ib3ZlcjogJyMxOTlFMzMnLFxuICBncmVlbkRhcmtlcjogJyMwMDY2MDcnLFxuICBncmVlbkRpc2FibGVkOiAnIzk0RTRBNScsXG59O1xuXG5jb25zdCBtaW50cyA9IHtcbiAgbWludDogJyMxNTlGODQnLFxuICBtaW50SG92ZXI6ICcjMEI4NTZEJyxcbiAgbWludERhcmtlcjogJyMwNDU5NDMnLFxuICBtaW50RGlzYWJsZWQ6ICcjOEFDRkMxJyxcbn07XG5cbmNvbnN0IGJsdWVzID0ge1xuICBibHVlOiAnIzAwN0ZGRicsXG4gIGJsdWVIb3ZlcjogJyMwMDY2Q0MnLFxuICBibHVlRGFya2VyOiAnIzAwM0U4MycsXG4gIGJsdWVEaXNhYmxlZDogJyM3RkJGRkYnLFxufTtcblxuY29uc3QgcmVkcyA9IHtcbiAgcmVkOiAnI0Q4NTI0RScsXG4gIHJlZEhvdmVyOiAnI0IzM0MzOCcsXG4gIHJlZERhcmtlcjogJyNBNTI3MjQnLFxuICByZWREaXNhYmxlZDogJyNFQkE4QTYnLFxufTtcblxuY29uc3QgY29sb3JzID0ge1xuICAuLi5jb21tb25CcmFuZENvbG9ycyxcbiAgLi4ucHVycGxlcyxcbiAgLi4ueWVsbG93cyxcbiAgLi4uZ3JleXMsXG4gIC4uLmdyZWVucyxcbiAgLi4ubWludHMsXG4gIC4uLmJsdWVzLFxuICAuLi5yZWRzLFxufTtcblxuY29uc3QgYXBwbGljYXRpb25UaGVtZSA9IHtcbiAgZ2xvYmFsOiB7XG4gICAgJyonOiB7XG4gICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgIG1hcmdpbjogMCxcbiAgICAgIHBhZGRpbmc6IDAsXG4gICAgfSxcbiAgICBjb2xvcnM6IHsgLi4uY29sb3JzIH0sXG4gICAgZm9udDoge1xuICAgICAgZmFtaWx5OiAnU291cmNlIENvZGUgUHJvJyxcbiAgICAgIGhlaWdodDogJzEuNXJlbScsXG4gICAgICBzaXplOiAnMXJlbScsXG4gICAgICB3ZWlnaHQ6IDQwMCxcbiAgICB9LFxuICB9LFxuICBidXR0b246IHtcbiAgICBhY3RpdmU6IHtcbiAgICAgIGNvbG9yOiBjb2xvcnMudHJ1ZVdoaXRlLFxuICAgICAgYm9yZGVyOiB7XG4gICAgICAgIHJhZGl1czogJzAuNXJlbScsXG4gICAgICAgIHdpZHRoOiAnMXB4JyxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBib3JkZXI6IHtcbiAgICAgIHJhZGl1czogJzAuNXJlbScsXG4gICAgICB3aWR0aDogJzFweCcsXG4gICAgfSxcbiAgICBob3Zlcjoge1xuICAgICAgYm94U2hhZG93OiAnbm9uZScsXG4gICAgICBib3JkZXI6IHtcbiAgICAgICAgcmFkaXVzOiAnMC41cmVtJyxcbiAgICAgICAgd2lkdGg6ICcxcHgnLFxuICAgICAgfSxcbiAgICB9LFxuICAgIHRyYW5zaXRpb246IHtcbiAgICAgIHByb3BlcnRpZXM6IFsnYm94LXNoYWRvdyddLFxuICAgIH0sXG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBhcHBsaWNhdGlvblRoZW1lO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9