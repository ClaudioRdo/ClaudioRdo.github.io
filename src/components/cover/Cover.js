import React from "react";
import "./Cover.css";
import coverImg from "../../media/cover1.jpg";

const Cover = () => {
  return (
    <div className="cover-container">
      <img className="img" alt="cover" src={coverImg}/>
      {/* <video className="video" src={coverVideo} autoPlay loop muted /> */}
      <h1>Hola crack soy claudio</h1>
      <p>Developer | Designer | Formateos de pcs | Changas en Gral </p>
    </div>
  );
};

export default Cover;
