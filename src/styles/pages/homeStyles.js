import { makeStyles } from "@material-ui/core/styles";
import heroBgImage from "../../assets/bg-images/economy.jpg";

const useStyles = makeStyles((theme) => ({
  hero: {
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
      background: `#D6DCE2 url(${heroBgImage})`,
      backgroundPosition: "0% 25%",
      zIndex: -1,
      backgroundSize: "cover",
      filter: "blur(2.5px)",
    },
  },
  mainTitle: {
    fontWeight: 500,
    [theme.breakpoints.down("xs")]: {
      fontSize: "3.69em",
    },
  },
  ctaBtn: {
    fontWeight: "bold",
    letterSpacing: "0.25px",
    fontSize: "1.25em",
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