import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import {
  BccTypography,
  BccChip,
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
      chip: {
        width: "maxContent",
        overflow: "scroll",
        flexWrap: "nowrap",
        display: "flex",
      },
      outerContentTable: {
        width: "100%",
        backgroundColor: "#ffffff",
      },
      outerContent: {
        width: "100%",
        backgroundColor: "#fafafa",
      },
      tabsBranch: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        maxWidth: 1280,
        boxSizing: "border-box",
        padding: "0 48px",
        margin: "0 auto",
      },
      tab: { position: "relative", bottom: -1 },
      city: {
        color: "#4D565F",
        borderBottom: "1px dashed #4D565F",
      },
      switch: { color: "#B3B6BA" },
      active: { color: "#27AE60" },
      tableContainer: {
        position: "relative",
        margin: "0 auto",
        maxWidth: 1280,
        padding: "120px 48px 64px",
        boxSizing: "border-box",
        "& > img": {
          width: "100%",
        },
      },
      details: {
        marginTop: 48,
        "& > div": {
          width: "30%",
        },
      },
      table: {
        "& td": {
          borderColor: "#CCCFD1",
        },
        "& th": {
          borderBottom: "none",
        },
        "& th:first-child": {
          paddingLeft: 0,
        },
        "& th:last-child": {
          paddingRight: 0,
        },
        "& tr > td:first-child": {
          paddingLeft: 0,
        },
        "& tr > td:last-child": {
          paddingRight: 0,
        },
        "& tr:last-child > td": {
          borderBottom: "none",
        },
      },
      tableIcon: {
        display: "flex",
        alignItems: "center",
      },
    },
    [theme.breakpoints.down("sm")]: {
      contents: {
        position: "relative",
        margin: "0 auto",
        padding: "86px 24px 32px",
        maxWidth: 1280,
        boxSizing: "border-box",
      },
      chip: {
        width: "maxContent",
        overflow: "scroll",
        flexWrap: "nowrap",
        display: "flex",
      },
      outerContentTable: {
        width: "100%",
        backgroundColor: "#ffffff",
      },
      outerContent: {
        width: "100%",
        backgroundColor: "#fafafa",
      },
      tabsBranch: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        maxWidth: 1280,
        boxSizing: "border-box",
        padding: "0 24px",
        margin: "0 auto",
      },
      tab: { position: "relative", bottom: -1 },
      city: {
        color: "#4D565F",
        borderBottom: "1px dashed #4D565F",
      },
      switch: { color: "#B3B6BA" },
      active: { color: "#27AE60" },
      tableContainer: {
        position: "relative",
        margin: "0 auto",
        maxWidth: 1280,
        padding: "24px",
        boxSizing: "border-box",
        "& > img": {
          width: "100%",
        },
      },
      details: {
        marginTop: 48,
        "& > div": {
          width: "30%",
        },
      },
      table: {
        "& td": {
          borderColor: "#CCCFD1",
        },
        "& th": {
          borderBottom: "none",
        },
        "& th:first-child": {
          paddingLeft: 0,
        },
        "& th:last-child": {
          paddingRight: 0,
        },
        "& tr > td:first-child": {
          paddingLeft: 0,
        },
        "& tr > td:last-child": {
          paddingRight: 0,
        },
        "& tr:last-child > td": {
          borderBottom: "none",
        },
      },
      tableIcon: {
        display: "flex",
        alignItems: "center",
      },
    },
    [theme.breakpoints.down("xs")]: {
      details: {
        flexWrap: "wrap",
        "& > div": {
          width: "100%",
        },
      },
    },
  })
);

