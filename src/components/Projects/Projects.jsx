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
  },
  projects: {},
}))(({ classes }) => {
  return (
    <ProjectsWrapper id="projects">
      <div className={clsx(classes.root)}>
        <ProjectBox header="Triumph" />
      </div>
    </ProjectsWrapper>
  );
});
export default Projects;
