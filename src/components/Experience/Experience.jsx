import { withStyles } from "@mui/styles";
import clsx from "clsx";
import Certifications from "../Certifications";
import Skills from "../Skills";
import WorkExperience from "../WorkExperience";

const ExperienceWrapper = withStyles(() => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },
}))(({ classes, className, children, id }) => (
  <div className={clsx(classes.root, className)} id={id}>
    {children}
  </div>
));

const Experience = withStyles(() => ({
  root: {
    width: "90%",
  },
  verticalDivider: {
    display: "flex",
    gap: "1rem",
  },
  horizontalDivider: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },
}))(({ classes }) => (
  <ExperienceWrapper className={classes.root} id="experience">
    <div className={classes.verticalDivider}>
      <div className={classes.horizontalDivider}>
        <WorkExperience />
        <Skills />
      </div>
      <Certifications />
    </div>
  </ExperienceWrapper>
));

export default Experience;
