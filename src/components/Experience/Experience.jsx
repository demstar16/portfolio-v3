import { withStyles } from "@mui/styles";
import clsx from "clsx";
import Certifications from "../Certifications";
import Skills from "../Skills";
import WorkExperience from "../WorkExperience";
import Wrapper from "../Wrapper";

const Experience = withStyles(() => ({
  root: {
    maxWidth: "1200px",
    display: "flex",
    flexDirection: "column",
    gap: "2rem",
  },
  verticalDivider: {
    display: "flex",
    gap: "1rem",
    maxWidth: "100%",
    alignItems: "stretch",
  },
  horizontalDivider: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    maxWidth: "100%",
  },
  "@media (max-width: 768px)": {
    root: {
      width: "90%",
    },
    verticalDivider: { flexDirection: "column" },
  },
}))(({ classes }) => (
  <Wrapper className={classes.root} id="experience">
    <div className={classes.verticalDivider}>
      <WorkExperience />
      <Certifications />
    </div>
    <Skills />
  </Wrapper>
));

export default Experience;
