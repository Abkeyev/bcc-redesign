import React from "react";
import { Slider, Benefits, Order, News } from "../components";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import {
  BccTypography,
  BccLink,
  BccCardFull,
} from "../components/BccComponents";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    content: {
      position: "relative",
      margin: "0 auto 64px",
      padding: "32px 48px 0",
      maxWidth: 1280,
      boxSizing: "border-box",
    },
  })
);

const OpenCurrentAccountPage = () => {
  const classes = useStyles({});
  return (
    <div className="main-page">
      <div className="container">
        <Slider
          steps={{
            title: "Открытие текущего счета",
            desc: (
              <BccTypography type="p1">
                Управляйте Вашими счетами посредством системы{" "}
                <BccLink href="#" target="_blank">
                  StarBanking
                </BccLink>
              </BccTypography>
            ),
            img: "/img/slide4.svg",
            btnText: "Открыть счёт",
          }}
        />
        <Benefits
          items={[
            {
              title: "В любой валюте",
              desc: "Открытие счёта в любой  валюте бесплатно",
              img: "/img/icons/cur.svg",
            },
            {
              title: "На любую сумму",
              desc: "Документ, удостоверяющий личность, содержащий ИИН",
              img: "/img/icons/zp.svg",
            },
            {
              title: "Один документ",
              desc: "Документ, удостоверяющий личность, содержащий ИИН",
              img: "/img/icons/doc.svg",
            },
          ]}
        />
        <Order title="Открыть текущий счёт" />
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

export default OpenCurrentAccountPage;
