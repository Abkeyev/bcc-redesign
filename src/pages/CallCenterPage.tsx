import React from "react";
import { Best, News } from "../components";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import {
  BccTypography,
  BccLink,
  BccTable,
  BccTableContainer,
  BccTableCell,
  BccTableHead,
  BccTableRow,
  BccTableBody,
} from "../components/BccComponents";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    [theme.breakpoints.between("md", "xl")]: {
      contents: {
        position: "relative",
        margin: "0 auto 64px",
        padding: "48px",
        maxWidth: 1280,
        boxSizing: "border-box",
      },
      horizontalTab: {
        "& > div:first-child": {
          width: "calc(30% - 28px)",
          "& > div > div": {
            cursor: "pointer",
            borderRadius: 8,
            padding: 30,
            marginBottom: 30,
            transition: "all .5s ease",
          },
          "& > div > div.active": {
            backgroundColor: "white",
            boxShadow:
              "0px 0px 1px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04), 0px 10px 20px rgba(0, 0, 0, 0.04)",
          },
        },
        "& > div:last-child": {
          width: "calc(70% - 28px)",
          boxShadow:
            "0px 0px 1px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04), 0px 10px 20px rgba(0, 0, 0, 0.04)",
          borderRadius: 8,
          backgroundColor: "white",
          padding: 30,
        },
      },
      table: {
        color: "#80868C",
        "& tr > td:first-child": {
          paddingLeft: 0,
        },
        "& tr > td:last-child": {
          paddingRight: 0,
          textAlign: "right",
        },
        "& tr:last-child > td": {
          borderBottom: "none",
        },
      },
    },
    [theme.breakpoints.down("sm")]: {
      contents: {
        position: "relative",
        margin: "0 auto",
        padding: "24px 24px 48px",
        paddingTop: 96,
        maxWidth: 1280,
        boxSizing: "border-box",
      },
      horizontalTab: {
        flexWrap: "wrap",
        "& > div:first-child": {
          width: "100%",
          "& > div": {
            flexDirection: "row",
            flexWrap: "nowrap",
            overflowX: "scroll",
          },
          "& > div > div": {
            cursor: "pointer",
            whiteSpace: "nowrap",
            borderRadius: 8,
            padding: 30,
            marginBottom: 30,
            transition: "all .5s ease",
          },
          "& > div > div.active": {
            backgroundColor: "white",
            boxShadow:
              "0px 0px 1px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04), 0px 10px 20px rgba(0, 0, 0, 0.04)",
          },
        },
        "& > div:last-child": {
          width: "100%",
          boxShadow:
            "0px 0px 1px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04), 0px 10px 20px rgba(0, 0, 0, 0.04)",
          borderRadius: 8,
          backgroundColor: "white",
          padding: 30,
        },
      },
      table: {
        color: "#80868C",
        "& tr > td:first-child": {
          paddingLeft: 0,
        },
        "& tr > td:last-child": {
          paddingRight: 0,
          textAlign: "right",
        },
        "& tr:last-child > td": {
          borderBottom: "none",
        },
      },
    },
    [theme.breakpoints.down("xs")]: {},
  })
);

const CallCenterPage = () => {
  const classes = useStyles({});
  const [active, setActive] = React.useState(0);
  const items = [
    "Держателям карт",
    "Help Desk пользователей интернет-продуктов БЦК",
    "Продажи банковских продуктов (для ФЛ)",
    "Консультации по общим вопросам",
    "Soft Collection",
    "Auto Call Center",
  ];
  return (
    <div className="main-page">
      <div className="container">
        <div className={classes.contents}>
          <BccTypography block type="h1" mb="46px">
            Центр обслуживания вызовов
          </BccTypography>
          <Grid
            container
            justify="space-between"
            wrap="nowrap"
            className={classes.horizontalTab}
          >
            <Grid item>
              <Grid container direction="column">
                {items.map((i: any, index: number) => {
                  return (
                    <Grid
                      item
                      className={active === index ? "active" : ""}
                      onClick={() => setActive(index)}
                    >
                      {i}
                    </Grid>
                  );
                })}
              </Grid>
            </Grid>
            <Grid item>
              <BccTypography type="p2l" block mb="24px" color="#4D565F">
                Центр Авторизации - служба поддержки держателей карт VISA и
                MasterCard, выпущенных системой Банка ЦентрКредит, выступает как
                источник информации по платежным карточкам Банка
                (конфиденциальный сервис по картам, консультации по банковским
                карт-продуктам).
                <br /> Информация предоставляется по удобному для Вас каналу:
                Phone - E-mail - Web. Консультирование клиентов допускается
                после идентификации. Необходимо будет назвать номер своей карты,
                ФИО, дату рождения, кодовое слово (оператор вправе запросить
                дополнительную информацию).
              </BccTypography>
              <BccTypography type="p1" weight="medium" mr="16px" mb="20px">
                Контакты
              </BccTypography>
              <BccTypography type="p1" color="#B3B6BA" mr="16px">
                24/7/365
              </BccTypography>
              <BccTableContainer>
                <BccTable className={classes.table}>
                  <BccTableBody>
                    <BccTableRow>
                      <BccTableCell>
                        <BccTypography type="p2" block mb="4px">
                          С мобильного телефона
                        </BccTypography>
                      </BccTableCell>
                      <BccTableCell>
                        <BccTypography type="h6" block color="#000D1A" mb="4px">
                          505
                        </BccTypography>
                        <BccTypography type="p3" block mb="4px">
                          Бесплатно
                        </BccTypography>
                      </BccTableCell>
                    </BccTableRow>
                    <BccTableRow>
                      <BccTableCell>
                        <BccTypography type="p2" block mb="4px">
                          С городского телефона Алматы
                        </BccTypography>
                      </BccTableCell>
                      <BccTableCell>
                        <BccTypography type="h6" block color="#000D1A" mb="4px">
                          +7 (727) 244 77 77
                        </BccTypography>
                      </BccTableCell>
                    </BccTableRow>
                    <BccTableRow>
                      <BccTableCell>
                        <BccTypography type="p2" block mb="4px">
                          С городского телефона и с моб. Kcell/Activ/Beeline
                        </BccTypography>
                      </BccTableCell>
                      <BccTableCell>
                        <BccTypography type="h6" block color="#000D1A" mb="4px">
                          8 8000 8000 88
                        </BccTypography>
                      </BccTableCell>
                    </BccTableRow>
                    <BccTableRow>
                      <BccTableCell>
                        <BccTypography type="p2" block mb="4px">
                          Сайт
                        </BccTypography>
                      </BccTableCell>
                      <BccTableCell>
                        <BccTypography type="h6" block color="#000D1A" mb="4px">
                          <BccLink href="">Обратная связь</BccLink>
                        </BccTypography>
                      </BccTableCell>
                    </BccTableRow>
                    <BccTableRow>
                      <BccTableCell>
                        <BccTypography type="p2" block mb="4px">
                          Email
                        </BccTypography>
                      </BccTableCell>
                      <BccTableCell>
                        <BccTypography type="h6" block color="#000D1A" mb="4px">
                          <BccLink href="">cardservice@bcc.kz</BccLink>
                        </BccTypography>
                      </BccTableCell>
                    </BccTableRow>
                  </BccTableBody>
                </BccTable>
              </BccTableContainer>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default CallCenterPage;
