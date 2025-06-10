import { withStyles } from "@mui/styles";
import clsx from "clsx";
import { useState } from "react";
import Header from "../Header";

const Experience = withStyles((theme) => ({
  root: {
    height: "100vh",
    paddingTop: "100px",
    display: "flex",
    flexDirection: "column",
    gap: "5rem",
  },
  experienceWrapper: {},
  experience: {
    display: "flex",
    width: "100%",
  },
  buttons: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  button: {
    width: "15rem",
    textAlign: "left",
    padding: "1rem 0",
    cursor: "pointer",

    "&:hover": {
      color: theme.palette.secondary.main,
    },
  },
  text: {
    padding: "0.5rem 2rem",
    fontStyle: "italic",
  },
  image: {
    width: "10rem",
  },
  active: {
    color: theme.palette.secondary.main,
    borderBottom: `2px solid ${theme.palette.secondary.main}`,
    fontWeight: "700",
  },
  badgeWrapper: {
    display: "flex",
    gap: "2rem",
    padding: "1rem",
  },
  certWrapper: {
    display: "flex",
    flexDirection: "column",
  },
}))(({ classes }) => {
  const j1Msg = `I am currently employed with JourneyOne having completed their graduate program. I received direct mentorship learning software best practices, particularly in the world of JavaScript and TypeScript, although we did go as far as learning Scheme in the SICP textbook. I also got the opportunity to work on one of their products, Jibility. Here I learnt lots about functional programming and working with a team. I am currently diving into the M365 space with my new work project.`;
  const cewaMsg = `Worked on both web and desktop solutions for the family business—because who says nepotism can’t be productive? Built a static website and developed a machine selection tool using Electron.js, making complex calculations a breeze for customers.`;
  const genesMsg = `This internship was a big wake-up call, throwing me into the deep end of real-world software development. I worked with Rust and Python, contributed to building software solutions, and learned that picking the right library is an art—one that can make or break your sanity.`;
  const [experience, setExperience] = useState(j1Msg);
  const [activeIndex, setActiveIndex] = useState(1);

  return (
    <div id="experience" className={classes.root}>
      <div className={classes.experienceWrapper}>
        <Header>Professional Experience</Header>
        <div className={classes.experience}>
          <div className={classes.buttons}>
            <button
              className={clsx(
                classes.button,
                activeIndex === 1 ? classes.active : {}
              )}
              onClick={() => {
                setExperience(j1Msg);
                setActiveIndex(1);
              }}
            >
              JourneyOne
            </button>
            <button
              className={clsx(
                classes.button,
                activeIndex === 2 ? classes.active : {}
              )}
              onClick={() => {
                setExperience(cewaMsg);
                setActiveIndex(2);
              }}
            >
              Cleaning Equipment WA
            </button>
            <button
              className={clsx(
                classes.button,
                activeIndex === 3 ? classes.active : {}
              )}
              onClick={() => {
                setExperience(genesMsg);
                setActiveIndex(3);
              }}
            >
              GeneS
            </button>
          </div>
          <div className={classes.text}>{experience}</div>
        </div>
      </div>
      <div className={classes.certWrapper}>
        <Header>Certifications</Header>
        <div className={classes.badgeWrapper}>
          <img className={classes.image} src="src/images/az900-badge.png" />
          <img className={classes.image} src="src/images/ccp-badge.png" />
        </div>
      </div>
    </div>
  );
});

export default Experience;
