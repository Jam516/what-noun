import styles from "./styles.module.scss";
import Logo from "components/examples/logo";
function Header(): JSX.Element {
  return (
    <div className={styles.header}>
        <div className={styles.content}>
      <div className={styles.logo}>
        <Logo />
      </div>
      </div>
    </div>
  );
}
export default Header;
