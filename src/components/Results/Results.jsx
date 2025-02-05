import styles from './Results.module.css';

import ResultCircle from '../Result-circle/ResultCircle';
import ResultTextBlock from '../Result-text-block/ResultTextBlock';

const Results = ({ overallResult }) => {
  const { wrapper, title } = styles;

  return (
    <section className={wrapper}>
      <h1 className={title}>Your Result</h1>
      <ResultCircle overallResult={overallResult} />
      <ResultTextBlock resultTitle={'Great'} overall={65} />
    </section>
  );
};

export default Results;
