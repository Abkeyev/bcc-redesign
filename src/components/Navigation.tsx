import React from "react";
import { Grid, Select, MenuItem } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import {
  BccButton,
  BccTypography,
  BccTabs,
  BccTab,
  BccCard,
  BccLink,
} from "./BccComponents";
import { Link, useLocation, Redirect } from "react-router-dom";
import api from "../api/Api";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    [theme.breakpoints.between("lg", "xl")]: {
      outerContainer: {
        boxShadow: "0px 2px 7px rgba(0, 0, 0, 0.08)",
        position: "relative",
      },
      innerSubContainer: {
        padding: "8px 0",
        transition: "all .25s ease",
        minHeight: 64,
        overflow: "hidden",
        height: 64,
      },
      lastSub: {
        height: 80,
      },
      none: {
        minHeight: 0,
        height: 0,
        padding: 0,
      },
      innerContainer: {
        borderBottom: "1px solid #F3F3F3",
      },
      container: {
        maxWidth: 1280,
        padding: "0 48px",
        margin: "0 auto",
        boxSizing: "border-box",
      },
      logo: {
        maxWidth: 170,
        position: "relative",
        bottom: -2,
        marginRight: 32,
      },
      tab: { position: "relative", bottom: -2 },
      nav: {},
      subnav: {},
      select: {
        marginRight: 32,
        "& > div": {
          fontSize: 16,
          color: "#141414",
          opacity: 0.5,
        },
        "&:hover:not(.Mui-disabled):before": {
          borderBottom: 0,
        },
        "& > div:focus": {
          backgroundColor: "white",
        },
        "&::after, &::before": {
          borderBottom: 0,
        },
      },
      searchText: {
        color: "#141414",
        opacity: 0.5,
        marginRight: 8,
      },
      searchIcon: {
        color: "#141414",
        opacity: 0.5,
      },
      customBtn: {
        borderColor: "#27AE60!important",
        color: "#27AE60!important",
        whiteSpace: "nowrap",
        "&:hover": {
          borderColor: "#27AE60!important",
          color: "white!important",
          backgroundColor: "#27AE60!important",
        },
      },
      mobileContainer: {
        display: "none",
      },
    },
    [theme.breakpoints.down("md")]: {
      outerContainer: {
        boxShadow: "0px 2px 7px rgba(0, 0, 0, 0.08)",
        position: "relative",
      },
      innerSubContainer: {
        paddingTop: "8px",
      },
      none: {
        minHeight: 0,
        height: 0,
        padding: 0,
      },
      innerContainer: {
        borderBottom: "1px solid #F3F3F3",
      },
      container: {
        maxWidth: 1280,
        padding: "0 48px",
        margin: "0 auto",
        boxSizing: "border-box",
      },
      logo: {
        maxWidth: 170,
        position: "relative",
        bottom: -2,
        marginRight: 24,
        ["@media (max-width:1060px)"]: {
          maxWidth: 150,
        },
      },
      tab: {
        position: "relative",
        bottom: -2,
        "& button": {
          marginRight: 24,
        },
      },
      nav: {},
      subnav: {},
      select: {
        marginRight: 32,
        ["@media (max-width:1060px)"]: {
          marginRight: 16,
        },
        "& > div": {
          padding: 0,
          fontSize: 16,
          color: "#141414",
          opacity: 0.5,
          ["@media (max-width:1060px)"]: {
            fontSize: 14,
          },
        },
        "&:hover:not(.Mui-disabled):before": {
          borderBottom: 0,
        },
        "& > div:focus": {
          backgroundColor: "white",
        },
        "&::after, &::before": {
          borderBottom: 0,
        },
      },
      searchText: {
        color: "#141414",
        opacity: 0.5,
        marginRight: 8,
        ["@media (max-width:1060px)"]: {
          fontSize: 14,
        },
      },
      searchIcon: {
        color: "#141414",
        opacity: 0.5,
      },
      customBtn: {
        borderColor: "#27AE60!important",
        color: "#27AE60!important",
        "&:hover": {
          borderColor: "#27AE60!important",
          color: "white!important",
          backgroundColor: "#27AE60!important",
        },
      },
      mobileContainer: {
        display: "none",
      },
    },
    [theme.breakpoints.down("sm")]: {
      outerContainer: {
        display: "none",
      },
      select: {
        marginRight: 0,
        "& > div": {
          fontSize: 16,
          color: "#000D1A",
          opacity: 1,
        },
        "& > svg": {
          color: "#000D1A",
        },
        "&:hover:not(.Mui-disabled):before": {
          borderBottom: 0,
        },
        "& > div:focus": {
          backgroundColor: "transparent",
        },
        "&::after, &::before": {
          borderBottom: 0,
        },
      },
      mobLang: {
        position: "absolute",
        top: 20,
        right: 20,
        zIndex: 1001,
      },
      logoMob: {
        height: 24,
        width: "auto",
      },
      searchIcon: {
        height: 24,
        width: 24,
        opacity: 1,
      },
      tab: {
        position: "relative",
        bottom: -2,
        "& button": {
          marginRight: 24,
          height: 64,
          "& a": {
            padding: 0,
            fontSize: 16,
          },
        },
      },
      mobileApps: {
        display: "flex",
        alignItems: "center",
        "& > img": {
          maxWidth: 100,
        },
      },
      mobileContainer: {
        display: "block",
        position: "fixed",
        width: "100%",
        zIndex: 1000,
        height: 56,
        top: 0,
        transition: "all .75s ease",
        "& > div": {
          backgroundColor: "#FFFFFF",
          height: 56,
          top: 0,
          right: 0,
          left: 0,
          position: "relative",
          overflow: "hidden",
          transition: "all .75s ease",
          boxShadow:
            "0px 10px 20px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04), 0px 0px 1px rgba(0, 0, 0, 0.04)",
          "& > div:first-child": {
            display: "flex",
            alignItems: "center",
            backgroundColor: "white",
            justifyContent: "space-between",
            height: 56,
            width: "100%",
            padding: "12px 24px",
            boxSizing: "border-box",
            position: "relative",
            zIndex: 99,
            boxShadow:
              "0px 10px 20px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04), 0px 0px 1px rgba(0, 0, 0, 0.04)",
            "& > div:first-child": {
              position: "relative",
              width: 20,
              height: 12,
              "& > img:last-child": {
                top: 10,
              },
              "& > img": {
                position: "absolute",
                width: 20,
                height: 2,
                top: 0,
                right: 0,
                left: 0,
                transform: "rotate(0)",
                transition: "all .75s ease",
              },
            },
          },
          "& > div:last-child": {
            backgroundColor: "#ffffff",
            width: "100%",
            boxSizing: "border-box",
            padding: "20px 0 0",
            overflowY: "scroll",
            height: "calc(100vh - 56px)",
            "& > div:first-child": {
              width: "auto",
              height: "auto",
              background: "none",
              marginBottom: 0,
              marginTop: 0,
              padding: "0 24px",
              "& > div": {
                width: "auto",
                height: "auto",
                padding: 0,
                minHeight: 0,
                visibility: "visible",
                "& > div": {
                  margin: 0,
                  "& > span:first-child": {
                    display: "block",
                    position: "absolute",
                    left: 0,
                    width: 0,
                    height: 20,
                    borderRadius: 1,
                    background: "white",
                  },
                  "& > span:last-child": {
                    paddingLeft: 20,
                  },
                  "& > div:last-child": {
                    backgroundColor: "white",
                  },
                  "& > div": {
                    "& > div": {
                      "& > div": {
                        display: "block",
                        padding: 0,
                      },
                    },
                  },
                },
              },
            },
            "& > div:nth-child(2)": {
              borderBottom: "1px solid #CCCFD1",
              padding: "0 24px",
            },
            "& > div:nth-child(3)": {
              backgroundColor: "white",
              "& > span": {
                padding: "20px 24px",
                borderBottom: "1px solid #F3F3F3",
              },
              "& > span:last-child": {
                borderBottom: "none",
              },
            },
            "& > div:last-child": {
              padding: "24px",
              backgroundColor: "white",
              width: "100%",
              boxSizing: "border-box",
            },
          },
        },
      },
      active: {
        width: "2.5px!important",
      },
      open: {
        "& > div": {
          height: "100vh",
          position: "relative",
          "& > div:first-child": {
            "& > div:first-child": {
              "& > img:first-child": {
                transform: "rotate(45deg)",
              },
              "& > img:last-child": {
                transform: "rotate(-45deg)",
                top: 0,
              },
            },
          },
          "& > div:last-child": {
            "& > div:first-child": {
              display: "flex",
              alignItems: "center",
            },
          },
        },
      },
      subMenu: {
        height: 60,
        padding: "18px 20px",
        borderBottom: "1px solid #F3F3F3",
      },
      subSubMenu: {
        padding: "0 20px 8px",
      },
      imgSSArrow: {
        display: "inline-block",
        marginLeft: 12,
        verticalAlign: "middle",
      },
      creditCard: {
        marginTop: 24,
        marginBottom: 12,
        "& > div": {
          boxShadow: "none",
          "& > div:last-child": {
            padding: "20px 0",
          },
        },
      },
    },
    [theme.breakpoints.down("xs")]: {},
  })
);

