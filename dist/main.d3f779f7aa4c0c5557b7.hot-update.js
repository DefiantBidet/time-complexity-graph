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
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(grommet__WEBPACK_IMPORTED_MODULE_2__.Box, { fill: true, align: "center", id: "chart-container", justify: "center", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(grommet__WEBPACK_IMPORTED_MODULE_2__.Box, { ref: svgWrapperRef, style: {
                    position: 'absolute',
                }, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", { id: "chart-background", className: 'chart-bg', role: 'img', children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("use", { xlinkHref: '#chart-bg' }) }) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(recharts__WEBPACK_IMPORTED_MODULE_3__.LineChart, { width: 675, height: 380, data: chartData, children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(recharts__WEBPACK_IMPORTED_MODULE_4__.Line, { type: "natural", dataKey: "timeValue", stroke: "#8884d8" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(recharts__WEBPACK_IMPORTED_MODULE_5__.CartesianGrid, { stroke: "#ccc", strokeDasharray: "5 5" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(recharts__WEBPACK_IMPORTED_MODULE_6__.YAxis, { label: { value: 'Execution Time', angle: -90, position: 'Left' }, tickFormatter: emptyStringFormatter }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(recharts__WEBPACK_IMPORTED_MODULE_7__.XAxis, { label: { value: 'Iteration Count', offset: 0, position: 'Bottom' }, tickFormatter: emptyStringFormatter })] })] }));
}


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5kM2Y3NzlmN2FhNGMwYzU1NTdiNy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTBDO0FBQ1o7QUFPWjtBQUlsQjs7OztHQUlHO0FBQ0gsTUFBTSxvQkFBb0IsR0FBRyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUM7QUFFdEM7Ozs7R0FJRztBQUNILE1BQU0saUJBQWlCLEdBQUcsQ0FBQyxLQUFhLEVBQUUsRUFBRSxDQUFDLEdBQUcsS0FBSyxJQUFJLENBQUM7QUFJekQsQ0FBQztBQUVGOzs7O0dBSUc7QUFDWSxTQUFTLEtBQUssQ0FBQyxFQUM1QixTQUFTLEdBQ0U7SUFDWCxNQUFNLGFBQWEsR0FBRyw2Q0FBTSxDQUFpQixJQUFJLENBQUMsQ0FBQztJQUVuRCxrRkFBa0Y7SUFDbEYsZ0RBQVMsQ0FBQyxHQUFHLEVBQUU7UUFDYixNQUFNLFVBQVUsR0FBRyxhQUFhLENBQUMsT0FBTyxDQUFDO1FBQ3pDLElBQUksVUFBVSxFQUFFO1lBQ2Qsa0RBQWtEO1lBQ2xELE1BQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsaUJBQWlCLENBQUMsQ0FBQztZQUMxRCxNQUFNLGdCQUFnQixHQUFHLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxDQUFDO1lBRTFELFVBQVUsQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLGlCQUFpQixDQUFDLGdCQUFnQixFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNwRSxVQUFVLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxpQkFBaUIsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDbkUsVUFBVSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsaUJBQWlCLENBQUMsZ0JBQWdCLEVBQUUsTUFBTSxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQzNFLFVBQVUsQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLGlCQUFpQixDQUFDLGdCQUFnQixFQUFFLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQztTQUMxRTtJQUNILENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUVQLE9BQU8sQ0FDTCx3REFBQyx3Q0FBRyxJQUNGLElBQUksUUFDSixLQUFLLEVBQUMsUUFBUSxFQUNkLEVBQUUsRUFBQyxpQkFBaUIsRUFDcEIsT0FBTyxFQUFDLFFBQVEsYUFFaEIsdURBQUMsd0NBQUcsSUFDRixHQUFHLEVBQUUsYUFBYSxFQUNsQixLQUFLLEVBQUU7b0JBQ0wsUUFBUSxFQUFFLFVBQVU7aUJBQ3JCLFlBRUQsZ0VBQUssRUFBRSxFQUFDLGtCQUFrQixFQUFDLFNBQVMsRUFBQyxVQUFVLEVBQUMsSUFBSSxFQUFDLEtBQUssWUFDeEQsZ0VBQUssU0FBUyxFQUFDLFdBQVcsR0FBTyxHQUM3QixHQUNGLEVBQ04sd0RBQUMsK0NBQVMsSUFBQyxLQUFLLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLFNBQVMsYUFDakQsdURBQUMsMENBQUksSUFBQyxJQUFJLEVBQUMsU0FBUyxFQUFDLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxFQUFDLFNBQVMsR0FBRyxFQUM1RCx1REFBQyxtREFBYSxJQUFDLE1BQU0sRUFBQyxNQUFNLEVBQUMsZUFBZSxFQUFDLEtBQUssR0FBRyxFQUNyRCx1REFBQywyQ0FBSyxJQUFDLEtBQUssRUFBRSxFQUFFLEtBQUssRUFBRSxnQkFBZ0IsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxFQUFFLGFBQWEsRUFBRSxvQkFBb0IsR0FBSSxFQUNoSCx1REFBQywyQ0FBSyxJQUFDLEtBQUssRUFBRSxFQUFFLEtBQUssRUFBRSxpQkFBaUIsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsRUFBRSxhQUFhLEVBQUUsb0JBQW9CLEdBQUksSUFDeEcsSUFDUixDQUNQLENBQUM7QUFDSixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGltZS1jb21wbGV4aXR5LWdyYXBoLy4vc3JjL3RzL2NvbXBvbmVudHMvQ2hhcnQvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJlZiwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQm94IH0gZnJvbSAnZ3JvbW1ldCc7XG5pbXBvcnQge1xuICBMaW5lQ2hhcnQsXG4gIExpbmUsXG4gIENhcnRlc2lhbkdyaWQsXG4gIFhBeGlzLFxuICBZQXhpc1xufSBmcm9tICdyZWNoYXJ0cyc7XG5cbmltcG9ydCB7IENoYXJ0Tm9kZSB9IGZyb20gJ1R5cGVzL2FwcCc7XG5cbi8qKlxuICogRm9ybWF0dGVyIGZvciBUaWNrcyBvZiBYL1kgQXhpcyB0byByZXR1cm4gZW1wdHkgc3RyaW5nXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKiBAZnVuY3Rpb25cbiAqL1xuY29uc3QgZW1wdHlTdHJpbmdGb3JtYXR0ZXIgPSAoKSA9PiBcIlwiO1xuXG4vKipcbiAqIENTUyBzdHlsZSBzdHJpbmcgZm9ybWF0dGVyXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKiBAZnVuY3Rpb25cbiAqL1xuY29uc3QgY3NzU3R5bGVGb3JtYXR0ZXIgPSAodmFsdWU6IG51bWJlcikgPT4gYCR7dmFsdWV9cHhgO1xuXG5leHBvcnQgaW50ZXJmYWNlIENoYXJ0UHJvcHMge1xuICBjaGFydERhdGE6IENoYXJ0Tm9kZVtdO1xufTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgcmVjaGFydHMgTGluZSBDaGFydCBwbG90dGluZyBwb2ludHMgb2YgZGF0YVxuICogQHJldHVybiB7SlNYLkVsZW1lbnR9XG4gKiBAZnVuY3Rpb25cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2hhcnQoe1xuICBjaGFydERhdGEsXG59OiBDaGFydFByb3BzKTogSlNYLkVsZW1lbnQge1xuICBjb25zdCBzdmdXcmFwcGVyUmVmID0gdXNlUmVmPEhUTUxEaXZFbGVtZW50PihudWxsKTtcblxuICAvLyBvbiBjb21wb25lbnQgbW91bnQgLSBjYWxjdWxhdGUgY29vcmRpbmF0ZXMgb2YgbGluZSBjaGFydCB0byBwb3NpdGlvbiBiYWNrZ3JvdW5kXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3Qgc3ZnV3JhcHBlciA9IHN2Z1dyYXBwZXJSZWYuY3VycmVudDtcbiAgICBpZiAoc3ZnV3JhcHBlcikge1xuICAgICAgLy8gc3ZnV3JhcHBlclJlZiBwcmVzZW50IC0gcG9zaXRpb24gYmFja2dyb3VuZCBzdmdcbiAgICAgIGNvbnN0IGNoYXJ0RWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdnLnJlY2hhcnRzLWxpbmUnKTtcbiAgICAgIGNvbnN0IGNoYXJ0Q29vcmRpbmF0ZXMgPSBjaGFydEVsPy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAgICAgc3ZnV3JhcHBlci5zdHlsZS5sZWZ0ID0gY3NzU3R5bGVGb3JtYXR0ZXIoY2hhcnRDb29yZGluYXRlcz8ueCA/PyAwKTtcbiAgICAgIHN2Z1dyYXBwZXIuc3R5bGUudG9wID0gY3NzU3R5bGVGb3JtYXR0ZXIoY2hhcnRDb29yZGluYXRlcz8ueSA/PyAwKTtcbiAgICAgIHN2Z1dyYXBwZXIuc3R5bGUuaGVpZ2h0ID0gY3NzU3R5bGVGb3JtYXR0ZXIoY2hhcnRDb29yZGluYXRlcz8uaGVpZ2h0ID8/IDApO1xuICAgICAgc3ZnV3JhcHBlci5zdHlsZS53aWR0aCA9IGNzc1N0eWxlRm9ybWF0dGVyKGNoYXJ0Q29vcmRpbmF0ZXM/LndpZHRoID8/IDApO1xuICAgIH1cbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPEJveFxuICAgICAgZmlsbFxuICAgICAgYWxpZ249XCJjZW50ZXJcIlxuICAgICAgaWQ9XCJjaGFydC1jb250YWluZXJcIlxuICAgICAganVzdGlmeT1cImNlbnRlclwiXG4gICAgPlxuICAgICAgPEJveFxuICAgICAgICByZWY9e3N2Z1dyYXBwZXJSZWZ9XG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxzdmcgaWQ9XCJjaGFydC1iYWNrZ3JvdW5kXCIgY2xhc3NOYW1lPSdjaGFydC1iZycgcm9sZT0naW1nJz5cbiAgICAgICAgICA8dXNlIHhsaW5rSHJlZj0nI2NoYXJ0LWJnJz48L3VzZT5cbiAgICAgICAgPC9zdmc+XG4gICAgICA8L0JveD5cbiAgICAgIDxMaW5lQ2hhcnQgd2lkdGg9ezY3NX0gaGVpZ2h0PXszODB9IGRhdGE9e2NoYXJ0RGF0YX0+XG4gICAgICAgIDxMaW5lIHR5cGU9XCJuYXR1cmFsXCIgZGF0YUtleT1cInRpbWVWYWx1ZVwiIHN0cm9rZT1cIiM4ODg0ZDhcIiAvPlxuICAgICAgICA8Q2FydGVzaWFuR3JpZCBzdHJva2U9XCIjY2NjXCIgc3Ryb2tlRGFzaGFycmF5PVwiNSA1XCIgLz5cbiAgICAgICAgPFlBeGlzIGxhYmVsPXt7IHZhbHVlOiAnRXhlY3V0aW9uIFRpbWUnLCBhbmdsZTogLTkwLCBwb3NpdGlvbjogJ0xlZnQnIH19IHRpY2tGb3JtYXR0ZXI9e2VtcHR5U3RyaW5nRm9ybWF0dGVyfSAvPlxuICAgICAgICA8WEF4aXMgbGFiZWw9e3sgdmFsdWU6ICdJdGVyYXRpb24gQ291bnQnLCBvZmZzZXQ6IDAsIHBvc2l0aW9uOiAnQm90dG9tJyB9fSB0aWNrRm9ybWF0dGVyPXtlbXB0eVN0cmluZ0Zvcm1hdHRlcn0gLz5cbiAgICAgIDwvTGluZUNoYXJ0PlxuICAgIDwvQm94PlxuICApO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9