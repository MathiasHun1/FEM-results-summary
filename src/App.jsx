import styles from './App.module.css';
import services from '../services/dataService';
import utils from './utils';
import { useEffect, useState } from 'react';

import Results from './components/Results/Results';
import Summary from './components/Summary/Summary';

function App() {
  const { app } = styles;

  const [data, setData] = useState(null);
  const [overallResult, setOverallResult] = useState(null);

  useEffect(() => {
    services.getData().then((data) => {
      const values = data.map((item) => item.score);

      const result = utils.calculateAverage(...values);

      setData(data);
      setOverallResult(result);
    });
  }, []);

  return (
    <div className={app}>
      <Results overallResult={overallResult} />
      <Summary data={data} />
    </div>
  );
}

export default App;
