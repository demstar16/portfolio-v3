import { Button } from "@mui/material";
import { withStyles } from "@mui/styles";
import clsx from "clsx";
import { useState } from "react";
import Header from "../Header";

const ProjectBox = withStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    border: `2px solid white`,
    borderRadius: "20px",
    width: "17rem",
    height: "17rem",
    cursor: "pointer",
    position: "relative",

    "&:hover": {
      border: `2px solid ${theme.palette.secondary.main}`,
    },
  },
  image: {
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    borderRadius: "20px",
    objectFit: "cover",
    zIndex: "0",
  },
  title: {
    position: "relative",
    zIndex: "1",
    padding: "0.6rem",
  },
  description: {
    display: "block",
    padding: "0.6rem",
    paddingTop: "2.2rem",
    backgroundColor: "rgba(0,0,0,0.8)",
    position: "absolute",
    width: "100%",
    height: "100%",
    borderRadius: "20px",
  },
  descriptionHidden: {
    display: "none",
  },
  buttons: {
    display: "flex",
    gap: "0.5rem",
    width: "100%",
    justifyContent: "center",
    position: "absolute",
    top: "80%",
  },
}))(({ classes, title, imgSrc, isLive, children }) => {
  const [isDescriptionDisplay, setIsDescriptionDisplay] = useState(false);

  return (
    <div
      className={clsx(classes.root)}
      onClick={() =>
        isDescriptionDisplay
          ? setIsDescriptionDisplay(false)
          : setIsDescriptionDisplay(true)
      }
    >
      <Header className={classes.title}>{title}</Header>
      <img className={classes.image} src={imgSrc} />
      <div
        className={
          isDescriptionDisplay ? classes.description : classes.descriptionHidden
        }
      >
        {children}
        <div className={classes.buttons}>
          <Button color="secondary" variant="contained" disabled={!isLive}>
            Live
          </Button>
          <Button color="secondary" variant="outlined">
            Code
          </Button>
        </div>
      </div>
    </div>
  );
});

export default ProjectBox;
