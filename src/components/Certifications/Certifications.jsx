import { alpha } from "@mui/material";
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
    transition: "box-shadow 0.3s ease",
    "&:hover": {
      boxShadow: `0 8px 30px ${alpha(theme.palette.secondary.main, 0.1)}`,
    },
  },
  image: {
    width: "7rem",
    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
    cursor: "pointer",
    "&:hover": {
      transform: "scale(1.1) rotate(3deg)",
      filter: "drop-shadow(0 8px 15px rgba(223, 242, 151, 0.3))",
    },
  },
  badgeWrapper: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    padding: "0.8rem",
    alignItems: "center",
  },
  "@media (max-width: 1050px)": {
    root: {
      border: `2px solid ${theme.palette.secondary.main}`,
    },
    badgeWrapper: {
      flexDirection: "row",
      justifyContent: "space-around",
    },
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
