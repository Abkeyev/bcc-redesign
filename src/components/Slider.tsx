import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { BccButton, BccTypography } from "../components/BccComponents";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    [theme.breakpoints.between("md", "xl")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
    outerContainer: {
      backgroundSize: "cover",
    },
    container: {
      position: "relative",
      margin: "0 auto",
      padding: "0",
      paddingBottom: "32px",
      maxWidth: 1280,
      boxSizing: "border-box",
    },
    slderTitle: {
      marginBottom: 24,
    },
    sliderSubTitle: {
      marginBottom: 136,
      color: "#4D565F",
    },
    sliderBtn: {
      fontSize: 20,
      minWidth: 350,
    },
    slider: {
      width: "100%",
      overflowX: "hidden",
      "& > div": {
        width: 1280,
        transition: "all .7s ease-in-out",
        "& > div": {
          width: 1280,
        },
      },
    },
    slide: {
      "& > div:first-child": {
        width: "calc(50% - 16px)",
        padding: "80px 0 92px",
      },
      "& > div:last-child": {
        position: "relative",
        width: "calc(50% - 16px)",
        "& > img": {
          position: "absolute",
          right: "-40%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          width: "90%",
          maxHeight: "300px",
        },
      },
    },
    sliderSteps: {
      position: "absolute",
      bottom: 0,
      width: 210,
      left: "calc(50% - 105px)",
      display: "flex",
      flexWrap: "nowrap",
      zIndex: 99,
      justifyContent: "space-between",
      alignItems: "center",
    },
    sliderStep: {
      cursor: "pointer",
      width: 10,
      marginRight: 16,
      height: 10,
      borderRadius: "50%",
      boxSizing: "border-box",
      border: "1px solid #27AE60",
      "&:hover": {
        backgroundColor: "#27AE60",
      },
    },
    active: {
      backgroundColor: "#27AE60",
    },
    slideLeft: {
      marginRight: 64,
      cursor: "pointer",
    },
    slideRight: {
      marginLeft: 48,
      cursor: "pointer",
    },
  })
);

interface SliderStepsProps {
  title: string;
  desc: any;
  img: string;
  btnText: string;
  bgColor?: string;
}

interface SliderProps {
  steps: Array<SliderStepsProps> | SliderStepsProps;
}

const Slider = (props: SliderProps) => {
  const [slide, setSlide] = React.useState(0);

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

  const classes = useStyles({});
  return (
    <div
      className={classes.outerContainer}
      style={{
        backgroundColor: !Array.isArray(props.steps) ? props.steps.bgColor : "",
      }}
    >
      <div className={classes.container}>
        <div className={classes.sliderSteps}>
          {Array.isArray(props.steps) && (
            <img
              className={classes.slideLeft}
              src={process.env.PUBLIC_URL + "/img/slide-left.svg"}
              onClick={() => slideArrow(false)}
            />
          )}
          {Array.isArray(props.steps) && props.steps.length > 1
            ? props.steps.map((step: any, index: number) => {
                return (
                  <div
                    className={`${classes.sliderStep} ${
                      slide === index ? classes.active : ""
                    }`}
                    onClick={() => setSlide(index)}
                  ></div>
                );
              })
            : ""}

          {Array.isArray(props.steps) && (
            <img
              className={classes.slideRight}
              src={process.env.PUBLIC_URL + "/img/slide-right.svg"}
              onClick={() => slideArrow(true)}
            />
          )}
        </div>
        <div className={classes.slider}>
          <div>
            {Array.isArray(props.steps) ? (
              props.steps.map((step: any, index: number) => {
                return slide === index ? (
                  <div className="animate__animated animate__fadeIn">
                    <Grid
                      container
                      justify="space-between"
                      wrap="nowrap"
                      className={classes.slide}
                    >
                      <Grid item>
                        <BccTypography
                          type="h1"
                          block
                          className={classes.slderTitle}
                        >
                          {step.title}
                        </BccTypography>
                        <BccTypography
                          type="p1"
                          block
                          className={classes.sliderSubTitle}
                        >
                          {step.desc}
                        </BccTypography>
                        <BccButton
                          variant="contained"
                          color="primary"
                          className={classes.sliderBtn}
                        >
                          <BccTypography type="p1" block>
                            {step.btnText}
                          </BccTypography>
                        </BccButton>
                      </Grid>
                      <Grid item>
                        <img
                          src={process.env.PUBLIC_URL + step.img}
                          alt="slide1"
                        />
                      </Grid>
                    </Grid>
                  </div>
                ) : (
                  ""
                );
              })
            ) : !Array.isArray(props.steps) ? (
              <Grid
                container
                justify="space-between"
                wrap="nowrap"
                className={classes.slide}
              >
                <Grid item>
                  <BccTypography type="h1" block className={classes.slderTitle}>
                    {props.steps.title}
                  </BccTypography>
                  <BccTypography
                    type="p1"
                    block
                    className={classes.sliderSubTitle}
                  >
                    {props.steps.desc}
                  </BccTypography>
                  <BccButton
                    variant="contained"
                    color="primary"
                    className={classes.sliderBtn}
                  >
                    <BccTypography type="p1" block>
                      {props.steps.btnText}
                    </BccTypography>
                  </BccButton>
                </Grid>
                <Grid item>
                  <img
                    src={process.env.PUBLIC_URL + props.steps.img}
                    alt="slide1"
                  />
                </Grid>
              </Grid>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
