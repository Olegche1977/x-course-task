import "./specific_book_flex.css";
import React from "react";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import { Context } from "../context";
import Button from "@mui/material/Button";

export default function SpecificBook() {
  const {
    userName,
    setUserName,
    books,
    setBooks,
    idBook,
    booksChoosen,
    setBooksChoosen,
  } = React.useContext(Context); //instead importing useContext from react in head
  let flag = false;
  let initValueNumberBooks = 0;
  booksChoosen.map((elem) => {
    if (elem.id === idBook) {
      flag = true;
      initValueNumberBooks = elem.number;
    }
  });

  const [valueNumberOfBooks, setValueNumberOfBooks] =
    useState(initValueNumberBooks);

  const setNumberOfBooks = (e) => {
    setValueNumberOfBooks(e.target.value);
    if (e.target.value < 0) {
      setValueNumberOfBooks(0);
    }
    if (e.target.value > 42) {
      setValueNumberOfBooks(42);
    }
  };

  function editBooksChoosen(elem) {
    const editArr = booksChoosen.slice();
    const result = editArr.filter((element) => elem !== element.id);
    setBooksChoosen([...result, { id: elem, number: +valueNumberOfBooks }]);
  }

  if (!userName) {
    return <Navigate to="/" />;
  }

  return (
    <>
      {books.map((elem, index) => {
        return elem["id"] === idBook ? (
          <div key={index}>
            <main className="main-container1">
              <div className="imageBook">
                <img
                  className="imageBook"
                  src={
                    elem["image"].length > 5 ? elem["image"] : "./logo192.png"
                  }
                  alt="Image Not Found"
                  width="200px"
                  height="300px"
                />
              </div>

              <div className="aboutBook">
                <h4>
                  Book name: <em>{elem["title"]}</em>
                </h4>
                <h4>
                  Book Author: <em>{elem["author"]}</em>
                </h4>
                <h4>
                  Book Level: <em>Middle</em>
                </h4>
                <h4>
                  Book tags: <em>no</em>
                </h4>
              </div>
              <div className="specificBookPriceMain">
                <div className="specificBookPrice">
                  <h4 className="classPrice">Price, $:</h4>
                  <h4>{elem["price"]} </h4>
                </div>

                <div className="countNbutton">
                  <h4 className="specificCount">Count:</h4>
                  <div>
                    <input
                      data-testid="books-qty"
                      value={valueNumberOfBooks}
                      onChange={(e) => setNumberOfBooks(e)}
                      type="number"
                      className="inputNumber"
                    />
                  </div>
                </div>
                <div className="specificTotalPrice">
                  <h4>Total Price, $: </h4>
                  <h4 data-testid="total-price">
                    {(elem["price"] * valueNumberOfBooks).toFixed(2)}
                  </h4>
                </div>

                {/* <button
                  onClick={() => editBooksChoosen(elem.id)}
                  type="submit"
                  disabled={valueNumberOfBooks > 0 ? false : true}
                  className="specificButtonAdd"
                >
                  Add to cart
                </button> */}
                <Button
                  variant="contained"
                  onClick={() => editBooksChoosen(elem.id)}
                  type="submit"
                  disabled={valueNumberOfBooks > 0 ? false : true}
                  // className="specificButtonAdd"
                >
                  Add to cart
                </Button>
              </div>
            </main>

            <footer id="footer" className="footer">
              <h4>
                Book description:<em>{elem["description"]}</em>
              </h4>
            </footer>
          </div>
        ) : null;
      })}
    </>
  );
}
