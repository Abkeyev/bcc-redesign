import React from "react";
import { Grid } from "@material-ui/core";
import {
  BccTypography,
  BccLink,
  BccButton,
  BccTabs,
  BccTab,
} from "./BccComponents";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    [theme.breakpoints.between("lg", "xl")]: {
      container: {
        backgroundColor: "#ffffff",
      },
      innerContainer: {
        maxWidth: 1280,
        margin: "0 auto",
        width: "100%",
        padding: "46px 48px 64px",
        boxSizing: "border-box",
      },
      tabs: {
        marginTop: 40,
        minHeight: 150,
        fontSize: 16,
        "& > span": {
          color: "#27AE60",
        },
      },
      tab: {
        "& > div > div": {
          borderBottom: "3px solid #B9B9B9",
          overflowX: "scroll",
          position: "relative",
          "&::-webkit-scrollbar": {
            width: 0,
            background: "transparent",
            height: 0,
          },
        },
      },
    },
    [theme.breakpoints.down("md")]: {
      container: {
        backgroundColor: "#ffffff",
      },
      innerContainer: {
        maxWidth: 1280,
        margin: "0 auto",
        width: "100%",
        padding: "46px 48px 64px",
        boxSizing: "border-box",
      },
      tabs: {
        marginTop: 40,
        minHeight: 150,
        fontSize: 16,
        "& > span": {
          color: "#27AE60",
        },
      },
      tab: {
        "& > div > div": {
          borderBottom: "3px solid #B9B9B9",
          overflowX: "scroll",
          position: "relative",
          "&::-webkit-scrollbar": {
            width: 0,
            background: "transparent",
            height: 0,
          },
        },
      },
    },
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {
      innerContainer: {
        padding: 24,
      },
    },
  })
);

const items = [
  {
    title: "В отделениях банка",
    content: `<span>•</span> Об Интернет-Банкинге на bcc.kz<br/><br/>
    <span>•</span> Инструкция по настройке работы с 1С<br/><br/>
    <span>•</span> Руководство Пользователя по регистрации ЭЦП НУЦ в СИБ<br/><br/>
    <span>•</span> Ещё`,
  },
  {
    title: "В мобильном приложении",
    content: `<span>•</span> Программы Интернет-Банкинге на bcc.kz<br/><br/>
    <span>•</span> Инструкция по настройке работы с 1С<br/><br/>
    <span>•</span> Руководство Пользователя по регистрации ЭЦП НУЦ в СИБ<br/><br/>
    <span>•</span> Ещё`,
  },
  {
    title: "В терминалах банка",
    content: `<span>•</span> Презентации Интернет-Банкинге на bcc.kz<br/><br/>
    <span>•</span> Инструкция по настройке работы с 1С<br/><br/>
    <span>•</span> Руководство Пользователя по регистрации ЭЦП НУЦ в СИБ<br/><br/>
    <span>•</span> Ещё`,
  },
  {
    title: "ИПТ и банкоматы CASH-IN",
    content: `<span>•</span> Документы Интернет-Банкинге на bcc.kz<br/><br/>
    <span>•</span> Инструкция по настройке работы с 1С<br/><br/>
    <span>•</span> Руководство Пользователя по регистрации ЭЦП НУЦ в СИБ<br/><br/>
    <span>•</span> Ещё`,
  },
  {
    title: "ИПТ Касса24",
    content: `<span>•</span> Тарифы Интернет-Банкинге на bcc.kz<br/><br/>
    <span>•</span> Инструкция по настройке работы с 1С<br/><br/>
    <span>•</span> Руководство Пользователя по регистрации ЭЦП НУЦ в СИБ<br/><br/>
    <span>•</span> Ещё`,
  },
];

interface TabsProps {
  title: string;
  bgColor?: string;
}

const Tabs = (props: TabsProps) => {
  const classes = useStyles({});
  const [index, setIndex] = React.useState(0);

  return (
    <div
      className={classes.container}
      style={{ backgroundColor: props.bgColor ? props.bgColor : "white" }}
    >
      <div className={classes.innerContainer}>
        <BccTypography type="h2" block mb="30px">
          {props.title}
        </BccTypography>

        <BccTabs
          value={index}
          onChange={(e: any, i: number) => setIndex(i)}
          className={classes.tab}
        >
          {items &&
            items.map((item: any) => {
              return <BccTab label={item.title} />;
            })}
        </BccTabs>
        <div
          className={classes.tabs}
          dangerouslySetInnerHTML={{ __html: items[index].content }}
        />
      </div>
    </div>
  );
};

export default Tabs;
