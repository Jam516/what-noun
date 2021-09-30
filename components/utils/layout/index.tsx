import styles from "./styles.module.scss";
import Header from "./header";
function Layout(props: { children: JSX.Element }): JSX.Element {
  const { children } = props;
  return (
    <>
      <Header />
      <div className={styles.container}>{children}</div>
    </>
  );
}
export default Layout;
