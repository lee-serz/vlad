import React from "react";
import st from "./Post.module.css";

const BlurPost = (props) => {
  return (
    <div className={st.post}>
      <div className={st.postblur}>
        <div className={st.title}>{props.title}</div>
        <div className={st.text}>{props.text}</div>
      </div>
      <div className={st.soon}>Скоро пополнится новым крутым проектом</div>
    </div>
  );
};

export default BlurPost;
