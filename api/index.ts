import axios from "axios";
//INSERT YOUR BASE ID AND TABLE
axios.defaults.baseURL =
  "https://api.steinhq.com/v1/storages/6158d04447873c2b735e69b4/";

export async function getNoun(form?: string) {
  //param form is equal var Form on Hero component

  try {
    const API_URL = '/Sheet1?search={"wallet":"' + form + '"}';
    let result;
    const data = await axios.get(API_URL);
    if (data.data.wallet === form) {
      result = {
        description: data.data.description,
        title: data.data.title,
        url: data.data.status,
      };
    }
    if (result === undefined) {
      result = result = {
        description: data.data[0].description,
        title: data.data[0].title,
        url: data.data[0].status,
      };
    }
    return result;
  } catch (err) {
    console.log(err);
  }
}
