import { useEffect } from 'react';
import { Grommet } from 'grommet';

import applicationTheme from './theme';

import Chart from 'Components/Chart'
import { ChartNode } from 'Types/app';

/**
 * The main entry point of the Application.
 * @return {JSX.Element}
 * @function
 */
export default function App(): JSX.Element {

  // When the component mounts ...
  useEffect(() => {
    console.log('App mounted!');
  }, []);


  // FIXME: temporary data
  const chartData: ChartNode[] = [
    { runCount: 10,     timeValue: 1000 },
    { runCount: 50,     timeValue: 5000 },
    { runCount: 100,    timeValue: 10000 },
    { runCount: 500,    timeValue: 50000 },
    { runCount: 1000,   timeValue: 100000 },
    { runCount: 5000,   timeValue: 500000 },
    { runCount: 10000,  timeValue: 1000000 },
    { runCount: 50000,  timeValue: 5000000 },
    { runCount: 100000, timeValue: 10000000 },
  ];

  return (
    <Grommet theme={applicationTheme}>
      <Chart chartData={chartData} />
    </Grommet>
  );
}
