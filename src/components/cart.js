import "./cart.css";
import { Navigate } from "react-router-dom";
import { useState, useContext } from "react";
import { Context } from "../context";

export default function Cart() {
  const { userName } = useContext(Context);
  if (!userName) {
    return <Navigate to="/" />;
  }

  return (
    <div className="imageCart1">
      <img
        className="imageCart1"
        src="./cart.svg"
        width="100px"
        height="100px"
        alt=""
      />
      <h4>Cart empty...</h4>
    </div>
  );
}
