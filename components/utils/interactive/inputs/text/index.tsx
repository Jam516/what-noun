import {memo} from 'react'
import styles from './styles.module.scss';
function Text(props: {
  placeholder: string;
  name: string;
  onChange: Function;
}): JSX.Element {
  const {placeholder, onChange, name} = props;
  return (
    <div className={styles.inpText}>
      <input
        name={name}
        type="text"
        onChange={e => onChange(e)}
        placeholder={placeholder}
      />
    </div>
  );
}
export default memo(Text);
