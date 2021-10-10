import {memo} from 'react';
import styles from './styles.module.scss';
import Text from 'components/utils/interactive/inputs/text';
import Button from 'components/utils/interactive/button';
function Form(props: {submit: Function; handleForm: Function}): JSX.Element {
  const {submit, handleForm} = props;

  return (
    <div className={styles.form}>
      <Text
        placeholder="Wallet Address"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleForm(e)}
        name="text"
      />
      <Button label="DISCOVER" onClick={() => submit()} />
    </div>
  );
}
export default memo(Form);
