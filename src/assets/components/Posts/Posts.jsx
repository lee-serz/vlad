import React from "react";
import Post from "./Post/Post";
import s from "./Posts.module.css";
import BlurPost from "./Post/BlurPost";
import { postData } from "./Post/data";

let postElements = postData.map((post) => (
  <Post title={post.title} text={post.text} />
));

const Posts = (props) => {
  return (
    <div className={s.posts}>
      {postElements}
      <BlurPost
        title="Новый крутой проект"
        text="В качестве значения указывается радиус размытия, он пишется в любых доступных единицах размера CSS (к примеру: 5px). Чем больше значение, тем сильнее будет размыто изображение.
Отрицательное значение не допускается. Пустое значение воспринимается как 0px."
      />
    </div>
  );
};

export default Posts;
