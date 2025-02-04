import styles from '../styles/ResultTextBlock.module.css';

const ResultTextBlock = ({ resultTitle, overall }) => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.title}>{resultTitle}</p>
      <p className={styles.text}>You scored higher than {overall}% of the people who have taken this tests.</p>
    </div>
  );
};

export default ResultTextBlock;
