import React from "react";
import s from "./Social.module.css";

const Social = () => {
  return (
    <div className={s.social}>
      <div className={s.icon}>
        <a href="">
          <img src="/icon-github.svg" alt="" />
        </a>
      </div>
      <div className={s.icon}>
        <a href="">
          <img src="/icon-telegram.svg" alt="" />
        </a>
      </div>
      <div className={s.icon}>
        <a href="">
          <img src="/icon-sib.svg" alt="" />
        </a>
      </div>
      <div className={s.icon}>
        <a href="">
          <img src="/icon-telegram.svg" alt="" />
        </a>
      </div>
    </div>
  );
};

export default Social;
