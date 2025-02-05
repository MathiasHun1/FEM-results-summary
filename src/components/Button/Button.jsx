import styles from './Button.module.css';

const Button = ({ children }) => {
  const { button } = styles;

  return <button className={button}>{children}</button>;
};

export default Button;
