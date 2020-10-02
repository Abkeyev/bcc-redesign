import React from "react";
import {
  Slider,
  Benefits,
  Order,
  BaspanaCalculator,
  Tabs,
} from "../components";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import {
  BccTypography,
  BccLink,
  BccCardFull,
  BccBreadcrumbs,
} from "../components/BccComponents";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    [theme.breakpoints.between("md", "xl")]: {
      container: {
        position: "relative",
        backgroundColor: "white",
        padding: "16px 0",
        boxSizing: "border-box",
        marginTop: 16,
        paddingBottom: 16,
        "& > nav": {
          maxWidth: 1280,
          margin: "0 auto",
          boxSizing: "border-box",
          padding: "0 48px",
        },
      },
    },
    [theme.breakpoints.down("sm")]: {
      container: {
        display: "none",
      },
    },
    [theme.breakpoints.down("xs")]: {},
  })
);

const BaspanaHitPage = () => {
  const classes = useStyles({});
  return (
    <div className="main-page">
      <div className="container">
        <div className={classes.container}>
          <BccBreadcrumbs>
            <BccTypography type="p3" td="underline">
              <Link to="/">Частным лицам</Link>
            </BccTypography>
            <BccTypography type="p3" td="underline">
              <Link to="/">Ипотека</Link>
            </BccTypography>
          </BccBreadcrumbs>
        </div>
        <Slider
          steps={{
            title: "Баспана Хит",
            bgColor: "white",
            desc: (
              <BccTypography type="p1">
                Собственное жильё – это легко!
              </BccTypography>
            ),
            img: "/img/slide1.svg",
            btnText: "Рассчитать ипотеку",
          }}
        />
        <Benefits
          bgColor="#fafafa"
          title="О программе"
          items={[
            {
              title: "до 15 лет",
              desc: "Максимальный срок кредитования",
              img: "/img/icons/contract.svg",
            },
            {
              title: "от 20%",
              desc: "Первоначальный взнос приобретаемого жилья",
              img: "/img/icons/loan-dollar.svg",
            },
            {
              title: "до 25 миллионов",
              desc: "Максимальная стоимость первичного жилья",
              img: "/img/icons/tenge-up.svg",
            },
          ]}
        />
        <BaspanaCalculator />
        <Order title="Оформить ипотеку" />
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
        <Tabs title="Дополнительно" />
      </div>
    </div>
  );
};

export default BaspanaHitPage;
