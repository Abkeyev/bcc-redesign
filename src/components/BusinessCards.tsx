import React from "react";
import { Grid, Select, MenuItem } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { BccTypography, BccChip, BccButton } from "./BccComponents";
import { Link, useLocation } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    [theme.breakpoints.between("md", "xl")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
    outerContainer: {
      backgroundColor: "#FFFFFF",
    },
    container: {
      maxWidth: 1280,
      padding: "64px 0 112px",
      margin: "0 auto",
      position: "relative",
    },
    cardsText: {
      "& > div": {
        width: "calc(50% - 8px)",
      },
    },

    cardsWrap: {
      width: "100%",
      overflowX: "hidden",
    },
    leftArrow: {
      position: "relative",
      height: 40,
      width: 40,
      borderRadius: "50%",
      marginRight: 20,
      border: "1px solid #4D565F",
      display: "inline-block",
      textAlign: "center",
      lineHeight: "42px",
      boxSizing: "border-box",
      cursor: "pointer",
      "&:hover": {
        backgroundColor: "#4D565F",
        "& > svg > path": {
          stroke: "white",
        },
      },
      "& > svg": {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        "& > path": {
          stroke: "#4D565F",
        },
      },
    },
    rightArrow: {
      position: "relative",
      height: 40,
      width: 40,
      borderRadius: "50%",
      border: "1px solid #4D565F",
      display: "inline-block",
      textAlign: "center",
      lineHeight: "42px",
      boxSizing: "border-box",
      cursor: "pointer",
      "&:hover": {
        backgroundColor: "#4D565F",
        "& > svg > path": {
          stroke: "white",
        },
      },
      "& > svg": {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        "& > path": {
          stroke: "#4D565F",
        },
      },
    },
    sliderSteps: {
      position: "absolute",
      bottom: 64,
      width: 62,
      left: "calc(50% - 31px)",
      display: "flex",
      flexWrap: "nowrap",
      zIndex: 99,
      justifyContent: "space-between",
      alignItems: "center",
      "& > div": {
        cursor: "pointer",
        width: 10,
        marginRight: 16,
        height: 10,
        borderRadius: "50%",
        boxSizing: "border-box",
        border: "1px solid #4D565F",
        "&:hover": {
          backgroundColor: "#4D565F",
        },
      },
      "& > div:last-child": {
        marginRight: 0,
      },
    },
    active: {
      backgroundColor: "#4D565F",
    },
    cards: {
      width: "calc(1280px * 3)",
      transition: "all .7s ease",
      "& > div": {
        width: 1280,
      },
    },
    card: {
      padding: "30px 90px",
      backgroundColor: "#FFFFFF",
      border: "1px solid #CCCFD1",
      borderRadius: 8,
      "& > div": {
        "& > img": {
          width: "95%",
          [theme.breakpoints.down("md")]: {
            marginBottom: 10,
          },
        },
      },
    },
    cardsTable: {
      width: "80%",
      marginBottom: 30,
      "& > div": {
        width: "calc(33% - 20px)",
      },
    },
    orderBtn: {
      marginRight: 16,
      minWidth: 280,
    },
    usefulHead: {
      marginBottom: 32,
    },
  })
);

