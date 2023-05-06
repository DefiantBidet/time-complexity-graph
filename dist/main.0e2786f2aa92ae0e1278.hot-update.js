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
        const chartBG = document.querySelector('svg#chart-background');
        const chartCoordinates = chartEl?.getBoundingClientRect();
        console.log('::', chartCoordinates);
    }, []);
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(grommet__WEBPACK_IMPORTED_MODULE_2__.Box, { fill: true, align: "center", id: "chart-container", justify: "center", children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(grommet__WEBPACK_IMPORTED_MODULE_3__.Stack, { anchor: 'center', children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", { id: "chart-background", className: 'img', role: 'img', children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("use", { xlinkHref: '#chart-bg' }) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(recharts__WEBPACK_IMPORTED_MODULE_4__.LineChart, { width: 675, height: 380, data: chartData, children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(recharts__WEBPACK_IMPORTED_MODULE_5__.Line, { type: "natural", dataKey: "timeValue", stroke: "#8884d8" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(recharts__WEBPACK_IMPORTED_MODULE_6__.CartesianGrid, { stroke: "#ccc", strokeDasharray: "5 5" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(recharts__WEBPACK_IMPORTED_MODULE_7__.YAxis, { label: { value: 'Execution Time', angle: -90, position: 'Left' }, tickFormatter: emptyStringFormatter }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(recharts__WEBPACK_IMPORTED_MODULE_8__.XAxis, { label: { value: 'Iteration Count', offset: 0, position: 'Bottom' }, tickFormatter: emptyStringFormatter })] })] }) }));
}


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4wZTI3ODZmMmFhOTJhZTBlMTI3OC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFrQztBQUNHO0FBT25CO0FBSWxCOzs7O0dBSUc7QUFDSCxNQUFNLG9CQUFvQixHQUFHLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQztBQUlyQyxDQUFDO0FBRUY7Ozs7R0FJRztBQUNZLFNBQVMsS0FBSyxDQUFDLEVBQzVCLFNBQVMsR0FDRTtJQUNYLGtGQUFrRjtJQUNsRixnREFBUyxDQUFDLEdBQUcsRUFBRTtRQUNiLE1BQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUMxRCxNQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLHNCQUFzQixDQUFDO1FBQzlELE1BQU0sZ0JBQWdCLEdBQUcsT0FBTyxFQUFFLHFCQUFxQixFQUFFLENBQUM7UUFDMUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUM7SUFDckMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBRVAsT0FBTyxDQUNMLHVEQUFDLHdDQUFHLElBQ0YsSUFBSSxRQUNKLEtBQUssRUFBQyxRQUFRLEVBQ2QsRUFBRSxFQUFDLGlCQUFpQixFQUNwQixPQUFPLEVBQUMsUUFBUSxZQUVoQix3REFBQywwQ0FBSyxJQUFDLE1BQU0sRUFBQyxRQUFRLGFBQ3BCLGdFQUFLLEVBQUUsRUFBQyxrQkFBa0IsRUFBQyxTQUFTLEVBQUMsS0FBSyxFQUFDLElBQUksRUFBQyxLQUFLLFlBQ25ELGdFQUFLLFNBQVMsRUFBQyxXQUFXLEdBQU8sR0FDN0IsRUFDTix3REFBQywrQ0FBUyxJQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsU0FBUyxhQUNqRCx1REFBQywwQ0FBSSxJQUFDLElBQUksRUFBQyxTQUFTLEVBQUMsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLEVBQUMsU0FBUyxHQUFHLEVBQzVELHVEQUFDLG1EQUFhLElBQUMsTUFBTSxFQUFDLE1BQU0sRUFBQyxlQUFlLEVBQUMsS0FBSyxHQUFHLEVBQ3JELHVEQUFDLDJDQUFLLElBQUMsS0FBSyxFQUFFLEVBQUUsS0FBSyxFQUFFLGdCQUFnQixFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLEVBQUUsYUFBYSxFQUFFLG9CQUFvQixHQUFJLEVBQ2hILHVEQUFDLDJDQUFLLElBQUMsS0FBSyxFQUFFLEVBQUUsS0FBSyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxFQUFFLGFBQWEsRUFBRSxvQkFBb0IsR0FBSSxJQUN4RyxJQUNOLEdBQ0osQ0FDUCxDQUFDO0FBQ0osQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RpbWUtY29tcGxleGl0eS1ncmFwaC8uL3NyYy90cy9jb21wb25lbnRzL0NoYXJ0L2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBCb3gsIFN0YWNrIH0gZnJvbSAnZ3JvbW1ldCc7XG5pbXBvcnQge1xuICBMaW5lQ2hhcnQsXG4gIExpbmUsXG4gIENhcnRlc2lhbkdyaWQsXG4gIFhBeGlzLFxuICBZQXhpc1xufSBmcm9tICdyZWNoYXJ0cyc7XG5cbmltcG9ydCB7IENoYXJ0Tm9kZSB9IGZyb20gJ1R5cGVzL2FwcCc7XG5cbi8qKlxuICogRm9ybWF0dGVyIGZvciBUaWNrcyBvZiBYL1kgQXhpcyB0byByZXR1cm4gZW1wdHkgc3RyaW5nXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKiBAZnVuY3Rpb25cbiAqL1xuY29uc3QgZW1wdHlTdHJpbmdGb3JtYXR0ZXIgPSAoKSA9PiBcIlwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIENoYXJ0UHJvcHMge1xuICBjaGFydERhdGE6IENoYXJ0Tm9kZVtdO1xufTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgcmVjaGFydHMgTGluZSBDaGFydCBwbG90dGluZyBwb2ludHMgb2YgZGF0YVxuICogQHJldHVybiB7SlNYLkVsZW1lbnR9XG4gKiBAZnVuY3Rpb25cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2hhcnQoe1xuICBjaGFydERhdGEsXG59OiBDaGFydFByb3BzKTogSlNYLkVsZW1lbnQge1xuICAvLyBvbiBjb21wb25lbnQgbW91bnQgLSBjYWxjdWxhdGUgY29vcmRpbmF0ZXMgb2YgbGluZSBjaGFydCB0byBwb3NpdGlvbiBiYWNrZ3JvdW5kXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgY2hhcnRFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2cucmVjaGFydHMtbGluZScpO1xuICAgIGNvbnN0IGNoYXJ0QkcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdzdmcjY2hhcnQtYmFja2dyb3VuZCcpXG4gICAgY29uc3QgY2hhcnRDb29yZGluYXRlcyA9IGNoYXJ0RWw/LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGNvbnNvbGUubG9nKCc6OicsIGNoYXJ0Q29vcmRpbmF0ZXMpXG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxCb3hcbiAgICAgIGZpbGxcbiAgICAgIGFsaWduPVwiY2VudGVyXCJcbiAgICAgIGlkPVwiY2hhcnQtY29udGFpbmVyXCJcbiAgICAgIGp1c3RpZnk9XCJjZW50ZXJcIlxuICAgID5cbiAgICAgIDxTdGFjayBhbmNob3I9J2NlbnRlcic+XG4gICAgICAgIDxzdmcgaWQ9XCJjaGFydC1iYWNrZ3JvdW5kXCIgY2xhc3NOYW1lPSdpbWcnIHJvbGU9J2ltZyc+XG4gICAgICAgICAgPHVzZSB4bGlua0hyZWY9JyNjaGFydC1iZyc+PC91c2U+XG4gICAgICAgIDwvc3ZnPlxuICAgICAgICA8TGluZUNoYXJ0IHdpZHRoPXs2NzV9IGhlaWdodD17MzgwfSBkYXRhPXtjaGFydERhdGF9PlxuICAgICAgICAgIDxMaW5lIHR5cGU9XCJuYXR1cmFsXCIgZGF0YUtleT1cInRpbWVWYWx1ZVwiIHN0cm9rZT1cIiM4ODg0ZDhcIiAvPlxuICAgICAgICAgIDxDYXJ0ZXNpYW5HcmlkIHN0cm9rZT1cIiNjY2NcIiBzdHJva2VEYXNoYXJyYXk9XCI1IDVcIiAvPlxuICAgICAgICAgIDxZQXhpcyBsYWJlbD17eyB2YWx1ZTogJ0V4ZWN1dGlvbiBUaW1lJywgYW5nbGU6IC05MCwgcG9zaXRpb246ICdMZWZ0JyB9fSB0aWNrRm9ybWF0dGVyPXtlbXB0eVN0cmluZ0Zvcm1hdHRlcn0gLz5cbiAgICAgICAgICA8WEF4aXMgbGFiZWw9e3sgdmFsdWU6ICdJdGVyYXRpb24gQ291bnQnLCBvZmZzZXQ6IDAsIHBvc2l0aW9uOiAnQm90dG9tJyB9fSB0aWNrRm9ybWF0dGVyPXtlbXB0eVN0cmluZ0Zvcm1hdHRlcn0gLz5cbiAgICAgICAgPC9MaW5lQ2hhcnQ+XG4gICAgICA8L1N0YWNrPlxuICAgIDwvQm94PlxuICApO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9