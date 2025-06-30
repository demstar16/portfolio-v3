import { withStyles } from "@mui/styles";
import Header from "../Header";
import { alpha } from "@mui/material";
import clsx from "clsx";

const ProjectModal = withStyles((theme) => ({
  wrapper: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // semi-transparent dark background
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 999, // high enough to be above all other content
  },
  root: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    width: "60%",
    padding: "2rem 5rem",
    borderRadius: "10px",
    backgroundColor: theme.palette.primary.main,
    border: `4px solid ${theme.palette.secondary.main}`,
    zIndex: 9999,
  },
  techStack: {
    display: "flex",
    width: "fit-content",
    gap: "5px",
  },
  icon: {
    width: "2rem",
    maxHeight: "2rem",
  },
  buttons: {
    display: "flex",
    width: "fit-content",
    gap: "1rem",
    justifyContent: "flex-start",
  },
  button: {
    display: "flex",
    gap: "5px",
    justifyContent: "space-around",
    alignItems: "center",
    borderRadius: "10px",
    fontWeight: "700",
    padding: "5px 10px",
    "&:hover": {
      cursor: "pointer",
      backgroundColor: alpha(theme.palette.colors.white, 0.5),
    },
  },
  codeButton: {
    backgroundColor: "black",
    color: "white",
  },
  demoButton: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.primary.main,
  },
  githubIcon: {
    width: "1.5rem",
    maxHeight: "1.5rem",
  },
}))(({ classes, project, setShowModal }) => {
  return (
    <div className={classes.wrapper} onClick={() => setShowModal(false)}>
      <div className={classes.root} onClick={(e) => e.stopPropagation()}>
        <Header>{project.title}</Header>
        <p>{project.description}</p>
        <div className={classes.techStack}>
          {project.techStack.map((imgFile) => (
            <img src={"static/images/" + imgFile} className={classes.icon} />
          ))}
        </div>
        <div className={classes.buttons}>
          {project.repository === "" ? (
            <></>
          ) : (
            <a href={project.repository}>
              <button className={clsx(classes.button, classes.codeButton)}>
                Code{" "}
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
                Try It
              </button>
            </a>
          )}
        </div>
      </div>
    </div>
  );
});

export default ProjectModal;
