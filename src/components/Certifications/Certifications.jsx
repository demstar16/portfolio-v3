import { withStyles } from "@mui/styles";
import Header from "../Header";

const Certifications = withStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    backgroundColor: theme.palette.primary.main,
    border: `4px solid ${theme.palette.secondary.main}`,
    borderRadius: "10px",
    padding: "1rem",
    height: "fit-content",
  },
  image: {
    width: "7rem",
  },
  badgeWrapper: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    padding: "0.8rem",
  },
}))(({ classes }) => (
  <div className={classes.root}>
    <Header>Certifications</Header>
    <div className={classes.badgeWrapper}>
      <img className={classes.image} src="static/images/az900-badge.png" />
      <img className={classes.image} src="static/images/ccp-badge.png" />
    </div>
  </div>
));

export default Certifications;
