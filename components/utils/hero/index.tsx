import { useState, memo, useEffect } from "react";
import styles from "./styles.module.scss";
import Form from "./form";
import Avatar from "components/utils/hero/avatar";
import { getNoun } from "api";
//Interface expected data
interface dataAirtable {
  avatar: string;
  description: string;
  url: string;
  title: string;
}
function Hero(): JSX.Element {
  const [buttonSend, setButtonSend] = useState(false);
  const [form, setForm] = useState({ text: "" });

  const [data, setData] = useState<dataAirtable>({
    description: "",
    avatar: "",
    url: "",
    title: "",
  });
  useEffect(() => {
    //check submit and fetch
    if (buttonSend) {
      getNoun(form.text).then((res) => {
        setData({
          description: res.description,
          avatar: res.avatar,
          url: res.url,
          title: res.title,
        });
      });
      //Reset
      setForm({ text: "" });
      setButtonSend(false);
    }
  }, [buttonSend, form]);
  //change submit state
  const submit = () => {
    form.text !== "" && setButtonSend(true);
  };
  //capture value input
  const handleForm = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const auxForm = { ...form };
    auxForm[e.target.name] = e.target.value;
    setForm(auxForm);
  };
  return (
    <div className={styles.hero}>
      <Avatar data={data} />
      <div className={styles.info}>
        <h1>Which Noun are you?</h1>
        <div className={styles.description}>
          {data.description !== "" && <p>{data.description}</p>}
        </div>
        <div className={styles.title}>
          {data.title !== "" && <p>{data.title}</p>}
        </div>
        <Form
          submit={() => submit()}
          handleForm={(e: React.ChangeEvent<HTMLInputElement>) => handleForm(e)}
        />
      </div>
    </div>
  );
}
export default memo(Hero);
