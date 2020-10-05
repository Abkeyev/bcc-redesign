import React from "react";
import { Grid, Select, MenuItem } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { BccTypography, BccChip, BccCard } from "./BccComponents";
import { Link, useLocation } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    [theme.breakpoints.between("lg", "xl")]: {
      outerContainer: {
        backgroundColor: "#FAFAFA",
      },
      container: {
        maxWidth: 1280,
        boxSizing: "border-box",
        padding: "48px",
        margin: "0 auto",
      },
      title: {
        marginBottom: 32,
      },
      cardsText: {
        "& > div": {},
      },
      cards: {
        marginBottom: 24,
        "& > div": {
          width: "calc(33% - 16px)",
        },
      },
      cardsSecond: {
        "& > div": {
          width: "calc(50% - 12px)",
        },
      },
    },
    [theme.breakpoints.down("md")]: {
      outerContainer: {
        backgroundColor: "#FAFAFA",
      },
      container: {
        maxWidth: 1280,
        boxSizing: "border-box",
        padding: "48px",
        margin: "0 auto",
      },
      title: {
        marginBottom: 32,
      },
      cardsText: {
        "& > div": {
          width: "calc(50% - 8px)",
        },
      },
      cards: {
        marginBottom: 24,
        "& > div": {
          width: "calc(33% - 8px)",
        },
      },
      cardsSecond: {
        "& > div": {
          width: "calc(50% - 12px)",
        },
      },
    },
    [theme.breakpoints.down("sm")]: {
      container: {
        padding: "48px 48px 32px",
      },
      cards: {
        flexWrap: "wrap",
        justifyContent: "center",
        marginBottom: 0,
        "& > div:nth-child(2n + 1)": {
          marginRight: 16,
        },
        "& > div:last-child": {
          marginRight: 0,
          width: "80%",
          maxWidth: 400,
        },
        "& > div": {
          width: "calc(50% - 8px)",
          marginBottom: 16,
        },
      },
      cardsSecond: {
        flexWrap: "wrap",
        "& > div": {
          width: "100%",
          marginBottom: 16,
        },
        "& > div:last-child": {
          marginBottom: 0,
        },
      },
    },
    [theme.breakpoints.down("xs")]: {
      container: {
        paddingLeft: 24,
        paddingRight: 24,
      },
      cards: {
        "& > div": {
          width: "100%",
          marginRight: 0,
          maxWidth: "none",
        },
        "& > div:nth-child(2n + 1)": {
          marginRight: 0,
        },
        "& > div:last-child": {
          marginRight: 0,
          width: "100%",
          maxWidth: "none",
        },
      },
      title: {
        marginBottom: 24,
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
        <BccTypography type="h1" block className={classes.title}>
          Рекомендуемые продукты
        </BccTypography>
        <Grid
          container
          justify="space-between"
          wrap="nowrap"
          className={classes.cards}
        >
          <Grid item>
            <BccCard
              title="#IRonCard"
              btnText="Оформить карту"
              variant="vertical"
              img="ironcard.png"
              url="https://www.bcc.kz/ironcard"
              fullImg
              chips={[
                {
                  title: "Дебетовая карта",
                  type: "outlined",
                  color: "secondary",
                },
              ]}
              text={
                <Grid
                  container
                  justify="space-between"
                  className={classes.cardsText}
                >
                  <Grid item>
                    <BccTypography type="p2" weight="medium" block>
                      до 4%
                    </BccTypography>
                    <BccTypography type="p3" block>
                      Кэшбэк с покупок
                    </BccTypography>
                  </Grid>
                  <Grid item>
                    <BccTypography type="p2" weight="medium" block>
                      Стальная карта 17 гр.
                    </BccTypography>
                    <BccTypography type="p3" block>
                      О карте
                    </BccTypography>
                  </Grid>
                </Grid>
              }
            />
          </Grid>
          <Grid item>
            <BccCard
              title="#TravelCard"
              btnText="Оформить карту"
              variant="vertical"
              fullImg
              img="travelcard.png"
              url="https://www.bcc.kz/travelcard/"
              chips={[
                {
                  title: "Кредитная карта",
                  type: "outlined",
                  color: "secondary",
                },
              ]}
              text={
                <Grid
                  container
                  justify="space-between"
                  className={classes.cardsText}
                >
                  <Grid item>
                    <BccTypography type="p2" weight="medium" block>
                      7%
                    </BccTypography>
                    <BccTypography type="p3" block>
                      Кэшбек авиа и ж/д
                    </BccTypography>
                  </Grid>
                  <Grid item>
                    <BccTypography type="p2" weight="medium" block>
                      Бесплатно
                    </BccTypography>
                    <BccTypography type="p3" block>
                      Выпуск, обслуживание
                    </BccTypography>
                  </Grid>
                </Grid>
              }
            />
          </Grid>
          <Grid item>
            <BccCard
              title="#картакарта"
              btnText="Оформить карту"
              variant="vertical"
              img="kartakarta.png"
              url="https://www.bcc.kz/kartakarta/"
              fullImg
              chips={[
                {
                  title: "Кредитная карта",
                  type: "outlined",
                  color: "secondary",
                },
                {
                  title: "Хит продаж",
                  type: "filled",
                  color: "sale",
                },
              ]}
              text={
                <Grid
                  container
                  justify="space-between"
                  className={classes.cardsText}
                  wrap="nowrap"
                >
                  <Grid item>
                    <BccTypography type="p2" weight="medium" block>
                      до 3 000 000 ₸
                    </BccTypography>
                    <BccTypography type="p3" block>
                      Кредитный лимит
                    </BccTypography>
                  </Grid>
                  <Grid item>
                    <BccTypography type="p2" weight="medium" block>
                      до 30%
                    </BccTypography>
                    <BccTypography type="p3" block>
                      Кэшбек
                    </BccTypography>
                  </Grid>
                  <Grid item>
                    <BccTypography type="p2" weight="medium" block>
                      до 12 мес.
                    </BccTypography>
                    <BccTypography type="p3" block>
                      Рассрочка
                    </BccTypography>
                  </Grid>
                </Grid>
              }
            />
          </Grid>
        </Grid>
        <Grid
          container
          justify="space-between"
          wrap="nowrap"
          className={classes.cardsSecond}
        >
          <Grid item>
            <BccCard
              title="Автокредит"
              btnText="Оставить заявку"
              variant="horizontal"
              img="autocredit.png"
              link
              url="/car-credit"
              chips={[
                { title: "Кредит", type: "outlined", color: "secondary" },
              ]}
              text={
                <BccTypography type="p2" color="#80868C" block>
                  на покупку нового авто со ставкой 4%
                </BccTypography>
              }
            />
          </Grid>
          <Grid item>
            <BccCard
              title="“Рахмет”"
              btnText="Открыть депозит"
              variant="horizontal"
              img="rahmet.png"
              url="https://www.bcc.kz/product/rakhmet/"
              chips={[
                { title: "Депозит", type: "outlined", color: "secondary" },
              ]}
              text={
                <BccTypography type="p2" color="#80868C" block>
                  до 9,1% годовых
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
