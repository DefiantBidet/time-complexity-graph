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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4yNTg1ODZhOWQyN2ZhYzMwODNkNS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTBDO0FBQ1o7QUFPWjtBQUlsQjs7OztHQUlHO0FBQ0gsTUFBTSxvQkFBb0IsR0FBRyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUM7QUFFdEM7Ozs7R0FJRztBQUNILE1BQU0saUJBQWlCLEdBQUcsQ0FBQyxLQUFhLEVBQUUsRUFBRSxDQUFDLEdBQUcsS0FBSyxJQUFJLENBQUM7QUFJekQsQ0FBQztBQUVGOzs7O0dBSUc7QUFDWSxTQUFTLEtBQUssQ0FBQyxFQUM1QixTQUFTLEdBQ0U7SUFDWCxNQUFNLGFBQWEsR0FBRyw2Q0FBTSxDQUFpQixJQUFJLENBQUMsQ0FBQztJQUVuRCxrRkFBa0Y7SUFDbEYsZ0RBQVMsQ0FBQyxHQUFHLEVBQUU7UUFDYixNQUFNLFVBQVUsR0FBRyxhQUFhLENBQUMsT0FBTyxDQUFDO1FBQ3pDLElBQUksVUFBVSxFQUFFO1lBQ2Qsa0RBQWtEO1lBQ2xELE1BQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsaUJBQWlCLENBQUMsQ0FBQztZQUMxRCxNQUFNLGdCQUFnQixHQUFHLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxDQUFDO1lBRTFELFVBQVUsQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLGlCQUFpQixDQUFDLGdCQUFnQixFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNwRSxVQUFVLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxpQkFBaUIsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDbkUsVUFBVSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsaUJBQWlCLENBQUMsZ0JBQWdCLEVBQUUsTUFBTSxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQzNFLFVBQVUsQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLGlCQUFpQixDQUFDLGdCQUFnQixFQUFFLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQztTQUMxRTtJQUNILENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUVQLE9BQU8sQ0FDTCx3REFBQyx3Q0FBRyxJQUNGLElBQUksUUFDSixLQUFLLEVBQUMsUUFBUSxFQUNkLEVBQUUsRUFBQyxpQkFBaUIsRUFDcEIsT0FBTyxFQUFDLFFBQVEsYUFFaEIsdURBQUMsd0NBQUcsSUFDRixHQUFHLEVBQUUsYUFBYSxFQUNsQixFQUFFLEVBQUMsMkJBQTJCLEVBQzlCLEtBQUssRUFBRTtvQkFDTCxRQUFRLEVBQUUsVUFBVTtpQkFDckIsWUFFRCxnRUFBSyxTQUFTLEVBQUMsVUFBVSxFQUFDLElBQUksRUFBQyxLQUFLLFlBQ2xDLGdFQUFLLFNBQVMsRUFBQyxXQUFXLEdBQU8sR0FDN0IsR0FDRixFQUNOLHdEQUFDLCtDQUFTLElBQUMsS0FBSyxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxTQUFTLGFBQ2pELHVEQUFDLDBDQUFJLElBQUMsSUFBSSxFQUFDLFNBQVMsRUFBQyxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sRUFBQyxTQUFTLEdBQUcsRUFDNUQsdURBQUMsbURBQWEsSUFBQyxNQUFNLEVBQUMsTUFBTSxFQUFDLGVBQWUsRUFBQyxLQUFLLEdBQUcsRUFDckQsdURBQUMsMkNBQUssSUFBQyxLQUFLLEVBQUUsRUFBRSxLQUFLLEVBQUUsZ0JBQWdCLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsRUFBRSxhQUFhLEVBQUUsb0JBQW9CLEdBQUksRUFDaEgsdURBQUMsMkNBQUssSUFBQyxLQUFLLEVBQUUsRUFBRSxLQUFLLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLEVBQUUsYUFBYSxFQUFFLG9CQUFvQixHQUFJLElBQ3hHLElBQ1IsQ0FDUCxDQUFDO0FBQ0osQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RpbWUtY29tcGxleGl0eS1ncmFwaC8uL3NyYy90cy9jb21wb25lbnRzL0NoYXJ0L2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSZWYsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEJveCB9IGZyb20gJ2dyb21tZXQnO1xuaW1wb3J0IHtcbiAgTGluZUNoYXJ0LFxuICBMaW5lLFxuICBDYXJ0ZXNpYW5HcmlkLFxuICBYQXhpcyxcbiAgWUF4aXNcbn0gZnJvbSAncmVjaGFydHMnO1xuXG5pbXBvcnQgeyBDaGFydE5vZGUgfSBmcm9tICdUeXBlcy9hcHAnO1xuXG4vKipcbiAqIEZvcm1hdHRlciBmb3IgVGlja3Mgb2YgWC9ZIEF4aXMgdG8gcmV0dXJuIGVtcHR5IHN0cmluZ1xuICogQHJldHVybiB7c3RyaW5nfVxuICogQGZ1bmN0aW9uXG4gKi9cbmNvbnN0IGVtcHR5U3RyaW5nRm9ybWF0dGVyID0gKCkgPT4gXCJcIjtcblxuLyoqXG4gKiBDU1Mgc3R5bGUgc3RyaW5nIGZvcm1hdHRlclxuICogQHJldHVybiB7c3RyaW5nfVxuICogQGZ1bmN0aW9uXG4gKi9cbmNvbnN0IGNzc1N0eWxlRm9ybWF0dGVyID0gKHZhbHVlOiBudW1iZXIpID0+IGAke3ZhbHVlfXB4YDtcblxuZXhwb3J0IGludGVyZmFjZSBDaGFydFByb3BzIHtcbiAgY2hhcnREYXRhOiBDaGFydE5vZGVbXTtcbn07XG5cbi8qKlxuICogQ3JlYXRlcyBhIHJlY2hhcnRzIExpbmUgQ2hhcnQgcGxvdHRpbmcgcG9pbnRzIG9mIGRhdGFcbiAqIEByZXR1cm4ge0pTWC5FbGVtZW50fVxuICogQGZ1bmN0aW9uXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENoYXJ0KHtcbiAgY2hhcnREYXRhLFxufTogQ2hhcnRQcm9wcyk6IEpTWC5FbGVtZW50IHtcbiAgY29uc3Qgc3ZnV3JhcHBlclJlZiA9IHVzZVJlZjxIVE1MRGl2RWxlbWVudD4obnVsbCk7XG5cbiAgLy8gb24gY29tcG9uZW50IG1vdW50IC0gY2FsY3VsYXRlIGNvb3JkaW5hdGVzIG9mIGxpbmUgY2hhcnQgdG8gcG9zaXRpb24gYmFja2dyb3VuZFxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHN2Z1dyYXBwZXIgPSBzdmdXcmFwcGVyUmVmLmN1cnJlbnQ7XG4gICAgaWYgKHN2Z1dyYXBwZXIpIHtcbiAgICAgIC8vIHN2Z1dyYXBwZXJSZWYgcHJlc2VudCAtIHBvc2l0aW9uIGJhY2tncm91bmQgc3ZnXG4gICAgICBjb25zdCBjaGFydEVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZy5yZWNoYXJ0cy1saW5lJyk7XG4gICAgICBjb25zdCBjaGFydENvb3JkaW5hdGVzID0gY2hhcnRFbD8uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICAgIHN2Z1dyYXBwZXIuc3R5bGUubGVmdCA9IGNzc1N0eWxlRm9ybWF0dGVyKGNoYXJ0Q29vcmRpbmF0ZXM/LnggPz8gMCk7XG4gICAgICBzdmdXcmFwcGVyLnN0eWxlLnRvcCA9IGNzc1N0eWxlRm9ybWF0dGVyKGNoYXJ0Q29vcmRpbmF0ZXM/LnkgPz8gMCk7XG4gICAgICBzdmdXcmFwcGVyLnN0eWxlLmhlaWdodCA9IGNzc1N0eWxlRm9ybWF0dGVyKGNoYXJ0Q29vcmRpbmF0ZXM/LmhlaWdodCA/PyAwKTtcbiAgICAgIHN2Z1dyYXBwZXIuc3R5bGUud2lkdGggPSBjc3NTdHlsZUZvcm1hdHRlcihjaGFydENvb3JkaW5hdGVzPy53aWR0aCA/PyAwKTtcbiAgICB9XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxCb3hcbiAgICAgIGZpbGxcbiAgICAgIGFsaWduPVwiY2VudGVyXCJcbiAgICAgIGlkPVwiY2hhcnQtY29udGFpbmVyXCJcbiAgICAgIGp1c3RpZnk9XCJjZW50ZXJcIlxuICAgID5cbiAgICAgIDxCb3hcbiAgICAgICAgcmVmPXtzdmdXcmFwcGVyUmVmfVxuICAgICAgICBpZD1cImNoYXJ0LWJhY2tncm91bmQtZ3JhZGllbnRcIlxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8c3ZnIGNsYXNzTmFtZT0nY2hhcnQtYmcnIHJvbGU9J2ltZyc+XG4gICAgICAgICAgPHVzZSB4bGlua0hyZWY9JyNjaGFydC1iZyc+PC91c2U+XG4gICAgICAgIDwvc3ZnPlxuICAgICAgPC9Cb3g+XG4gICAgICA8TGluZUNoYXJ0IHdpZHRoPXs2NzV9IGhlaWdodD17MzgwfSBkYXRhPXtjaGFydERhdGF9PlxuICAgICAgICA8TGluZSB0eXBlPVwibmF0dXJhbFwiIGRhdGFLZXk9XCJ0aW1lVmFsdWVcIiBzdHJva2U9XCIjODg4NGQ4XCIgLz5cbiAgICAgICAgPENhcnRlc2lhbkdyaWQgc3Ryb2tlPVwiI2NjY1wiIHN0cm9rZURhc2hhcnJheT1cIjUgNVwiIC8+XG4gICAgICAgIDxZQXhpcyBsYWJlbD17eyB2YWx1ZTogJ0V4ZWN1dGlvbiBUaW1lJywgYW5nbGU6IC05MCwgcG9zaXRpb246ICdMZWZ0JyB9fSB0aWNrRm9ybWF0dGVyPXtlbXB0eVN0cmluZ0Zvcm1hdHRlcn0gLz5cbiAgICAgICAgPFhBeGlzIGxhYmVsPXt7IHZhbHVlOiAnSXRlcmF0aW9uIENvdW50Jywgb2Zmc2V0OiAwLCBwb3NpdGlvbjogJ0JvdHRvbScgfX0gdGlja0Zvcm1hdHRlcj17ZW1wdHlTdHJpbmdGb3JtYXR0ZXJ9IC8+XG4gICAgICA8L0xpbmVDaGFydD5cbiAgICA8L0JveD5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==