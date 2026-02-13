import { alpha } from "@mui/material";
import { withStyles } from "@mui/styles";
import clsx from "clsx";
import { useState } from "react";
import Header from "../Header";

const workExperienceData = [
  {
    company: "JourneyOne",
    description: `As part of a tight-knit cohort of four, I spent several months under the guidance of a senior software engineer, diving deep into modern software practices and cloud fundamentals. We earned our AWS certifications, explored asynchronous and functional programming in JavaScript (with a healthy dose of Ramda), and developed a Connect4 game using TypeScript, Next.js, Vitest, Storybook, and Turbo—all while adhering to Clean Code, Clean Architecture, and DDD principles. We took test-driven development seriously (thanks, Jest), and also worked through programming fundamentals via Structure and Interpretation of Computer Programs—yes, in Scheme. Weekly lightning talks, book clubs, and a "live in your terminal" mantra (plus a borderline cultish appreciation for vim keybindings) made this experience as enriching as it was efficient. Bonus: I now type faster and with less risk of carpal tunnel.`,
  },
  {
    company: "Jibility",
    description: `Following the graduate program, I joined an internal team at JourneyOne working on Jibility, a business roadmapping tool with a seriously well-engineered codebase. Here, I leveled up my JavaScript and functional programming skills, navigated a large pre-existing codebase (lots of "aha!" moments), and gained a real appreciation for a clean Git working tree and the power of a well-written commit. We used MUI for theming (which was surprisingly fun), tackled internationalisation (i18n), and tracked our progress using Jira and StoriesOnBoard. This was also my first real experience with structured code reviews, and learning to work in a mature dev environment gave me insights I still carry today—like how valuable a well-named commit can be to your future self.`,
  },
  {
    company: "GeneS",
    description: `At GeneS, a bioinformatics-focused startup, I joined a remote team working on the not-so-small task of translating performance-critical Python code into Rust to supercharge data processing efficiency. This involved researching and evaluating Rust libraries suitable for scientific computing, then presenting our findings to guide technical decisions. It was a crash course in systems-level programming, and an even bigger lesson in remote teamwork, clear communication, and adapting quickly to unfamiliar domains. Bioinformatics may have been new to me, but debugging memory-safe code while deciphering gene data made for a uniquely nerdy and rewarding challenge.`,
  },
  {
    company: "Sandfire",
    description: `I've been sharpening my consulting skills at Sandfire, a copper mining company—quite a shift from software games and roadmaps to rocks and real-world operations. Working in the Microsoft ecosystem, I've been supporting and enhancing Canvas Power Apps, liaising with product owners to troubleshoot issues, roll out new features, and make sure nothing catches fire (and if it does, putting it out quickly). This role has deepened my knowledge of Power Automate, SharePoint, Dataverse, and Entra ID security practices. But just as importantly, it's strengthened my soft skills—like understanding client needs, communicating clearly under pressure, and keeping stakeholders in the loop (even when the answer is "still investigating"). Not as much hands-on dev, but definitely plenty of growth.`,
  },
];

const WorkExperience = withStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: theme.palette.primary.main,
    border: `4px solid ${theme.palette.secondary.main}`,
    borderRadius: "10px",
    padding: "1rem",
    transition: "box-shadow 0.3s ease",
    "&:hover": {
      boxShadow: `0 8px 30px ${alpha(theme.palette.secondary.main, 0.1)}`,
    },
  },
  experience: {
    display: "flex",
  },
  buttons: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    borderRight: `2px solid ${alpha(theme.palette.secondary.main, 0.2)}`,
    paddingRight: "0.5rem",
  },
  button: {
    width: "10rem",
    textAlign: "left",
    padding: "1rem 1rem",
    cursor: "pointer",
    position: "relative",
    borderRadius: "6px 0 0 6px",
    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",

    "&::before": {
      content: '""',
      position: "absolute",
      left: "0",
      top: "50%",
      transform: "translateY(-50%)",
      width: "3px",
      height: "0",
      backgroundColor: theme.palette.secondary.main,
      borderRadius: "0 2px 2px 0",
      transition: "height 0.3s ease",
    },

    "&:hover": {
      color: alpha(theme.palette.secondary.main, 0.8),
      backgroundColor: alpha(theme.palette.secondary.main, 0.05),
    },

    "&:hover::before": {
      height: "60%",
    },
  },
  text: {
    padding: "0.5rem 2rem",
    fontStyle: "italic",
    animation: "textFadeIn 0.4s ease",
    lineHeight: "1.6",
  },
  active: {
    color: theme.palette.secondary.main,
    fontWeight: "700",
    cursor: "auto",
    backgroundColor: alpha(theme.palette.secondary.main, 0.08),

    "&::before": {
      height: "70%",
    },

    "&:hover": {
      color: theme.palette.secondary.main,
      backgroundColor: alpha(theme.palette.secondary.main, 0.08),
    },
  },
  "@media (max-width: 768px)": {
    root: {
      border: `2px solid ${theme.palette.secondary.main}`,
    },
    experience: { flexDirection: "column" },
    buttons: {
      flexDirection: "row",
      borderRight: "none",
      borderBottom: `2px solid ${alpha(theme.palette.secondary.main, 0.2)}`,
      paddingRight: "0",
      paddingBottom: "0.5rem",
      overflowX: "auto",
    },
    button: {
      textAlign: "center",
      width: "auto",
      padding: "0.5rem 1rem",
      borderRadius: "6px 6px 0 0",
      "&::before": {
        display: "none",
      },
      "&::after": {
        content: '""',
        position: "absolute",
        bottom: "0",
        left: "50%",
        transform: "translateX(-50%)",
        width: "0",
        height: "3px",
        backgroundColor: theme.palette.secondary.main,
        transition: "width 0.3s ease",
      },
      "&:hover::after": {
        width: "60%",
      },
    },
    active: {
      "&::after": {
        width: "80%",
      },
    },
    text: {
      padding: "0.5rem 0.7rem",
      marginTop: "0.5rem",
    },
  },
}))(({ classes }) => {
  const [experience, setExperience] = useState(
    workExperienceData[0].description,
  );
  const [activeTab, setActiveTab] = useState(workExperienceData[0].company);

  return (
    <div className={classes.root}>
      <Header>Professional Experience</Header>
      <div className={classes.experience}>
        <div className={classes.buttons}>
          {workExperienceData.map((workExperience) => (
            <button
              key={workExperience.company}
              className={clsx(
                classes.button,
                activeTab === workExperience.company ? classes.active : {},
              )}
              onClick={() => {
                setExperience(workExperience.description);
                setActiveTab(workExperience.company);
              }}
            >
              {workExperience.company}
            </button>
          ))}
        </div>
        <div key={activeTab} className={classes.text}>
          {experience}
        </div>
      </div>
    </div>
  );
});

export default WorkExperience;
