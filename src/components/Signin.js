import "./signin.css";
import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { Context } from "../context";
import Button from "@mui/material/Button";

export default function Signin() {
  const [inputValue, setInputValue] = useState("");
  const [disableButton, setDisableButton] = useState(true);
  const { userName, setUserName } = useContext(Context);

  const navigate = useNavigate();

  const validateName = (e) => {
    setInputValue(e.target.value);
    if (inputValue.length > 4 && inputValue.length < 16) {
      setDisableButton(false);
    } else {
      setDisableButton(true);
    }
  };

  const buttonClickHandler = () => {
    setUserName(inputValue);
    navigate("/booklist");
  };
  return (
    <div className="signInContainer">
      <img className="signInUserFoto" src="./avatar.png" alt="nothing" />
      <h4>{userName}</h4>
      <input
        value={inputValue}
        onChange={(e) => validateName(e)}
        type="text "
        className="signInUserName"
        placeholder="type Username"
      ></input>
      {/* <button 
      onClick={()=> buttonClickHandler()}
      className ="buttonSignIn" disabled={disableButton}><b>Sign-In</b></button> */}
      <Button
        variant="contained"
        onClick={() => buttonClickHandler()}
        className="buttonSignIn1"
        disabled={disableButton}
      >
        Sign-In
      </Button>
    </div>
  );
}
