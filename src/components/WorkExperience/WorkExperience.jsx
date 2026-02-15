import { alpha } from "@mui/material";
import { withStyles } from "@mui/styles";
import clsx from "clsx";
import { useState } from "react";
import Header from "../Header";

const workExperienceData = [
  {
    company: "Ingentive",
    date: "Nov 2025 - Present",
    description: `Working at this London-based Microsoft Inner Circle partner, I delivered an end-to-end Canvas App with an admin Model Driven App component, integrated with Power BI reporting and backed by Dataverse and Power Automate. Designed the security model using Entra ID and Dataverse security principles. Conducted data integrations and migrations into Dataverse via Dataflows, and managed releases through pipelines and environment-aware solutions as part of Application Lifecycle Management (ALM). Beyond development, I gained experience in QA testing, writing test scripts, deployment guides, high-level documentation, project estimations, and running client demonstrations for client adoption.`,
  },
  {
    company: "Evergreen Ops",
    date: "Feb 2025 - Aug 2025",
    description: `Contracted through Evergreen Ops to Sandfire, a copper mining company, working within the Microsoft Power Platform ecosystem. Supported and enhanced Canvas Power Apps, collaborated with product owners to troubleshoot issues and deliver new features, and built a Model Driven App for an internal project. Deepened my expertise in Power Automate, SharePoint, Dataverse, and Entra ID security practices while strengthening client-facing communication and stakeholder management skills.`,
  },
  {
    company: "JourneyOne",
    date: "Feb 2024 - Feb 2025",
    description: `Completed a graduate program under a senior engineer, earning AWS certifications and building projects with TypeScript, Next.js, Vitest, Storybook, and Turbo—grounded in Clean Code, Clean Architecture, and DDD. Practised TDD with Jest, functional programming with Ramda, and worked through SICP in Scheme. Transitioned into Jibility, JourneyOne's business roadmapping product, where I worked across a mature codebase using MUI, i18n, structured code reviews, and tools like Jira and StoriesOnBoard.`,
  },
  {
    company: "GeneS",
    date: "Dec 2021 - Apr 2022",
    description: `Joined a remote team at this bioinformatics startup to translate performance-critical Python code into Rust for faster data processing. Researched and evaluated Rust libraries for scientific computing and presented findings to guide technical decisions. Gained hands-on systems programming experience while adapting quickly to an unfamiliar domain.`,
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
  date: {
    padding: "0.5rem 2rem 0",
    fontSize: "0.9rem",
    fontWeight: "600",
    opacity: 0.7,
    animation: "textFadeIn 0.4s ease",
  },
  text: {
    padding: "0.3rem 2rem 0.5rem",
    fontStyle: "italic",
    animation: "textFadeIn 0.4s ease",
    lineHeight: "1.6",
    fontSize: "1.1rem",
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
  const [date, setDate] = useState(workExperienceData[0].date);
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
                setDate(workExperience.date);
                setActiveTab(workExperience.company);
              }}
            >
              {workExperience.company}
            </button>
          ))}
        </div>
        <div key={activeTab}>
          <div className={classes.date}>{date}</div>
          <div className={classes.text}>{experience}</div>
        </div>
      </div>
    </div>
  );
});

export default WorkExperience;
