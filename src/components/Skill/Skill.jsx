import { alpha } from "@mui/material";
import { withStyles } from "@mui/styles";
import Header from "../Header";

const Skill = withStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    gap: "1rem",
    alignItems: "center",
    maxWidth: "10rem",
    flex: "0 0 auto",
    padding: "0.5rem",
    borderRadius: "8px",
    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
    animation: "fadeInUp 0.4s ease backwards",

    "&:hover": {
      transform: "translateY(-5px)",
      backgroundColor: alpha(theme.palette.secondary.main, 0.1),
    },

    "&:hover $img": {
      transform: "scale(1.1) rotate(5deg)",
    },
  },
  img: {
    maxWidth: "5rem",
    maxHeight: "5rem",
    transition: "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  },
  header: {
    fontWeight: "700",
    textDecoration: "none",
    textAlign: "center",
  },
  "@media (max-width: 768px)": {
    root: {
      justifyContent: "center",
      animation: "none",
      "&:hover": {
        transform: "none",
        backgroundColor: "transparent",
      },
    },
    img: {
      maxWidth: "2rem",
      maxHeight: "2rem",
    },
    header: {
      fontSize: "0.6rem",
    },
  },
}))(({ classes, imgSrc, header, index }) => (
  <div
    className={classes.root}
    style={{ animationDelay: `${index * 0.05}s` }}
  >
    <img className={classes.img} src={imgSrc} />
    <Header className={classes.header}>{header}</Header>
  </div>
));

export default Skill;
