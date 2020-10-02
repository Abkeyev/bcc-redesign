import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Grid, MenuItem } from "@material-ui/core";
import {
  BccTypography,
  BccInput,
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
        margin: "0 auto",
        boxSizing: "border-box",
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
        padding: "32px 48px 64px",
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
        margin: "0 auto",
        boxSizing: "border-box",
        alignItems: "center",
        display: "flex",
        padding: "24px 24px",
      },
      tab: { position: "relative", bottom: -1 },
      city: {
        color: "#4D565F",
        borderBottom: "1px dashed #4D565F",
      },
      switch: { color: "#B3B6BA" },
      active: { color: "#27AE60" },
      mapContainer: {
        padding: "0 24px 32px",
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

const NewsPage = () => {
  const classes = useStyles({});
  const [period, setPeriod] = React.useState("0");
  const [switchBtn, setSwitchBtn] = React.useState(true);
  return (
    <div className="main-page">
      <div className="container">
        <div className={classes.outerContent}>
          <div className={classes.contents}>
            <BccTypography type="h1" block>
              Новости
            </BccTypography>
          </div>
        </div>
        <div className={classes.tabsBranch}>
          <BccTypography type="p1" mr="24px">
            Показать
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
            <MenuItem value="0">За все время</MenuItem>
            <MenuItem value="1">За сегодня</MenuItem>
            <MenuItem value="2">За нелелю</MenuItem>
            <MenuItem value="3">За месяц</MenuItem>
          </BccInput>
        </div>
        <div className={classes.outerContent}>
          <div className={classes.mapContainer}>
            <BccTableContainer>
              <BccTable className={classes.table}>
                <BccTableBody>
                  <BccTableRow>
                    <BccTableCell>
                      <BccTypography
                        type="p4"
                        color="#B3B6BA"
                        block
                        mt="4px"
                        mb="12px"
                      >
                        07 июля 2020
                      </BccTypography>
                      <BccTypography type="p2" block mb="12px" weight="medium">
                        «Депозитов много, Эталон - один» - Банк ЦентрКредит
                        представляет новую линейку вкладов
                      </BccTypography>
                    </BccTableCell>
                  </BccTableRow>
                  <BccTableRow>
                    <BccTableCell>
                      <BccTypography
                        type="p4"
                        color="#B3B6BA"
                        block
                        mt="4px"
                        mb="12px"
                      >
                        07 июля 2020
                      </BccTypography>
                      <BccTypography type="h6" block mb="12px" weight="medium">
                        Изменение тарифов по текущим счетам
                      </BccTypography>
                    </BccTableCell>
                  </BccTableRow>
                  <BccTableRow>
                    <BccTableCell>
                      <BccTypography
                        type="p4"
                        color="#B3B6BA"
                        block
                        mt="4px"
                        mb="12px"
                      >
                        07 июля 2020
                      </BccTypography>
                      <BccTypography type="p2" block mb="12px" weight="medium">
                        «Депозитов много, Эталон - один» - Банк ЦентрКредит
                        представляет новую линейку вкладов
                      </BccTypography>
                    </BccTableCell>
                  </BccTableRow>
                  <BccTableRow>
                    <BccTableCell>
                      <BccTypography
                        type="p4"
                        color="#B3B6BA"
                        block
                        mt="4px"
                        mb="12px"
                      >
                        07 июля 2020
                      </BccTypography>
                      <BccTypography type="h6" block mb="12px" weight="medium">
                        Изменение тарифов по текущим счетам
                      </BccTypography>
                    </BccTableCell>
                  </BccTableRow>
                  <BccTableRow>
                    <BccTableCell>
                      <BccTypography
                        type="p4"
                        color="#B3B6BA"
                        block
                        mt="4px"
                        mb="12px"
                      >
                        07 июля 2020
                      </BccTypography>
                      <BccTypography type="p2" block mb="12px" weight="medium">
                        «Депозитов много, Эталон - один» - Банк ЦентрКредит
                        представляет новую линейку вкладов
                      </BccTypography>
                    </BccTableCell>
                  </BccTableRow>
                  <BccTableRow>
                    <BccTableCell>
                      <BccTypography
                        type="p4"
                        color="#B3B6BA"
                        block
                        mt="4px"
                        mb="12px"
                      >
                        07 июля 2020
                      </BccTypography>
                      <BccTypography type="h6" block mb="12px" weight="medium">
                        Изменение тарифов по текущим счетам
                      </BccTypography>
                    </BccTableCell>
                  </BccTableRow>
                  <BccTableRow>
                    <BccTableCell>
                      <BccTypography
                        type="p4"
                        color="#B3B6BA"
                        block
                        mt="4px"
                        mb="12px"
                      >
                        07 июля 2020
                      </BccTypography>
                      <BccTypography type="p2" block mb="12px" weight="medium">
                        «Депозитов много, Эталон - один» - Банк ЦентрКредит
                        представляет новую линейку вкладов
                      </BccTypography>
                    </BccTableCell>
                  </BccTableRow>
                  <BccTableRow>
                    <BccTableCell>
                      <BccTypography
                        type="p4"
                        color="#B3B6BA"
                        block
                        mt="4px"
                        mb="12px"
                      >
                        07 июля 2020
                      </BccTypography>
                      <BccTypography type="h6" block mb="12px" weight="medium">
                        Изменение тарифов по текущим счетам
                      </BccTypography>
                    </BccTableCell>
                  </BccTableRow>
                </BccTableBody>
              </BccTable>
            </BccTableContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsPage;
