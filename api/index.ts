import axios from "axios";
//INSERT YOUR BASE ID AND TABLE
axios.defaults.baseURL =
  "https://sheet.best/api/sheets/d457affb-3e14-4092-ac58-32991378942f/wallet";

export async function getNoun(form?: string) {
  //param form is equal var Form on Hero component

  try {
    const API_URL = '/' + form;
    let result;
    const data = await axios.get(API_URL);
    if (data.data[0].wallet === form) {
      result = {
        description: data.data[0].description,
        title: data.data[0].title,
        url: data.data[0].status,
      };
      // console.log(result)
    }
    else {
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
