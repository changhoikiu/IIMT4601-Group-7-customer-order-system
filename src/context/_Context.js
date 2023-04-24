import { createContext, useReducer, useContext } from "react";
import { cartReducer } from "./Reducers";

import data from "./book_data.json";
function format_JSON(data) {
  const arr = [];
  for (const key in data) {
    const obj = { Book_id: key };
    for (const ckey in data[key]) {
      ckey === "Selling_Price"
        ? (obj[ckey] = data[key][ckey].toFixed(2))
        : (obj[ckey] = data[key][ckey]);
    }
    arr.push(obj);
  }
  return arr;
}

const Cart = createContext();

const Context = ({ children }) => {
  const bookList = format_JSON(data);
  // const bookList = [
  //   {
  //     id: 1,
  //     title: "Harry Potter and the Philosopher's Stone",
  //     authors: ["J.K. Rowling", "J.K. Rowling", "J.K. Rowling"],
  //     publisher: "ABC Print",
  //     price: 100,
  //     cover: "",
  //     description:
  //       "Harry Potter and the Philosopher's Stone is an American novel written by J.K. Rowling, a young man from British Columbia, who is known for his philosophy and philosophy of writing.",
  //     genre: "二手書架",
  //   },
  //   {
  //     id: 2,
  //     title: "Book 2",
  //     authors: ["Author 2"],
  //     publisher: "ABC Print",
  //     price: 200,
  //     cover: "src/assets/1145.webp",
  //     description: "description 2",
  //     genre: "精神分析",
  //   },
  //   {
  //     id: 3,
  //     title: "Book 3",
  //     authors: ["Author 3"],
  //     publisher: "Print",
  //     price: 300,
  //     cover: "",
  //     description: "description 3",
  //     genre: "二手書架",
  //   },
  //   {
  //     id: 4,
  //     title: "Book 4",
  //     authors: ["Author 4"],
  //     publisher: "Print",
  //     price: 400,
  //     cover: "",
  //     description: "description 4",
  //     genre: "二手書架",
  //   },
  //   {
  //     id: 5,
  //     title: "Book 5",
  //     authors: ["Author 5"],
  //     publisher: "Print",
  //     price: 500,
  //     cover: "",
  //     description: "description 5",
  //     genre: "二手書架",
  //   },
  //   {
  //     id: 6,
  //     title: "Book 6",
  //     authors: ["Author 6"],
  //     publisher: "Print",
  //     price: 600,
  //     cover: "",
  //     description: "description 6",
  //     genre: "二手書架",
  //   },
  //   {
  //     id: 7,
  //     title: "Book 7",
  //     authors: ["Author 7"],
  //     publisher: "Print",
  //     price: 700,
  //     cover: "",
  //     description: "description 7",
  //     genre: "二手書架",
  //   },
  //   {
  //     id: 8,
  //     title: "Book 8",
  //     authors: ["Author 8"],
  //     publisher: "Print",
  //     price: 800,
  //     cover: "",
  //     description: "description 8",
  //     genre: "二手書架",
  //   },
  //   {
  //     id: 9,
  //     title: "Book 9",
  //     authors: ["Author 9"],
  //     publisher: "Print",
  //     price: 900,
  //     cover: "",
  //     description: "description 9",
  //     genre: "二手書架",
  //   },
  //   {
  //     id: 10,
  //     title: "Book 10",
  //     authors: ["Author 10"],
  //     publisher: "Print",
  //     price: 1000,
  //     cover: "",
  //     description: "description 10",
  //     genre: "二手書架",
  //   },
  //   {
  //     id: 11,
  //     title: "Book 11",
  //     authors: ["Author 11"],
  //     publisher: "Print",
  //     price: 1100,
  //     cover: "",
  //     description: "description 11",
  //     genre: "二手書架",
  //   },
  //   {
  //     id: 12,
  //     title: "Book 12",
  //     authors: ["Author 12"],
  //     publisher: "Print",
  //     price: 1200,
  //     cover: "",
  //     description: "description 12",
  //     genre: "二手書架",
  //   },
  //   {
  //     id: 13,
  //     title: "Book 13",
  //     authors: ["Author 13"],
  //     publisher: "Print",
  //     price: 1300,
  //     cover: "",
  //     description: "description 13",
  //     genre: "二手書架",
  //   },
  //   {
  //     id: 14,
  //     title: "Book 14",
  //     authors: ["Author 14"],
  //     publisher: "Print",
  //     price: 1400,
  //     cover: "",
  //     description: "description 14",
  //     genre: "二手書架",
  //   },
  //   {
  //     id: 15,
  //     title: "Book 15",
  //     authors: ["Author 15"],
  //     publisher: "Print",
  //     price: 1500,
  //     cover: "",
  //     description: "description 15",
  //     genre: "二手書架",
  //   },
  //   {
  //     id: 16,
  //     title: "Book 16",
  //     authors: ["Author 16"],
  //     publisher: "Print",
  //     price: 1600,
  //     cover: "",
  //     description: "description 16",
  //     genre: "二手書架",
  //   },
  //   {
  //     id: 17,
  //     title: "Book 17",
  //     authors: ["Author 17"],
  //     publisher: "Print",
  //     price: 1700,
  //     cover: "",
  //     description: "description 17",
  //     genre: "二手書架",
  //   },
  //   {
  //     id: 18,
  //     title: "Book 18",
  //     authors: ["Author 18"],
  //     publisher: "Print",
  //     price: 1800,
  //     cover: "",
  //     description: "description 18",
  //     genre: "二手書架",
  //   },
  //   {
  //     id: 19,
  //     title: "Book 19",
  //     authors: ["Author 19"],
  //     publisher: "Print",
  //     price: 1900,
  //     cover: "",
  //     description: "description 19",
  //     genre: "二手書架",
  //   },
  //   {
  //     id: 20,
  //     title: "Book 20",
  //     authors: ["Author 20"],
  //     publisher: "Print",
  //     price: 2000,
  //     cover: "",
  //     description: "description 20",
  //     genre: "二手書架",
  //   },
  //   {
  //     id: 21,
  //     title: "Book 21",
  //     authors: ["Author 21"],
  //     publisher: "Print",
  //     price: 2100,
  //     cover: "",
  //     description: "description 21",
  //     genre: "二手書架",
  //   },
  //   {
  //     id: 22,
  //     title: "Book 22",
  //     authors: ["Author 22"],
  //     publisher: "Print",
  //     price: 2200,
  //     cover: "",
  //     description: "description 22",
  //     genre: "二手書架",
  //   },
  //   {
  //     id: 23,
  //     title: "Book 23",
  //     authors: ["Author 23"],
  //     publisher: "Print",
  //     price: 2300,
  //     cover: "",
  //     description: "description 23",
  //     genre: "二手書架",
  //   },
  //   {
  //     id: 24,
  //     title: "Book 24",
  //     authors: ["Author 24"],
  //     publisher: "Print",
  //     price: 2400,
  //     cover: "",
  //     description: "description 24",
  //     genre: "二手書架",
  //   },
  //   {
  //     id: 25,
  //     title: "Book 25",
  //     authors: ["Author 25"],
  //     publisher: "Print",
  //     price: 2500,
  //     cover: "",
  //     description: "description 25",
  //     genre: "二手書架",
  //   },
  //   {
  //     id: 26,
  //     title: "Book 26",
  //     authors: ["Author 26"],
  //     publisher: "Print",
  //     price: 2600,
  //     cover: "",
  //     description: "description 26",
  //     genre: "二手書架",
  //   },
  //   {
  //     id: 27,
  //     title: "Book 27",
  //     authors: ["Author 27"],
  //     publisher: "Print",
  //     price: 2700,
  //     cover: "",
  //     description: "description 27",
  //     genre: "二手書架",
  //   },
  // ];

  const [state, dispatch] = useReducer(cartReducer, {
    bookList: bookList,
    cart: [],
  });
  return <Cart.Provider value={{ state, dispatch }}>{children}</Cart.Provider>;
};

export default Context;

export const State = () => {
  return useContext(Cart);
};
