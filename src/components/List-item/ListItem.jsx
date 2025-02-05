import styles from './ListItem.module.css';

const ListItem = ({ category, score, icon }) => {
  const iconPath = icon.replace('./assets/', '/');

  const createDynamicStyle = (category) => {
    if (category === 'Reaction') {
      return {
        color: 'hsl(0 100 67)',
        background: 'hsla(0 100 67 / 0.05)',
      };
    }

    if (category === 'Memory') {
      return {
        color: 'hsl(40 100 56)',
        background: 'hsla(40 100 56 / 0.05)',
      };
    }

    if (category === 'Verbal') {
      return {
        color: 'hsl(166 100 37)',
        background: 'hsla(166 100 37 / 0.05)',
      };
    }

    if (category === 'Visual') {
      return {
        color: 'hsl(234 85 45)',
        background: 'hsla(234 85 45 / 0.05)',
      };
    }
  };

  return (
    <li className={styles.listItem} style={{ ...createDynamicStyle(category) }}>
      <div className={styles.category}>
        <img className={styles.categoryImage} src={iconPath} alt="" />
        <p className={styles.categoryText}>{category}</p>
      </div>

      <div className={styles.scoreWrapper}>
        <p className={styles.scoreValue} style={{ color: 'black' }}>
          {score}
        </p>
        <p className={styles.scoreText} style={{ color: 'hsl(223, 30%, 27%)' }}>
          /
        </p>
        <p className={styles.scoreText} style={{ color: 'hsl(223, 30%, 27%)' }}>
          100
        </p>
      </div>
    </li>
  );
};

export default ListItem;
