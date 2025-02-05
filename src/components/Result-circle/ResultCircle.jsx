import styles from './ResultCircle.module.css';

const ResultCircle = ({ overallResult }) => {
  const { wrapper, overall, text } = styles;

  return (
    <div className={wrapper}>
      <p className={overall}>{overallResult}</p>
      <p className={text}>of 100</p>
    </div>
  );
};

export default ResultCircle;
