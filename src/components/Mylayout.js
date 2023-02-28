import { Outlet } from "react-router-dom";
import Header from "./header.js";
import Footer from "./footer.js";
import "./MyLayout.css";

export default function MyLayout() {
  return (
    <>
      <div className="imageCover">
        <div className="imageVideo">
          <video
            className="imageVideoVawes"
            src="./vawes.mp4"
            autoPlay
            muted
            loop
          ></video>
        </div>
        <div className="content">
          <Header />
          <Outlet />
          <Footer />
        </div>
      </div>
    </>
  );
}
