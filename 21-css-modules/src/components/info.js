import './Info.css';
import styles from './Info.module.css';
console.log(styles);
const { info, myOtherButton } = styles;

export const Info = () => {
  return (
    <div className={info}>
      <h1>Hello from Info component</h1>
      <button className={myOtherButton}>Click me</button>
    </div>
  );
};
