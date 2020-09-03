import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  hero: {
    overflow: "hidden",
    position: "relative",
    background: "#f7f5f5dd",
    "&::before": {
      content: '""',
      height: "100%",
      width: "100%",
      bottom: 0,
      left: 0,
      position: "absolute",
      display: "block",
      background: `#D6DCE2 url(https://res.cloudinary.com/masonwang/image/upload/v1599092121/yei-website/page-bg/homepage-bg.jpg)`,
      backgroundPosition: "0% 25%",
      zIndex: -1,
      backgroundSize: "cover",
      filter: "blur(2.5px)",
    },
  },
  logoImg: {
    width: "500px",
    marginBottom: "5.5px",
    [theme.breakpoints.down("md")]: {
      width: "400px",
    },
    [theme.breakpoints.down("xs")]: {
      width: "300px",
    },
  },
  slogan: {
    fontSize: "2.5em",
    [theme.breakpoints.down("md")]: {
      fontSize: "2em",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.69em",
    },
  },
  ctaBtn: {
    fontWeight: "bold",
    letterSpacing: "0.25px",
    fontSize: "1.25em",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.2em",
    },
  },
  heroGrid: {
    [theme.breakpoints.down("sm")]: {
      alignItems: "center",
      "& > *": {
        textAlign: "center",
      },
    },
  },
  mainCta: {
    backgroundColor: theme.palette.primary.main,
    color: "white",
    "&:hover, &:focus, &:active": {
      backgroundColor: theme.palette.primary.darker,
    },
  },
}));

export default useStyles;
