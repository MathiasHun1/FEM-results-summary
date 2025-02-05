import ListItem from '../List-item/ListItem';
import styles from './List.module.css';

const List = ({ data }) => {
  const { list } = styles;

  if (data) {
    return (
      <ul className={list}>
        {data.map((item) => (
          <ListItem key={item.category} category={item.category} score={item.score} icon={item.icon} />
        ))}
      </ul>
    );
  }

  return null;
};

export default List;
