import React from "react";
import { Slider, Featured, Widgets, Useful, News } from "../components";
import { BccCardFull, BccTypography } from "../components/BccComponents";

const MainPage = () => {
  return (
    <div className="main-page">
      <div className="container">
        <Slider
          steps={[
            {
              title: "Баспана Хит",
              desc: "Собственное жильё – это легко!",
              img: "/img/slide1.svg",
              btnText: "Заполнить заявку",
            },
            {
              title: "Нужна гарантия для тендера?",
              desc: "Получайте тендерные гарантии от 20 минут",
              img: "/img/slide2.svg",
              btnText: "Заполнить заявку",
            },
            {
              title: "Кредит наличными",
              desc: "до 7 000 000 ₸ за 15 минут",
              img: "/img/slide3.svg",
              btnText: "Оформить кредит",
            },
          ]}
        />
        <Featured />
        <Widgets />
        <Useful />
        <BccCardFull
          chips={[
            {
              title: "Мобильный банкинг",
              type: "outlined",
              color: "secondary",
            },
          ]}
          title="BCC.KZ"
          text={
            <>
              <BccTypography align="left" block type="p2" mb="32px">
                Управляй банковскими счетами онлайн через браузер или приложение
              </BccTypography>
              <img
                style={{ marginRight: 20 }}
                src={process.env.PUBLIC_URL + "/img/as.svg"}
              />
              <img src={process.env.PUBLIC_URL + "/img/gp.svg"} />
            </>
          }
          bgImg="/img/mobile-app.svg"
        />
        <News />
      </div>
    </div>
  );
};

export default MainPage;