interface Menu {
  id: number;
  inverseParentHeadNavigation: Menu[];
  isdropdown: boolean;
  isexternal: boolean;
  ismuted: boolean;
  link: string;
  title: string;
}

const Navigation = (props: any) => {
  const location = useLocation();
  const [nav, setNav] = React.useState<Menu[]>([
    {
      id: 0,
      inverseParentHeadNavigation: [],
      isdropdown: false,
      isexternal: false,
      ismuted: false,
      link: "",
      title: "",
    },
  ]);
  const [index, setIndex] = React.useState(0);
  const [menu, openMenu] = React.useState(true);
  const [subMenuIndex, setSubMenuIndex] = React.useState(-1);
  const [subSubMenuIndex, setSubSubMenuIndex] = React.useState(-1);
  const [subSubSubMenuIndex, setSubSubSubMenuIndex] = React.useState(-1);
  const classes = useStyles({});

  const getMenu = () => {
    api.main
      .getMenu()
      .then((res: any) => {
        setNav(res);
      })
      .catch((err: any) => {
        console.error(err);
      });
  };

  React.useEffect(() => {
    getMenu();
  }, []);

  const goToLink = (index: number, isSub: boolean) => {
    if (isSub) {
      setSubMenuIndex(index);
    } else {
      setIndex(index);
    }
  };

  return (
    <>
      <div className={classes.outerContainer}>
        <div className={classes.innerContainer}>
          <div className={classes.container}>
            <Grid
              container
              justify="space-between"
              wrap="nowrap"
              alignItems="center"
            >
              <Grid item>
                <Grid
                  container
                  justify="space-between"
                  wrap="nowrap"
                  alignItems="center"
                >
                  <Grid item>
                    <Link to="/">
                      <img
                        className={classes.logo}
                        src={process.env.PUBLIC_URL + "/img/logo.png"}
                        alt="logo"
                      />
                    </Link>
                  </Grid>
                  <Grid item>
                    <BccTabs
                      value={index}
                      onChange={(event: any, index: number) =>
                        goToLink(index, false)
                      }
                      className={classes.tab}
                    >
                      {nav &&
                        nav.map((n: any, i: number) => {
                          return (
                            <BccTab
                              label={<Link to={n.link}>{n.title}</Link>}
                              value={i}
                            />
                          );
                        })}
                    </BccTabs>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <Grid
                  container
                  justify="space-between"
                  wrap="nowrap"
                  alignItems="center"
                >
                  <Grid item>
                    <Select className={classes.select} value="ru">
                      <MenuItem value="ru">РУС</MenuItem>
                      <MenuItem value="kz">ҚАЗ</MenuItem>
                      <MenuItem value="en">ENG</MenuItem>
                    </Select>
                  </Grid>
                  <Grid item>
                    <BccTypography className={classes.searchText} type="p2">
                      Поиск
                    </BccTypography>
                  </Grid>
                  <Grid item>
                    <img
                      className={classes.searchIcon}
                      src={process.env.PUBLIC_URL + "/img/search.svg"}
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </div>
        </div>
        <div className={classes.innerSubContainer}>
          <div className={classes.container}>
            <Grid
              container
              justify="space-between"
              wrap="nowrap"
              alignItems="center"
            >
              <Grid item>
                <BccTabs
                  onChange={(event: any, index: number) => {
                    goToLink(index, true);
                  }}
                  className={classes.tab}
                >
                  {nav &&
                    nav.length > 0 &&
                    nav[index] &&
                    nav[index].inverseParentHeadNavigation &&
                    nav[index].inverseParentHeadNavigation.map(
                      (n: any, i: number) => {
                        return (
                          <BccTab
                            label={
                              !n.isexternal ? (
                                <Link to={n.link}>{n.title}</Link>
                              ) : (
                                <BccLink target="_blank" href={n.link}>
                                  {n.title}
                                </BccLink>
                              )
                            }
                            onMouseEnter={() => {
                              if (n.isdropdown) {
                                setSubMenuIndex(i);
                                setSubSubMenuIndex(-1);
                              } else setSubMenuIndex(-1);
                            }}
                            value={i}
                          />
                        );
                      }
                    )}
                </BccTabs>
              </Grid>
              <Grid item>
                <BccLink
                  href="https://m.bcc.kz/prelogin?path=/home"
                  target="_blank"
                >
                  <BccButton
                    variant="outlined"
                    color="secondary"
                    className={classes.customBtn}
                  >
                    Интернет–банк
                  </BccButton>
                </BccLink>
              </Grid>
            </Grid>
          </div>
        </div>
        <div
          onMouseLeave={() => {
            setSubMenuIndex(-1);
            setSubSubMenuIndex(-1);
            setSubSubSubMenuIndex(-1);
          }}
        >
          <div
            className={`${classes.innerSubContainer} ${
              subMenuIndex === -1 ? classes.none : ""
            }`}
          >
            <div className={classes.container}>
              <Grid
                container
                justify="space-between"
                wrap="nowrap"
                alignItems="center"
              >
                <Grid item>
                  <BccTabs
                    onChange={(event: any, index: number) => {
                      goToLink(index, true);
                    }}
                    className={classes.tab}
                  >
                    {nav[index] &&
                      nav[index].inverseParentHeadNavigation &&
                      nav[index].inverseParentHeadNavigation.length > 0 &&
                      nav[index].inverseParentHeadNavigation[subMenuIndex] &&
                      nav[index].inverseParentHeadNavigation[subMenuIndex]
                        .inverseParentHeadNavigation &&
                      nav[index].inverseParentHeadNavigation[subMenuIndex]
                        .inverseParentHeadNavigation.length > 0 &&
                      nav[index].inverseParentHeadNavigation[
                        subMenuIndex
                      ].inverseParentHeadNavigation.map(
                        (nip: any, iip: number) => {
                          return (
                            <BccTab
                              label={
                                !nip.isexternal ? (
                                  <Link to={nip.link}>{nip.title}</Link>
                                ) : (
                                  <BccLink target="_blank" href={nip.link}>
                                    {nip.title}
                                  </BccLink>
                                )
                              }
                              onMouseEnter={() => {
                                if (nip.isdropdown || nip.ismuted) {
                                  setSubSubMenuIndex(iip);
                                } else setSubSubMenuIndex(-1);
                              }}
                              value={iip}
                            />
                          );
                        }
                      )}
                  </BccTabs>
                </Grid>
                <Grid item></Grid>
              </Grid>
            </div>
          </div>
          <div
            className={`${classes.innerSubContainer} ${
              subSubMenuIndex === -1 ? classes.none : classes.lastSub
            }`}
          >
            <div className={classes.container}>
              <Grid
                container
                justify="space-between"
                wrap="nowrap"
                alignItems="center"
              >
                <Grid item style={{ width: "100%" }}>
                  <BccTabs
                    onChange={(event: any, index: number) => {
                      goToLink(index, true);
                    }}
                    className={classes.tab}
                  >
                    {nav[index] &&
                      nav[index].inverseParentHeadNavigation &&
                      nav[index].inverseParentHeadNavigation.length > 0 &&
                      nav[index].inverseParentHeadNavigation[subMenuIndex] &&
                      nav[index].inverseParentHeadNavigation[subMenuIndex]
                        .inverseParentHeadNavigation &&
                      nav[index].inverseParentHeadNavigation[subMenuIndex]
                        .inverseParentHeadNavigation.length > 0 &&
                      nav[index].inverseParentHeadNavigation[subMenuIndex]
                        .inverseParentHeadNavigation[subSubMenuIndex] &&
                      nav[index].inverseParentHeadNavigation[subMenuIndex]
                        .inverseParentHeadNavigation[subSubMenuIndex]
                        .inverseParentHeadNavigation &&
                      nav[index].inverseParentHeadNavigation[subMenuIndex]
                        .inverseParentHeadNavigation[subSubMenuIndex]
                        .inverseParentHeadNavigation.length > 0 &&
                      nav[index].inverseParentHeadNavigation[
                        subMenuIndex
                      ].inverseParentHeadNavigation[
                        subSubMenuIndex
                      ].inverseParentHeadNavigation.map(
                        (nip: any, iip: number) => {
                          return (
                            <BccTab
                              label={
                                !nip.isexternal ? (
                                  <Link to={nip.link}>{nip.title}</Link>
                                ) : (
                                  <BccLink target="_blank" href={nip.link}>
                                    {nip.title}
                                  </BccLink>
                                )
                              }
                              onMouseEnter={() => {
                                if (nip.isdropdown || nip.ismuted) {
                                  setSubSubSubMenuIndex(iip);
                                } else setSubSubSubMenuIndex(-1);
                              }}
                              value={iip}
                            />
                          );
                        }
                      )}
                  </BccTabs>
                </Grid>
                <Grid item></Grid>
              </Grid>
            </div>
          </div>

          <div
            className={`${classes.innerSubContainer} ${
              subSubSubMenuIndex === -1 ? classes.none : ""
            }`}
          >
            <div className={classes.container}>
              <Grid
                container
                justify="space-between"
                wrap="nowrap"
                alignItems="center"
              >
                <Grid item style={{ width: "100%" }}>
                  <BccTabs
                    onChange={(event: any, index: number) => {
                      goToLink(index, true);
                    }}
                    className={classes.tab}
                  >
                    {nav[index] &&
                      nav[index].inverseParentHeadNavigation &&
                      nav[index].inverseParentHeadNavigation.length > 0 &&
                      nav[index].inverseParentHeadNavigation[subMenuIndex] &&
                      nav[index].inverseParentHeadNavigation[subMenuIndex]
                        .inverseParentHeadNavigation &&
                      nav[index].inverseParentHeadNavigation[subMenuIndex]
                        .inverseParentHeadNavigation.length > 0 &&
                      nav[index].inverseParentHeadNavigation[subMenuIndex]
                        .inverseParentHeadNavigation[subSubMenuIndex] &&
                      nav[index].inverseParentHeadNavigation[subMenuIndex]
                        .inverseParentHeadNavigation[subSubMenuIndex]
                        .inverseParentHeadNavigation &&
                      nav[index].inverseParentHeadNavigation[subMenuIndex]
                        .inverseParentHeadNavigation[subSubMenuIndex]
                        .inverseParentHeadNavigation.length > 0 &&
                      nav[index].inverseParentHeadNavigation[subMenuIndex]
                        .inverseParentHeadNavigation[subSubMenuIndex]
                        .inverseParentHeadNavigation[subSubSubMenuIndex] &&
                      nav[index].inverseParentHeadNavigation[subMenuIndex]
                        .inverseParentHeadNavigation[subSubMenuIndex]
                        .inverseParentHeadNavigation[subSubSubMenuIndex]
                        .inverseParentHeadNavigation &&
                      nav[index].inverseParentHeadNavigation[subMenuIndex]
                        .inverseParentHeadNavigation[subSubMenuIndex]
                        .inverseParentHeadNavigation[subSubSubMenuIndex]
                        .inverseParentHeadNavigation.length > 0 &&
                      nav[index].inverseParentHeadNavigation[subMenuIndex]
                        .inverseParentHeadNavigation[subSubMenuIndex]
                        .inverseParentHeadNavigation[subSubSubMenuIndex] &&
                      nav[index].inverseParentHeadNavigation[subMenuIndex]
                        .inverseParentHeadNavigation[subSubMenuIndex]
                        .inverseParentHeadNavigation[subSubSubMenuIndex]
                        .inverseParentHeadNavigation &&
                      nav[index].inverseParentHeadNavigation[subMenuIndex]
                        .inverseParentHeadNavigation[subSubMenuIndex]
                        .inverseParentHeadNavigation[subSubSubMenuIndex]
                        .inverseParentHeadNavigation.length > 0 &&
                      nav[index].inverseParentHeadNavigation[
                        subMenuIndex
                      ].inverseParentHeadNavigation[
                        subSubMenuIndex
                      ].inverseParentHeadNavigation[
                        subSubSubMenuIndex
                      ].inverseParentHeadNavigation.map(
                        (nip: any, iip: number) => {
                          return (
                            <BccTab
                              label={
                                !nip.isexternal ? (
                                  <Link to={nip.link}>{nip.title}</Link>
                                ) : (
                                  <BccLink target="_blank" href={nip.link}>
                                    {nip.title}
                                  </BccLink>
                                )
                              }
                              value={iip}
                            />
                          );
                        }
                      )}
                  </BccTabs>
                </Grid>
                <Grid item></Grid>
              </Grid>
            </div>
          </div>
        </div>
      </div>
      <div className={`${classes.mobileContainer} ${menu ? classes.open : ""}`}>
        <div>
          <div>
            <div onClick={() => openMenu(!menu)}>
              <img src={process.env.PUBLIC_URL + "/img/menu-item.svg"} />
              <img src={process.env.PUBLIC_URL + "/img/menu-item.svg"} />
            </div>
            <div>
              <Link to="/">
                <img
                  className={classes.logoMob}
                  src={process.env.PUBLIC_URL + "/img/logo.svg"}
                />
              </Link>
            </div>
            <div>
              <img
                className={classes.searchIcon}
                src={process.env.PUBLIC_URL + "/img/search-mob.svg"}
              />
            </div>
          </div>
          <div>
            <Grid
              container
              justify="space-between"
              wrap="nowrap"
              alignContent="center"
            >
              <Grid item>
                <BccLink
                  href="https://m.bcc.kz/prelogin?path=/home"
                  target="_blank"
                >
                  <BccButton
                    size="small"
                    variant="contained"
                    color="primary"
                    startIcon={
                      <img src={process.env.PUBLIC_URL + "/img/ib-mob.svg"} />
                    }
                  >
                    Интернет-банк
                  </BccButton>
                </BccLink>
              </Grid>
              <Grid item>
                <Select className={classes.select} value="ru">
                  <MenuItem value="ru">РУС</MenuItem>
                  <MenuItem value="kz">ҚАЗ</MenuItem>
                  <MenuItem value="en">ENG</MenuItem>
                </Select>
              </Grid>
            </Grid>
            <div>
              <BccTabs
                value={index}
                onChange={(event: any, index: number) => {
                  openMenu(false);
                  goToLink(index, false);
                }}
                className={classes.tab}
              >
                {nav &&
                  nav.map((n: any, i: number) => {
                    return (
                      <BccTab
                        label={
                          !n.isexternal ? (
                            <Link to={n.link}>{n.title}</Link>
                          ) : (
                            <BccLink target="_blank" href={n.link}>
                              {n.title}
                            </BccLink>
                          )
                        }
                        value={i}
                      />
                    );
                  })}
              </BccTabs>
            </div>
            <div>
              {nav &&
                nav.length > 0 &&
                nav[index]?.inverseParentHeadNavigation.length > 0 &&
                nav[index].inverseParentHeadNavigation.map(
                  (nn: any, ii: number) => {
                    return (
                      <>
                        <Grid
                          container
                          justify="space-between"
                          className={classes.subMenu}
                          style={{
                            borderBottom:
                              ii === subMenuIndex
                                ? "none"
                                : "1px solid #F3F3F3",
                          }}
                          alignItems="center"
                          wrap="nowrap"
                          onClick={() =>
                            subMenuIndex === ii
                              ? setSubMenuIndex(-1)
                              : setSubMenuIndex(ii)
                          }
                        >
                          <Grid item>
                            <BccTypography type="h6" block>
                              {!nn.isexternal ? (
                                <Link to={nn.link}>{nn.title}</Link>
                              ) : (
                                <BccLink target="_blank" href={nn.link}>
                                  {nn.title}
                                </BccLink>
                              )}
                            </BccTypography>
                          </Grid>
                          <Grid item>
                            {nn.isdropdown && (
                              <img
                                src={
                                  process.env.PUBLIC_URL +
                                  `/img/menu-arrow${
                                    ii === subMenuIndex ? "-open" : ""
                                  }.svg`
                                }
                              />
                            )}
                          </Grid>
                        </Grid>
                        {ii === subMenuIndex &&
                          nav[index].inverseParentHeadNavigation[subMenuIndex]
                            .inverseParentHeadNavigation.length > 0 &&
                          nav[index].inverseParentHeadNavigation[
                            subMenuIndex
                          ].inverseParentHeadNavigation.map(
                            (subSubMenu: any, ssmi: number) => {
                              return (
                                <>
                                  <Grid
                                    container
                                    direction="column"
                                    className={classes.subSubMenu}
                                    onClick={() => setSubSubMenuIndex(ii)}
                                    style={{
                                      borderBottom:
                                        ii === subMenuIndex &&
                                        ssmi ===
                                          nav[index]
                                            .inverseParentHeadNavigation[
                                            subMenuIndex
                                          ].inverseParentHeadNavigation.length -
                                            1
                                          ? "1px solid #F3F3F3"
                                          : "none",
                                    }}
                                  >
                                    <Grid item>
                                      <BccTypography
                                        color={
                                          subSubMenu.ismuted
                                            ? "#80868C"
                                            : "initial"
                                        }
                                        type={subSubMenu.ismuted ? "p4" : "p2"}
                                        mb="8px"
                                        block
                                      >
                                        {!subSubMenu.isexternal ? (
                                          <Link to={subSubMenu.link}>
                                            {subSubMenu.title}
                                          </Link>
                                        ) : (
                                          <BccLink
                                            target="_blank"
                                            href={subSubMenu.link}
                                          >
                                            {subSubMenu.title}
                                          </BccLink>
                                        )}
                                      </BccTypography>
                                      {subSubMenu.inverseParentHeadNavigation
                                        .length > 0 &&
                                        subSubMenu.inverseParentHeadNavigation.map(
                                          (
                                            subSubSubMenu: any,
                                            index: number
                                          ) => {
                                            return (
                                              <div
                                                onClick={() =>
                                                  setSubSubSubMenuIndex(index)
                                                }
                                              >
                                                <BccTypography
                                                  mb={
                                                    subSubMenu
                                                      .inverseParentHeadNavigation
                                                      .length -
                                                      1 ===
                                                    index
                                                      ? "0"
                                                      : "20px"
                                                  }
                                                  color="#000D1A"
                                                  type="p2"
                                                  block
                                                >
                                                  {!subSubSubMenu.isexternal ? (
                                                    <Link
                                                      to={subSubSubMenu.link}
                                                    >
                                                      {subSubSubMenu.title}
                                                    </Link>
                                                  ) : (
                                                    <BccLink
                                                      target="_blank"
                                                      href={subSubSubMenu.link}
                                                    >
                                                      {subSubSubMenu.title}
                                                    </BccLink>
                                                  )}
                                                  {subSubSubMenu.inverseParentHeadNavigation &&
                                                    subSubSubMenu
                                                      .inverseParentHeadNavigation
                                                      .length > 0 && (
                                                      <img
                                                        className={
                                                          classes.imgSSArrow
                                                        }
                                                        src={
                                                          process.env
                                                            .PUBLIC_URL +
                                                          `/img/submenu-arrow${
                                                            index ===
                                                            subSubSubMenuIndex
                                                              ? "-open"
                                                              : ""
                                                          }.svg`
                                                        }
                                                      />
                                                    )}
                                                </BccTypography>
                                                {subSubSubMenuIndex === index &&
                                                  subSubSubMenu.inverseParentHeadNavigation.map(
                                                    (
                                                      sssn: any,
                                                      sssni: number
                                                    ) => {
                                                      return (
                                                        <BccTypography
                                                          type="p3"
                                                          mt={
                                                            sssni === 0
                                                              ? "11px"
                                                              : "0"
                                                          }
                                                          color="#80868C"
                                                          mb={
                                                            sssni ===
                                                            subSubSubMenu
                                                              .inverseParentHeadNavigation
                                                              .length -
                                                              1
                                                              ? "20px"
                                                              : "8px"
                                                          }
                                                          ml="12px"
                                                          block
                                                        >
                                                          {!sssn.isexternal ? (
                                                            <Link
                                                              to={sssn.link}
                                                            >
                                                              {sssn.title}
                                                            </Link>
                                                          ) : (
                                                            <BccLink
                                                              target="_blank"
                                                              href={sssn.link}
                                                            >
                                                              {sssn.title}
                                                            </BccLink>
                                                          )}
                                                        </BccTypography>
                                                      );
                                                    }
                                                  )}
                                              </div>
                                            );
                                          }
                                        )}

                                      {nn.link === "/crediting" &&
                                      ssmi ===
                                        nav[index].inverseParentHeadNavigation[
                                          subMenuIndex
                                        ].inverseParentHeadNavigation.length -
                                          1 ? (
                                        <div className={classes.creditCard}>
                                          <BccCard
                                            title="Залоговый кредит"
                                            btnText="Узнать больше"
                                            variant="vertical"
                                            fullImg
                                            img="zalog.svg"
                                            text={
                                              <BccTypography
                                                type="p4"
                                                block
                                                color="#4D565F"
                                              >
                                                Получите деньги под залог в
                                                тенге или долларах США
                                              </BccTypography>
                                            }
                                          />
                                        </div>
                                      ) : (
                                        <></>
                                      )}
                                    </Grid>
                                  </Grid>
                                </>
                              );
                            }
                          )}
                      </>
                    );
                  }
                )}
            </div>
            <div>
              <BccTypography
                type="p2"
                weight="medium"
                block
                mt="12px"
                mb="24px"
              >
                Частным лицам
              </BccTypography>
              <Grid container wrap="nowrap" style={{ marginBottom: 16 }}>
                <Grid item>
                  <img src={process.env.PUBLIC_URL + "/img/callus.svg"} />
                </Grid>
                <Grid item>
                  <BccTypography type="h4" ml="16px" block mb="8px">
                    505
                  </BccTypography>
                  <BccTypography type="p3" ml="16px" block>
                    Бесплатно с мобильного
                  </BccTypography>
                </Grid>
              </Grid>
              <Grid container wrap="nowrap">
                <Grid item>
                  <img src={process.env.PUBLIC_URL + "/img/wp.svg"} />
                </Grid>
                <Grid item>
                  <BccTypography type="h4" ml="16px" block mb="8px">
                    +7 (701) 223-02-28
                  </BccTypography>
                  <BccTypography type="p3" ml="16px" block>
                    WhatsApp
                  </BccTypography>
                </Grid>
              </Grid>
              <BccTypography
                type="p2"
                weight="medium"
                block
                mt="12px"
                mb="24px"
                className={classes.mobileApps}
              >
                Доступно в{" "}
                <img
                  style={{ marginLeft: 8, marginRight: 8 }}
                  src={process.env.PUBLIC_URL + "/img/as.svg"}
                />
                <img src={process.env.PUBLIC_URL + "/img/gp.svg"} />
              </BccTypography>
              <BccTypography type="p1" mr="24px">
                <BccLink href="">
                  <img src={process.env.PUBLIC_URL + "/img/ig_m.svg"} />
                </BccLink>
              </BccTypography>
              <BccTypography type="p1" mr="24px">
                <BccLink href="">
                  <img src={process.env.PUBLIC_URL + "/img/fb_m.svg"} />
                </BccLink>
              </BccTypography>
              <BccTypography type="p1">
                <BccLink href="">
                  <img src={process.env.PUBLIC_URL + "/img/vk_m.svg"} />
                </BccLink>
              </BccTypography>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
