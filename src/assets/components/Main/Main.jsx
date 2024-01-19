import React from "react";
import s from "./Main.module.css";
import Social from "./Social/Social";
const Main = () => {
  return (
    <>
      <div className={s.main}>
        <div className={s.avatar}>
          <img src="/avatar.svg" alt="" />
        </div>
        <div className={s.name}>Akopian Vlad</div>
        <div className={s.about_me}>
          Программирую BackEnd на Java, развиваюсь в DevOps, завел себе кошку
          сервер, его зовут Антон. «у нас веб платформа, нам нужны сераера», да
          я очень люблю кремниевую долину и в скором хочу захуярить стартап
        </div>
        <Social />
      </div>
    </>
  );
};

export default Main;
