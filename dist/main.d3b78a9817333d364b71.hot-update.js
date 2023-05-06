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
        // const chartBG = document.querySelector('svg#chart-background')
        const chartCoordinates = chartEl?.getBoundingClientRect();
        console.log('::', chartCoordinates);
    }, []);
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(grommet__WEBPACK_IMPORTED_MODULE_2__.Box, { fill: true, align: "center", id: "chart-container", justify: "center", children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(grommet__WEBPACK_IMPORTED_MODULE_3__.Stack, { anchor: 'center', children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", { id: "chart-background", className: 'img', role: 'img', children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("use", { xlinkHref: '#chart-bg' }) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(recharts__WEBPACK_IMPORTED_MODULE_4__.LineChart, { width: 675, height: 380, data: chartData, children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(recharts__WEBPACK_IMPORTED_MODULE_5__.Line, { type: "natural", dataKey: "timeValue", stroke: "#8884d8" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(recharts__WEBPACK_IMPORTED_MODULE_6__.CartesianGrid, { stroke: "#ccc", strokeDasharray: "5 5" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(recharts__WEBPACK_IMPORTED_MODULE_7__.YAxis, { label: { value: 'Execution Time', angle: -90, position: 'Left' }, tickFormatter: emptyStringFormatter }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(recharts__WEBPACK_IMPORTED_MODULE_8__.XAxis, { label: { value: 'Iteration Count', offset: 0, position: 'Bottom' }, tickFormatter: emptyStringFormatter })] })] }) }));
}


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5kM2I3OGE5ODE3MzMzZDM2NGI3MS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFrQztBQUNHO0FBT25CO0FBSWxCOzs7O0dBSUc7QUFDSCxNQUFNLG9CQUFvQixHQUFHLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQztBQUlyQyxDQUFDO0FBRUY7Ozs7R0FJRztBQUNZLFNBQVMsS0FBSyxDQUFDLEVBQzVCLFNBQVMsR0FDRTtJQUNYLGtGQUFrRjtJQUNsRixnREFBUyxDQUFDLEdBQUcsRUFBRTtRQUNiLE1BQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUMxRCxpRUFBaUU7UUFDakUsTUFBTSxnQkFBZ0IsR0FBRyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsQ0FBQztRQUMxRCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxnQkFBZ0IsQ0FBQztJQUNyQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFFUCxPQUFPLENBQ0wsdURBQUMsd0NBQUcsSUFDRixJQUFJLFFBQ0osS0FBSyxFQUFDLFFBQVEsRUFDZCxFQUFFLEVBQUMsaUJBQWlCLEVBQ3BCLE9BQU8sRUFBQyxRQUFRLFlBRWhCLHdEQUFDLDBDQUFLLElBQUMsTUFBTSxFQUFDLFFBQVEsYUFDcEIsZ0VBQUssRUFBRSxFQUFDLGtCQUFrQixFQUFDLFNBQVMsRUFBQyxLQUFLLEVBQUMsSUFBSSxFQUFDLEtBQUssWUFDbkQsZ0VBQUssU0FBUyxFQUFDLFdBQVcsR0FBTyxHQUM3QixFQUNOLHdEQUFDLCtDQUFTLElBQUMsS0FBSyxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxTQUFTLGFBQ2pELHVEQUFDLDBDQUFJLElBQUMsSUFBSSxFQUFDLFNBQVMsRUFBQyxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sRUFBQyxTQUFTLEdBQUcsRUFDNUQsdURBQUMsbURBQWEsSUFBQyxNQUFNLEVBQUMsTUFBTSxFQUFDLGVBQWUsRUFBQyxLQUFLLEdBQUcsRUFDckQsdURBQUMsMkNBQUssSUFBQyxLQUFLLEVBQUUsRUFBRSxLQUFLLEVBQUUsZ0JBQWdCLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsRUFBRSxhQUFhLEVBQUUsb0JBQW9CLEdBQUksRUFDaEgsdURBQUMsMkNBQUssSUFBQyxLQUFLLEVBQUUsRUFBRSxLQUFLLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLEVBQUUsYUFBYSxFQUFFLG9CQUFvQixHQUFJLElBQ3hHLElBQ04sR0FDSixDQUNQLENBQUM7QUFDSixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGltZS1jb21wbGV4aXR5LWdyYXBoLy4vc3JjL3RzL2NvbXBvbmVudHMvQ2hhcnQvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEJveCwgU3RhY2sgfSBmcm9tICdncm9tbWV0JztcbmltcG9ydCB7XG4gIExpbmVDaGFydCxcbiAgTGluZSxcbiAgQ2FydGVzaWFuR3JpZCxcbiAgWEF4aXMsXG4gIFlBeGlzXG59IGZyb20gJ3JlY2hhcnRzJztcblxuaW1wb3J0IHsgQ2hhcnROb2RlIH0gZnJvbSAnVHlwZXMvYXBwJztcblxuLyoqXG4gKiBGb3JtYXR0ZXIgZm9yIFRpY2tzIG9mIFgvWSBBeGlzIHRvIHJldHVybiBlbXB0eSBzdHJpbmdcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqIEBmdW5jdGlvblxuICovXG5jb25zdCBlbXB0eVN0cmluZ0Zvcm1hdHRlciA9ICgpID0+IFwiXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2hhcnRQcm9wcyB7XG4gIGNoYXJ0RGF0YTogQ2hhcnROb2RlW107XG59O1xuXG4vKipcbiAqIENyZWF0ZXMgYSByZWNoYXJ0cyBMaW5lIENoYXJ0IHBsb3R0aW5nIHBvaW50cyBvZiBkYXRhXG4gKiBAcmV0dXJuIHtKU1guRWxlbWVudH1cbiAqIEBmdW5jdGlvblxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDaGFydCh7XG4gIGNoYXJ0RGF0YSxcbn06IENoYXJ0UHJvcHMpOiBKU1guRWxlbWVudCB7XG4gIC8vIG9uIGNvbXBvbmVudCBtb3VudCAtIGNhbGN1bGF0ZSBjb29yZGluYXRlcyBvZiBsaW5lIGNoYXJ0IHRvIHBvc2l0aW9uIGJhY2tncm91bmRcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBjaGFydEVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZy5yZWNoYXJ0cy1saW5lJyk7XG4gICAgLy8gY29uc3QgY2hhcnRCRyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3N2ZyNjaGFydC1iYWNrZ3JvdW5kJylcbiAgICBjb25zdCBjaGFydENvb3JkaW5hdGVzID0gY2hhcnRFbD8uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgY29uc29sZS5sb2coJzo6JywgY2hhcnRDb29yZGluYXRlcylcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPEJveFxuICAgICAgZmlsbFxuICAgICAgYWxpZ249XCJjZW50ZXJcIlxuICAgICAgaWQ9XCJjaGFydC1jb250YWluZXJcIlxuICAgICAganVzdGlmeT1cImNlbnRlclwiXG4gICAgPlxuICAgICAgPFN0YWNrIGFuY2hvcj0nY2VudGVyJz5cbiAgICAgICAgPHN2ZyBpZD1cImNoYXJ0LWJhY2tncm91bmRcIiBjbGFzc05hbWU9J2ltZycgcm9sZT0naW1nJz5cbiAgICAgICAgICA8dXNlIHhsaW5rSHJlZj0nI2NoYXJ0LWJnJz48L3VzZT5cbiAgICAgICAgPC9zdmc+XG4gICAgICAgIDxMaW5lQ2hhcnQgd2lkdGg9ezY3NX0gaGVpZ2h0PXszODB9IGRhdGE9e2NoYXJ0RGF0YX0+XG4gICAgICAgICAgPExpbmUgdHlwZT1cIm5hdHVyYWxcIiBkYXRhS2V5PVwidGltZVZhbHVlXCIgc3Ryb2tlPVwiIzg4ODRkOFwiIC8+XG4gICAgICAgICAgPENhcnRlc2lhbkdyaWQgc3Ryb2tlPVwiI2NjY1wiIHN0cm9rZURhc2hhcnJheT1cIjUgNVwiIC8+XG4gICAgICAgICAgPFlBeGlzIGxhYmVsPXt7IHZhbHVlOiAnRXhlY3V0aW9uIFRpbWUnLCBhbmdsZTogLTkwLCBwb3NpdGlvbjogJ0xlZnQnIH19IHRpY2tGb3JtYXR0ZXI9e2VtcHR5U3RyaW5nRm9ybWF0dGVyfSAvPlxuICAgICAgICAgIDxYQXhpcyBsYWJlbD17eyB2YWx1ZTogJ0l0ZXJhdGlvbiBDb3VudCcsIG9mZnNldDogMCwgcG9zaXRpb246ICdCb3R0b20nIH19IHRpY2tGb3JtYXR0ZXI9e2VtcHR5U3RyaW5nRm9ybWF0dGVyfSAvPlxuICAgICAgICA8L0xpbmVDaGFydD5cbiAgICAgIDwvU3RhY2s+XG4gICAgPC9Cb3g+XG4gICk7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=