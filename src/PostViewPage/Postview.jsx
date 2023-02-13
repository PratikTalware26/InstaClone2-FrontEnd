import React, { useState, useEffect } from "react";
import "./Postview.css";
import Ellipse from "../Assets/more_icon.svg";
import Share from "../Assets/share.png";
import Like from "../Assets/heart.png";

const Postview = () => {
  const [postData, setPostdata] = useState("");
  const fetchData = async () => {
    const response = await fetch("https://instaclone2-4bp1.onrender.com/api/posts");
    const data = await response.json();
    setPostdata(data);
  };
  // console.log(postData.result)
  // let myPosts= postData.result

  useEffect(() => {
    fetchData();
  }, []);

  if (!postData) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="post-container">
      {postData.result.map((post) => {
        return (
          <div className="post-card" key={new Date().getTime().toString()}>
            <div className="name-locat-elipse">
              <div>
                <h3>{post.author}</h3>
                {post.location}
              </div>
              <div>
                <img src={Ellipse} alt="" />
              </div>
            </div>
            <div className="main-post">
              <img
                src={`https://instaclone2-4bp1.onrender.com/api/images/${post.image}`}
                alt="post-img"
              />
            </div>
            <div className="like-share-date-cont">
              <div className="like-share">
                <img src={Like} alt="likes" />
                <img
                  src={Share}
                  alt="share"
                  style={{ "margin-left": "10px" }}
                />
              </div>
              <div className="date">{post.createdAt}</div>
            </div>
            <div className="likes">Likes</div>
            <div className="desc">
              <h3>{post.description}</h3>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Postview;
