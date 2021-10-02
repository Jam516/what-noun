import axios from "axios";
//INSERT YOUR BASE ID AND TABLE
//EXAMPLE https://api.airtable.com/v0/BASE_ID/table/
axios.defaults.baseURL =
  "https://api.airtable.com/v0/appuFWXmw0frhaUcW/avatars/";
//INSERT YOUR KEY API
axios.defaults.headers["Authorization"] = "Bearer keye0U1hC2uyCZeR4";
axios.defaults.headers.post["Content-Type"] = "application/json";
export async function getNoun(form?: string) {
  //param form is equal var Form on Hero component

  try {
    //MAX data = 5
    const data = await axios
      .get("/?maxRecords=40")
      .then((res) => res.data.records);
    // setting data entry
    let result;
    for (const res of data) {
      if (res.fields.wallet === form) {
        result = {
          avatar: res.fields.avatar,
          description: res.fields.description,
          title: res.fields.title,
          // url: res.fields.status[0].url,
          url: res.fields.status,
        };
      }
    }
    if (result === undefined) {
      result = result = {
        avatar: data[0].fields.avatar,
        description: data[0].fields.description,
        title: data[0].fields.title,
        // url: data[0].fields.status[0].url,
        url: res.fields.status[0],
      };
    }
    return result;
  } catch (err) {
    console.log(err);
  }
}
