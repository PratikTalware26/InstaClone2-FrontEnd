import React from "react";
import InstaIcon from "../Assets/icon.svg";
import CameraIcon from "../Assets/camera.png";
import { Link } from "react-router-dom";
import "./Postviewheader.css";

const Postviewheader = () => {
  return (
    <div className="post-header-cont">
      <div className="insta-logo-name-cont">
        <Link to="/">
          <div className="logo-img-cont">
            <img src={InstaIcon} alt="" />
          </div>
        </Link>
        <h2 className="insta-head">Instaclone</h2>
      </div>
      <Link to="/create">
        <div>
          <img src={CameraIcon} alt="cameraicon" />
        </div>
      </Link>
    </div>
  );
};

export default Postviewheader;
