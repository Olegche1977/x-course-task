import { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import Bookdraw from "./Bookdraw";
import { Context } from "../context";
import TextField from "@mui/material/TextField";
import "./book-list.css";

export default function BookList() {
  const [inputNameBook, setInputNameBook] = useState("");
  const [selectPriceBook, setSelectPriceBook] = useState("");
  const { userName, setUserName, books, setBooks } = useContext(Context);
  let arrPriceFlag = [0, Infinity];
  switch (selectPriceBook) {
    case "value1":
      arrPriceFlag = [0, Infinity];
      break;
    case "value2":
      arrPriceFlag = [0, 15];
      break;
    case "value3":
      arrPriceFlag = [15, 30];
      break;
    case "value4":
      arrPriceFlag = [30, Infinity];
      break;
  }

  const funcChangeInputNameBook = (e) => {
    setInputNameBook(e.target.value);
  };

  if (!userName) {
    return <Navigate to="/" />;
  }

  return (
    <div>
      <input
        value={inputNameBook}
        onChange={(e) => funcChangeInputNameBook(e)}
        className="inputBookList"
        type="text"
        size="40"
        placeholder="Search by book name"
      />

      <div>
        <select
          value={selectPriceBook}
          onChange={(event) => {
            setSelectPriceBook(event.target.value);
          }}
          className="selectBookList"
        >
          <option value="value1">All books</option>
          <option value="value2">price 0-15$</option>
          <option value="value3">price 15-30$</option>
          <option value="value4">price higher 30$</option>
        </select>
      </div>
      {books.length === 0 && (
        <h1 className="errorBooks">Error with recieving data from server...</h1>
      )}
      <div className="wrapper">
        {books.map((elem) => {
          return elem["title"]
            .toLowerCase()
            .includes(inputNameBook.toLowerCase()) &&
            arrPriceFlag[0] < Number(elem["price"]) &&
            Number(elem["price"]) < arrPriceFlag[1] ? (
            <Bookdraw key={elem["id"]} elem={elem} />
          ) : null;
        })}
      </div>
    </div>
  );
}
