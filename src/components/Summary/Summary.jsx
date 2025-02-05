import styles from './Summary.module.css';

import List from '../List/List';
import Button from '../Button/Button';

const Summary = ({ data }) => {
  const { wrapper, text } = styles;

  return (
    <section className={styles.wrapper}>
      <p className={text}>Summary</p>
      <List data={data} />
      <Button>Continue</Button>
    </section>
  );
};

export default Summary;
