import styles from '../styles/ResultContainer.module.css';

const ResultContainer = ({ children }) => {
  return <section className={styles.wrapper}>{children}</section>;
};

export default ResultContainer;
