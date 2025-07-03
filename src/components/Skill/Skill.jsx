import { withStyles } from "@mui/styles";
import Header from "../Header";

const Skill = withStyles(() => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    gap: "1rem",
    alignItems: "center",
    maxWidth: "10rem",
    flex: "0 0 auto",
  },
  img: {
    maxWidth: "5rem",
    maxHeight: "5rem",
  },
  header: {
    fontWeight: "700",
    textDecoration: "underline",
    textAlign: "center",
  },
  "@media (max-width: 768px)": {
    root: {
      justifyContent: "center",
    },
    img: {
      maxWidth: "2rem",
      maxHeight: "2rem",
    },
    header: {
      fontSize: "0.6rem",
    },
  },
}))(({ classes, imgSrc, header }) => (
  <div className={classes.root}>
    <img className={classes.img} src={imgSrc} />
    <Header className={classes.header}>{header}</Header>
  </div>
));

export default Skill;
