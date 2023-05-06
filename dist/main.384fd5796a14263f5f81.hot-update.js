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
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(grommet__WEBPACK_IMPORTED_MODULE_2__.Box, { fill: true, align: "center", id: "chart-container", justify: "center", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(grommet__WEBPACK_IMPORTED_MODULE_2__.Box, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", { id: "chart-background", className: 'img', role: 'img', children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("use", { xlinkHref: '#chart-bg' }) }) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(recharts__WEBPACK_IMPORTED_MODULE_3__.LineChart, { width: 675, height: 380, data: chartData, children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(recharts__WEBPACK_IMPORTED_MODULE_4__.Line, { type: "natural", dataKey: "timeValue", stroke: "#8884d8" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(recharts__WEBPACK_IMPORTED_MODULE_5__.CartesianGrid, { stroke: "#ccc", strokeDasharray: "5 5" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(recharts__WEBPACK_IMPORTED_MODULE_6__.YAxis, { label: { value: 'Execution Time', angle: -90, position: 'Left' }, tickFormatter: emptyStringFormatter }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(recharts__WEBPACK_IMPORTED_MODULE_7__.XAxis, { label: { value: 'Iteration Count', offset: 0, position: 'Bottom' }, tickFormatter: emptyStringFormatter })] })] }));
}


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4zODRmZDU3OTZhMTQyNjNmNWY4MS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQWtDO0FBQ0o7QUFPWjtBQUlsQjs7OztHQUlHO0FBQ0gsTUFBTSxvQkFBb0IsR0FBRyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUM7QUFJckMsQ0FBQztBQUVGOzs7O0dBSUc7QUFDWSxTQUFTLEtBQUssQ0FBQyxFQUM1QixTQUFTLEdBQ0U7SUFDWCxrRkFBa0Y7SUFDbEYsZ0RBQVMsQ0FBQyxHQUFHLEVBQUU7UUFDYixNQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDMUQsaUVBQWlFO1FBQ2pFLE1BQU0sZ0JBQWdCLEdBQUcsT0FBTyxFQUFFLHFCQUFxQixFQUFFLENBQUM7UUFDMUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUM7SUFDckMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBRVAsT0FBTyxDQUNMLHdEQUFDLHdDQUFHLElBQ0YsSUFBSSxRQUNKLEtBQUssRUFBQyxRQUFRLEVBQ2QsRUFBRSxFQUFDLGlCQUFpQixFQUNwQixPQUFPLEVBQUMsUUFBUSxhQUVoQix1REFBQyx3Q0FBRyxjQUNGLGdFQUFLLEVBQUUsRUFBQyxrQkFBa0IsRUFBQyxTQUFTLEVBQUMsS0FBSyxFQUFDLElBQUksRUFBQyxLQUFLLFlBQ25ELGdFQUFLLFNBQVMsRUFBQyxXQUFXLEdBQU8sR0FDN0IsR0FDRixFQUNOLHdEQUFDLCtDQUFTLElBQUMsS0FBSyxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxTQUFTLGFBQ2pELHVEQUFDLDBDQUFJLElBQUMsSUFBSSxFQUFDLFNBQVMsRUFBQyxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sRUFBQyxTQUFTLEdBQUcsRUFDNUQsdURBQUMsbURBQWEsSUFBQyxNQUFNLEVBQUMsTUFBTSxFQUFDLGVBQWUsRUFBQyxLQUFLLEdBQUcsRUFDckQsdURBQUMsMkNBQUssSUFBQyxLQUFLLEVBQUUsRUFBRSxLQUFLLEVBQUUsZ0JBQWdCLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsRUFBRSxhQUFhLEVBQUUsb0JBQW9CLEdBQUksRUFDaEgsdURBQUMsMkNBQUssSUFBQyxLQUFLLEVBQUUsRUFBRSxLQUFLLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLEVBQUUsYUFBYSxFQUFFLG9CQUFvQixHQUFJLElBQ3hHLElBQ1IsQ0FDUCxDQUFDO0FBQ0osQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RpbWUtY29tcGxleGl0eS1ncmFwaC8uL3NyYy90cy9jb21wb25lbnRzL0NoYXJ0L2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBCb3ggfSBmcm9tICdncm9tbWV0JztcbmltcG9ydCB7XG4gIExpbmVDaGFydCxcbiAgTGluZSxcbiAgQ2FydGVzaWFuR3JpZCxcbiAgWEF4aXMsXG4gIFlBeGlzXG59IGZyb20gJ3JlY2hhcnRzJztcblxuaW1wb3J0IHsgQ2hhcnROb2RlIH0gZnJvbSAnVHlwZXMvYXBwJztcblxuLyoqXG4gKiBGb3JtYXR0ZXIgZm9yIFRpY2tzIG9mIFgvWSBBeGlzIHRvIHJldHVybiBlbXB0eSBzdHJpbmdcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqIEBmdW5jdGlvblxuICovXG5jb25zdCBlbXB0eVN0cmluZ0Zvcm1hdHRlciA9ICgpID0+IFwiXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2hhcnRQcm9wcyB7XG4gIGNoYXJ0RGF0YTogQ2hhcnROb2RlW107XG59O1xuXG4vKipcbiAqIENyZWF0ZXMgYSByZWNoYXJ0cyBMaW5lIENoYXJ0IHBsb3R0aW5nIHBvaW50cyBvZiBkYXRhXG4gKiBAcmV0dXJuIHtKU1guRWxlbWVudH1cbiAqIEBmdW5jdGlvblxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDaGFydCh7XG4gIGNoYXJ0RGF0YSxcbn06IENoYXJ0UHJvcHMpOiBKU1guRWxlbWVudCB7XG4gIC8vIG9uIGNvbXBvbmVudCBtb3VudCAtIGNhbGN1bGF0ZSBjb29yZGluYXRlcyBvZiBsaW5lIGNoYXJ0IHRvIHBvc2l0aW9uIGJhY2tncm91bmRcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBjaGFydEVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZy5yZWNoYXJ0cy1saW5lJyk7XG4gICAgLy8gY29uc3QgY2hhcnRCRyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3N2ZyNjaGFydC1iYWNrZ3JvdW5kJylcbiAgICBjb25zdCBjaGFydENvb3JkaW5hdGVzID0gY2hhcnRFbD8uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgY29uc29sZS5sb2coJzo6JywgY2hhcnRDb29yZGluYXRlcylcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPEJveFxuICAgICAgZmlsbFxuICAgICAgYWxpZ249XCJjZW50ZXJcIlxuICAgICAgaWQ9XCJjaGFydC1jb250YWluZXJcIlxuICAgICAganVzdGlmeT1cImNlbnRlclwiXG4gICAgPlxuICAgICAgPEJveD5cbiAgICAgICAgPHN2ZyBpZD1cImNoYXJ0LWJhY2tncm91bmRcIiBjbGFzc05hbWU9J2ltZycgcm9sZT0naW1nJz5cbiAgICAgICAgICA8dXNlIHhsaW5rSHJlZj0nI2NoYXJ0LWJnJz48L3VzZT5cbiAgICAgICAgPC9zdmc+XG4gICAgICA8L0JveD5cbiAgICAgIDxMaW5lQ2hhcnQgd2lkdGg9ezY3NX0gaGVpZ2h0PXszODB9IGRhdGE9e2NoYXJ0RGF0YX0+XG4gICAgICAgIDxMaW5lIHR5cGU9XCJuYXR1cmFsXCIgZGF0YUtleT1cInRpbWVWYWx1ZVwiIHN0cm9rZT1cIiM4ODg0ZDhcIiAvPlxuICAgICAgICA8Q2FydGVzaWFuR3JpZCBzdHJva2U9XCIjY2NjXCIgc3Ryb2tlRGFzaGFycmF5PVwiNSA1XCIgLz5cbiAgICAgICAgPFlBeGlzIGxhYmVsPXt7IHZhbHVlOiAnRXhlY3V0aW9uIFRpbWUnLCBhbmdsZTogLTkwLCBwb3NpdGlvbjogJ0xlZnQnIH19IHRpY2tGb3JtYXR0ZXI9e2VtcHR5U3RyaW5nRm9ybWF0dGVyfSAvPlxuICAgICAgICA8WEF4aXMgbGFiZWw9e3sgdmFsdWU6ICdJdGVyYXRpb24gQ291bnQnLCBvZmZzZXQ6IDAsIHBvc2l0aW9uOiAnQm90dG9tJyB9fSB0aWNrRm9ybWF0dGVyPXtlbXB0eVN0cmluZ0Zvcm1hdHRlcn0gLz5cbiAgICAgIDwvTGluZUNoYXJ0PlxuICAgIDwvQm94PlxuICApO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9