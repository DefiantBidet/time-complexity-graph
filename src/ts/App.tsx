import { useEffect } from 'react';

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

  return (
    <>
      Todo... <br />
       - add chart <br />
    </>
  );
}
