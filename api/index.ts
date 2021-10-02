import axios from "axios";
//INSERT YOUR BASE ID AND TABLE
//EXAMPLE https://api.airtable.com/v0/BASE_ID/table/
axios.defaults.baseURL =
  "https://api.steinhq.com/v1/storages/6158d04447873c2b735e69b4/";
//INSERT YOUR KEY API
// axios.defaults.headers["Authorization"] = "Bearer keye0U1hl/json";
export async function getNoun(form?: string) {
  //param form is equal var Form on Hero component

  try {
    var getrequest = "/Sheet1?search={\"wallet\":\""+ form +"\"}"

    const data = await axios
      .get(getrequest);
    // setting data entry
    // let result;
    if (data.wallet === form) {
      result = {
        description: data.description,
        title: data.title,
        // url: res.fields.status[0].url,
        url: data.status,
      };
    }

    // if (result === undefined) {
    //   result = result = {
    //     description: data[0].description,
    //     title: data[0].title,
    //     // url: data[0].fields.status[0].url,
    //     url: res.status[0],
    //   };
    // }
    // return result;
  } catch (err) {
    console.log(err);
  }
}
