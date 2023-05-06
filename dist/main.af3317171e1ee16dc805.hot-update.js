"use strict";
self["webpackHotUpdatetime_complexity_graph"]("main",{

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
                }, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", { id: "chart-background", className: 'img', role: 'img', children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("use", { xlinkHref: '#chart-bg', preserveAspectRatio: "xMidYMid meet" }) }) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(recharts__WEBPACK_IMPORTED_MODULE_3__.LineChart, { width: 675, height: 380, data: chartData, children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(recharts__WEBPACK_IMPORTED_MODULE_4__.Line, { type: "natural", dataKey: "timeValue", stroke: "#8884d8" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(recharts__WEBPACK_IMPORTED_MODULE_5__.CartesianGrid, { stroke: "#ccc", strokeDasharray: "5 5" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(recharts__WEBPACK_IMPORTED_MODULE_6__.YAxis, { label: { value: 'Execution Time', angle: -90, position: 'Left' }, tickFormatter: emptyStringFormatter }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(recharts__WEBPACK_IMPORTED_MODULE_7__.XAxis, { label: { value: 'Iteration Count', offset: 0, position: 'Bottom' }, tickFormatter: emptyStringFormatter })] })] }));
}


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5hZjMzMTcxNzFlMWVlMTZkYzgwNS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQWtDO0FBQ0o7QUFPWjtBQUlsQjs7OztHQUlHO0FBQ0gsTUFBTSxvQkFBb0IsR0FBRyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUM7QUFJckMsQ0FBQztBQUVGOzs7O0dBSUc7QUFDWSxTQUFTLEtBQUssQ0FBQyxFQUM1QixTQUFTLEdBQ0U7SUFDWCxrRkFBa0Y7SUFDbEYsZ0RBQVMsQ0FBQyxHQUFHLEVBQUU7UUFDYixNQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDMUQsaUVBQWlFO1FBQ2pFLE1BQU0sZ0JBQWdCLEdBQUcsT0FBTyxFQUFFLHFCQUFxQixFQUFFLENBQUM7UUFDMUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUM7SUFDckMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBRVAsT0FBTyxDQUNMLHdEQUFDLHdDQUFHLElBQ0YsSUFBSSxRQUNKLEtBQUssRUFBQyxRQUFRLEVBQ2QsRUFBRSxFQUFDLGlCQUFpQixFQUNwQixPQUFPLEVBQUMsUUFBUSxhQUVoQix1REFBQyx3Q0FBRyxJQUNGLEtBQUssRUFBRTtvQkFDTCxRQUFRLEVBQUUsVUFBVTtpQkFDckIsWUFFRCxnRUFBSyxFQUFFLEVBQUMsa0JBQWtCLEVBQUMsU0FBUyxFQUFDLEtBQUssRUFBQyxJQUFJLEVBQUMsS0FBSyxZQUNuRCxnRUFBSyxTQUFTLEVBQUMsV0FBVyxFQUFDLG1CQUFtQixFQUFDLGVBQWUsR0FBTyxHQUNqRSxHQUNGLEVBQ04sd0RBQUMsK0NBQVMsSUFBQyxLQUFLLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLFNBQVMsYUFDakQsdURBQUMsMENBQUksSUFBQyxJQUFJLEVBQUMsU0FBUyxFQUFDLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxFQUFDLFNBQVMsR0FBRyxFQUM1RCx1REFBQyxtREFBYSxJQUFDLE1BQU0sRUFBQyxNQUFNLEVBQUMsZUFBZSxFQUFDLEtBQUssR0FBRyxFQUNyRCx1REFBQywyQ0FBSyxJQUFDLEtBQUssRUFBRSxFQUFFLEtBQUssRUFBRSxnQkFBZ0IsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxFQUFFLGFBQWEsRUFBRSxvQkFBb0IsR0FBSSxFQUNoSCx1REFBQywyQ0FBSyxJQUFDLEtBQUssRUFBRSxFQUFFLEtBQUssRUFBRSxpQkFBaUIsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsRUFBRSxhQUFhLEVBQUUsb0JBQW9CLEdBQUksSUFDeEcsSUFDUixDQUNQLENBQUM7QUFDSixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGltZS1jb21wbGV4aXR5LWdyYXBoLy4vc3JjL3RzL2NvbXBvbmVudHMvQ2hhcnQvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEJveCB9IGZyb20gJ2dyb21tZXQnO1xuaW1wb3J0IHtcbiAgTGluZUNoYXJ0LFxuICBMaW5lLFxuICBDYXJ0ZXNpYW5HcmlkLFxuICBYQXhpcyxcbiAgWUF4aXNcbn0gZnJvbSAncmVjaGFydHMnO1xuXG5pbXBvcnQgeyBDaGFydE5vZGUgfSBmcm9tICdUeXBlcy9hcHAnO1xuXG4vKipcbiAqIEZvcm1hdHRlciBmb3IgVGlja3Mgb2YgWC9ZIEF4aXMgdG8gcmV0dXJuIGVtcHR5IHN0cmluZ1xuICogQHJldHVybiB7c3RyaW5nfVxuICogQGZ1bmN0aW9uXG4gKi9cbmNvbnN0IGVtcHR5U3RyaW5nRm9ybWF0dGVyID0gKCkgPT4gXCJcIjtcblxuZXhwb3J0IGludGVyZmFjZSBDaGFydFByb3BzIHtcbiAgY2hhcnREYXRhOiBDaGFydE5vZGVbXTtcbn07XG5cbi8qKlxuICogQ3JlYXRlcyBhIHJlY2hhcnRzIExpbmUgQ2hhcnQgcGxvdHRpbmcgcG9pbnRzIG9mIGRhdGFcbiAqIEByZXR1cm4ge0pTWC5FbGVtZW50fVxuICogQGZ1bmN0aW9uXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENoYXJ0KHtcbiAgY2hhcnREYXRhLFxufTogQ2hhcnRQcm9wcyk6IEpTWC5FbGVtZW50IHtcbiAgLy8gb24gY29tcG9uZW50IG1vdW50IC0gY2FsY3VsYXRlIGNvb3JkaW5hdGVzIG9mIGxpbmUgY2hhcnQgdG8gcG9zaXRpb24gYmFja2dyb3VuZFxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGNoYXJ0RWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdnLnJlY2hhcnRzLWxpbmUnKTtcbiAgICAvLyBjb25zdCBjaGFydEJHID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcignc3ZnI2NoYXJ0LWJhY2tncm91bmQnKVxuICAgIGNvbnN0IGNoYXJ0Q29vcmRpbmF0ZXMgPSBjaGFydEVsPy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBjb25zb2xlLmxvZygnOjonLCBjaGFydENvb3JkaW5hdGVzKVxuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8Qm94XG4gICAgICBmaWxsXG4gICAgICBhbGlnbj1cImNlbnRlclwiXG4gICAgICBpZD1cImNoYXJ0LWNvbnRhaW5lclwiXG4gICAgICBqdXN0aWZ5PVwiY2VudGVyXCJcbiAgICA+XG4gICAgICA8Qm94XG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxzdmcgaWQ9XCJjaGFydC1iYWNrZ3JvdW5kXCIgY2xhc3NOYW1lPSdpbWcnIHJvbGU9J2ltZyc+XG4gICAgICAgICAgPHVzZSB4bGlua0hyZWY9JyNjaGFydC1iZycgcHJlc2VydmVBc3BlY3RSYXRpbz1cInhNaWRZTWlkIG1lZXRcIj48L3VzZT5cbiAgICAgICAgPC9zdmc+XG4gICAgICA8L0JveD5cbiAgICAgIDxMaW5lQ2hhcnQgd2lkdGg9ezY3NX0gaGVpZ2h0PXszODB9IGRhdGE9e2NoYXJ0RGF0YX0+XG4gICAgICAgIDxMaW5lIHR5cGU9XCJuYXR1cmFsXCIgZGF0YUtleT1cInRpbWVWYWx1ZVwiIHN0cm9rZT1cIiM4ODg0ZDhcIiAvPlxuICAgICAgICA8Q2FydGVzaWFuR3JpZCBzdHJva2U9XCIjY2NjXCIgc3Ryb2tlRGFzaGFycmF5PVwiNSA1XCIgLz5cbiAgICAgICAgPFlBeGlzIGxhYmVsPXt7IHZhbHVlOiAnRXhlY3V0aW9uIFRpbWUnLCBhbmdsZTogLTkwLCBwb3NpdGlvbjogJ0xlZnQnIH19IHRpY2tGb3JtYXR0ZXI9e2VtcHR5U3RyaW5nRm9ybWF0dGVyfSAvPlxuICAgICAgICA8WEF4aXMgbGFiZWw9e3sgdmFsdWU6ICdJdGVyYXRpb24gQ291bnQnLCBvZmZzZXQ6IDAsIHBvc2l0aW9uOiAnQm90dG9tJyB9fSB0aWNrRm9ybWF0dGVyPXtlbXB0eVN0cmluZ0Zvcm1hdHRlcn0gLz5cbiAgICAgIDwvTGluZUNoYXJ0PlxuICAgIDwvQm94PlxuICApO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9