import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Grid, MenuItem } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import {
  BccTypography,
  BccInput,
  BccCollapseTitle,
  BccCollapsePanel,
  BccCollapseDetails,
} from "../components/BccComponents";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    [theme.breakpoints.between("md", "xl")]: {
      contents: {
        position: "relative",
        margin: "0 auto",
        padding: "64px 48px",
        maxWidth: 1280,
        boxSizing: "border-box",
      },
      outerContent: {
        width: "100%",
        backgroundColor: "white",
      },
      tabsBranch: {
        maxWidth: 1280,
        boxSizing: "border-box",
        margin: "0 auto",
        alignItems: "center",
        display: "flex",
        padding: "24px 48px",
      },
      tab: { position: "relative", bottom: -1 },
      city: {
        color: "#4D565F",
        borderBottom: "1px dashed #4D565F",
      },
      switch: { color: "#B3B6BA" },
      active: { color: "#27AE60" },
      mapContainer: {
        padding: "32px 48px 128px",
        position: "relative",
        margin: "0 auto",
        maxWidth: 1280,
        boxSizing: "border-box",
      },
      input: {
        minWidth: 360,
        margin: 0,
      },
      table: {
        "& tr > td": {
          padding: "20px 0",
        },
      },
    },
    [theme.breakpoints.down("sm")]: {
      contents: {
        position: "relative",
        margin: "0 auto",
        padding: "84px 24px 32px",
        maxWidth: 1280,
        boxSizing: "border-box",
      },
      outerContent: {
        width: "100%",
        backgroundColor: "white",
      },
      tabsBranch: {
        maxWidth: 1280,
        boxSizing: "border-box",
        margin: "0 auto",
        alignItems: "center",
        display: "flex",
        padding: "24px",
      },
      tab: { position: "relative", bottom: -1 },
      city: {
        color: "#4D565F",
        borderBottom: "1px dashed #4D565F",
      },
      switch: { color: "#B3B6BA" },
      active: { color: "#27AE60" },
      mapContainer: {
        padding: "32px 24px",
        position: "relative",
        margin: "0 auto",
        maxWidth: 1280,
        boxSizing: "border-box",
      },
      input: {
        minWidth: 360,
        margin: 0,
      },
      table: {
        "& tr > td": {
          padding: "20px 0",
        },
      },
    },
    [theme.breakpoints.down("xs")]: {},
  })
);

const FaqPage = () => {
  const classes = useStyles({});
  const [period, setPeriod] = React.useState("0");
  const [switchBtn, setSwitchBtn] = React.useState(true);
  return (
    <div className="main-page">
      <div className="container">
        <div className={classes.outerContent}>
          <div className={classes.contents}>
            <BccTypography type="h1" block>
              Часто задаваемые вопросы
            </BccTypography>
          </div>
        </div>
        <div className={classes.tabsBranch}>
          <BccTypography type="p1" mr="24px">
            Раздел
          </BccTypography>
          <BccInput
            id="period"
            name="period"
            value={period}
            onChange={(e: any) => setPeriod(e.target.value)}
            variant="outlined"
            className={classes.input}
            margin="normal"
            select
          >
            <MenuItem value="0">Платежные карточки VISA/Master Card</MenuItem>
            <MenuItem value="1">#Картакарта</MenuItem>
            <MenuItem value="2">Система BCC.KZ</MenuItem>
            <MenuItem value="3">Розничное кредитование</MenuItem>
          </BccInput>
        </div>
        <div className={classes.outerContent}>
          <div className={classes.mapContainer}>
            <BccCollapsePanel>
              <BccCollapseTitle expandIcon={<ExpandMoreIcon />}>
                <BccTypography type="p2">
                  Какие документы необходимы при выпуске карточки
                  VISA/MasterCard?
                </BccTypography>
              </BccCollapseTitle>
              <BccCollapseDetails>
                <BccTypography type="p2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </BccTypography>
              </BccCollapseDetails>
            </BccCollapsePanel>
            <BccCollapsePanel>
              <BccCollapseTitle expandIcon={<ExpandMoreIcon />}>
                <BccTypography type="p2">
                  Возможен ли выпуск дополнительных карточек?
                </BccTypography>
              </BccCollapseTitle>
              <BccCollapseDetails>
                <BccTypography type="p2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </BccTypography>
              </BccCollapseDetails>
            </BccCollapsePanel>
            <BccCollapsePanel>
              <BccCollapseTitle expandIcon={<ExpandMoreIcon />}>
                <BccTypography type="p2">
                  Как можно пополнить карточный счет?
                </BccTypography>
              </BccCollapseTitle>
              <BccCollapseDetails>
                <BccTypography type="p2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </BccTypography>
              </BccCollapseDetails>
            </BccCollapsePanel>
            <BccCollapsePanel>
              <BccCollapseTitle expandIcon={<ExpandMoreIcon />}>
                <BccTypography type="p2">
                  Какова комиссия за обслуживание в торговых и сервисных точках?
                </BccTypography>
              </BccCollapseTitle>
              <BccCollapseDetails>
                <BccTypography type="p2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </BccTypography>
              </BccCollapseDetails>
            </BccCollapsePanel>
            <BccCollapsePanel>
              <BccCollapseTitle expandIcon={<ExpandMoreIcon />}>
                <BccTypography type="p2">
                  Что делать, если карточка утеряна?
                </BccTypography>
              </BccCollapseTitle>
              <BccCollapseDetails>
                <BccTypography type="p2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </BccTypography>
              </BccCollapseDetails>
            </BccCollapsePanel>
            <BccCollapsePanel>
              <BccCollapseTitle expandIcon={<ExpandMoreIcon />}>
                <BccTypography type="p2">
                  Какие документы необходимы при выпуске карточки
                  VISA/MasterCard?
                </BccTypography>
              </BccCollapseTitle>
              <BccCollapseDetails>
                <BccTypography type="p2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </BccTypography>
              </BccCollapseDetails>
            </BccCollapsePanel>
            <BccCollapsePanel>
              <BccCollapseTitle expandIcon={<ExpandMoreIcon />}>
                <BccTypography type="p2">
                  Возможен ли выпуск дополнительных карточек?
                </BccTypography>
              </BccCollapseTitle>
              <BccCollapseDetails>
                <BccTypography type="p2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </BccTypography>
              </BccCollapseDetails>
            </BccCollapsePanel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqPage;
