import styles from './ResultTextBlock.module.css';

const ResultTextBlock = ({ resultTitle, overall }) => {
  const { wrapper, title, text } = styles;

  return (
    <div className={wrapper}>
      <p className={title}>{resultTitle}</p>
      <p className={text}>You scored higher than {overall}% of the people who have taken this tests.</p>
    </div>
  );
};

export default ResultTextBlock;
