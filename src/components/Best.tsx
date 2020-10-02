import React from "react";
import { Grid, Select, MenuItem } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { BccTypography, BccChip, BccCard } from "./BccComponents";
import { Link, useLocation } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    [theme.breakpoints.down("xl")]: {
      outerContainer: {
        backgroundColor: "#FAFAFA",
      },
      container: {
        maxWidth: 1280,
        padding: "48px",
        boxSizing: "border-box",
        margin: "0 auto",
      },
      title: {
        marginRight: 24,
      },
      cardsText: {
        "& > div": {
          width: "calc(50% - 8px)",
        },
      },
      cardsTitle: {
        marginBottom: 32,
      },
      cards: {
        marginBottom: 24,
        "& > div": {
          marginBottom: 24,
          width: "calc(33% - 12px)",
        },
      },
      cardsSecond: {
        "& > div": {
          width: "calc(50% - 12px)",
        },
      },
      titleChip: {
        "& > div": {
          marginRight: 16,
        },
        "& > span:last-child": {
          marginRight: 0,
        },
      },
      link: {
        color: "#27AE60",
        textDecoration: "none",
      },
    },
    [theme.breakpoints.down("sm")]: {
      cards: {
        "& > div": {
          width: "calc(50% - 12px)",
        },
      },
      titleChip: {
        marginTop: 12,
        display: "flex",
        flexWrap: "nowrap",
        overflow: "scroll",
        width: "max-content",
        "& > span": {
          whiteSpace: "nowrap",
        },
      },
    },
    [theme.breakpoints.down("xs")]: {
      container: {
        padding: 24,
      },
      cards: {
        "& > div": {
          width: "100%",
        },
      },
    },
  })
);

const Featured = (props: any) => {
  const location = useLocation();
  const classes = useStyles({});
  return (
    <div className={classes.outerContainer}>
      <div className={classes.container}>
        <Grid
          container
          justify="flex-start"
          wrap="wrap"
          alignItems="center"
          className={classes.cardsTitle}
        >
          <Grid item>
            <BccTypography type="h1" block className={classes.title}>
              Лучшее от банка
            </BccTypography>
          </Grid>
          <Grid item className={classes.titleChip}>
            <BccChip type="filled" color="secondary" mr="16px">
              Новому бизнесу
            </BccChip>
            <BccChip type="outlined" color="secondary" mr="16px">
              Клиентам БЦК
            </BccChip>
            <BccChip type="outlined" color="secondary">
              Акции и предложения
            </BccChip>
          </Grid>
        </Grid>
        <Grid
          container
          justify="space-between"
          wrap="wrap"
          className={classes.cards}
        >
          <Grid item>
            <BccCard
              title="Откроем счёт у Вас в офисе бесплатно"
              btnText="Открыть счёт"
              variant="vertical"
              img="best1.png"
              fullImg={true}
              chips={[
                { title: "Гарантия", type: "outlined", color: "secondary" },
              ]}
              text={
                <BccTypography type="p3" block>
                  Оформление счёта без визита в банк
                </BccTypography>
              }
            />
          </Grid>
          <Grid item>
            <BccCard
              title="Текущий счёт для бизнеса"
              btnText="Открыть счёт"
              variant="vertical"
              img="best2.png"
              fullImg={true}
              chips={[
                { title: "Текущий счёт", type: "outlined", color: "secondary" },
              ]}
              text={
                <BccTypography type="p3" block>
                  Открытие текущего счёта, подключение к системе
                  Интернет-банкинг и к мобильному приложению{" "}
                  <a href="/" target="_blank" className={classes.link}>
                    StarBusiness
                  </a>
                </BccTypography>
              }
            />
          </Grid>
          <Grid item>
            <BccCard
              title="Откроем счёт у Вас в офисе бесплатно"
              btnText="Открыть счёт"
              variant="vertical"
              img="best1.png"
              fullImg={true}
              chips={[
                { title: "Гарантия", type: "outlined", color: "secondary" },
              ]}
              text={
                <BccTypography type="p3" block>
                  Оформление счёта без визита в банк
                </BccTypography>
              }
            />
          </Grid>

          <Grid item>
            <BccCard
              title="Онлайн-проверка банковской гарантии"
              btnText="Узнать больше"
              variant="vertical"
              img="best4.png"
              fullImg={true}
              chips={[
                { title: "Гарантия", type: "outlined", color: "secondary" },
              ]}
              text={
                <BccTypography type="p3" block>
                  Делаем для вас всё!
                </BccTypography>
              }
            />
          </Grid>
          <Grid item>
            <BccCard
              title="Зарплатный проект"
              btnText="Узнать больше"
              variant="vertical"
              img="best5.png"
              fullImg={true}
              chips={[
                {
                  title: "Зарплатный проект",
                  type: "outlined",
                  color: "secondary",
                },
              ]}
              text={
                <BccTypography type="p3" block>
                  Делаем для вас всё!
                </BccTypography>
              }
            />
          </Grid>
          <Grid item>
            <BccCard
              title="Эквайринг"
              btnText="Узнать больше"
              variant="vertical"
              img="best6.png"
              fullImg={true}
              chips={[
                { title: "Гарантия", type: "outlined", color: "secondary" },
              ]}
              text={
                <BccTypography type="p3" block>
                  Интернет-эквайринг, POS-терминалы
                </BccTypography>
              }
            />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Featured;
