import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import {
  BccTypography,
  BccChip,
  BccTabs,
  BccTab,
  BccSwitch,
} from "../components/BccComponents";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    content: {
      position: "relative",
      margin: "0 auto",
      padding: "64px 0",
      maxWidth: 1280,
      boxSizing: "border-box",
    },
    outerContent: {
      width: "100%",
      backgroundColor: "white",
    },
    tabsBranch: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      maxWidth: 1280,
      margin: "0 auto",
    },
    tab: { position: "relative", bottom: -1 },
    city: {
      color: "#4D565F",
      borderBottom: "1px dashed #4D565F",
    },
    switch: { color: "#B3B6BA" },
    active: { color: "#27AE60" },
    mapContainer: {
      paddingTop: 32,
      paddingBottom: 64,
      position: "relative",
      margin: "0 auto",
      maxWidth: 1280,
      boxSizing: "border-box",
      "& > img": {
        width: "100%",
      },
    },
  })
);

const BranchesPage = () => {
  const classes = useStyles({});
  const [index, setIndex] = React.useState(0);
  const [switchBtn, setSwitchBtn] = React.useState(true);
  return (
    <div className="main-page">
      <div className="container">
        <div className={classes.outerContent}>
          <div className={classes.content}>
            <BccTypography type="h1" block mb="24px">
              Офисы и банкоматы
            </BccTypography>
            <BccChip type="filled" color="secondary" mr="16px">
              Физическим лицам
            </BccChip>
            <BccChip type="outlined" color="secondary">
              Бизнесу
            </BccChip>
          </div>
        </div>
        <div className={classes.tabsBranch}>
          <BccTabs
            value={index}
            onChange={(event: any, index: number) => setIndex(index)}
            className={classes.tab}
          >
            <BccTab label="Отделения" />
            <BccTab label="Банкоматы" />
            <BccTab label="Терминалы" />
          </BccTabs>
          <div>
            <BccTypography type="p2" mr="64px" className={classes.city}>
              Алматы
            </BccTypography>
            <BccTypography type="p2" mr="64px" className={classes.switch}>
              <span className={!switchBtn ? classes.active : ""}>Списком</span>
              <BccSwitch
                checked={switchBtn}
                onChange={() => setSwitchBtn(!switchBtn)}
              />
              <span className={switchBtn ? classes.active : ""}>На карте</span>
            </BccTypography>
          </div>
        </div>
        <div className={classes.outerContent}>
          <div className={classes.mapContainer}>
            <img src={process.env.PUBLIC_URL + "/img/map.png"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BranchesPage;
