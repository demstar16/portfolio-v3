import { withStyles } from "@mui/styles";
import clsx from "clsx";
import Carousel from "../Carousel";

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
    <div id="projects" className={clsx(classes.root)}>
      <Carousel />
    </div>
  );
});
export default Projects;
