import { withStyles } from "@mui/styles";

const ProjectBox = withStyles((theme) => ({
  root: {
    position: "relative",
    width: "25rem",
    // height: "100%",
    borderRadius: "10px",
    border: `2px solid ${theme.palette.secondary.main}`,

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
    fontSize: "1.2rem",
  },
  text: {
    fontWeight: "700",
    fontSize: "1rem",
  },
  "@media (max-width: 768px)": {
    root: {
      width: "90%",
    },
  },
}))(({ classes, header, imgSrc, description, onClick }) => {
  return (
    <div className={classes.root} onClick={onClick}>
      <div className={classes.baseImage}>
        <img src={imgSrc} className={classes.image} />
      </div>
      <div className={classes.overlayDescription}>
        <h1 className={classes.header}>{header}</h1>
        <p className={classes.text}>{description}</p>
      </div>
    </div>
  );
});

export default ProjectBox;
