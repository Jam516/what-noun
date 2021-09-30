import styles from './styles.module.scss';
import {memo} from 'react'
function Button(props: {label: string; onClick: Function}): JSX.Element {
  const {label, onClick} = props;
  return (
    <div className={styles.button}>
      <button onClick={() => onClick()}>
        <span>{label}</span>
      </button>
    </div>
  );
}
export default memo(Button);
