import { withStyles } from "@mui/styles";
import clsx from "clsx";
import ProjectBox from "../ProjectBox";

const ProjectsWrapper = withStyles(() => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100vw",
    height: "100vh",
  },
}))(({ classes, children, id }) => (
  <div className={classes.root} id={id}>
    {children}
  </div>
));

const Projects = withStyles(() => ({
  root: {
    display: "flex",
    flexDirection: "column",
    paddingTop: "100px",
    height: "100vh",
    gap: "1rem",
    overflow: "hidden",
  },
  projects: {
    display: "flex",
    flexWrap: "wrap",
    gap: "2rem",
  },
}))(({ classes }) => {
  return (
    <ProjectsWrapper id="projects">
      <div className={clsx(classes.root)}>
        <ProjectBox />
      </div>
    </ProjectsWrapper>
  );
});
export default Projects;
