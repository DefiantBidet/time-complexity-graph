import { render } from '@testing-library/react';

import Chart, { ChartProps } from './index';

describe('<Chart />', () => {
  const mockChartProps: ChartProps = {
    chartData: [
      { iterationCount: 10,     timeValue: 1000 },
      { iterationCount: 50,     timeValue: 5000 },
      { iterationCount: 100,    timeValue: 10000 },
      { iterationCount: 500,    timeValue: 50000 },
      { iterationCount: 1000,   timeValue: 100000 },
      { iterationCount: 5000,   timeValue: 500000 },
      { iterationCount: 10000,  timeValue: 1000000 },
      { iterationCount: 50000,  timeValue: 5000000 },
      { iterationCount: 100000, timeValue: 10000000 },
    ],
  };

  test('Should render wrapper element', () => {
    render(<Chart {...mockChartProps} />);

    const rechartsWrapper = document.querySelector('div.recharts-wrapper');
    expect(rechartsWrapper).toBeInTheDocument();
  });

  test('Should render a Line Chart', () => {
    render(<Chart {...mockChartProps} />);

    const svgElement = document.querySelector('div.recharts-wrapper g.recharts-line');
    expect(svgElement).toBeInTheDocument();
  });

  test('Should render a Y-Axis label', () => {
    render(<Chart {...mockChartProps} />);

    const textElement = document.querySelector('div.recharts-wrapper g.yAxis > text > tspan');
    expect(textElement).toBeInTheDocument();
    expect(textElement?.innerHTML).toBe('Execution Time');
  });

  test('Should render an X-Axis label', () => {
    render(<Chart {...mockChartProps} />);

    const textElement = document.querySelector('div.recharts-wrapper g.xAxis > text > tspan');
    expect(textElement).toBeInTheDocument();
    expect(textElement?.innerHTML).toBe('Iteration Count');
  });
});