const DetailsPage = () => {
  const classes = useStyles({});
  const [index, setIndex] = React.useState(0);
  const [switchBtn, setSwitchBtn] = React.useState(true);
  return (
    <div className="main-page">
      <div className="container">
        <div className={classes.outerContent}>
          <div className={classes.contents}>
            <BccTypography type="h1" block mb="24px">
              Реквизиты АО “Банк Центркредит”
            </BccTypography>
            <div className={classes.chip}>
              <BccChip type="filled" color="secondary" mr="16px">
                Общие реквизиты
              </BccChip>
              <BccChip type="outlined" color="secondary">
                Реквизиты для пополнения карточки
              </BccChip>
            </div>
            <Grid
              container
              className={classes.details}
              justify="flex-start"
              wrap="nowrap"
            >
              <Grid item>
                <BccTypography type="h5" block mb="16px">
                  Наименование банка
                </BccTypography>
                <BccTypography type="p1" block mb="16px">
                  АО “Банк ЦентрКредит”
                </BccTypography>
              </Grid>
              <Grid item>
                <BccTypography type="h5" block mb="16px">
                  БИК банка
                </BccTypography>
                <BccTypography type="p1" block mb="16px">
                  KCJBKZKX
                </BccTypography>
              </Grid>
              <Grid item>
                <BccTypography type="h5" block mb="16px">
                  БИН банка
                </BccTypography>
                <BccTypography type="p1" block mb="16px">
                  980640000093
                </BccTypography>
              </Grid>
            </Grid>
          </div>
        </div>
        <div className={classes.outerContentTable}>
          <div className={classes.tableContainer}>
            <BccTableContainer>
              <BccTable className={classes.table}>
                <BccTableHead>
                  <BccTableRow>
                    <BccTableCell className={classes.tableIcon}>
                      <BccTypography type="h6" mr="12px">
                        Филиал
                      </BccTypography>
                      <img src={process.env.PUBLIC_URL + "/img/search.svg"} />
                    </BccTableCell>
                    <BccTableCell>
                      <BccTypography type="h6">БИН</BccTypography>
                    </BccTableCell>
                    <BccTableCell></BccTableCell>
                  </BccTableRow>
                </BccTableHead>
                <BccTableBody>
                  <BccTableRow>
                    <BccTableCell>
                      <BccTypography type="p2" color="#80868C">
                        Головной офис
                      </BccTypography>
                    </BccTableCell>
                    <BccTableCell>
                      <BccTypography type="p2">9806 4000 0093</BccTypography>
                    </BccTableCell>
                  </BccTableRow>
                  <BccTableRow>
                    <BccTableCell>
                      <BccTypography type="p2" color="#80868C">
                        Алматинский городской филиал
                      </BccTypography>
                    </BccTableCell>
                    <BccTableCell>
                      <BccTypography type="p2">9811 4100 0668</BccTypography>
                    </BccTableCell>
                  </BccTableRow>
                  <BccTableRow>
                    <BccTableCell>
                      <BccTypography type="p2" color="#80868C">
                        Филиал в г. Нур-Султан
                      </BccTypography>
                    </BccTableCell>
                    <BccTableCell>
                      <BccTypography type="p2">9811 4100 0668</BccTypography>
                    </BccTableCell>
                  </BccTableRow>
                  <BccTableRow>
                    <BccTableCell>
                      <BccTypography type="p2" color="#80868C">
                        Филиал в г.Шымкент
                      </BccTypography>
                    </BccTableCell>
                    <BccTableCell>
                      <BccTypography type="p2">9811 4100 0668</BccTypography>
                    </BccTableCell>
                  </BccTableRow>
                  <BccTableRow>
                    <BccTableCell>
                      <BccTypography type="p2" color="#80868C">
                        Филиал в г.Актобе
                      </BccTypography>
                    </BccTableCell>
                    <BccTableCell>
                      <BccTypography type="p2">9811 4100 0668</BccTypography>
                    </BccTableCell>
                  </BccTableRow>
                  <BccTableRow>
                    <BccTableCell>
                      <BccTypography type="p2" color="#80868C">
                        Филиал в г.Атырау
                      </BccTypography>
                    </BccTableCell>
                    <BccTableCell>
                      <BccTypography type="p2">9811 4100 0668</BccTypography>
                    </BccTableCell>
                  </BccTableRow>
                  <BccTableRow>
                    <BccTableCell>
                      <BccTypography type="p2" color="#80868C">
                        Филиал в г.Актау
                      </BccTypography>
                    </BccTableCell>
                    <BccTableCell>
                      <BccTypography type="p2">9811 4100 0668</BccTypography>
                    </BccTableCell>
                  </BccTableRow>
                  <BccTableRow>
                    <BccTableCell>
                      <BccTypography type="p2" color="#80868C">
                        Филиал в г.Жезказган
                      </BccTypography>
                    </BccTableCell>
                    <BccTableCell>
                      <BccTypography type="p2">9811 4100 0668</BccTypography>
                    </BccTableCell>
                  </BccTableRow>
                  <BccTableRow>
                    <BccTableCell>
                      <BccTypography type="p2" color="#80868C">
                        Филиал в г.Караганда
                      </BccTypography>
                    </BccTableCell>
                    <BccTableCell>
                      <BccTypography type="p2">9811 4100 0668</BccTypography>
                    </BccTableCell>
                  </BccTableRow>
                  <BccTableRow>
                    <BccTableCell>
                      <BccTypography type="p2" color="#80868C">
                        Филиал в г.Атырау
                      </BccTypography>
                    </BccTableCell>
                    <BccTableCell>
                      <BccTypography type="p2">9811 4100 0668</BccTypography>
                    </BccTableCell>
                  </BccTableRow>
                  <BccTableRow>
                    <BccTableCell>
                      <BccTypography type="p2" color="#80868C">
                        Филиал в г.Актау
                      </BccTypography>
                    </BccTableCell>
                    <BccTableCell>
                      <BccTypography type="p2">9811 4100 0668</BccTypography>
                    </BccTableCell>
                  </BccTableRow>
                  <BccTableRow>
                    <BccTableCell>
                      <BccTypography type="p2" color="#80868C">
                        Филиал в г.Жезказган
                      </BccTypography>
                    </BccTableCell>
                    <BccTableCell>
                      <BccTypography type="p2">9811 4100 0668</BccTypography>
                    </BccTableCell>
                  </BccTableRow>
                  <BccTableRow>
                    <BccTableCell>
                      <BccTypography type="p2" color="#80868C">
                        Филиал в г.Караганда
                      </BccTypography>
                    </BccTableCell>
                    <BccTableCell>
                      <BccTypography type="p2">9811 4100 0668</BccTypography>
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

export default DetailsPage;
