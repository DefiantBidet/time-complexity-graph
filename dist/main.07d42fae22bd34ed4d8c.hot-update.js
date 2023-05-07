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
                }, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", { className: 'chart-bg', role: 'img', children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("use", { xlinkHref: '#chart-bg' }) }) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(recharts__WEBPACK_IMPORTED_MODULE_3__.LineChart, { width: 675, height: 380, data: chartData, children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(recharts__WEBPACK_IMPORTED_MODULE_4__.Line, { type: "natural", dataKey: "timeValue", stroke: "#8884d8" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(recharts__WEBPACK_IMPORTED_MODULE_5__.CartesianGrid, { stroke: "#ccc", strokeDasharray: "5 5" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(recharts__WEBPACK_IMPORTED_MODULE_6__.YAxis, { label: { value: 'Execution Time', angle: -90, position: 'Left' }, tickFormatter: emptyStringFormatter }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(recharts__WEBPACK_IMPORTED_MODULE_7__.XAxis, { label: { value: 'Run Count', offset: 0, position: 'Bottom' }, tickFormatter: emptyStringFormatter })] })] }));
}


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4wN2Q0MmZhZTIyYmQzNGVkNGQ4Yy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTBDO0FBQ1o7QUFPWjtBQUlsQjs7OztHQUlHO0FBQ0gsTUFBTSxvQkFBb0IsR0FBRyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUM7QUFFdEM7Ozs7R0FJRztBQUNILE1BQU0saUJBQWlCLEdBQUcsQ0FBQyxLQUFhLEVBQUUsRUFBRSxDQUFDLEdBQUcsS0FBSyxJQUFJLENBQUM7QUFJekQsQ0FBQztBQUVGOzs7O0dBSUc7QUFDWSxTQUFTLEtBQUssQ0FBQyxFQUM1QixTQUFTLEdBQ0U7SUFDWCxNQUFNLGFBQWEsR0FBRyw2Q0FBTSxDQUFpQixJQUFJLENBQUMsQ0FBQztJQUVuRCxrRkFBa0Y7SUFDbEYsZ0RBQVMsQ0FBQyxHQUFHLEVBQUU7UUFDYixNQUFNLFVBQVUsR0FBRyxhQUFhLENBQUMsT0FBTyxDQUFDO1FBQ3pDLElBQUksVUFBVSxFQUFFO1lBQ2Qsa0RBQWtEO1lBQ2xELE1BQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsaUJBQWlCLENBQUMsQ0FBQztZQUMxRCxNQUFNLGdCQUFnQixHQUFHLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxDQUFDO1lBRTFELFVBQVUsQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLGlCQUFpQixDQUFDLGdCQUFnQixFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNwRSxVQUFVLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxpQkFBaUIsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDbkUsVUFBVSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsaUJBQWlCLENBQUMsZ0JBQWdCLEVBQUUsTUFBTSxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQzNFLFVBQVUsQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLGlCQUFpQixDQUFDLGdCQUFnQixFQUFFLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQztTQUMxRTtJQUNILENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUVQLE9BQU8sQ0FDTCx3REFBQyx3Q0FBRyxJQUNGLElBQUksUUFDSixLQUFLLEVBQUMsUUFBUSxFQUNkLEVBQUUsRUFBQyxpQkFBaUIsRUFDcEIsT0FBTyxFQUFDLFFBQVEsYUFFaEIsdURBQUMsd0NBQUcsSUFDRixHQUFHLEVBQUUsYUFBYSxFQUNsQixFQUFFLEVBQUMsMkJBQTJCLEVBQzlCLEtBQUssRUFBRTtvQkFDTCxRQUFRLEVBQUUsVUFBVTtpQkFDckIsWUFFRCxnRUFBSyxTQUFTLEVBQUMsVUFBVSxFQUFDLElBQUksRUFBQyxLQUFLLFlBQ2xDLGdFQUFLLFNBQVMsRUFBQyxXQUFXLEdBQU8sR0FDN0IsR0FDRixFQUNOLHdEQUFDLCtDQUFTLElBQUMsS0FBSyxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxTQUFTLGFBQ2pELHVEQUFDLDBDQUFJLElBQUMsSUFBSSxFQUFDLFNBQVMsRUFBQyxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sRUFBQyxTQUFTLEdBQUcsRUFDNUQsdURBQUMsbURBQWEsSUFBQyxNQUFNLEVBQUMsTUFBTSxFQUFDLGVBQWUsRUFBQyxLQUFLLEdBQUcsRUFDckQsdURBQUMsMkNBQUssSUFBQyxLQUFLLEVBQUUsRUFBRSxLQUFLLEVBQUUsZ0JBQWdCLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsRUFBRSxhQUFhLEVBQUUsb0JBQW9CLEdBQUksRUFDaEgsdURBQUMsMkNBQUssSUFBQyxLQUFLLEVBQUUsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxFQUFFLGFBQWEsRUFBRSxvQkFBb0IsR0FBSSxJQUNsRyxJQUNSLENBQ1AsQ0FBQztBQUNKLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90aW1lLWNvbXBsZXhpdHktZ3JhcGgvLi9zcmMvdHMvY29tcG9uZW50cy9DaGFydC9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUmVmLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBCb3ggfSBmcm9tICdncm9tbWV0JztcbmltcG9ydCB7XG4gIExpbmVDaGFydCxcbiAgTGluZSxcbiAgQ2FydGVzaWFuR3JpZCxcbiAgWEF4aXMsXG4gIFlBeGlzXG59IGZyb20gJ3JlY2hhcnRzJztcblxuaW1wb3J0IHsgQ2hhcnROb2RlIH0gZnJvbSAnVHlwZXMvYXBwJztcblxuLyoqXG4gKiBGb3JtYXR0ZXIgZm9yIFRpY2tzIG9mIFgvWSBBeGlzIHRvIHJldHVybiBlbXB0eSBzdHJpbmdcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqIEBmdW5jdGlvblxuICovXG5jb25zdCBlbXB0eVN0cmluZ0Zvcm1hdHRlciA9ICgpID0+IFwiXCI7XG5cbi8qKlxuICogQ1NTIHN0eWxlIHN0cmluZyBmb3JtYXR0ZXJcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqIEBmdW5jdGlvblxuICovXG5jb25zdCBjc3NTdHlsZUZvcm1hdHRlciA9ICh2YWx1ZTogbnVtYmVyKSA9PiBgJHt2YWx1ZX1weGA7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2hhcnRQcm9wcyB7XG4gIGNoYXJ0RGF0YTogQ2hhcnROb2RlW107XG59O1xuXG4vKipcbiAqIENyZWF0ZXMgYSByZWNoYXJ0cyBMaW5lIENoYXJ0IHBsb3R0aW5nIHBvaW50cyBvZiBkYXRhXG4gKiBAcmV0dXJuIHtKU1guRWxlbWVudH1cbiAqIEBmdW5jdGlvblxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDaGFydCh7XG4gIGNoYXJ0RGF0YSxcbn06IENoYXJ0UHJvcHMpOiBKU1guRWxlbWVudCB7XG4gIGNvbnN0IHN2Z1dyYXBwZXJSZWYgPSB1c2VSZWY8SFRNTERpdkVsZW1lbnQ+KG51bGwpO1xuXG4gIC8vIG9uIGNvbXBvbmVudCBtb3VudCAtIGNhbGN1bGF0ZSBjb29yZGluYXRlcyBvZiBsaW5lIGNoYXJ0IHRvIHBvc2l0aW9uIGJhY2tncm91bmRcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBzdmdXcmFwcGVyID0gc3ZnV3JhcHBlclJlZi5jdXJyZW50O1xuICAgIGlmIChzdmdXcmFwcGVyKSB7XG4gICAgICAvLyBzdmdXcmFwcGVyUmVmIHByZXNlbnQgLSBwb3NpdGlvbiBiYWNrZ3JvdW5kIHN2Z1xuICAgICAgY29uc3QgY2hhcnRFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2cucmVjaGFydHMtbGluZScpO1xuICAgICAgY29uc3QgY2hhcnRDb29yZGluYXRlcyA9IGNoYXJ0RWw/LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gICAgICBzdmdXcmFwcGVyLnN0eWxlLmxlZnQgPSBjc3NTdHlsZUZvcm1hdHRlcihjaGFydENvb3JkaW5hdGVzPy54ID8/IDApO1xuICAgICAgc3ZnV3JhcHBlci5zdHlsZS50b3AgPSBjc3NTdHlsZUZvcm1hdHRlcihjaGFydENvb3JkaW5hdGVzPy55ID8/IDApO1xuICAgICAgc3ZnV3JhcHBlci5zdHlsZS5oZWlnaHQgPSBjc3NTdHlsZUZvcm1hdHRlcihjaGFydENvb3JkaW5hdGVzPy5oZWlnaHQgPz8gMCk7XG4gICAgICBzdmdXcmFwcGVyLnN0eWxlLndpZHRoID0gY3NzU3R5bGVGb3JtYXR0ZXIoY2hhcnRDb29yZGluYXRlcz8ud2lkdGggPz8gMCk7XG4gICAgfVxuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8Qm94XG4gICAgICBmaWxsXG4gICAgICBhbGlnbj1cImNlbnRlclwiXG4gICAgICBpZD1cImNoYXJ0LWNvbnRhaW5lclwiXG4gICAgICBqdXN0aWZ5PVwiY2VudGVyXCJcbiAgICA+XG4gICAgICA8Qm94XG4gICAgICAgIHJlZj17c3ZnV3JhcHBlclJlZn1cbiAgICAgICAgaWQ9XCJjaGFydC1iYWNrZ3JvdW5kLWdyYWRpZW50XCJcbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPHN2ZyBjbGFzc05hbWU9J2NoYXJ0LWJnJyByb2xlPSdpbWcnPlxuICAgICAgICAgIDx1c2UgeGxpbmtIcmVmPScjY2hhcnQtYmcnPjwvdXNlPlxuICAgICAgICA8L3N2Zz5cbiAgICAgIDwvQm94PlxuICAgICAgPExpbmVDaGFydCB3aWR0aD17Njc1fSBoZWlnaHQ9ezM4MH0gZGF0YT17Y2hhcnREYXRhfT5cbiAgICAgICAgPExpbmUgdHlwZT1cIm5hdHVyYWxcIiBkYXRhS2V5PVwidGltZVZhbHVlXCIgc3Ryb2tlPVwiIzg4ODRkOFwiIC8+XG4gICAgICAgIDxDYXJ0ZXNpYW5HcmlkIHN0cm9rZT1cIiNjY2NcIiBzdHJva2VEYXNoYXJyYXk9XCI1IDVcIiAvPlxuICAgICAgICA8WUF4aXMgbGFiZWw9e3sgdmFsdWU6ICdFeGVjdXRpb24gVGltZScsIGFuZ2xlOiAtOTAsIHBvc2l0aW9uOiAnTGVmdCcgfX0gdGlja0Zvcm1hdHRlcj17ZW1wdHlTdHJpbmdGb3JtYXR0ZXJ9IC8+XG4gICAgICAgIDxYQXhpcyBsYWJlbD17eyB2YWx1ZTogJ1J1biBDb3VudCcsIG9mZnNldDogMCwgcG9zaXRpb246ICdCb3R0b20nIH19IHRpY2tGb3JtYXR0ZXI9e2VtcHR5U3RyaW5nRm9ybWF0dGVyfSAvPlxuICAgICAgPC9MaW5lQ2hhcnQ+XG4gICAgPC9Cb3g+XG4gICk7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=