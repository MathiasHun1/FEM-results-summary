import styles from './styles/App.module.css';

import services from '../services/dataService';
import utils from './utils';

import ResultContainer from './components/ResultContainer';
import ResultCircle from './components/ResultCircle';
import ResultTextBlock from './components/ResultTextBlock';
import SummaryContainer from './components/SummaryContainer';
import List from './components/List';
import Button from './components/Button';
import { useEffect, useState } from 'react';

function App() {
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
    <div className={styles.app}>
      <ResultContainer>
        <h1 className={styles.title}>Your Result</h1>
        <ResultCircle overallResult={overallResult} />
        <ResultTextBlock resultTitle={'Great'} overall={65} />
      </ResultContainer>

      <SummaryContainer>
        <List data={data} />
        <Button>Continue</Button>
      </SummaryContainer>
    </div>
  );
}

export default App;
