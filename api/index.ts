import axios from "axios";
//INSERT YOUR BASE ID AND TABLE
axios.defaults.baseURL =
  "https://api.steinhq.com/v1/storages/6161609785151023ac168f65";

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
        description: 'Sorry',
        title: 'Couldnt find you in the database',
        url: 'https://dl.airtable.com/.attachments/83427991309b5ec93e5ce5467959db2f/5826c3c1/nounEmpty2.PNG',
      };
    }
    return result;
  } catch (err) {
    console.log(err);
  }
}
