import React from "react";
import { Slider, Crediting, Calculator, Tabs } from "../components";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import {
  BccCardFull,
  BccTypography,
  BccButton,
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
    readMore: {
      margin: "auto",
      minWidth: 300,
      width: "max-content",
      ["@media (max-width:600px)"]: {
        display: "block",
      },
    },
    as: {
      marginRight: 20,
    },
    ezT: {
      ["@media (max-width:600px)"]: {
        textAlign: "center",
      },
    },
    ez: {
      ["@media (max-width:600px)"]: {
        marginBottom: "32px!important",
      },
    },
  })
);

const CreditingPage = () => {
  const classes = useStyles({});
  return (
    <div className="main-page">
      <div className="container">
        <Slider
          steps={[
            {
              title: "Кредит наличными",
              desc: "до 7 000 000 ₸ за 15 минут",
              img: "/img/slide3.svg",
              btnText: "Оформить кредит",
            },
            {
              title: "Кредит наличными",
              desc: "до 7 000 000 ₸ за 15 минут",
              img: "/img/slide3.svg",
              btnText: "Оформить кредит",
            },
            {
              title: "Кредит наличными",
              desc: "до 7 000 000 ₸ за 15 минут",
              img: "/img/slide3.svg",
              btnText: "Оформить кредит",
            },
          ]}
        />
        <Crediting />
        <BccCardFull
          title={
            <BccTypography block type="h4" className={classes.ezT} mb="16px">
              Рефинансирование кредитных займов
            </BccTypography>
          }
          text={
            <>
              <BccTypography block type="p2" className={classes.ez} mb="65px">
                Смягчим условия кредитов любых банков
              </BccTypography>
              <BccButton
                variant="outlined"
                color="secondary"
                className={classes.readMore}
              >
                Подробнее
              </BccButton>
            </>
          }
          bgImg="/img/ref.svg"
        />
        <Calculator />
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
        <Tabs title="Как погашать кредит?" />
      </div>
    </div>
  );
};

export default CreditingPage;
