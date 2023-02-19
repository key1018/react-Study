import './Card.css';

const Card = (props) => {
  const classes = 'card ' + props.className; // 밖에서 className으로 받는 것들은 문자열로 추가된다.
  return <div className={classes}>{props.children}</div>;
};

export default Card;
