import { useRef, useEffect } from 'react';
import { Box } from 'grommet';
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis
} from 'recharts';

import { ChartNode } from 'Types/app';

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
const cssStyleFormatter = (value: number) => `${value}px`;

export interface ChartProps {
  chartData: ChartNode[];
};

/**
 * Creates a recharts Line Chart plotting points of data
 * @return {JSX.Element}
 * @function
 */
export default function Chart({
  chartData,
}: ChartProps): JSX.Element {
  const svgWrapperRef = useRef<HTMLDivElement>(null);

  // on component mount - calculate coordinates of line chart to position background
  useEffect(() => {
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

  return (
    <Box
      fill
      align="center"
      id="chart-container"
      justify="center"
    >
      <Box
        ref={svgWrapperRef}
        style={{
          position: 'absolute',
        }}
      >
        <svg id="chart-background" className='chart-bg' role='img'>
          <use xlinkHref='#chart-bg'></use>
        </svg>
      </Box>
      <LineChart width={675} height={380} data={chartData}>
        <Line type="natural" dataKey="timeValue" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <YAxis label={{ value: 'Execution Time', angle: -90, position: 'Left' }} tickFormatter={emptyStringFormatter} />
        <XAxis label={{ value: 'Iteration Count', offset: 0, position: 'Bottom' }} tickFormatter={emptyStringFormatter} />
      </LineChart>
    </Box>
  );
}
