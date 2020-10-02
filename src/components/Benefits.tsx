import React from "react";
import { Grid } from "@material-ui/core";
import { BccTypography, BccLink, BccButton } from "./BccComponents";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    [theme.breakpoints.between("md", "xl")]: {
      container: {
        backgroundColor: "#FFFFFF",
      },
      innerContainer: {
        maxWidth: 1280,
        margin: "0 auto",
        boxSizing: "border-box",
        padding: "48px",
      },
      title: {
        marginBottom: 40,
      },
      item: {
        "& > div": {
          background: "#FFFFFF",
          width: "calc(33.33% - 12px)",
          marginBottom: 30,
          marginRight: 18,
          boxShadow:
            "0px 0px 1px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04), 0px 10px 20px rgba(0, 0, 0, 0.04)",
          borderRadius: 8,
          padding: 20,
          "& > div:first-child": {
            width: "calc(20% - 10px)",
            textAlign: "center",
            "& > img": {
              width: "100%",
              height: "auto",
            },
          },
          "& > div:nth-child(2)": {
            width: "calc(80% - 10px)",
            textAlign: "left",
          },
        },
        "& > div.full": {
          padding: 32,
          "& > div:last-child": {
            width: "100%",
            textAlign: "left",
          },
        },
        "& > div:nth-child(3n)": {
          marginRight: 0,
        },
      },
      item2: {
        "& > div": {
          width: "calc(50% - 9px)",
        },
        "& > div:nth-child(3n)": {
          marginRight: 18,
        },
        "& > div:nth-child(2n)": {
          marginRight: 0,
        },
      },
      itemDesc: {
        marginTop: 10,
      },
    },
    [theme.breakpoints.down("sm")]: {
      container: {
        backgroundColor: "#FFFFFF",
      },
      innerContainer: {
        maxWidth: 1280,
        margin: "0 auto",
        boxSizing: "border-box",
        padding: "24px",
      },
      title: {
        marginBottom: 40,
      },
      item: {
        "& > div:last-child": {
          marginBottom: 0,
        },
        "& > div": {
          background: "#FFFFFF",
          width: "100%",
          marginBottom: 20,
          boxShadow:
            "0px 0px 1px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04), 0px 10px 20px rgba(0, 0, 0, 0.04)",
          borderRadius: 8,
          padding: 20,
          justifyContent: "flex-start",
          flexWrap: "nowrap",
          "& > div:first-child": {
            width: "auto",
            textAlign: "center",
            marginRight: 20,
            "& > img": {
              maxHeight: 48,
              width: "auto",
            },
          },
          "& > div:nth-child(2)": {
            width: "calc(80% - 10px)",
            textAlign: "left",
          },
        },
        "& > div.full": {
          padding: 32,
          "& > div:last-child": {
            width: "100%",
            textAlign: "left",
          },
        },
        "& > div:nth-child(3n)": {
          marginRight: 0,
        },
      },
      item2: {
        "& > div": {
          width: "100%",
        },
        "& > div:nth-child(3n)": {
          marginRight: 18,
        },
        "& > div:nth-child(2n)": {
          marginRight: 0,
        },
      },
      itemDesc: {
        marginTop: 10,
      },
    },
  })
);

interface BenefitProps {
  title: string;
  desc?: any;
  img?: string;
}

interface BenefitsProps {
  items: Array<BenefitProps>;
  bgColor?: string;
  title?: string;
  fullText?: boolean;
}

const Benefits = (props: BenefitsProps) => {
  const classes = useStyles({});
  const { items, bgColor, title, fullText } = props;

  return (
    <div style={{ backgroundColor: bgColor ? bgColor : "white" }}>
      <div className={classes.innerContainer}>
        {title && (
          <BccTypography type="h2" block mb="46px">
            {title}
          </BccTypography>
        )}
        <Grid
          container
          direction="row"
          className={`${classes.item} ${
            items.length === 2 || items.length === 4 ? classes.item2 : ""
          }`}
        >
          {items.map((i: any) => (
            <Grid
              container
              justify="space-between"
              direction="row"
              wrap="wrap"
              className={i.img ? "" : "full"}
            >
              {i.img && (
                <Grid item>
                  <img src={process.env.PUBLIC_URL + i.img} />
                </Grid>
              )}
              <Grid item>
                <BccTypography type="h4" block>
                  {i.title}
                </BccTypography>
                {!fullText && (
                  <BccTypography type="p2" block mt="10px">
                    {i.desc}
                  </BccTypography>
                )}
              </Grid>
              {fullText && (
                <Grid item style={{ width: "100%" }}>
                  <BccTypography type="p2" block mt="10px">
                    {i.desc}
                  </BccTypography>
                </Grid>
              )}
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default Benefits;
