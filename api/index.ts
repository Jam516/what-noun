import axios from "axios";
//INSERT YOUR BASE ID AND TABLE
axios.defaults.baseURL =
  "https://api.steinhq.com/v1/storages/6158d04447873c2b735e69b4/";

export async function getNoun(form?: string) {
  //param form is equal var Form on Hero component

  try {
    var getrequest = "/Sheet1?search={\"wallet\":\""+ form +"\"}"

    const data = await axios
      .get(getrequest);

    if (data.wallet === form) {
      result = {
        description: data.description,
        title: data.title,
        url: data.status,
      };
    }

  } catch (err) {
    console.log(err);
  }
}
