import styles from '../styles/ResultCircle.module.css';

const ResultCircle = ({ overallResult }) => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.overall}>{overallResult}</p>
      <p className={styles.text}>of 100</p>
    </div>
  );
};

export default ResultCircle;
