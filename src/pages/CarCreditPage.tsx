import React from "react";
import {
  Slider,
  Benefits,
  Order,
  CarCreditCalculator,
  Tabs,
} from "../components";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import {
  BccTypography,
  BccLink,
  BccBreadcrumbs,
  BccCardFull,
} from "../components/BccComponents";

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
          boxSizing: "border-box",
          padding: "0 48px",
          margin: "0 auto",
        },
      },
    },
    [theme.breakpoints.down("sm")]: {
      container: {
        position: "relative",
        backgroundColor: "white",
        padding: "16px 0",
        boxSizing: "border-box",
        marginTop: 16,
        paddingBottom: 16,
        "& > nav": {
          display: "none",
        },
      },
    },
    [theme.breakpoints.down("xs")]: {},
  })
);

const CarCreditPage = () => {
  const classes = useStyles({});
  return (
    <div className="main-page">
      <div className="container">
        <div className={classes.container}>
          <BccBreadcrumbs>
            <BccTypography type="p3" td="underline">
              Частным лицам
            </BccTypography>
            <BccTypography type="p3" td="underline">
              Кредиты
            </BccTypography>
          </BccBreadcrumbs>
        </div>

        <Slider
          steps={{
            title: "Автокредитование",
            bgColor: "white",
            desc: "",
            img: "/img/slide5.svg",
            btnText: "Рассчитать автокредит",
          }}
        />
        <Benefits
          bgColor="#fafafa"
          title="Предложения"
          items={[
            {
              title: "Новый автомобиль под 4% годовых",
              desc: (
                <BccTypography type="p2l" color="rgb(77, 86, 95)">
                  Новейшие авто отечественного производства без комиссий Банка!
                </BccTypography>
              ),
            },
            {
              title: "На покупку нового автомобиля в автосалоне",
              desc: (
                <BccTypography type="p2l" color="rgb(77, 86, 95)">
                  Новый автомобиль в автосалонов-партнерах сроком до 7 лет
                </BccTypography>
              ),
            },
          ]}
        />
        <Benefits
          title="Преимущества"
          items={[
            {
              title: "15 000 000 ₸",
              desc: "Максимальная стоимость автомобиля",
              img: "/img/icons/loan-tenge.svg",
            },
            {
              title: "4% годовых",
              desc: "Ставки вознаграждения в тенге",
              img: "/img/icons/percent.svg",
            },
            {
              title: "до 7 лет",
              desc: "Срок займа",
              img: "/img/icons/contract.svg",
            },
          ]}
        />
        <CarCreditCalculator />
        <Order title="Оставьте заявку на автокредит" />

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

export default CarCreditPage;
