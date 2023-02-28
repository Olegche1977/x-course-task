import "./header1.css";
import { useContext } from "react";
import { Context } from "../context";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Badge from "@mui/material/Badge";

export default function Header() {
  const { userName, setUserName, booksChoosen, setBooksChoosen } =
    useContext(Context);
  const navigate = useNavigate();

  const buttonSignOutClickHandler = () => {
    setUserName("");
    navigate("/");
  };

  const buttonCartClickHandler = () => {
    if (booksChoosen.length > 0) {
      navigate("cartadded");
    } else {
      navigate("cart");
    }
  };

  const clickOnUser = () => {
    if (!userName) {
      navigate("/");
    } else {
      navigate("/booklist");
    }
  };
  return (
    <>
      <header className="headerClass" id="header">
        <hr className="headerClassHr1" />
        <div className="headerContainer">
          <h1 id="header1" className="headerAuthor">
            X-course-task/ Oleg Chesnokov
          </h1>
          <div className="headerUserContainer">
            <Badge
              badgeContent={booksChoosen.length}
              color="success"
              anchorOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
            >
              <img
                onClick={buttonCartClickHandler}
                className="headerImageCart"
                src="./cart.svg"
                width="50px"
                height="50px"
                alt=""
              />
            </Badge>

            <Button
              variant="contained"
              onClick={buttonSignOutClickHandler}
              className="headerButton1"
            >
              Sign-Out
            </Button>

            <div className="headerImageUserName">
              <img src="./avatar.png" alt="" width="50px" height="50px" />
            </div>
            <h3 id="header5" onClick={clickOnUser} className="headerUserName">
              {userName}
            </h3>
          </div>
        </div>
        <hr className="headerClassHr2" />
      </header>
    </>
  );
}
