import styles from '../styles/SummaryContainer.module.css';

const SummaryContainer = ({ children }) => {
  return (
    <section className={styles.wrapper}>
      <p className={styles.text}>Summary</p>
      {children}
    </section>
  );
};

export default SummaryContainer;
