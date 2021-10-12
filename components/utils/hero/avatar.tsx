import styles from "./styles.module.scss";
import { memo } from "react";
import Image from "next/image";
import NounExample from "components/examples/noun";
import nounExample2 from "public/nounEmpty2.PNG";
function Avatar(props: { data: { avatar: string; url: string } }): JSX.Element {
  const { data } = props;
  return (
    <div className={styles.containerAvatar}>
      <div className={styles.avatar}>
        {data.url === "" ? (
          <Image
            width="284px"
            height="360px"
            src={nounExample2}
          />
        ) : (
          <Image
            width="284px"
            height="360px"
            alt={data.avatar}
            src={data.url !== "" ? data.url : nounExample2}
          />
        )}
      </div>
    </div>
  );
}
export default memo(Avatar);
