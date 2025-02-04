import ListItem from './ListItem';
import styles from '../styles/List.module.css';

const List = ({ data }) => {
  if (data) {
    return (
      <ul className={styles.list}>
        {data.map((item) => (
          <ListItem key={item.category} category={item.category} score={item.score} icon={item.icon} />
        ))}
      </ul>
    );
  }

  return null;
};

export default List;
