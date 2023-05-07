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
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(grommet__WEBPACK_IMPORTED_MODULE_2__.Box, { fill: true, align: "center", id: "chart-container", justify: "center", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(grommet__WEBPACK_IMPORTED_MODULE_2__.Box, { style: {
                    position: 'absolute',
                }, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", { id: "chart-background", className: 'img', role: 'img', children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("use", { xlinkHref: '#chart-bg' }) }) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(recharts__WEBPACK_IMPORTED_MODULE_3__.LineChart, { width: 675, height: 380, data: chartData, children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(recharts__WEBPACK_IMPORTED_MODULE_4__.Line, { type: "natural", dataKey: "timeValue", stroke: "#8884d8" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(recharts__WEBPACK_IMPORTED_MODULE_5__.CartesianGrid, { stroke: "#ccc", strokeDasharray: "5 5" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(recharts__WEBPACK_IMPORTED_MODULE_6__.YAxis, { label: { value: 'Execution Time', angle: -90, position: 'Left' }, tickFormatter: emptyStringFormatter }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(recharts__WEBPACK_IMPORTED_MODULE_7__.XAxis, { label: { value: 'Iteration Count', offset: 0, position: 'Bottom' }, tickFormatter: emptyStringFormatter })] })] }));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TUFBTSxFQUFFO1FBQ3JCLElBQUksRUFBRTtZQUNKLE1BQU0sRUFBRSxpQkFBaUI7WUFDekIsTUFBTSxFQUFFLFFBQVE7WUFDaEIsSUFBSSxFQUFFLE1BQU07WUFDWixNQUFNLEVBQUUsR0FBRztTQUNaO0tBQ0Y7SUFDRCxNQUFNLEVBQUU7UUFDTixNQUFNLEVBQUU7WUFDTixLQUFLLEVBQUUsTUFBTSxDQUFDLFNBQVM7WUFDdkIsTUFBTSxFQUFFO2dCQUNOLE1BQU0sRUFBRSxRQUFRO2dCQUNoQixLQUFLLEVBQUUsS0FBSzthQUNiO1NBQ0Y7UUFDRCxNQUFNLEVBQUU7WUFDTixNQUFNLEVBQUUsUUFBUTtZQUNoQixLQUFLLEVBQUUsS0FBSztTQUNiO1FBQ0QsS0FBSyxFQUFFO1lBQ0wsU0FBUyxFQUFFLE1BQU07WUFDakIsTUFBTSxFQUFFO2dCQUNOLE1BQU0sRUFBRSxRQUFRO2dCQUNoQixLQUFLLEVBQUUsS0FBSzthQUNiO1NBQ0Y7UUFDRCxVQUFVLEVBQUU7WUFDVixVQUFVLEVBQUUsQ0FBQyxZQUFZLENBQUM7U0FDM0I7S0FDRjtDQUNGLENBQUM7QUFFRixpRUFBZSxnQkFBZ0IsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RpbWUtY29tcGxleGl0eS1ncmFwaC8uL3NyYy90cy9BcHAudHN4Iiwid2VicGFjazovL3RpbWUtY29tcGxleGl0eS1ncmFwaC8uL3NyYy90cy9jb21wb25lbnRzL0NoYXJ0L2luZGV4LnRzeCIsIndlYnBhY2s6Ly90aW1lLWNvbXBsZXhpdHktZ3JhcGgvLi9zcmMvdHMvaW5kZXgudHN4Iiwid2VicGFjazovL3RpbWUtY29tcGxleGl0eS1ncmFwaC8uL3NyYy90cy90aGVtZS50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgR3JvbW1ldCB9IGZyb20gJ2dyb21tZXQnO1xuXG5pbXBvcnQgYXBwbGljYXRpb25UaGVtZSBmcm9tICcuL3RoZW1lJztcblxuaW1wb3J0IENoYXJ0IGZyb20gJ0NvbXBvbmVudHMvQ2hhcnQnXG5pbXBvcnQgeyBDaGFydE5vZGUgfSBmcm9tICdUeXBlcy9hcHAnO1xuXG4vKipcbiAqIFRoZSBtYWluIGVudHJ5IHBvaW50IG9mIHRoZSBBcHBsaWNhdGlvbi5cbiAqIEByZXR1cm4ge0pTWC5FbGVtZW50fVxuICogQGZ1bmN0aW9uXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCgpOiBKU1guRWxlbWVudCB7XG5cbiAgLy8gV2hlbiB0aGUgY29tcG9uZW50IG1vdW50cyAuLi5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zb2xlLmxvZygnQXBwIG1vdW50ZWQhJyk7XG4gIH0sIFtdKTtcblxuXG4gIC8vIEZJWE1FOiB0ZW1wb3JhcnkgZGF0YVxuICBjb25zdCBjaGFydERhdGE6IENoYXJ0Tm9kZVtdID0gW1xuICAgIHsgaXRlcmF0aW9uQ291bnQ6IDEwLCAgICAgdGltZVZhbHVlOiAxMDAwIH0sXG4gICAgeyBpdGVyYXRpb25Db3VudDogNTAsICAgICB0aW1lVmFsdWU6IDUwMDAgfSxcbiAgICB7IGl0ZXJhdGlvbkNvdW50OiAxMDAsICAgIHRpbWVWYWx1ZTogMTAwMDAgfSxcbiAgICB7IGl0ZXJhdGlvbkNvdW50OiA1MDAsICAgIHRpbWVWYWx1ZTogNTAwMDAgfSxcbiAgICB7IGl0ZXJhdGlvbkNvdW50OiAxMDAwLCAgIHRpbWVWYWx1ZTogMTAwMDAwIH0sXG4gICAgeyBpdGVyYXRpb25Db3VudDogNTAwMCwgICB0aW1lVmFsdWU6IDUwMDAwMCB9LFxuICAgIHsgaXRlcmF0aW9uQ291bnQ6IDEwMDAwLCAgdGltZVZhbHVlOiAxMDAwMDAwIH0sXG4gICAgeyBpdGVyYXRpb25Db3VudDogNTAwMDAsICB0aW1lVmFsdWU6IDUwMDAwMDAgfSxcbiAgICB7IGl0ZXJhdGlvbkNvdW50OiAxMDAwMDAsIHRpbWVWYWx1ZTogMTAwMDAwMDAgfSxcbiAgXTtcblxuICByZXR1cm4gKFxuICAgIDxHcm9tbWV0IHRoZW1lPXthcHBsaWNhdGlvblRoZW1lfT5cbiAgICAgIDxDaGFydCBjaGFydERhdGE9e2NoYXJ0RGF0YX0gLz5cbiAgICA8L0dyb21tZXQ+XG4gICk7XG59XG4iLCJpbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBCb3ggfSBmcm9tICdncm9tbWV0JztcbmltcG9ydCB7XG4gIExpbmVDaGFydCxcbiAgTGluZSxcbiAgQ2FydGVzaWFuR3JpZCxcbiAgWEF4aXMsXG4gIFlBeGlzXG59IGZyb20gJ3JlY2hhcnRzJztcblxuaW1wb3J0IHsgQ2hhcnROb2RlIH0gZnJvbSAnVHlwZXMvYXBwJztcblxuLyoqXG4gKiBGb3JtYXR0ZXIgZm9yIFRpY2tzIG9mIFgvWSBBeGlzIHRvIHJldHVybiBlbXB0eSBzdHJpbmdcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqIEBmdW5jdGlvblxuICovXG5jb25zdCBlbXB0eVN0cmluZ0Zvcm1hdHRlciA9ICgpID0+IFwiXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2hhcnRQcm9wcyB7XG4gIGNoYXJ0RGF0YTogQ2hhcnROb2RlW107XG59O1xuXG4vKipcbiAqIENyZWF0ZXMgYSByZWNoYXJ0cyBMaW5lIENoYXJ0IHBsb3R0aW5nIHBvaW50cyBvZiBkYXRhXG4gKiBAcmV0dXJuIHtKU1guRWxlbWVudH1cbiAqIEBmdW5jdGlvblxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDaGFydCh7XG4gIGNoYXJ0RGF0YSxcbn06IENoYXJ0UHJvcHMpOiBKU1guRWxlbWVudCB7XG4gIC8vIG9uIGNvbXBvbmVudCBtb3VudCAtIGNhbGN1bGF0ZSBjb29yZGluYXRlcyBvZiBsaW5lIGNoYXJ0IHRvIHBvc2l0aW9uIGJhY2tncm91bmRcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBjaGFydEVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZy5yZWNoYXJ0cy1saW5lJyk7XG4gICAgLy8gY29uc3QgY2hhcnRCRyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3N2ZyNjaGFydC1iYWNrZ3JvdW5kJylcbiAgICBjb25zdCBjaGFydENvb3JkaW5hdGVzID0gY2hhcnRFbD8uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgY29uc29sZS5sb2coJzo6JywgY2hhcnRDb29yZGluYXRlcylcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPEJveFxuICAgICAgZmlsbFxuICAgICAgYWxpZ249XCJjZW50ZXJcIlxuICAgICAgaWQ9XCJjaGFydC1jb250YWluZXJcIlxuICAgICAganVzdGlmeT1cImNlbnRlclwiXG4gICAgPlxuICAgICAgPEJveFxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8c3ZnIGlkPVwiY2hhcnQtYmFja2dyb3VuZFwiIGNsYXNzTmFtZT0naW1nJyByb2xlPSdpbWcnPlxuICAgICAgICAgIDx1c2UgeGxpbmtIcmVmPScjY2hhcnQtYmcnPjwvdXNlPlxuICAgICAgICA8L3N2Zz5cbiAgICAgIDwvQm94PlxuICAgICAgPExpbmVDaGFydCB3aWR0aD17Njc1fSBoZWlnaHQ9ezM4MH0gZGF0YT17Y2hhcnREYXRhfT5cbiAgICAgICAgPExpbmUgdHlwZT1cIm5hdHVyYWxcIiBkYXRhS2V5PVwidGltZVZhbHVlXCIgc3Ryb2tlPVwiIzg4ODRkOFwiIC8+XG4gICAgICAgIDxDYXJ0ZXNpYW5HcmlkIHN0cm9rZT1cIiNjY2NcIiBzdHJva2VEYXNoYXJyYXk9XCI1IDVcIiAvPlxuICAgICAgICA8WUF4aXMgbGFiZWw9e3sgdmFsdWU6ICdFeGVjdXRpb24gVGltZScsIGFuZ2xlOiAtOTAsIHBvc2l0aW9uOiAnTGVmdCcgfX0gdGlja0Zvcm1hdHRlcj17ZW1wdHlTdHJpbmdGb3JtYXR0ZXJ9IC8+XG4gICAgICAgIDxYQXhpcyBsYWJlbD17eyB2YWx1ZTogJ0l0ZXJhdGlvbiBDb3VudCcsIG9mZnNldDogMCwgcG9zaXRpb246ICdCb3R0b20nIH19IHRpY2tGb3JtYXR0ZXI9e2VtcHR5U3RyaW5nRm9ybWF0dGVyfSAvPlxuICAgICAgPC9MaW5lQ2hhcnQ+XG4gICAgPC9Cb3g+XG4gICk7XG59XG4iLCJpbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tL2NsaWVudCc7XG5cbmltcG9ydCBBcHAgZnJvbSAnLi9BcHAnO1xuXG5jb25zdCBhcHBFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbiNhcHAnKTtcblxuaWYgKCFhcHBFbGVtZW50KSB7XG4gIHRocm93IG5ldyBFcnJvcihcIkNhbm5vdCBGaW5kIEFwcGxpY2F0aW9uIE1haW4gRG9tIEVsZW1lbnRcIik7XG59XG5cbmNvbnN0IGRvbVJvb3QgPSBSZWFjdERPTS5jcmVhdGVSb290KGFwcEVsZW1lbnQpO1xuXG5kb21Sb290LnJlbmRlcig8QXBwIC8+KTtcbiIsImNvbnN0IGNvbW1vbkJyYW5kQ29sb3JzID0ge1xuICBzdWNjZXNzQ29sb3I6ICcjMDBkNjI0JyxcbiAgZXJyb3JDb2xvcjogJyNiZDJjMDAnLFxuICB3YXJuaW5nQ29sb3I6ICcjYzk1MTBjJyxcbiAgaW5mb0NvbG9yOiAnIzYzYzBkZicsXG59O1xuXG5jb25zdCBwdXJwbGVzID0ge1xuICBwdXJwbGU6ICcjNjIwQ0UzJyxcbiAgcHVycGxlSG92ZXI6ICcjNjkzNkNGJyxcbiAgcHVycGxlRGFya2VyOiAnIzNDMTM4RicsXG4gIHB1cnBsZURpc2FibGVkOiAnIzI3MjcyNycsXG59O1xuXG5jb25zdCB5ZWxsb3dzID0ge1xuICB5ZWxsb3c6ICcjRkNBRTAwJyxcbiAgeWVsbG93SG92ZXI6ICcjRkJCOTI2JyxcbiAgeWVsbG93RGFya2VyOiAnI0Y1QTYyMycsXG4gIHllbGxvd0Rpc2FibGVkOiAnI0ZCRjBCMycsXG59O1xuXG5jb25zdCBncmV5cyA9IHtcbiAgdHJ1ZUJsYWNrOiAnIzAwMDAwMCcsXG4gIG9mZkJsYWNrOiAnIzIyMjIyMicsXG4gIGRhcmtHcmV5OiAnIzMzMzMzMycsXG4gIG1lZGl1bUdyZXk6ICcjNjY2NjY2JyxcbiAgbGlnaHRHcmV5OiAnIzk5OTk5OScsXG4gIG9mZldoaXRlOiAnI2Y1ZjVmNScsXG4gIHRydWVXaGl0ZTogJyNmZmZmZmYnLFxufTtcblxuY29uc3QgZ3JlZW5zID0ge1xuICBncmVlbjogJyMyQUNBNEInLFxuICBncmVlbkhvdmVyOiAnIzE5OUUzMycsXG4gIGdyZWVuRGFya2VyOiAnIzAwNjYwNycsXG4gIGdyZWVuRGlzYWJsZWQ6ICcjOTRFNEE1Jyxcbn07XG5cbmNvbnN0IG1pbnRzID0ge1xuICBtaW50OiAnIzE1OUY4NCcsXG4gIG1pbnRIb3ZlcjogJyMwQjg1NkQnLFxuICBtaW50RGFya2VyOiAnIzA0NTk0MycsXG4gIG1pbnREaXNhYmxlZDogJyM4QUNGQzEnLFxufTtcblxuY29uc3QgYmx1ZXMgPSB7XG4gIGJsdWU6ICcjMDA3RkZGJyxcbiAgYmx1ZUhvdmVyOiAnIzAwNjZDQycsXG4gIGJsdWVEYXJrZXI6ICcjMDAzRTgzJyxcbiAgYmx1ZURpc2FibGVkOiAnIzdGQkZGRicsXG59O1xuXG5jb25zdCByZWRzID0ge1xuICByZWQ6ICcjRDg1MjRFJyxcbiAgcmVkSG92ZXI6ICcjQjMzQzM4JyxcbiAgcmVkRGFya2VyOiAnI0E1MjcyNCcsXG4gIHJlZERpc2FibGVkOiAnI0VCQThBNicsXG59O1xuXG5jb25zdCBjb2xvcnMgPSB7XG4gIC4uLmNvbW1vbkJyYW5kQ29sb3JzLFxuICAuLi5wdXJwbGVzLFxuICAuLi55ZWxsb3dzLFxuICAuLi5ncmV5cyxcbiAgLi4uZ3JlZW5zLFxuICAuLi5taW50cyxcbiAgLi4uYmx1ZXMsXG4gIC4uLnJlZHMsXG59O1xuXG5jb25zdCBhcHBsaWNhdGlvblRoZW1lID0ge1xuICBnbG9iYWw6IHtcbiAgICAnKic6IHtcbiAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgbWFyZ2luOiAwLFxuICAgICAgcGFkZGluZzogMCxcbiAgICB9LFxuICAgIGNvbG9yczogeyAuLi5jb2xvcnMgfSxcbiAgICBmb250OiB7XG4gICAgICBmYW1pbHk6ICdTb3VyY2UgQ29kZSBQcm8nLFxuICAgICAgaGVpZ2h0OiAnMS41cmVtJyxcbiAgICAgIHNpemU6ICcxcmVtJyxcbiAgICAgIHdlaWdodDogNDAwLFxuICAgIH0sXG4gIH0sXG4gIGJ1dHRvbjoge1xuICAgIGFjdGl2ZToge1xuICAgICAgY29sb3I6IGNvbG9ycy50cnVlV2hpdGUsXG4gICAgICBib3JkZXI6IHtcbiAgICAgICAgcmFkaXVzOiAnMC41cmVtJyxcbiAgICAgICAgd2lkdGg6ICcxcHgnLFxuICAgICAgfSxcbiAgICB9LFxuICAgIGJvcmRlcjoge1xuICAgICAgcmFkaXVzOiAnMC41cmVtJyxcbiAgICAgIHdpZHRoOiAnMXB4JyxcbiAgICB9LFxuICAgIGhvdmVyOiB7XG4gICAgICBib3hTaGFkb3c6ICdub25lJyxcbiAgICAgIGJvcmRlcjoge1xuICAgICAgICByYWRpdXM6ICcwLjVyZW0nLFxuICAgICAgICB3aWR0aDogJzFweCcsXG4gICAgICB9LFxuICAgIH0sXG4gICAgdHJhbnNpdGlvbjoge1xuICAgICAgcHJvcGVydGllczogWydib3gtc2hhZG93J10sXG4gICAgfSxcbiAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGFwcGxpY2F0aW9uVGhlbWU7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=