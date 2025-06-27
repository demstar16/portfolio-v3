import { withStyles } from "@mui/styles";

const ProjectBox = withStyles(() => ({
  root: {
    position: "relative",
    width: "15rem",
    height: "15rem",
    borderRadius: "10px",

    "&:hover $overlayDescription": {
      opacity: 1,
      visibility: "visible",
      transitionDelay: "0s",
      cursor: "pointer",
    },
  },
  overlayDescription: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    padding: "1rem",
    alignItems: "center",
    opacity: 0,
    visibility: "hidden",
    transition: "opacity 0.3s ease, visibility 0s linear 0.3s",
    position: "absolute",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
    backgroundColor: "#0607078f",
    borderRadius: "10px",
  },
  image: {
    borderRadius: "10px",
  },
  header: {
    fontWeight: "700",
    fontSize: "24px",
  },
}))(({ classes, header }) => {
  return (
    <div className={classes.root}>
      <div className={classes.baseImage}>
        <img src="src/images/ai-portrait.png" className={classes.image} />
      </div>
      <div className={classes.overlayDescription}>
        <h1 className={classes.header}>{header}</h1>
      </div>
    </div>
  );
});

export default ProjectBox;
