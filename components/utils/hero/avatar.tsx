import styles from "./styles.module.scss";
import { memo } from "react";
import Image from "next/image";
import NounExample from "components/examples/noun";
// import nounExample2 from "./nounEmpty2.PNG";
function Avatar(props: { data: { avatar: string; url: string } }): JSX.Element {
  const { data } = props;
  return (
    <div className={styles.containerAvatar}>
      <div className={styles.avatar}>
        {data.url === "" ? (
          <Image
            width="284px"
            height="360px"
            src={"https://dl.airtable.com/.attachments/83427991309b5ec93e5ce5467959db2f/5826c3c1/nounEmpty2.PNG"}
          />
        ) : (
          <Image
            width="284px"
            height="360px"
            alt={data.avatar}
            src={data.url !== "" ? data.url : "https://dl.airtable.com/.attachments/83427991309b5ec93e5ce5467959db2f/5826c3c1/nounEmpty2.PNG"}
          />
        )}
      </div>
    </div>
  );
}
export default memo(Avatar);
