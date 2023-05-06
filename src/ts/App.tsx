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
    { iterationCount: 10,     timeValue: 1000 },
    { iterationCount: 50,     timeValue: 5000 },
    { iterationCount: 100,    timeValue: 10000 },
    { iterationCount: 500,    timeValue: 50000 },
    { iterationCount: 1000,   timeValue: 100000 },
    { iterationCount: 5000,   timeValue: 500000 },
    { iterationCount: 10000,  timeValue: 1000000 },
    { iterationCount: 50000,  timeValue: 5000000 },
    { iterationCount: 100000, timeValue: 10000000 },
  ];

  return (
    <Grommet theme={applicationTheme}>
      <Chart chartData={chartData} />
    </Grommet>
  );
}