const BusinessCards = (props: any) => {
  const location = useLocation();
  const classes = useStyles({});
  const [slide, setSlide] = React.useState(0);

  const steps = [
    {
      title: "Онлайн переводы",
      desc: "Удобные и безопасные переводы с карты на карту",
      btnText: "Перевести деньги",
      img: "/img/slide1.svg",
    },
    {
      title: "Баспана Хит1",
      desc: "Собственное жильё – это легко!",
      img: "/img/slide1.svg",
    },
    {
      title: "Баспана Хит2",
      desc: "Собственное жильё – это легко!",
      img: "/img/slide1.svg",
    },
  ];

  const slideArrow = (isNext: boolean) => {
    if (isNext) {
      if (slide + 1 === 3) {
        setSlide(0);
      } else {
        setSlide(slide + 1);
      }
    } else {
      if (slide - 1 === -1) {
        setSlide(2);
      } else {
        setSlide(slide - 1);
      }
    }
  };

  return (
    <div className={classes.outerContainer}>
      <div className={classes.container}>
        <Grid
          container
          justify="space-between"
          wrap="nowrap"
          alignItems="center"
          className={classes.usefulHead}
        >
          <Grid item>
            <BccTypography type="h1" block>
              Бизнес-карты
            </BccTypography>
          </Grid>
          <Grid item>
            <span
              className={classes.leftArrow}
              onClick={() => slideArrow(false)}
            >
              <svg
                width="9"
                height="16"
                viewBox="0 0 9 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.59985 1.59998L1.19985 7.99998L7.59985 14.4"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
            <span
              className={classes.rightArrow}
              onClick={() => slideArrow(true)}
            >
              <svg
                width="9"
                height="16"
                viewBox="0 0 9 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.40009 14.4L7.80009 8.00002L1.40009 1.60002"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
          </Grid>
        </Grid>
        <div className={classes.sliderSteps}>
          {steps.map((step: any, index: number) => {
            return (
              <div
                className={`${classes.sliderStep} ${
                  slide === index ? classes.active : ""
                }`}
                onClick={() => setSlide(index)}
              ></div>
            );
          })}
        </div>
        <div className={classes.cardsWrap}>
          <Grid
            container
            justify="space-between"
            wrap="nowrap"
            className={classes.cards}
            style={{ marginLeft: `-${1280 * slide}px` }}
          >
            <Grid item>
              <Grid
                container
                direction="row"
                justify="space-between"
                className={classes.card}
              >
                <Grid item xl={4} lg={4} md={4} sm={4} xs={12}>
                  <img
                    src={process.env.PUBLIC_URL + "/img/iron-big.png"}
                    alt="ironcard"
                  />
                </Grid>
                <Grid item xl={8} lg={8} md={8} sm={8} xs={12}>
                  <BccChip type="outlined" color="secondary" mb="16px">
                    Премиум
                  </BccChip>
                  <BccTypography block type="h3" mb="16px">
                    #IronCard
                  </BccTypography>
                  <BccTypography block type="p2" mb="16px">
                    Первая металлическая бесконтактная карта в Казахстане
                  </BccTypography>
                  <Grid
                    container
                    direction="row"
                    justify="space-between"
                    className={classes.cardsTable}
                  >
                    <Grid item>
                      <BccTypography block weight="medium" type="p2" mb="16px">
                        15 грамм
                      </BccTypography>
                      <BccTypography block type="p2" mb="16px">
                        Нержавеющая сталь
                      </BccTypography>
                    </Grid>
                    <Grid item>
                      <BccTypography block weight="medium" type="p2" mb="16px">
                        4%
                      </BccTypography>
                      <BccTypography block type="p2" mb="16px">
                        Кешбэк на все операции
                      </BccTypography>
                    </Grid>
                    <Grid item>
                      <BccTypography block weight="medium" type="p2" mb="16px">
                        1 000+ бизнес-залов
                      </BccTypography>
                      <BccTypography block type="p2" mb="16px">
                        Бесплатное посещение по всему миру
                      </BccTypography>
                    </Grid>
                  </Grid>
                  <BccButton
                    variant="contained"
                    id="orderIron"
                    className={classes.orderBtn}
                  >
                    Заказать карту
                  </BccButton>
                  <BccButton
                    variant="outlined"
                    color="secondary"
                    id="orderIron"
                    className={classes.orderBtn}
                  >
                    Подробнее о карте
                  </BccButton>
                </Grid>
              </Grid>
            </Grid>

            <Grid item>
              <Grid
                container
                direction="row"
                justify="space-between"
                className={classes.card}
              >
                <Grid item xl={4} lg={4} md={4} sm={4} xs={12}>
                  <img
                    src={process.env.PUBLIC_URL + "/img/iron-big.png"}
                    alt="ironcard"
                  />
                </Grid>
                <Grid item xl={8} lg={8} md={8} sm={8} xs={12}>
                  <BccChip type="outlined" color="secondary" mb="16px">
                    Премиум
                  </BccChip>
                  <BccTypography block type="h3" mb="16px">
                    #IronCard
                  </BccTypography>
                  <BccTypography block type="p2" mb="16px">
                    Первая металлическая бесконтактная карта в Казахстане
                  </BccTypography>
                  <Grid
                    container
                    direction="row"
                    justify="space-between"
                    className={classes.cardsTable}
                  >
                    <Grid item>
                      <BccTypography block weight="medium" type="p2" mb="16px">
                        15 грамм
                      </BccTypography>
                      <BccTypography block type="p2" mb="16px">
                        Нержавеющая сталь
                      </BccTypography>
                    </Grid>
                    <Grid item>
                      <BccTypography block weight="medium" type="p2" mb="16px">
                        4%
                      </BccTypography>
                      <BccTypography block type="p2" mb="16px">
                        Кешбэк на все операции
                      </BccTypography>
                    </Grid>
                    <Grid item>
                      <BccTypography block weight="medium" type="p2" mb="16px">
                        1 000+ бизнес-залов
                      </BccTypography>
                      <BccTypography block type="p2" mb="16px">
                        Бесплатное посещение по всему миру
                      </BccTypography>
                    </Grid>
                  </Grid>
                  <BccButton
                    variant="contained"
                    id="orderIron"
                    className={classes.orderBtn}
                  >
                    Заказать карту
                  </BccButton>
                  <BccButton
                    variant="outlined"
                    color="secondary"
                    id="orderIron"
                    className={classes.orderBtn}
                  >
                    Подробнее о карте
                  </BccButton>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid
                container
                direction="row"
                justify="space-between"
                className={classes.card}
              >
                <Grid item xl={4} lg={4} md={4} sm={4} xs={12}>
                  <img
                    src={process.env.PUBLIC_URL + "/img/iron-big.png"}
                    alt="ironcard"
                  />
                </Grid>
                <Grid item xl={8} lg={8} md={8} sm={8} xs={12}>
                  <BccChip type="outlined" color="secondary" mb="16px">
                    Премиум
                  </BccChip>
                  <BccTypography block type="h3" mb="16px">
                    #IronCard
                  </BccTypography>
                  <BccTypography block type="p2" mb="16px">
                    Первая металлическая бесконтактная карта в Казахстане
                  </BccTypography>
                  <Grid
                    container
                    direction="row"
                    justify="space-between"
                    className={classes.cardsTable}
                  >
                    <Grid item>
                      <BccTypography block weight="medium" type="p2" mb="16px">
                        15 грамм
                      </BccTypography>
                      <BccTypography block type="p2" mb="16px">
                        Нержавеющая сталь
                      </BccTypography>
                    </Grid>
                    <Grid item>
                      <BccTypography block weight="medium" type="p2" mb="16px">
                        4%
                      </BccTypography>
                      <BccTypography block type="p2" mb="16px">
                        Кешбэк на все операции
                      </BccTypography>
                    </Grid>
                    <Grid item>
                      <BccTypography block weight="medium" type="p2" mb="16px">
                        1 000+ бизнес-залов
                      </BccTypography>
                      <BccTypography block type="p2" mb="16px">
                        Бесплатное посещение по всему миру
                      </BccTypography>
                    </Grid>
                  </Grid>
                  <BccButton
                    variant="contained"
                    id="orderIron"
                    className={classes.orderBtn}
                  >
                    Заказать карту
                  </BccButton>
                  <BccButton
                    variant="outlined"
                    color="secondary"
                    id="orderIron"
                    className={classes.orderBtn}
                  >
                    Подробнее о карте
                  </BccButton>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default BusinessCards;
