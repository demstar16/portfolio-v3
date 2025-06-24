import { alpha } from "@mui/material";
import { withStyles } from "@mui/styles";
import clsx from "clsx";
import { useState } from "react";
import Header from "../Header";

const j1Msg = `I am currently employed with JourneyOne having completed their graduate program. I received direct mentorship learning software best practices, particularly in the world of JavaScript and TypeScript, although we did go as far as learning Scheme in the SICP textbook. I also got the opportunity to work on one of their products, Jibility. Here I learnt lots about functional programming and working with a team. I am currently diving into the M365 space with my new work project.`;
const genesMsg = `This internship was a big wake-up call, throwing me into the deep end of real-world software development. I worked with Rust and Python, contributed to building software solutions, and learned that picking the right library is an art—one that can make or break your sanity.`;

const WorkExperience = withStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: theme.palette.primary.main,
    border: `4px solid ${theme.palette.secondary.main}`,
    borderRadius: "10px",
    padding: "1rem",
  },
  experience: {
    display: "flex",
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
      color: alpha(theme.palette.secondary.main, 0.5),
    },
  },
  text: {
    padding: "0.5rem 2rem",
    fontStyle: "italic",
  },
  active: {
    color: theme.palette.secondary.main,
    borderBottom: `2px solid ${theme.palette.secondary.main}`,
    fontWeight: "700",
    cursor: "auto",

    "&:hover": {
      color: theme.palette.secondary.main,
    },
  },
}))(({ classes }) => {
  const [experience, setExperience] = useState(j1Msg);
  const [activeIndex, setActiveIndex] = useState(1);

  return (
    <div className={classes.root}>
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
              setExperience(genesMsg);
              setActiveIndex(2);
            }}
          >
            GeneS
          </button>
          <button
            className={clsx(
              classes.button,
              activeIndex === 3 ? classes.active : {}
            )}
            onClick={() => {
              setExperience();
              setActiveIndex(3);
            }}
          >
            Jibility
          </button>
          <button
            className={clsx(
              classes.button,
              activeIndex === 4 ? classes.active : {}
            )}
            onClick={() => {
              setExperience();
              setActiveIndex(4);
            }}
          >
            Sandfire
          </button>
        </div>
        <div className={classes.text}>{experience}</div>
      </div>
    </div>
  );
});

export default WorkExperience;
