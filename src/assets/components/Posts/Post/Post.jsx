import React from "react";
import s from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={s.post}>
      <div className={s.title}>{props.title}</div>
      <div className={s.text}>{props.text}</div>
    </div>
  );
};

export default Post;
