import { alpha } from "@mui/material";
import { withStyles } from "@mui/styles";

const ProjectBox = withStyles((theme) => ({
  root: {
    position: "relative",
    width: "100%",
    aspectRatio: "16 / 10",
    borderRadius: "12px",
    border: `2px solid ${theme.palette.secondary.main}`,
    overflow: "hidden",
    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
    cursor: "pointer",

    "&:hover": {
      transform: "translateY(-8px) scale(1.02)",
      boxShadow: `0 20px 40px ${alpha(theme.palette.secondary.main, 0.25)}`,
      borderColor: theme.palette.secondary.main,
    },

    "&:hover $overlayDescription": {
      opacity: 1,
      visibility: "visible",
      transitionDelay: "0s",
    },

    "&:hover $image": {
      transform: "scale(1.08)",
    },
  },
  imageWrapper: {
    width: "100%",
    height: "100%",
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
    transition: "transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
  },
  overlayDescription: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: "1.5rem",
    alignItems: "center",
    opacity: 0,
    visibility: "hidden",
    transition: "opacity 0.4s ease, visibility 0s linear 0.4s",
    position: "absolute",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
    backgroundColor: "rgba(6, 7, 7, 0.88)",
    backdropFilter: "blur(4px)",
    borderRadius: "10px",
  },
  header: {
    fontWeight: "700",
    fontSize: "1.4rem",
    marginBottom: "0.75rem",
    textAlign: "center",
  },
  text: {
    fontWeight: "500",
    fontSize: "1rem",
    lineHeight: "1.5",
    textAlign: "center",
  },
  "@media (max-width: 768px)": {
    root: {
      aspectRatio: "16 / 9",
      "&:hover": {
        transform: "none",
      },
    },
    header: {
      fontSize: "1.2rem",
    },
    text: {
      fontSize: "0.9rem",
    },
  },
}))(({ classes, header, imgSrc, description, onClick }) => {
  return (
    <div className={classes.root} onClick={onClick}>
      <div className={classes.imageWrapper}>
        <img src={imgSrc} className={classes.image} alt={header} />
      </div>
      <div className={classes.overlayDescription}>
        <h1 className={classes.header}>{header}</h1>
        <p style={{ whiteSpace: "pre-line" }} className={classes.text}>
          {description}
        </p>
      </div>
    </div>
  );
});

export default ProjectBox;
