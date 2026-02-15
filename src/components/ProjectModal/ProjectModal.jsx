import { useEffect } from "react";
import { alpha } from "@mui/material";
import { withStyles } from "@mui/styles";
import clsx from "clsx";
import Header from "../Header";
import VideoPlayer from "../VideoPlayer/VideoPlayer";

const ProjectModal = withStyles((theme) => ({
  wrapper: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 999,
    cursor: "pointer",
    animation: "modalFadeIn 0.3s ease forwards",
  },
  root: {
    cursor: "default",
    display: "flex",
    flexDirection: "column",
    width: "60%",
    padding: "2rem 5rem",
    borderRadius: "10px",
    backgroundColor: "rgb(50, 88, 122)",
    border: `4px solid ${theme.palette.secondary.main}`,
    zIndex: 9999,
    animation: "modalSlideUp 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
    boxShadow: `0 25px 50px ${alpha(theme.palette.colors.black, 0.4)}`,
  },
  techStack: {
    display: "flex",
    width: "fit-content",
    gap: "8px",
    margin: "1rem 0",
    flexWrap: "wrap",
  },
  icon: {
    width: "2rem",
    maxHeight: "2rem",
    transition: "transform 0.2s ease",
    "&:hover": {
      transform: "scale(1.15)",
    },
  },
  buttons: {
    display: "flex",
    width: "fit-content",
    gap: "1rem",
    justifyContent: "flex-start",
    marginTop: "0.5rem",
  },
  button: {
    display: "flex",
    gap: "8px",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "8px",
    fontWeight: "700",
    padding: "10px 20px",
    fontSize: "1rem",
    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
    position: "relative",
    overflow: "hidden",

    "&::before": {
      content: '""',
      position: "absolute",
      top: "50%",
      left: "50%",
      width: "0",
      height: "0",
      borderRadius: "50%",
      backgroundColor: alpha(theme.palette.colors.white, 0.3),
      transform: "translate(-50%, -50%)",
      transition: "width 0.4s ease, height 0.4s ease",
    },

    "&:hover::before": {
      width: "300px",
      height: "300px",
    },

    "&:hover": {
      transform: "translateY(-2px)",
      boxShadow: "0 5px 15px rgba(0, 0, 0, 0.3)",
    },

    "&:active": {
      transform: "translateY(0) scale(0.98)",
    },
  },
  codeButton: {
    backgroundColor: theme.palette.colors.black,
    color: theme.palette.colors.white,
    border: `2px solid ${theme.palette.colors.white}`,
    "&:hover": {
      backgroundColor: "#1a1a1a",
    },
  },
  demoButton: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.primary.main,
    border: `2px solid ${theme.palette.secondary.main}`,
    "&:hover": {
      backgroundColor: alpha(theme.palette.secondary.main, 0.85),
    },
  },
  githubIcon: {
    width: "1.5rem",
    maxHeight: "1.5rem",
    position: "relative",
    zIndex: 1,
  },
  buttonText: {
    position: "relative",
    zIndex: 1,
  },
  "@media (max-width: 768px)": {
    root: {
      width: "90%",
      padding: "1rem",
    },
  },
}))(({ classes, project, setShowModal }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div
      key={project.title}
      className={classes.wrapper}
      onClick={() => setShowModal(false)}
    >
      <div className={classes.root} onClick={(e) => e.stopPropagation()}>
        <Header>{project.title}</Header>
        <p style={{ whiteSpace: "pre-line" }}>{project.description}</p>
        {project.title === "Triumph" ? (
          <VideoPlayer src="/static/videos/triumph.mov" />
        ) : (
          <></>
        )}
        <div className={classes.techStack}>
          {project.techStack.map((imgFile) => (
            <img
              key={imgFile}
              src={"static/images/" + imgFile}
              className={classes.icon}
            />
          ))}
        </div>
        <div className={classes.buttons}>
          {project.repository === "" ? (
            <></>
          ) : (
            <a href={project.repository}>
              <button className={clsx(classes.button, classes.codeButton)}>
                <span className={classes.buttonText}>Code</span>
                <img
                  src="static/images/github.svg"
                  className={classes.githubIcon}
                />
              </button>
            </a>
          )}
          {project.demo === "" ? (
            <></>
          ) : (
            <a href={project.demo}>
              <button className={clsx(classes.button, classes.demoButton)}>
                <span className={classes.buttonText}>Try It</span>
              </button>
            </a>
          )}
        </div>
      </div>
    </div>
  );
});

export default ProjectModal;
