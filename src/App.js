import { Route, Routes } from "react-router-dom";
import Signin from "./components/Signin";
import BookList from "./components/book-list.js";
import Cart from "./components/cart.js";
import SpecificBook from "./components/Specific-book.js";
import CartAdded from "./components/cart-added.js";
import Page404 from "./components/page404.js";
import "./App.css";
import { useState, useEffect } from "react";
import MyLayout from "./components/Mylayout.js";
import FetchDataService from "./components/FetchDataService";
import { Context } from "./context";

function App() {
  const [books, setBooks] = useState([]);
  const [userName, setUserName] = useState("");
  const [booksChoosen, setBooksChoosen] = useState([]);
  const [idBook, setIdBook] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const data = await FetchDataService.GetData();
    // console.log('data:')
    // console.log(data)
    setBooks(data);
  }

  return (
    <div className="appContainer">
      <Context.Provider
        value={{
          userName,
          setUserName,
          books,
          setBooks,
          idBook,
          setIdBook,
          booksChoosen,
          setBooksChoosen,
        }}
      >
        <Routes>
          <Route path="/" element={<MyLayout />}>
            <Route index element={<Signin />} />
            <Route path="booklist" element={<BookList />} />
            <Route path="specificbook" element={<SpecificBook />} />
            <Route path="cart" element={<Cart />} />
            <Route path="cartadded" element={<CartAdded />} />
            <Route path="*" element={<Page404 />} />
          </Route>
        </Routes>
      </Context.Provider>
    </div>
  );
}

export default App;
