import { withStyles } from "@mui/styles";

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
}))(({ classes, imgSrc, header }) => (
  <div className={classes.root}>
    <img className={classes.img} src={imgSrc} />
    <h1 className={classes.header}>{header}</h1>
  </div>
));

export default Skill;
