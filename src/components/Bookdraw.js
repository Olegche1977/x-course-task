import React from "react";
import { useContext } from "react";
import { Context } from "../context";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";

export default function Bookdraw(props) {
  const { idBook, setIdBook } = useContext(Context);
  const navigate = useNavigate();

  const funcBookView = () => {
    setIdBook(props.elem["id"]);
    navigate("/specificbook");
  };

  return (
    <>
      <div className="myBooks">
        <img
          className="myBooksImage"
          src={
            props.elem["image"].length > 5
              ? props.elem["image"]
              : "./logo192.png"
          }
          alt="Image Not Found"
        />
        <div className="bookNameInMyBooks">
          <div>
            <strong>Book name: </strong>
          </div>
          <div className="bookName">
            {props.elem["title"].length > 24
              ? props.elem["title"].slice(0, 24) + "..."
              : props.elem["title"]}
          </div>
        </div>
        <div className="bookAuthorInMyBooks">
          <div>
            <strong> Book autor: </strong>
          </div>
          <div className="bookAuthor">{props.elem["author"]}</div>
        </div>
        <div className="priceString">
          <div>
            {" "}
            Price:
            <span className="priceDigit">
              <strong>{props.elem["price"]}</strong>
            </span>
          </div>
         
          <Button
            variant="contained"
            onClick={() => funcBookView()}
            className="bookPriceView1"
          >
            View
          </Button>
        </div>
      </div>
    </>
  );
}
