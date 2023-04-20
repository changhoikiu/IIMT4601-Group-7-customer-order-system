import Amplify, { API } from "aws-amplify";
import * as React from "react";
import { State } from "./Context";

export function GetData() {
  const { dispatch } = State();

  const [books, setBooks] = React.useState(null);

  React.useEffect(() => {
    const myAPI = "customer";
    const path = "/books";

    API.get(myAPI, path)
      .then((response) => {
        const arr = [];
        response.forEach((d) => {
          let key = Object.keys(d)[0];
          const obj = {};
          for (const ckey in d[key]) {
            ckey === "selling_price"
              ? (obj[ckey] = d[key][ckey].toFixed(2))
              : (obj[ckey] = d[key][ckey]);
          }
          arr.push(obj);
        });
        setBooks(arr);
        dispatch({
          type: "FETCH_BOOKS_SUCCESS",
          payload: arr,
        });
      })
      .catch((error) => {
        console.log(error.response);
      });
  }, []);

  return books ? "success" : null;
}

// async function format_JSON() {
//   const data = await getBooks();
//   const arr = [];

//   await data.forEach((d) => {
//     let key = Object.keys(d)[0];
//     const obj = { id: key };
//     for (const ckey in d[key]) {
//       ckey === "selling_price"
//         ? (obj[ckey] = d[key][ckey].toFixed(2))
//         : (obj[ckey] = d[key][ckey]);
//     }
//     arr.push(obj);
//   });
//   return arr;
// }
